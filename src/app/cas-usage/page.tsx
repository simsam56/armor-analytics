import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock, Factory, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ContactSection } from '@/components/sections';
import { USE_CASES, SECTORS } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: "Cas d'usage IA pour PME | Exemples concrets | Balise IA Bretagne",
  description:
    "Exemples concrets d'intelligence artificielle et automatisation pour PME. OCR, pilotage production, reporting automatisé. Résultats mesurables en Bretagne.",
  openGraph: {
    title: "Cas d'usage IA pour PME | Balise IA Bretagne",
    description:
      "Exemples concrets d'IA et automatisation pour PME bretonnes. Problème → Solution → Résultat.",
  },
  keywords: [
    'cas usage IA PME',
    'exemple intelligence artificielle entreprise',
    'automatisation PME Bretagne',
    'OCR entreprise',
    'pilotage production IA',
    'reporting automatisé PME',
  ],
};

export default function CasUsagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Cas d'usage IA pour PME en Bretagne
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Des exemples concrets de ce que l'intelligence artificielle et l'automatisation
                peuvent apporter à votre PME. Problème → Solution → Résultat.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5" />
                    Cas similaire ? Parlons-en
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <Filter className="h-4 w-4" />
              Secteurs :
            </span>
            {SECTORS.map((sector) => (
              <span
                key={sector.name}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
              >
                <Factory className="h-3.5 w-3.5" />
                {sector.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {USE_CASES.map((useCase, index) => (
              <FadeIn key={useCase.id} direction="up" delay={index * 100}>
                <UseCaseCard useCase={useCase} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vous avez un cas similaire ?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Discutons 30 minutes pour voir si l'IA ou l'automatisation peut vous aider.
              Diagnostic gratuit, sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Réserver un créneau
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-blue-700"
              >
                <Link href="/offres">
                  Voir nos offres
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

interface UseCaseCardProps {
  useCase: (typeof USE_CASES)[0];
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 ring-1 ring-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-semibold text-slate-900 text-lg">{useCase.title}</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 shrink-0">
          <Clock className="h-3 w-3" />
          {useCase.duration}
        </span>
      </div>

      {/* Problème */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
          Problème
        </p>
        <p className="text-sm text-slate-600">{useCase.problem}</p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          Solution IA
        </p>
        <p className="text-sm text-slate-600">{useCase.solution}</p>
      </div>

      {/* Résultat */}
      <div className="bg-green-50 rounded-lg p-3 ring-1 ring-green-100 mb-4">
        <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">
          Résultat
        </p>
        <p className="text-sm font-medium text-green-800">{useCase.result}</p>
      </div>

      {/* Secteurs et tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {useCase.sectors.map((sector) => (
          <span
            key={sector}
            className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
          >
            <Factory className="h-3 w-3" />
            {sector}
          </span>
        ))}
      </div>

      {/* Tags techniques */}
      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
        {useCase.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Button
        asChild
        size="sm"
        variant="ghost"
        className="w-full justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
      >
        <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
          <Calendar className="h-4 w-4" />
          Cas similaire ? Parlons-en
        </a>
      </Button>
    </div>
  );
}
