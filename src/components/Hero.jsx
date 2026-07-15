import { ArrowRight, Compass } from 'lucide-react'
import Button from './shared/Button'
import HeroVisual from './HeroVisual'
import { contact } from '../data/contact'
// Estilos importados centralizadamente desde src/styles/global.css

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="glow-blob hero__glow hero__glow--1" />
      <div className="glow-blob hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Producción · Diseño · Estrategia</span>

          <h1 className="hero__title">
            De tu idea al escenario: <span className="hero__title-accent">Somos tú mejor aliado</span>
          </h1>

          <p className="hero__subtitle">
            Integramos producción, creatividad y operación en un solo equipo para marcas, artistas y músicos
            emergentes. Un aliado estratégico para convertir cada proceso en un éxito.
          </p>

          <div className="hero__actions">
            <Button href={contact.bookingUrl} variant="primary" size="lg" icon={ArrowRight}>
              Reserva una llamada
            </Button>
            <Button href="#servicios" variant="secondary" size="lg" icon={Compass}>
              Ver servicios
            </Button>
          </div>

          <div className="hero__proof">
            <div className="hero__proof-item">
              <strong>360</strong>
              <span>de la idea a la ejecución</span>
            </div>
            <div className="hero__proof-divider" />
            <div className="hero__proof-item">
              <strong>1</strong>
              <span>equipo integral, sin intermediarios</span>
            </div>
            
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
