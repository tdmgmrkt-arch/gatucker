import { MetadataRoute } from 'next';
import { statSync } from 'fs';
import path from 'path';
import { getSortedPosts } from './blog/posts';

const APP_ROOT = path.join(process.cwd(), 'src', 'app');

function mtime(relPath: string): string {
  try {
    return statSync(path.join(APP_ROOT, relPath)).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gatuckerpi.com';
  const currentDate = new Date().toISOString();

  const blogPosts: MetadataRoute.Sitemap = getSortedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: mtime('page.tsx'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: mtime('about/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: mtime('services/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/background-checks`,
      lastModified: mtime('background-checks/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/investigations`,
      lastModified: mtime('investigations/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/consulting`,
      lastModified: mtime('consulting/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/risk-management`,
      lastModified: mtime('risk-management/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/infidelity`,
      lastModified: mtime('infidelity/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/child-custody`,
      lastModified: mtime('child-custody/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/missing-persons`,
      lastModified: mtime('missing-persons/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/profiling`,
      lastModified: mtime('profiling/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/high-profile-investigations`,
      lastModified: mtime('high-profile-investigations/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: mtime('contact/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/request-service-form`,
      lastModified: mtime('request-service-form/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: mtime('faqs/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: mtime('blog/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-actions.json`,
      lastModified: mtime('../../public/ai-actions.json'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Location hub
    {
      url: `${baseUrl}/locations`,
      lastModified: mtime('locations/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Riverside County
    {
      url: `${baseUrl}/locations/riverside-county`,
      lastModified: mtime('locations/riverside-county/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/riverside-county/murrieta`,
      lastModified: mtime('locations/riverside-county/murrieta/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/riverside-county/temecula`,
      lastModified: mtime('locations/riverside-county/temecula/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/riverside-county/riverside`,
      lastModified: mtime('locations/riverside-county/riverside/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Los Angeles County
    {
      url: `${baseUrl}/locations/los-angeles-county`,
      lastModified: mtime('locations/los-angeles-county/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/los-angeles-county/long-beach`,
      lastModified: mtime('locations/los-angeles-county/long-beach/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/los-angeles-county/pasadena`,
      lastModified: mtime('locations/los-angeles-county/pasadena/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // San Bernardino County
    {
      url: `${baseUrl}/locations/san-bernardino-county`,
      lastModified: mtime('locations/san-bernardino-county/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/san-bernardino-county/rancho-cucamonga`,
      lastModified: mtime('locations/san-bernardino-county/rancho-cucamonga/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Standalone locations
    {
      url: `${baseUrl}/locations/san-francisco`,
      lastModified: mtime('locations/san-francisco/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/las-vegas`,
      lastModified: mtime('locations/las-vegas/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogPosts,
  ];
}
