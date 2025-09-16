import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(), vue(),
  ],
  server: {
    host: "192.168.15.31",
    port: 5173,
  }
})