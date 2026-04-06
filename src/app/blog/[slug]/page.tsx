import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections';
import { CtaContact } from '@/components/sections/CtaContact';
import { LeadMagnet } from '@/components/ui/lead-magnet';
import { BLOG_ARTICLES } from '@/data/blog-articles';
import { SITE_CONFIG } from '@/lib/constants';

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^>]*\/?>/gi, '')
    .replace(/\bon\w+\s*=/gi, 'data-removed=');
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article introuvable',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | ${SITE_CONFIG.name}`,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [SITE_CONFIG.name],
      locale: 'fr_FR',
      images: [
        {
          url: `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(article.title)}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${article.slug}`,
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${article.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_CONFIG.url}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Hero title={article.title} />

      <article className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-breton-sand">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {SITE_CONFIG.name}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime} de lecture
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-breton-emerald/10 text-breton-emerald"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Article content */}
          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-breton-sand">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-breton-emerald hover:text-breton-moss transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>

      {/* Articles connexes */}
      {(() => {
        const related = (article.relatedSlugs || [])
          .map((s) => BLOG_ARTICLES.find((a) => a.slug === s))
          .filter(Boolean)
          .slice(0, 2);
        if (related.length === 0) return null;
        return (
          <section className="py-16 sm:py-20 bg-breton-foam">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                À lire aussi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel!.slug}
                    href={`/blog/${rel!.slug}`}
                    className="group rounded-2xl border border-breton-sand bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {rel!.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-breton-emerald/10 text-breton-emerald"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-breton-emerald transition-colors leading-snug">
                      {rel!.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {rel!.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Lead magnet */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LeadMagnet />
        </div>
      </section>

      <CtaContact />
    </>
  );
}
