import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(() => {
  const isVercel = process.env.VERCEL === '1';
  return {
    base: isVercel ? '/' : '/mumas-mazing-barbeque/',
    plugins: [react(), viteCompression()],
    build: {
      sourcemap: false,
    },
  };
});
