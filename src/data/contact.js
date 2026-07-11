// Datos de contacto — edita aquí para actualizar teléfono, WhatsApp y redes en toda la landing.
export const contact = {
  phoneDisplay: '+52 55 4560 1020',
  whatsappNumber: '525545601020', // solo dígitos, con código de país, sin "+"
  email: 'hola@redonix.com',
  instagram: {
    handle: '@redonix_ent',
    url: 'https://www.instagram.com/redonix_ent',
  },
  facebook: {
    handle: 'Redonix',
    url: 'https://www.facebook.com/share/1Ek2roa3cr/?mibextid=wwXIfr',
  },
  tiktok: {
    handle: '@redonixentertainment',
    url: 'https://www.tiktok.com/@redonixentertainment',
  },
  bookingUrl: '#contacto',
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  'Hola Redonix, quiero reservar una llamada estratégica.'
)}`
