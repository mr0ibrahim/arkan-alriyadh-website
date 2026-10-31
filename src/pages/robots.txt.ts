import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const isProductionIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
  const envUrl = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
  const base = envUrl || site.defaultUrl;

  const content = isProductionIndexing
    ? `User-agent: *
Allow: /
Disallow: /404.html

Sitemap: ${base}/sitemap.xml
`
    : `User-agent: *
Disallow: /
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
