import { MetadataRoute } from 'next';

const baseUrl = 'https://ragen.org';

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/ai', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/partnerships', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/process', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/work', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/services/web-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/saas-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/mobile-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/ui-ux-design', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/ai-integrations', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/cloud-devops', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/startup-mvp', priority: 0.7, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
