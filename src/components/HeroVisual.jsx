import { Lightbulb, Phone, Palette, Clapperboard, PartyPopper, TrendingUp } from 'lucide-react'
// Estilos importados centralizadamente desde src/styles/global.css

const STAGES = [
  { label: 'Idea', icon: Lightbulb },
  { label: 'Llamada', icon: Phone },
  { label: 'Diseño', icon: Palette },
  { label: 'Producción', icon: Clapperboard, active: true },
  { label: 'Escenario', icon: PartyPopper },
]

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__panel">
        <div className="hero-visual__bar">
          <div className="hero-visual__dots">
            <span />
            <span />
            <span />
          </div>
          <span className="hero-visual__bar-title">Panel de Proyecto — Redonix</span>
        </div>

        <div className="hero-visual__body">
          <p className="hero-visual__flow-label">Flujo de producción</p>
          <div className="hero-visual__flow">
            {STAGES.map((stage) => (
              <div className="hero-visual__stage" key={stage.label}>
                <div className={`hero-visual__stage-icon ${stage.active ? 'is-active' : ''}`}>
                  <stage.icon size={18} strokeWidth={2.25} />
                </div>
                <span>{stage.label}</span>
              </div>
            ))}
            <div className="hero-visual__flow-line" />
          </div>

          <div className="hero-visual__stats">
            <div className="hero-visual__stat">
              <div className="hero-visual__stat-head">
                <span>Satisfacción de clientes</span>
                <TrendingUp size={14} />
              </div>
              <div className="hero-visual__stat-value">98%</div>
              <div className="hero-visual__stat-bar">
                <div className="hero-visual__stat-bar-fill" style={{ width: '98%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual__float hero-visual__float--top">
        <span className="hero-visual__float-dot" />
        Team Redonix
      </div>
      
    </div>
  )
}
