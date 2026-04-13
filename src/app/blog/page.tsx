import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Hero } from '@/components/sections';
import { CtaContact } from '@/components/sections/CtaContact';
import { BLOG_ARTICLES } from '@/data/blog-articles';

export const metadata: Metadata = {
  title: 'Blog — Pilotage production, IA et data pour PME industrielles',
  description:
    'Conseils pratiques pour piloter votre production, automatiser vos process et exploiter vos données. Articles pour PME industrielles bretonnes.',
  openGraph: {
    title: 'Blog — Pilotage production, IA et data pour PME industrielles | balise-ia',
    description:
      'Conseils pratiques pour piloter votre production et exploiter vos données industrielles.',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/blog',
    types: {
      'application/rss+xml': 'https://www.balise-ia.fr/blog/feed.xml',
    },
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Tags qui définissent un article "Production & Industrie"
const INDUSTRIAL_TAGS = [
  'PME industrielle',
  'Production',
  'KPI',
  'Power BI',
  'ERP',
  'Automatisation',
  'Tableau de bord',
];

function isIndustrial(tags: string[]): boolean {
  return tags.some((tag) => INDUSTRIAL_TAGS.includes(tag));
}

export default function BlogPage() {
  const sortedArticles = [...BLOG_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const industrialArticles = sortedArticles.filter((a) => isIndustrial(a.tags));
  const otherArticles = sortedArticles.filter((a) => !isIndustrial(a.tags));

  return (
    <>
      <Hero
        title="Blog"
        subtitle="Conseils pratiques pour piloter votre production, automatiser vos process et exploiter vos données industrielles."
      />

      {/* Articles Production & Industrie */}
      {industrialArticles.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-breton-navy mb-8">
              Production &amp; Industrie
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industrialArticles.map((article) => (
                <article key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col rounded-2xl border border-breton-sand bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1 h-full"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-breton-emerald/10 text-breton-emerald"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-breton-navy group-hover:text-breton-emerald transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm text-breton-slate leading-relaxed flex-1">
                      {article.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-breton-granite">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-breton-granite group-hover:text-breton-emerald group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres articles */}
      {otherArticles.length > 0 && (
        <section className="py-16 sm:py-20 bg-breton-foam">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-breton-navy mb-8">
              IA &amp; Data — Guides généraux
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((article) => (
                <article key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col rounded-2xl border border-breton-sand bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1 h-full"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-breton-copper/10 text-breton-copper"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-breton-navy group-hover:text-breton-emerald transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm text-breton-slate leading-relaxed flex-1">
                      {article.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-breton-granite">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-breton-granite group-hover:text-breton-emerald group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaContact />
    </>
  );
}
