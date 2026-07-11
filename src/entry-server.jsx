import { renderToString } from 'react-dom/server'
import App from './App'
import { ALL_ISLANDS } from './islandRegistry'
import ValueProps from './components/ValueProps'
import Services from './components/Services'
import Team from './components/Team'
import Partners from './components/Partners'
import Contact from './components/Contact'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

// Imports estáticos (no los loaders lazy de islandRegistry) porque en build
// time queremos el contenido real ya, no una promesa de import().
const COMPONENTS = {
  valueprops: ValueProps,
  services: Services,
  team: Team,
  partners: Partners,
  contact: Contact,
  finalcta: FinalCta,
  footer: Footer,
}

// Usado solo en build time (ver scripts/prerender.mjs).
// renderShell(): Navbar + Hero + contenedores vacíos de cada isla.
// renderIslands(): el HTML real de cada isla, para inyectar en su contenedor.
export function renderShell() {
  return renderToString(<App />)
}

export function renderIslands() {
  const html = {}
  for (const island of ALL_ISLANDS) {
    const Component = COMPONENTS[island.id]
    html[island.id] = renderToString(<Component />)
  }
  return html
}
