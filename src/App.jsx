import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Services from './components/Services'
import Team from './components/Team'
import Partners from './components/Partners'
import Contact from './components/Contact'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

// Nota: la página entera se pre-renderiza en build time (ver
// src/entry-server.jsx + scripts/prerender.mjs), así que el contenido ya
// está visible desde el primer HTML. Por eso aquí no usamos React.lazy:
// dividir en chunks aparte solo agrega una cadena de solicitudes que React
// tiene que resolver igual, de inmediato, para poder hidratar todo el árbol.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <Team />
        <Partners />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
