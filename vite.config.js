import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo at /itinerary-react/
export default defineConfig({
  plugins: [react()],
  base: '/itinerary-react/',
})
