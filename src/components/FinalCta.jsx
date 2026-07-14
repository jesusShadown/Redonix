import { ArrowRight } from 'lucide-react'
import Reveal from './shared/Reveal'
import Button from './shared/Button'
import { contact } from '../data/contact'
// Estilos importados centralizadamente desde src/styles/global.css

export default function FinalCta() {
  return (
    <section className="section final-cta">
      <div className="glow-blob final-cta__glow" />
      <div className="container">
        <Reveal className="final-cta__box" as="div">
          <h2 className="final-cta__title">Tu proyecto merece un equipo a la altura.</h2>
          <p className="final-cta__desc">
            Agenda una llamada estratégica gratuita y descubre cómo llevar tu idea al escenario, sin coordinar
            proveedores ni perder tiempo.
          </p>
          <Button href={contact.bookingUrl} variant="primary" size="lg" icon={ArrowRight}>
            Reserva tu llamada gratuita
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
