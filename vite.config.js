import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],


  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: "vue"
        }
      }
    },
    lib: {
      entry: "./packages/index.js",
      name: 'tooy-ui'
    }
  }

})
