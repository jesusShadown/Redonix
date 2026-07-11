import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Services from './components/Services'
import Team from './components/Team'
import Partners from './components/Partners'
import Contact from './components/Contact'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

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
