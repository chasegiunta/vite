import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  port: 3000,
  server: {
    //   host: 'https://3000-amber-vole-h19agbhp.ws-us03.gitpod.io',
      cors: false,
      hmr: {
        port: 443,
    },
  }
})
