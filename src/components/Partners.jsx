import { Handshake } from 'lucide-react'
import Reveal from './shared/Reveal'
import { partners } from '../data/partners'
import './Partners.css'

export default function Partners() {
  return (
    <section className="section section--tight partners" id="alianzas">
      <div className="container">
        <Reveal className="section-head section-head--center" as="div">
          <span className="eyebrow">Asociaciones</span>
          <h2 className="section-title">Aliados que suman fuerza a cada producción</h2>
        </Reveal>

        <div className="partners__grid">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 90} className="partner-card">
              <div className="partner-card__icon">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} />
                ) : (
                  <Handshake size={20} strokeWidth={2} />
                )}
              </div>
              <div>
                <h3 className="partner-card__name">{partner.name}</h3>
                <p className="partner-card__desc">{partner.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
