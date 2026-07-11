import { Phone, MessageCircle, Instagram, Facebook, ArrowRight } from 'lucide-react'
import Reveal from './shared/Reveal'
import Button from './shared/Button'
import TikTokIcon from './shared/TikTokIcon'
import { contact, whatsappLink } from '../data/contact'
import './Contact.css'

const CHANNELS = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: contact.phoneDisplay,
    href: `tel:${contact.whatsappNumber}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Escríbenos directo',
    href: whatsappLink,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: contact.instagram.handle,
    href: contact.instagram.url,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: contact.facebook.handle,
    href: contact.facebook.url,
  },
  {
    icon: TikTokIcon,
    label: 'TikTok',
    value: contact.tiktok.handle,
    href: contact.tiktok.url,
  },
]

export default function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container contact__inner">
        <Reveal className="contact__intro" as="div">
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">Hablemos de tu próximo proyecto</h2>
          <p className="section-desc">
            Cuéntanos qué tienes en mente. En una llamada te decimos cómo llevarlo al siguiente nivel.
          </p>
          
        </Reveal>

        <div className="contact__grid">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 80} as="a" href={channel.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-card__icon">
                <channel.icon size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="contact-card__label">{channel.label}</p>
                <p className="contact-card__value">{channel.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
