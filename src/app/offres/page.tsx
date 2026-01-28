import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  Zap,
  Brain,
  Clock,
  Euro,
  Check,
  Calendar,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ContactSection } from '@/components/sections';
import { SERVICES_V5 } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Offres IA & Automatisation pour PME | Balise IA Bretagne',
  description:
    "Diagnostic IA, automatisation et intelligence artificielle pour PME bretonnes. Tarifs transparents de 2k€ à 40k€. Résultats mesurables garantis. Basés à Lorient.",
  openGraph: {
    title: 'Offres IA & Automatisation pour PME | Balise IA Bretagne',
    description:
      "Diagnostic IA, automatisation et intelligence artificielle pour PME. Tarifs transparents, résultats mesurables.",
  },
  keywords: [
    'offre IA PME Bretagne',
    'diagnostic intelligence artificielle',
    'automatisation PME',
    'tarif IA entreprise',
    'consultant IA Lorient',
    'consultant IA Rennes',
  ],
};

const ICONS = {
  Search,
  Zap,
  Brain,
};

export default function OffresPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Offres IA & automatisation pour PME en Bretagne
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Une approche progressive en 3 étapes. Chaque phase apporte de la valeur.
                Vous décidez quand passer à la suivante.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5" />
                    Diagnostic gratuit – 30 min
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 border-slate-600 text-white hover:bg-slate-800">
                  <Link href="/cas-usage">
                    Voir les cas d'usage
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 Offres détaillées */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES_V5.map((service, index) => {
              const Icon = ICONS[service.icon as keyof typeof ICONS] || Search;
              return (
                <FadeIn key={service.id} direction="up" delay={index * 100}>
                  <OfferCard service={service} Icon={Icon} index={index} />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi Balise IA */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Pourquoi choisir Balise IA ?
              </h2>
              <p className="mt-3 text-slate-600">
                Un collectif de spécialistes seniors, pas une ESN avec des juniors.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Interlocuteur unique</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Vous travaillez avec les experts qui réalisent le projet. Pas de commerciaux, pas de turnover.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900">ROI garanti</h3>
                <p className="mt-2 text-sm text-slate-600">
                  On définit des indicateurs concrets avant de démarrer. Chaque projet fait l'objet d'un bilan chiffré.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <FileText className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Tarifs transparents</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Devis détaillé avant de démarrer. Pas de surprise. Facturation à l'étape validée.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Questions fréquentes
            </h2>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn direction="up" delay={100}>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900">On n'a pas de service IT, c'est un problème ?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Non. La majorité de nos clients n'ont pas de DSI. On s'adapte : hébergement cloud simple, documentation claire, formation de vos équipes.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900">Quels sont les prérequis ?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Des données (même dans Excel), un sponsor interne, et 2-3 heures de disponibilité. On ne demande pas de cahier des charges.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900">Vous intervenez où ?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Basés à Lorient, on intervient sur site dans toute la Bretagne (Rennes, Vannes, Quimper, Brest...). Le reste se fait à distance.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={400}>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/contact" className="gap-2">
                  Toutes les questions
                  <ArrowRight className="h-4 w-4" />
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

interface OfferCardProps {
  service: (typeof SERVICES_V5)[0];
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
}

function OfferCard({ service, Icon, index }: OfferCardProps) {
  const stepColors = [
    'bg-blue-600',
    'bg-emerald-600',
    'bg-purple-600',
  ];

  return (
    <div className="relative">
      {/* Step indicator */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stepColors[index]} text-white`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <span className="text-sm font-medium text-slate-500">Étape {service.step}</span>
          <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Description */}
        <div>
          <p className="text-lg text-blue-600 font-medium mb-3">{service.tagline}</p>
          <p className="text-slate-600 mb-6">{service.description}</p>
          <p className="text-sm text-slate-500 italic mb-6">{service.forWho}</p>

          {/* Ce que vous obtenez */}
          <h3 className="font-semibold text-slate-900 mb-3">Ce que vous obtenez</h3>
          <ul className="space-y-2 mb-6">
            {service.whatYouGet.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Livrables et tarifs */}
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Livrables</h3>
          <ul className="space-y-2 mb-6">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <FileText className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Badges durée/prix */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
              <Clock className="h-4 w-4 text-slate-400" />
              {service.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
              <Euro className="h-4 w-4 text-slate-400" />
              {service.priceRange}
            </span>
          </div>

          {service.note && (
            <p className="text-xs text-slate-500 italic mb-4">{service.note}</p>
          )}

          <Button asChild className="w-full gap-2">
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              {service.cta}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
