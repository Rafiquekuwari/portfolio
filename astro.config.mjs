import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mohammedrk.netlify.app',
  output: 'static',
  compressHTML: true,
  trailingSlash: 'never'
});
