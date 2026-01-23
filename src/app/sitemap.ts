import type { MetadataRoute } from 'next';
import { filterPublishedPosts } from '@/lib/dateUtils';
import { getSiteUrl } from '@/lib/site';
import { spaansLerenIndex } from '@/lib/spaansLerenIndex';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/woorden`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/gesprekken`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/games`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/games/flashcards`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/games/quiz`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/games/spaans-tellen`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/games/etenstijd`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/spaans-leren`, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const publishedPosts = filterPublishedPosts(spaansLerenIndex);
  const postRoutes: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${siteUrl}/spaans-leren/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}


