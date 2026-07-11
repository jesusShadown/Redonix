import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { mountIslands } from './islands'
import './styles/global.css'
import './styles/sections.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// El build de producción inyecta HTML pre-renderizado en #root (ver
// scripts/prerender.mjs) para que el hero pinte sin esperar a React.
// hydrateRoot toma ese HTML tal cual; en dev (#root vacío) usamos createRoot normal.
if (container.hasChildNodes()) {
  // Hidratar es trabajo pesado en el hilo principal (sobre todo en móvil).
  // Se difiere un tick para que el navegador pinte primero el HTML estático
  // ya visible, en vez de competir con la hidratación por el mismo frame.
  const hydrate = () => ReactDOM.hydrateRoot(container, app)
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(hydrate, { timeout: 200 })
  } else {
    setTimeout(hydrate, 0)
  }
} else {
  ReactDOM.createRoot(container).render(app)
}

// Las islas (todo lo que va debajo del hero) se hidratan por su cuenta
// cuando el usuario hace scroll cerca de cada una — ver src/islands.js.
mountIslands()
