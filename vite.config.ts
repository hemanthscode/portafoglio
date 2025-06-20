import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Ensures correct asset paths for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'terser', // Terser is now installed
    sourcemap: true, // Useful for debugging
    target: 'es2022', // Modern browser support
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  // Optimize for production
  esbuild: {
    drop: ['console', 'debugger'], // Remove console.logs and debuggers in production
  },
});