import type { APIRoute } from 'astro';
import { services } from '../data/services';
export const GET: APIRoute = () => {
 const base=import.meta.env.PUBLIC_ALLOW_INDEXING === 'true' ? import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/,'') : undefined;
 if (!base) return new Response('Site URL not configured', {status:404});
 const paths=['/','/services/sheeboard/','/services/parquet/','/services/fiber-skirting/','/services/foam-mouldings/','/services/painting/'];
 const items=paths.map(path=>`<url><loc>${new URL(path,base).toString()}</loc></url>`).join('');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`, {headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
