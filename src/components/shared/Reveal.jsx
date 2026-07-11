import { useReveal } from '../../hooks/useReveal'

// Envuelve cualquier bloque para que aparezca con fade-in al hacer scroll.
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useReveal()
  const Tag = as
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
