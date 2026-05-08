import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  distDir: 'dist',
  server: {
    host: true,
    port: 3000,
  },
  vite: {
    server: {
      allowedHosts: ['sienna'],
    },
  },
})
