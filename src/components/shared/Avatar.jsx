import { useState } from 'react'
// Estilos importados centralizadamente desde src/styles/global.css

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

// Muestra la foto si se proporciona una; si no hay foto o falla al cargar, cae a un avatar con iniciales.
// "photo" es { src, srcSet } (ver src/data/team.js) para que el navegador
// elija el tamaño según la densidad de pantalla, en vez de bajar siempre la
// versión más grande.
export default function Avatar({ photo, name, size = 96 }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {photo && !errored ? (
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={`${size}px`}
          alt={name}
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <span className="avatar__initials">{getInitials(name)}</span>
      )}
    </div>
  )
}
