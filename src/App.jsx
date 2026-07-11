import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { MAIN_ISLANDS, FOOTER_ISLAND } from './islandRegistry'

// Solo Navbar + Hero se hidratan como parte de este árbol. Todo lo demás son
// contenedores vacíos ("islas") que src/islands.js llena e hidrata por su
// cuenta cuando el usuario hace scroll cerca — así su JS no se descarga hasta
// que hace falta. El HTML real de cada isla se pre-renderiza aparte (ver
// src/entry-server.jsx) e se inyecta en build time (ver scripts/prerender.mjs).
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {MAIN_ISLANDS.map((island) => (
          <div key={island.id} id={`island-${island.id}`} />
        ))}
      </main>
      <div id={`island-${FOOTER_ISLAND.id}`} />
    </>
  )
}
