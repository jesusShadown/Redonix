import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    // Sin esto, Vite embebe las imágenes chicas (<4KB) como base64 dentro
    // del JS/CSS. Eso rompe el objetivo de usar srcset: el navegador ya no
    // puede elegir bajar solo una variante, todas quedan pegadas al bundle.
    assetsInlineLimit: 0,
  },
  esbuild: {
    // Solo se eliminan en build de producción; en dev se conservan para depurar.
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}))
