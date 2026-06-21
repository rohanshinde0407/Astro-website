import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://ramnaam.astroite.com';

  return {
    rules: [
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'PerplexityBot',
          'cohere-ai',
          'omgilibot',
          'ByteSpider',
        ],
        allow: ['/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
