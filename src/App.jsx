import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Todo lo que vive debajo del hero se divide en chunks aparte:
// el navegador no tiene que parsear/ejecutar ese JS para pintar la primera vista.
const ValueProps = lazy(() => import('./components/ValueProps'))
const Services = lazy(() => import('./components/Services'))
const Team = lazy(() => import('./components/Team'))
const Partners = lazy(() => import('./components/Partners'))
const Contact = lazy(() => import('./components/Contact'))
const FinalCta = lazy(() => import('./components/FinalCta'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <ValueProps />
          <Services />
          <Team />
          <Partners />
          <Contact />
          <FinalCta />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
