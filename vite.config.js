import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // High-end optimization settings
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs for production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Splitting heavy vendors into separate files for faster parallel loading
        manualChunks: {
          'three-vendor': ['three'],
          'three-fiber': ['@react-three/fiber', '@react-three/drei'],
          'framer-motion': ['framer-motion'],
          'lucide-icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})