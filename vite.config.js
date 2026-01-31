import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins: [
    tailwindcss(), vue(), ViteYaml(), dynamicImport(),
  ],
  server: {
    host: "192.168.15.20",
    port: 5173,
  }
})