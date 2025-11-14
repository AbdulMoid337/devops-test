import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://devops-test-steel.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})