// Post-build: evita que el CSS bloquee el primer render inlineándolo
// directamente en <head> (el archivo generado por Vite es chico, así que el
// costo es mínimo), y precarga las fuentes "regular" con el hash real que
// generó este build (hardcodear el nombre en index.html se rompe en cada
// rebuild, porque Vite le cambia el hash al contenido).
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const distDir = path.join(root, 'dist')
const assetsDir = path.join(distDir, 'assets')
const indexPath = path.join(distDir, 'index.html')

let html = fs.readFileSync(indexPath, 'utf-8')

// --- Inlinear el CSS principal ---
const cssLinkRe = /<link[^>]*rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/
const cssMatch = html.match(cssLinkRe)
if (cssMatch) {
  const cssHref = cssMatch[1]
  const cssPath = path.join(distDir, cssHref.replace(/^\//, ''))
  const cssContent = fs.readFileSync(cssPath, 'utf-8')
  html = html.replace(cssMatch[0], `<style>${cssContent}</style>`)
  fs.rmSync(cssPath, { force: true })
  console.log(`CSS inlineado (${(cssContent.length / 1024).toFixed(1)}KB), quitada la petición de red de ${cssHref}`)
} else {
  console.warn('No se encontró el <link rel="stylesheet"> principal para inlinear')
}

// --- Precargar las fuentes "regular" con su hash real ---
const files = fs.readdirSync(assetsDir)
const fontsToPreload = ['inter-v20-latin-regular', 'space-grotesk-v22-latin-regular']
const preloadLinks = fontsToPreload
  .map((name) => files.find((f) => f.startsWith(name) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin>`)

if (preloadLinks.length) {
  html = html.replace('</head>', `  ${preloadLinks.join('\n    ')}\n  </head>`)
  console.log(`Preload agregado para: ${preloadLinks.length} fuente(s)`)
}

fs.writeFileSync(indexPath, html)
