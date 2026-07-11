import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, isSsrBuild }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    // React/ReactDOM van en su propio chunk cacheable: cambia poco entre
    // despliegues, así el navegador puede reutilizarlo entre visitas/redeploys
    // sin invalidar el resto del bundle. No aplica al build SSR (Node).
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
            },
          },
        },
  },
  esbuild: {
    // Solo se eliminan en build de producción; en dev se conservan para depurar.
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}))
