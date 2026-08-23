import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

const BASE_URL = 'https://99-nights-wiki.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/calculator', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/codes', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/class-tier-list', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/entity-guide', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/diamonds-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/flame-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/beginner-guide', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
