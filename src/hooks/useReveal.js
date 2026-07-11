import { useEffect, useRef } from 'react'

// Añade la clase "is-visible" cuando el elemento entra en viewport.
// Úsalo junto con la clase CSS "reveal" (ver styles/global.css).
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
