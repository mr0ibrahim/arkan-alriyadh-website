import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const envUrl = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
  const base = envUrl || site.defaultUrl;
  const now = new Date().toISOString().split('T')[0];

  const routes = [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'weekly',
    },
    {
      path: '/our-work/',
      priority: '0.9',
      changefreq: 'weekly',
    },
    ...services.map((service) => ({
      path: `/services/${service.id}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
  ];

  const items = routes
    .map(
      (route) => `  <url>
    <loc>${new URL(route.path, base).toString()}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
