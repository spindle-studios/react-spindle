import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
});
