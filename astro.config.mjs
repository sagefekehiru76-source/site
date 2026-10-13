// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: replace with the real production domain before launch (used for sitemap, canonical and OG URLs).
  site: 'https://launchonnato.com',
  trailingSlash: 'always',
  // One small stylesheet — inline it so there's no render-blocking CSS request.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thanks/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', tr: 'tr' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
