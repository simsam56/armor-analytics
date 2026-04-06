import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { BLOG_ARTICLES } from '@/data/blog-articles';
import { CASE_STUDIES } from '@/data/case-studies';

const CITY_SLUGS = ['lorient', 'vannes', 'quimper', 'rennes', 'brest', 'saint-brieuc'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastUpdated = new Date('2026-03-26');

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ia`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/data`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formation`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cas-clients`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/audit-ia`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];

  const landingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/power-bi-bretagne`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/automatisation-commandes-pme`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/consultant-data-lorient`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/formation-ia-pme`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/intelligence-artificielle-bretagne`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/interventions/${slug}`,
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...BLOG_ARTICLES.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/cas-clients/${cs.slug}`,
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: lastUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...mainPages, ...landingPages, ...cityPages, ...blogPages, ...caseStudyPages, ...legalPages];
}
