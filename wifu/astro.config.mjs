// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// TODO: set your real domain here (or as the SITE_URL environment variable in Vercel/Netlify).
// It is used for canonical links, Open Graph URLs, sitemap.xml and robots.txt.
const site = process.env.SITE_URL || 'https://www.example.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thanks/') && !page.endsWith('.ics'),
      i18n: { defaultLocale: 'tr', locales: { tr: 'tr', en: 'en' } },
    }),
  ],
  // `tsconfig` is pinned so the build ignores the other site's tsconfig.json at the repository root.
  vite: { plugins: [tailwindcss()], tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)) },
});
