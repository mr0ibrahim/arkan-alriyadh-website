import type { APIRoute } from 'astro';
export const GET: APIRoute = () => {
 const base=import.meta.env.PUBLIC_ALLOW_INDEXING === 'true' ? import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/,'') : undefined;
 const content=base?`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n';
 return new Response(content,{headers:{'Content-Type':'text/plain; charset=utf-8'}});
};
