import { BLOG_ARTICLES } from '@/data/blog-articles';
import { SITE_CONFIG } from '@/lib/constants';

export async function GET() {
  const articles = [...BLOG_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog ${SITE_CONFIG.name}</title>
    <link>${SITE_CONFIG.url}/blog</link>
    <description>Conseils data, automatisation et IA pour PME bretonnes</description>
    <language>fr</language>
    <atom:link href="${SITE_CONFIG.url}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (article) => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${SITE_CONFIG.url}/blog/${article.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/blog/${article.slug}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
