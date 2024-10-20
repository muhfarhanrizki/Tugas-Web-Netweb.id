import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        internet: './src/internet.html',
        http: './src/http.html',
        domain: './src/domain.html',
        hosting: './src/hosting.html',
        dns: './src/dns.html',
        browser: './src/browser.html',
      },
    },
  },
});
