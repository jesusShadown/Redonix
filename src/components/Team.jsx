import Reveal from './shared/Reveal'
import Avatar from './shared/Avatar'
import { team } from '../data/team'
// Estilos importados centralizadamente desde src/styles/global.css

export default function Team() {
  return (
    <section className="section team" id="equipo">
      <div className="container">
        <Reveal className="section-head section-head--center" as="div">
          <span className="eyebrow">Equipo</span>
          <h2 className="section-title">Las personas detrás de cada producción</h2>
          <p className="section-desc">
            Un equipo multidisciplinario que cubre creatividad, producción y operación de punta a punta.
          </p>
        </Reveal>

        <div className="team__grid">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 90} className="team-card">
              <Avatar photo={member.photo} name={member.name} size={88} />
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p className="team-card__bio">{member.bio}</p>
              <span className="team-card__org">{member.org}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
