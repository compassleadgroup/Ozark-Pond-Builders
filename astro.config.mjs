// @ts-check
import { defineConfig } from 'astro/config';

// Static output for Cloudflare Pages (build command: npm run build, output: dist).
// Tailwind is loaded via CDN in the base layout, so there is no Tailwind or
// PostCSS build step here. Never run Wrangler or a local dev server for deploy.
export default defineConfig({
  site: 'https://ozarkpondbuilders.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
