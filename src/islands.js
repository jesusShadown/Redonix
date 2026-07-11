import { createElement } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { ALL_ISLANDS } from './islandRegistry'

// Monta cada isla cuando su contenedor está por entrar en viewport.
// Si ya trae HTML pre-renderizado (build de producción) hidrata sin flash;
// si está vacío (dev, sin el paso de prerender) hace un render normal.
export function mountIslands() {
  if (!('IntersectionObserver' in window)) {
    ALL_ISLANDS.forEach(mountIsland)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        const island = ALL_ISLANDS.find((i) => `island-${i.id}` === entry.target.id)
        if (island) mountIsland(island)
      }
    },
    { rootMargin: '400px 0px' }
  )

  for (const island of ALL_ISLANDS) {
    const el = document.getElementById(`island-${island.id}`)
    if (el) observer.observe(el)
  }
}

async function mountIsland(island) {
  const el = document.getElementById(`island-${island.id}`)
  if (!el) return

  const mod = await island.loader()
  const element = createElement(mod.default)

  if (el.hasChildNodes()) {
    hydrateRoot(el, element)
  } else {
    createRoot(el).render(element)
  }
}
