import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],

  // Solved relative path problem to absolute path
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
  // base: './',
})
