import sofiaRojas96 from '../assets/fotosIntegrantes/Sofía Rojas-96.webp'
import sofiaRojas192 from '../assets/fotosIntegrantes/Sofía Rojas-192.webp'
import sofiaRojas288 from '../assets/fotosIntegrantes/Sofía Rojas-288.webp'
import roninGiner96 from '../assets/fotosIntegrantes/Ronin Giner-96.webp'
import roninGiner192 from '../assets/fotosIntegrantes/Ronin Giner-192.webp'
import roninGiner288 from '../assets/fotosIntegrantes/Ronin Giner-288.webp'
import danielOlmos96 from '../assets/fotosIntegrantes/Daniel Olmos-96.webp'
import danielOlmos192 from '../assets/fotosIntegrantes/Daniel Olmos-192.webp'
import danielOlmos288 from '../assets/fotosIntegrantes/Daniel Olmos-288.webp'
import osmarOrtiz96 from '../assets/fotosIntegrantes/Osmar Ortiz-96.webp'
import osmarOrtiz192 from '../assets/fotosIntegrantes/Osmar Ortiz-192.webp'
import osmarOrtiz288 from '../assets/fotosIntegrantes/Osmar Ortiz-288.webp'

// El avatar se muestra a 88px CSS; estas 3 variantes (1x/2x/3x) dejan que el
// navegador baje solo el peso que corresponde a la densidad de pantalla real,
// en vez de servir siempre la versión más grande a todos.
function photoSet(w96, w192, w288) {
  return {
    src: w192,
    srcSet: `${w96} 96w, ${w192} 192w, ${w288} 288w`,
  }
}

// Equipo — para actualizar una foto, reemplaza los 3 archivos correspondientes
// en src/assets/fotosIntegrantes/ (mismo nombre) o cambia los imports de arriba.
// Si "photo" queda en null, se muestra un avatar con iniciales como respaldo.
export const team = [
  {
    name: 'Sofía Rojas',
    role: 'Producción de Eventos & Dirección',
    bio: 'Lidera la logística, el talento y la operación de cada evento, y dirige piezas audiovisuales de principio a fin.',
    photo: photoSet(sofiaRojas96, sofiaRojas192, sofiaRojas288),
    org: 'Redonix',
  },
  {
    name: 'Ana Sofía Caraveo',
    role: 'Identidad de Marca & Diseño Visual',
    bio: 'Da forma a la identidad visual de marcas y artistas, cuidando cada pieza gráfica hasta el último detalle.',
    photo: null,
    org: 'Redonix',
  },
  {
    name: 'Ronin Giner',
    role: 'Diseño, Animación & Dirección',
    bio: 'Combina diseño, animación y dirección para transformar ideas en piezas visuales con impacto real.',
    photo: photoSet(roninGiner96, roninGiner192, roninGiner288),
    org: 'Redonix',
  },
  {
    name: 'Daniel Olmos',
    role: 'Producción Audiovisual & Contenido',
    bio: 'Cubre, edita y produce contenido para redes con un ojo entrenado para capturar el momento correcto.',
    photo: photoSet(danielOlmos96, danielOlmos192, danielOlmos288),
    org: 'Redonix · Energize Media',
  },
  {
    name: 'Osmar Ortíz',
    role: 'Producción y Masterización de Audio',
    bio: 'Da el acabado final al sonido, con estándares de sello discográfico listos para cualquier escenario.',
    photo: photoSet(osmarOrtiz96, osmarOrtiz192, osmarOrtiz288),
    org: 'Makroz 13 Records',
  },
]
