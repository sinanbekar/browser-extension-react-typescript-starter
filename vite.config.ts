import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';

import manifest from './src/manifest';
import removeSrcFromHtmlPaths from './utils/plugins/removeSrcFromHtmlPaths';

export default defineConfig({
  // @see https://github.com/crxjs/chrome-extension-tools/issues/696
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  build: {
    rollupOptions: {
      input: {
        welcome: join(__dirname, 'src/welcome/welcome.html'),
      },
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },
  plugins: [react(), crx({ manifest }), removeSrcFromHtmlPaths()],
});
