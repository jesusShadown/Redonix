// Post-build: renderiza el shell (Navbar+Hero) y cada isla por separado, e
// inyecta ese HTML en dist/index.html — elimina el retraso de LCP de esperar
// a que React pinte, y el HTML de cada isla queda visible desde el primer
// request aunque su JS se cargue después (ver src/islands.js). Además
// inlinea el CSS principal en <head> para quitar esa petición bloqueante de
// la ruta crítica.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const distDir = path.join(root, 'dist')
const indexPath = path.join(distDir, 'index.html')
const ssrEntryPath = path.join(root, 'dist-server', 'entry-server.js')

const { renderShell, renderIslands } = await import(pathToFileUrl(ssrEntryPath))
const shellHtml = renderShell()
const islandsHtml = renderIslands()

let html = fs.readFileSync(indexPath, 'utf-8')
html = html.replace('<div id="root"></div>', `<div id="root">${shellHtml}</div>`)

let injectedBytes = shellHtml.length
for (const [id, islandHtml] of Object.entries(islandsHtml)) {
  const placeholder = `<div id="island-${id}"></div>`
  if (!html.includes(placeholder)) {
    console.warn(`No se encontró el contenedor de la isla "${id}" en el HTML`)
    continue
  }
  html = html.replace(placeholder, `<div id="island-${id}">${islandHtml}</div>`)
  injectedBytes += islandHtml.length
}

const cssLinkRe = /<link[^>]*rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/
const cssMatch = html.match(cssLinkRe)
if (cssMatch) {
  const cssHref = cssMatch[1]
  const cssPath = path.join(distDir, cssHref.replace(/^\//, ''))
  const cssContent = fs.readFileSync(cssPath, 'utf-8')
  html = html.replace(cssMatch[0], `<style>${cssContent}</style>`)
  fs.rmSync(cssPath, { force: true })
  console.log(`CSS inlineado (${(cssContent.length / 1024).toFixed(1)}KB) y quitado ${cssHref} de la petición de red`)
}

// Prioriza la descarga del bundle principal (ya no bloquea el pintado desde
// que hidratamos diferido en main.jsx, pero conviene que llegue lo antes
// posible para que la página sea interactiva pronto).
html = html.replace('<script type="module"', '<script type="module" fetchpriority="high"')

fs.writeFileSync(indexPath, html)
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })

console.log(`Prerender OK: ${injectedBytes} bytes inyectados (shell + ${Object.keys(islandsHtml).length} islas) en dist/index.html`)

function pathToFileUrl(p) {
  return 'file:///' + p.replace(/\\/g, '/')
}
