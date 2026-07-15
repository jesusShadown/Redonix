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
    // Aquí añadimos la lógica para agrupar los archivos
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Agrupa todas las dependencias de node_modules en un archivo 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Agrupa todos tus componentes en un archivo 'components'
          if (id.includes('src/components')) {
            return 'components';
          }
        }
      }
    }
  },
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
}))