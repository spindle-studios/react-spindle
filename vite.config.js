import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
});
