import {
  CalendarCheck2,
  ChefHat,
  Fingerprint,
  PenTool,
  Clapperboard,
  Camera,
  Share2,
  Smartphone,
  Music2,
  Mic2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import Reveal from './shared/Reveal'
import Button from './shared/Button'
import { services } from '../data/services'
// Estilos importados centralizadamente desde src/styles/global.css

const ICON_MAP = {
  CalendarCheck2,
  ChefHat,
  Fingerprint,
  PenTool,
  Clapperboard,
  Camera,
  Share2,
  Smartphone,
  Music2,
  Mic2,
}

export default function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Servicios</span>
          <h2 className="section-title">Todo lo que tu proyecto necesita, en un solo lugar</h2>
          <p className="section-desc">
            De la estrategia al escenario: cubrimos cada etapa con un equipo especializado por disciplina.
          </p>
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Sparkles
            return (
              <Reveal key={service.title} delay={(i % 3) * 90} className="service-card">
                <div className="service-card__icon">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <div className="service-card__team">
                  {service.team.map((person) => (
                    <span key={person} className="service-card__chip">
                      {person}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="services__cta" as="div">
          <p>¿No estás seguro qué necesitas exactamente?</p>
          <Button href="#contacto" variant="secondary" icon={ArrowRight}>
            Cuéntanos tu proyecto
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
