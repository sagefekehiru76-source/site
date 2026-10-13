// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://natolaunch.ceo',
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
