'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Factory, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { USE_CASES } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';

interface UseCasesV5Props {
  showTitle?: boolean;
  limit?: number;
  showCta?: boolean;
}

export function UseCasesV5({ showTitle = true, limit, showCta = true }: UseCasesV5Props) {
  const displayedCases = limit ? USE_CASES.slice(0, limit) : USE_CASES;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Exemples d'applications d'intelligence artificielle pour PME
              </h2>
              <p className="mt-3 text-slate-600">
                Cas d'usage concrets réalisés pour des PME en Bretagne. Problème → Solution → Résultat.
              </p>
            </div>
          </FadeIn>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {displayedCases.map((useCase, index) => (
            <FadeIn key={useCase.id} direction="up" delay={index * 100}>
              <UseCaseCard useCase={useCase} />
            </FadeIn>
          ))}
        </div>

        {showCta && (
          <FadeIn direction="up" delay={400}>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/cas-usage" className="gap-2">
                  Voir tous les cas d'usage
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

interface UseCaseCardProps {
  useCase: (typeof USE_CASES)[0];
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 ring-1 ring-slate-200/80 hover:shadow-lg transition-shadow">
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
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Problème</p>
        <p className="text-sm text-slate-600">{useCase.problem}</p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">Solution IA</p>
        <p className="text-sm text-slate-600">{useCase.solution}</p>
      </div>

      {/* Résultat */}
      <div className="bg-green-50 rounded-lg p-3 ring-1 ring-green-100 mb-4">
        <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">Résultat</p>
        <p className="text-sm font-medium text-green-800">{useCase.result}</p>
      </div>

      {/* Secteurs et tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {useCase.sectors.slice(0, 2).map((sector) => (
          <span
            key={sector}
            className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700"
          >
            <Factory className="h-3 w-3" />
            {sector}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Button asChild size="sm" variant="ghost" className="w-full justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
        <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
          <Calendar className="h-4 w-4" />
          Cas similaire ? Parlons-en
        </a>
      </Button>
    </div>
  );
}
