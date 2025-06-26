import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/itxine-cv/",
  plugins: [react()],
})
