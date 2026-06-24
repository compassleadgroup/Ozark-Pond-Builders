import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

// Hand built sitemap so we control exactly which URLs publish. Draft county and
// town pages are excluded automatically because they are filtered out here, the
// same way they are excluded from getStaticPaths. Utility pages (thank-you, 404)
// are intentionally left out.
export const GET: APIRoute = async () => {
  const base = SITE.url;

  const staticPaths = [
    '/',
    '/locations/',
    '/about/',
    '/how-we-vet-contractors/',
    '/how-we-make-money/',
    '/contact/',
    '/privacy/',
  ];

  const services = await getCollection('services');
  const guides = await getCollection('guides');
  const counties = await getCollection('counties', ({ data }) => !data.draft);
  const towns = await getCollection('towns', ({ data }) => !data.draft);

  const urls = [
    ...staticPaths,
    ...services.map((s) => `/services/${s.id}/`),
    ...guides.map((g) => `/guides/${g.id}/`),
    ...counties.map((c) => `/${c.id}/`),
    ...towns.map((t) => `/locations/${t.id}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
