import sofiaRojasPhoto from '../assets/fotosIntegrantes/Sofía Rojas-optimized.webp'
import roninGinerPhoto from '../assets/fotosIntegrantes/Ronin Giner-optimized.webp'
import danielOlmosPhoto from '../assets/fotosIntegrantes/Daniel Olmos-optimized.webp'
import osmarOrtizPhoto from '../assets/fotosIntegrantes/Osmar Ortiz-optimized.webp'

// Equipo — para actualizar una foto, reemplaza el archivo correspondiente en
// src/assets/fotosIntegrantes/ (mismo nombre) o cambia el import de arriba.
// Si "photo" queda en null, se muestra un avatar con iniciales como respaldo.
export const team = [
  {
    name: 'Sofía Rojas',
    role: 'Producción de Eventos & Dirección',
    bio: 'Lidera la logística, el talento y la operación de cada evento, y dirige piezas audiovisuales de principio a fin.',
    photo: sofiaRojasPhoto,
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
    photo: roninGinerPhoto,
    org: 'Redonix',
  },
  {
    name: 'Daniel Olmos',
    role: 'Producción Audiovisual & Contenido',
    bio: 'Cubre, edita y produce contenido para redes con un ojo entrenado para capturar el momento correcto.',
    photo: danielOlmosPhoto,
    org: 'Redonix · Energize Media',
  },
  {
    name: 'Osmar Ortíz',
    role: 'Producción y Masterización de Audio',
    bio: 'Da el acabado final al sonido, con estándares de sello discográfico listos para cualquier escenario.',
    photo: osmarOrtizPhoto,
    org: 'Makroz 13 Records',
  },
]
