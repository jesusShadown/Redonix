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
  },
  esbuild: {
    // Solo se eliminan en build de producción; en dev se conservan para depurar.
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}))
