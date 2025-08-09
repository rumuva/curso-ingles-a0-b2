import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/curso-ingles-a0-b2/', // 🔹 Cambia si tu repo tiene otro nombre
})
