import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // accept external connections (needed on Replit/containers)
    port: 3000,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.repl.co',       // allow any *.repl.co
      '.replit.dev',    // allow any *.replit.dev
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
});
