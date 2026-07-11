import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { contact, whatsappLink } from '../data/contact'
import logo from '../assets/Logos/logo1-transparent.png'
import TikTokIcon from './shared/TikTokIcon'
import './Footer.css'

const NAV = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Alianzas', href: '#alianzas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            <img src={logo} alt="Redonix" />
          </a>
          <p>Producción, diseño y estrategia creativa para marcas y artistas.</p>
        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href={`tel:${contact.whatsappNumber}`}>
                <Phone size={16} /> {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={contact.instagram.url} target="_blank" rel="noreferrer">
                <Instagram size={16} /> {contact.instagram.handle}
              </a>
            </li>
            <li>
              <a href={contact.facebook.url} target="_blank" rel="noreferrer">
                <Facebook size={16} /> {contact.facebook.handle}
              </a>
            </li>
            <li>
              <a href={contact.tiktok.url} target="_blank" rel="noreferrer">
                <TikTokIcon size={16} /> {contact.tiktok.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Redonix. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
