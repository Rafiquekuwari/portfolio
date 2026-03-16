import type { APIRoute } from 'astro';
import { articles } from '../data/articles';
import { projects } from '../data/projects';
import { siteConfig } from '../data/site';

const staticPages = ['/', '/about', '/projects', '/articles', '/contact', '/bhiwandi/ai-automation', '/bhiwandi/rag-systems'];

export const GET: APIRoute = () => {
  const now = new Date().toISOString();
  const urls = [
    ...staticPages.map((path) => ({ path, lastmod: now })),
    ...projects.map((project) => ({ path: `/projects/${project.slug}`, lastmod: now })),
    ...articles.map((article) => ({ path: `/articles/${article.slug}`, lastmod: article.publishedDate }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${siteConfig.siteUrl}${entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
