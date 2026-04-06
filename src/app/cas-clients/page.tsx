import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Users,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections';
import { CASE_STUDIES } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Cas clients — Résultats concrets IA et data pour PME bretonnes',
  description:
    '80% de ressaisies éliminées, 4h/semaine gagnées, reporting temps réel. Découvrez les résultats concrets de nos missions IA et data en Bretagne.',
  keywords:
    'cas clients IA PME Bretagne, résultats automatisation PME Bretagne, témoignages data PME Lorient, success stories IA Morbihan',
  openGraph: {
    title: 'Cas clients — Résultats concrets IA et data pour PME bretonnes',
    description:
      'Des résultats concrets et mesurables chez nos clients PME en Bretagne.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/cas-clients',
  },
};


const STATS = [
  { value: '5', label: 'Secteurs couverts' },
  { value: '48h', label: 'Délai de première réponse' },
  { value: '100%', label: 'Projets livrés en Bretagne' },
];

export default function CasClientsPage() {
  return (
    <>
      <Hero
        title={'Des résultats concrets\net mesurables'}
        subtitle="Découvrez comment nous avons aidé des PME bretonnes à automatiser leurs flux de données et améliorer leur pilotage."
      />

      {/* Stats */}
      <section className="border-b border-breton-sand bg-breton-foam/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-breton-emerald">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {CASE_STUDIES.map((caseStudy, index) => (
              <article key={index} className="relative">
                {/* Header avec image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <Image
                      src={caseStudy.image}
                      alt={`Cas client ${caseStudy.sector}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-breton-emerald text-white rounded-full text-sm font-medium">
                        {caseStudy.sector}
                      </span>
                    </div>
                  </div>

                  {/* Infos générales */}
                  <div
                    className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <Link href={`/cas-clients/${caseStudy.slug}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#1E2922] mb-4 hover:text-breton-emerald transition-colors">
                        {caseStudy.sector}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-4 text-sm text-[#64756C]">
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

                    {/* Métriques clés */}
                    <div className="mt-6 flex flex-wrap gap-4">
                      {caseStudy.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className={`px-4 py-3 rounded-lg ${metric.highlight ? 'bg-breton-emerald text-white' : 'bg-[#F8FAF9] border border-[#E2E8E5]'}`}
                        >
                          <p
                            className={`text-2xl font-bold ${metric.highlight ? 'text-[#74C69D]' : 'text-breton-emerald'}`}
                          >
                            {metric.value}
                          </p>
                          <p
                            className={`text-xs ${metric.highlight ? 'text-white/70' : 'text-[#64756C]'}`}
                          >
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contenu AVANT / INTERVENTION / APRÈS */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* AVANT */}
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-red-700 uppercase tracking-wide mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      Avant
                    </h4>
                    {'description' in caseStudy.beforeState && (caseStudy.beforeState as { description?: string }).description && (
                      <p className="text-[#334139] text-sm mb-4">
                        {(caseStudy.beforeState as { description?: string }).description}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {caseStudy.beforeState.painPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                          <span className="text-red-400 mt-1">✗</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* INTERVENTION */}
                  <div className="bg-[#F8FAF9] rounded-xl p-6 border border-[#E2E8E5]">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-breton-emerald uppercase tracking-wide mb-4">
                      <Wrench className="h-4 w-4" />
                      Notre intervention
                    </h4>
                    <p className="text-[#334139] text-sm mb-4">
                      {caseStudy.intervention.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {caseStudy.intervention.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334139]">
                          <CheckCircle className="h-4 w-4 text-breton-emerald shrink-0 mt-0.5" />
                          {action}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.intervention.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 bg-breton-emerald/10 text-breton-emerald text-xs font-medium rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* APRÈS */}
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-700 uppercase tracking-wide mb-4">
                      <TrendingUp className="h-4 w-4" />
                      Après
                    </h4>
                    {'description' in caseStudy.afterState && (caseStudy.afterState as { description?: string }).description && (
                      <p className="text-[#334139] text-sm mb-4">
                        {(caseStudy.afterState as { description?: string }).description}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {caseStudy.afterState.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                          <span className="text-emerald-500 mt-1">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Témoignage */}
                <div className="mt-8 bg-breton-emerald rounded-xl p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-[#74C69D]/30 shrink-0" />
                    <div>
                      <blockquote className="text-white text-lg leading-relaxed mb-4">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#74C69D]/20 flex items-center justify-center">
                          <span className="text-[#74C69D] font-bold">
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

                {/* Lien vers la page détail */}
                <div className="mt-6 text-right">
                  <Link
                    href={`/cas-clients/${caseStudy.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-breton-emerald hover:text-breton-moss transition-colors"
                  >
                    Voir le cas complet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Séparateur */}
                {index < CASE_STUDIES.length - 1 && (
                  <div className="mt-16 border-b border-[#E2E8E5]" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Votre situation ressemble à l&apos;une de ces problématiques ?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Faites le point sur votre maturité data en 3 minutes et découvrez les projets adaptés à
            votre contexte.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-breton-emerald hover:bg-white/90 h-13 px-8 text-base font-semibold"
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
              className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base"
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
