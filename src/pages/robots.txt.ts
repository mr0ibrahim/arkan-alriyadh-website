import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const envUrl = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
  const base = envUrl || site.defaultUrl;

  const content = `User-agent: *
Allow: /
Disallow: /404.html

Sitemap: ${base}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
