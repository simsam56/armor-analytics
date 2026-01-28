'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, CheckCircle, Zap, Database, BarChart3, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { getCalendlyUrl, siteConfig } from '@/lib/site-config';

export function HeroV5() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Location badge */}
        <FadeIn direction="up" delay={0}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 ring-1 ring-blue-500/20">
              <MapPin className="h-4 w-4" />
              <span>Basés à {siteConfig.location.city} – Interventions à {siteConfig.location.secondaryCity} et en {siteConfig.location.region}</span>
            </div>
          </div>
        </FadeIn>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* H1 SEO optimisé */}
          <FadeIn direction="up" delay={100}>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Intelligence artificielle pour les PME en Bretagne
            </h1>
          </FadeIn>

          {/* Sous-titre SEO */}
          <FadeIn direction="up" delay={200}>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Automatisation, pilotage par la donnée et IA pragmatique pour dirigeants de PME
              à Lorient, Rennes et en Bretagne.
            </p>
          </FadeIn>

          {/* 3 bénéfices concrets */}
          <FadeIn direction="up" delay={300}>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              <BenefitCard
                icon={Zap}
                text="Supprimer les tâches manuelles et ressaisies"
              />
              <BenefitCard
                icon={Database}
                text="Exploiter enfin vos données existantes"
              />
              <BenefitCard
                icon={BarChart3}
                text="Décider plus vite avec des indicateurs fiables"
              />
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn direction="up" delay={400}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-shadow w-full sm:w-auto">
                <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Diagnostic IA gratuit – 30 min
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/5 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                <Link href="/cas-usage" className="gap-2">
                  Voir des cas concrets
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Réassurance */}
          <FadeIn direction="up" delay={500}>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Sans engagement
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                NDA possible
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

function BenefitCard({ icon: Icon, text }: BenefitCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 backdrop-blur-sm p-4 ring-1 ring-white/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="text-sm text-slate-200 text-left">{text}</p>
    </div>
  );
}
