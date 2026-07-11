import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import App from './App'

// Usado solo en build time (ver scripts/prerender.mjs) para pre-renderizar
// el HTML completo, incluyendo las secciones que en el cliente se cargan con
// React.lazy/Suspense. renderToPipeableStream sí espera a que resuelvan
// (a diferencia de renderToString), así que el HTML queda completo y limpio.
export function render() {
  return new Promise((resolve, reject) => {
    let html = ''
    const collector = new PassThrough()
    collector.on('data', (chunk) => {
      html += chunk
    })
    collector.on('end', () => resolve(html))
    collector.on('error', reject)

    const { pipe } = renderToPipeableStream(<App />, {
      onAllReady() {
        pipe(collector)
      },
      onError: reject,
    })
  })
}
