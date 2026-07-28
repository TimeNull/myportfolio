import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins: [
    tailwindcss(), vue(), dynamicImport(),
  ],
  server: {
    host: "192.168.15.14",
    port: 5173,
  }
})