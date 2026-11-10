import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://gatuckerpi.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Do NOT add '/_next/' back. Googlebot renders pages before judging
        // them, and everything under /_next/static is the CSS, JS and fonts it
        // needs to do that — blocking them was putting build assets in the
        // "Blocked by robots.txt" report (first detected 2025-12-15) and
        // denying Google the resources to assess layout and mobile usability.
        // /_next/image is the image optimiser; blocking it also kept optimised
        // images out of Google Images. Crawl cost is negligible: the files are
        // content-hashed and immutable.
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
