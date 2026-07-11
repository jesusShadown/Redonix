import { useState } from 'react'
import './Avatar.css'

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
export default function Avatar({ src, name, size = 96 }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {src && !errored ? (
        <img
          src={src}
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
