import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Quote,
  TrendingUp,
  Users,
  Calendar,
  Wrench,
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { CASE_STUDIES } from '@/data/case-studies';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: 'Cas client introuvable',
    };
  }

  const description = `${caseStudy.title}. ${caseStudy.intervention.description} Résultats : ${caseStudy.afterState.results.slice(0, 2).join(', ')}.`;

  return {
    title: `${caseStudy.title}`,
    description,
    openGraph: {
      title: `${caseStudy.title} | ${SITE_CONFIG.name}`,
      description,
      type: 'article',
      locale: 'fr_FR',
      images: [
        {
          url: `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(caseStudy.title)}`,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/cas-clients/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.intervention.description,
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
      '@id': `${SITE_CONFIG.url}/cas-clients/${caseStudy.slug}`,
    },
    about: {
      '@type': 'Thing',
      name: caseStudy.sector,
    },
  };

  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: caseStudy.testimonial,
    author: {
      '@type': 'Person',
      name: caseStudy.author,
      jobTitle: caseStudy.role,
    },
    itemReviewed: {
      '@type': 'ProfessionalService',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cas clients',
        item: `${SITE_CONFIG.url}/cas-clients`,
      },
      { '@type': 'ListItem', position: 3, name: caseStudy.title },
    ],
  };

  // Find other case studies for "related" section
  const otherCaseStudies = CASE_STUDIES.filter((cs) => cs.slug !== caseStudy.slug).slice(0, 2);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <Hero title={caseStudy.title} subtitle={`${caseStudy.sector} — ${caseStudy.location}`} />

      {/* Métriques clés */}
      <section className="border-b border-breton-sand bg-breton-foam/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className={`rounded-xl px-6 py-4 text-center ${
                  metric.highlight
                    ? 'bg-breton-emerald text-white'
                    : 'bg-white border border-breton-sand'
                }`}
              >
                <p
                  className={`text-3xl font-bold ${
                    metric.highlight ? 'text-white' : 'text-breton-emerald'
                  }`}
                >
                  {metric.value}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    metric.highlight ? 'text-white/70' : 'text-slate-500'
                  }`}
                >
                  {metric.label}
                </p>
              </div>
            ))}
            <div className="rounded-xl px-6 py-4 text-center bg-white border border-breton-sand">
              <p className="text-3xl font-bold text-breton-emerald">{caseStudy.duration}</p>
              <p className="mt-1 text-sm text-slate-500">Durée du projet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <Link
            href="/cas-clients"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-breton-emerald hover:text-breton-moss transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux cas clients
          </Link>

          {/* Infos contexte */}
          <div className="mb-10 flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {caseStudy.employees}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {caseStudy.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Projet : {caseStudy.duration}
            </span>
          </div>

          {/* Image */}
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={caseStudy.image}
              alt={`Cas client ${caseStudy.sector}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-breton-emerald px-3 py-1 text-sm font-medium text-white">
                {caseStudy.sector}
              </span>
            </div>
          </div>

          {/* Avant / Après */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {/* AVANT */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 lg:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700">
                <AlertTriangle className="h-4 w-4" />
                Avant
              </h2>
              <ul className="space-y-3">
                {caseStudy.beforeState.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <span className="mt-1 text-red-400">✗</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* APRÈS */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 lg:p-8">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-emerald-700">
                <TrendingUp className="h-4 w-4" />
                Après
              </h2>
              <ul className="space-y-3">
                {caseStudy.afterState.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                    <span className="mt-1 text-emerald-500">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Intervention */}
          <div className="mb-12 rounded-2xl border border-breton-sand bg-breton-foam p-6 lg:p-8">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-breton-emerald">
              <Wrench className="h-4 w-4" />
              Notre intervention
            </h2>
            <p className="mb-6 text-slate-700">{caseStudy.intervention.description}</p>
            <ul className="mb-6 space-y-3">
              {caseStudy.intervention.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-breton-emerald" />
                  {action}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {caseStudy.intervention.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg bg-breton-emerald/10 px-3 py-1 text-xs font-medium text-breton-emerald"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Témoignage */}
          <div className="mb-12 rounded-2xl bg-breton-emerald p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 shrink-0 text-[#74C69D]/30" />
              <div>
                <blockquote className="mb-4 text-lg leading-relaxed text-white">
                  &ldquo;{caseStudy.testimonial}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#74C69D]/20">
                    <span className="font-bold text-[#74C69D]">
                      {caseStudy.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{caseStudy.author}</p>
                    <p className="text-sm text-white/60">{caseStudy.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres cas clients */}
      {otherCaseStudies.length > 0 && (
        <section className="bg-breton-foam py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Découvrez d&apos;autres cas clients
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/cas-clients/${cs.slug}`}
                  className="group rounded-2xl border border-breton-sand bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mb-2 inline-block rounded-full bg-breton-emerald/10 px-3 py-1 text-xs font-medium text-breton-emerald">
                    {cs.sector}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-breton-emerald">
                    {cs.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {cs.location} — {cs.employees}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.metrics
                      .filter((m) => m.highlight)
                      .map((m) => (
                        <span
                          key={m.label}
                          className="rounded bg-breton-emerald/10 px-2 py-0.5 text-xs font-medium text-breton-emerald"
                        >
                          {m.value} {m.label.toLowerCase()}
                        </span>
                      ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-breton-navy py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Votre situation ressemble à cette problématique ?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Faites le point sur votre maturité data en 3 minutes et découvrez les projets adaptés à
            votre contexte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 bg-white px-8 text-base font-semibold text-breton-emerald hover:bg-white/90"
            >
              <Link href="/audit-ia" className="gap-2">
                Faire mon audit IA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-white/20 px-8 text-base text-white hover:bg-white/10"
            >
              <Link href="/contact">Échanger avec nous</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">contact@balise-ia.fr — Lorient, Bretagne</p>
        </div>
      </section>
    </>
  );
}
