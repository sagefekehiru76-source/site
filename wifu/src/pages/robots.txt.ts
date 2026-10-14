// robots.txt is generated so the sitemap URL always uses the domain from astro.config.mjs / SITE_URL.
export function GET({ site }: { site: URL }) {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
