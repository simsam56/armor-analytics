import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections';
import { CtaContact } from '@/components/sections/CtaContact';
import { BLOG_ARTICLES } from '@/data/blog-articles';
import { SITE_CONFIG } from '@/lib/constants';

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            dangerouslySetInnerHTML={{ __html: article.content }}
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

      <CtaContact />
    </>
  );
}
