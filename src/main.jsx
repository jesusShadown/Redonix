import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

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
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
