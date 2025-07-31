import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/mumas-mazing-barbeque/", // <-- GitHub Pages deployment
  plugins: [react()],
});
