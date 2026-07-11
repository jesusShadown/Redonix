import { Eye, Target, Layers } from 'lucide-react'
import Reveal from './shared/Reveal'
import './ValueProps.css'

const CARDS = [
  {
    icon: Eye,
    title: 'Visión',
    text: 'Impulsar marcas y artistas mediante creatividad y ejecución estratégica, transformando ideas en experiencias reales y de alto impacto, bajo principios de libertad, profesionalismo y pasión.',
  },
  {
    icon: Target,
    title: 'Misión',
    text: 'Ser líderes en el entretenimiento creativo, reconocidos por descubrir y posicionar nuevos talentos y marcas, y por crear alianzas estratégicas que lleven nuestras producciones a escenarios donde brillen con fuerza propia.',
  },
  {
    icon: Layers,
    title: 'Propuesta de valor',
    text: 'Soluciones integrales que acompañan cada etapa del proyecto, desde la idea hasta la ejecución final. Integramos producción, creatividad y operación en un solo equipo, sin necesidad de coordinar múltiples proveedores.',
  },
]

export default function ValueProps() {
  return (
    <section className="section value-props" id="nosotros">
      <div className="container">
        <Reveal className="section-head section-head--center" as="div">
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="section-title">Un equipo, todo el proceso creativo</h2>
          <p className="section-desc">
            No coordinamos proveedores: somos el proveedor. Producción, diseño y estrategia bajo un mismo techo.
          </p>
        </Reveal>

        <div className="value-props__grid">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="value-card">
              <div className="value-card__icon">
                <card.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="value-card__title">{card.title}</h3>
              <p className="value-card__text">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
