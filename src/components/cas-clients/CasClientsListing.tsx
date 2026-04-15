'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { CASE_STUDIES, type CaseStudy } from '@/data/case-studies';

// Map each case study to a problem type label
const PROBLEM_LABELS: Record<string, string> = {
  'metallurgie-finistere': 'Pilotage production',
  'agroalimentaire-morbihan': 'Automatisation saisie',
  'transport-logistique-cotes-armor': 'Reporting direction',
  'industrie-plastique-ille-et-vilaine': 'Traçabilité qualité',
  'negoce-b2b-loire-atlantique': 'Rentabilité client',
};

// All unique sectors for filter tags
const ALL_SECTORS = ['Tous', ...Array.from(new Set(CASE_STUDIES.map((cs) => cs.sector)))];

function CaseCard({ cs }: { cs: CaseStudy }) {
  const highlightMetric = cs.metrics.find((m) => m.highlight) ?? cs.metrics[0];

  return (
    <article className="group flex flex-col rounded-2xl border border-breton-sand bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header band */}
      <div className="flex items-center justify-between gap-3 px-6 pt-5 pb-4 border-b border-breton-sand">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-breton-foam px-3 py-1 text-xs font-semibold text-breton-emerald uppercase tracking-wider">
          {cs.sector}
        </span>
        <span className="text-xs text-breton-granite">
          {cs.location} · {cs.employees}
        </span>
      </div>

      <div className="flex flex-col flex-1 px-6 py-5 gap-5">
        {/* Problem */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <AlertCircle className="h-4 w-4 text-amber-500 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Problème
            </span>
          </div>
          <ul className="space-y-1">
            {cs.beforeState.painPoints.slice(0, 2).map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-breton-slate">
                <span className="text-amber-400 mt-0.5 shrink-0">✗</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 className="h-4 w-4 text-breton-emerald shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-breton-emerald">
              Solution
            </span>
          </div>
          <p className="text-sm text-breton-slate">{cs.intervention.description}</p>
        </div>

        {/* Key metric */}
        <div className="flex items-center gap-4 rounded-xl bg-breton-foam px-4 py-3">
          <TrendingUp className="h-5 w-5 text-breton-emerald shrink-0" />
          <div>
            <p className="text-2xl font-bold text-breton-emerald leading-none">
              {highlightMetric.value}
            </p>
            <p className="text-xs text-breton-granite mt-0.5">{highlightMetric.label}</p>
          </div>
          {cs.metrics.length > 1 && (
            <div className="ml-auto flex gap-3">
              {cs.metrics
                .filter((m) => !m.highlight)
                .slice(0, 2)
                .map((m) => (
                  <div key={m.label} className="text-right">
                    <p className="text-base font-semibold text-breton-navy leading-none">
                      {m.value}
                    </p>
                    <p className="text-xs text-breton-granite mt-0.5">{m.label}</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Testimonial excerpt */}
        <blockquote className="border-l-2 border-breton-sand pl-3 text-sm italic text-breton-granite leading-relaxed">
          &ldquo;{cs.testimonial}&rdquo;
          <footer className="mt-1 not-italic text-xs text-breton-granite/70">
            — {cs.author}, {cs.role}
          </footer>
        </blockquote>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-5">
        <Link
          href={`/cas-clients/${cs.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:underline transition-colors"
        >
          Voir le cas complet
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function CasClientsListing() {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const filtered =
    activeFilter === 'Tous'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.sector === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {ALL_SECTORS.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveFilter(sector)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
                activeFilter === sector
                  ? 'bg-breton-navy text-white'
                  : 'bg-breton-foam text-breton-slate hover:bg-breton-sand hover:text-breton-navy'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Problem type labels (decorative legend) */}
        <p className="text-center text-xs text-breton-granite uppercase tracking-widest mb-8">
          {filtered.length} cas client{filtered.length > 1 ? 's' : ''} —{' '}
          {activeFilter === 'Tous'
            ? Object.values(PROBLEM_LABELS).join(' · ')
            : PROBLEM_LABELS[
                filtered.find((cs) => cs.sector === activeFilter)?.slug ?? ''
              ] ?? activeFilter}
        </p>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cs) => (
            <CaseCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
