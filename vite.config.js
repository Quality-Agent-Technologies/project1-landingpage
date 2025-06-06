import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/project1-landingpage/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
