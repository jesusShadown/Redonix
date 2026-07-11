import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './shared/Button'
import { contact } from '../data/contact'
import logo from '../assets/Logos/logo1-transparent.webp'
import './Navbar.css'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Alianzas', href: '#alianzas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          <img src={logo} alt="Redonix" width="214" height="46" loading="eager" fetchpriority="high" />
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button href={contact.bookingUrl} variant="primary" size="md">
            Contáctanos
          </Button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href={contact.bookingUrl} variant="primary" size="md" className="navbar__mobile-cta">
            Reserva una llamada
          </Button>
        </div>
      )}
    </header>
  )
}
