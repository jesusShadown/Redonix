// Registro único de las secciones que se hidratan como "islas" independientes:
// se pre-renderizan en build time (visibles de inmediato) pero su JS/interactividad
// solo se descarga cuando el usuario hace scroll cerca (ver src/islands.js).
export const MAIN_ISLANDS = [
  { id: 'valueprops', loader: () => import('./components/ValueProps') },
  { id: 'services', loader: () => import('./components/Services') },
  { id: 'team', loader: () => import('./components/Team') },
  { id: 'partners', loader: () => import('./components/Partners') },
  { id: 'contact', loader: () => import('./components/Contact') },
  { id: 'finalcta', loader: () => import('./components/FinalCta') },
]

export const FOOTER_ISLAND = { id: 'footer', loader: () => import('./components/Footer') }

export const ALL_ISLANDS = [...MAIN_ISLANDS, FOOTER_ISLAND]
