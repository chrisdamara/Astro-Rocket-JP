import type { APIRoute } from 'astro';
import { isBlogEnabled } from '@/lib/blog';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString() || 'https://example.com';

  const blogBlock = isBlogEnabled() ? '' : '\nDisallow: /blog/\nDisallow: /rss.xml';

  const robotsTxt = `
User-agent: *
Allow: /

# Block API routes
Disallow: /api/${blogBlock}

Sitemap: ${siteUrl}sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
