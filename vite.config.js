import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your repository name for GitHub Pages deployment
  base: '/berger/',
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',
  }
})