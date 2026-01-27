'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, CheckCircle, Clock, Shield, Zap, BarChart3, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { getCalendlyUrl, siteConfig } from '@/lib/site-config';

interface HeroV4Props {
  variant?: 'home' | 'page';
  title?: string;
  subtitle?: string;
}

export function HeroV4({ variant = 'home', title, subtitle }: HeroV4Props) {
  const isHome = variant === 'home';

  const defaultTitle = 'On supprime vos ressaisies et votre reporting manuel.';
  const defaultSubtitle =
    'Automatisation et données fiables pour piloter votre PME industrielle. Résultats mesurés en semaines.';

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* TODO: Remplacer par une vraie image d'environnement industriel */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%231e293b" width="1200" height="600"/><rect fill="%23334155" x="50" y="350" width="200" height="200" rx="4"/><rect fill="%23475569" x="80" y="380" width="60" height="80" rx="2"/><rect fill="%23475569" x="160" y="380" width="60" height="80" rx="2"/><rect fill="%23334155" x="300" y="300" width="250" height="250" rx="4"/><rect fill="%2360a5fa" opacity="0.3" x="320" y="320" width="80" height="60" rx="2"/><rect fill="%2360a5fa" opacity="0.3" x="420" y="320" width="100" height="40" rx="2"/><rect fill="%23334155" x="600" y="380" width="180" height="170" rx="4"/><rect fill="%23334155" x="820" y="320" width="300" height="230" rx="4"/><circle fill="%2322c55e" opacity="0.4" cx="900" cy="400" r="8"/><circle fill="%2322c55e" opacity="0.4" cx="950" cy="400" r="8"/></svg>')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="max-w-xl">
            <FadeIn direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-blue-500/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Basés à {siteConfig.location.city} – Interventions en {siteConfig.location.region}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                {title || defaultTitle}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                {subtitle || defaultSubtitle}
              </p>
            </FadeIn>

            {/* CTAs */}
            {isHome && (
              <FadeIn direction="up" delay={300}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild className="shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-shadow">
                    <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Calendar className="h-5 w-5" />
                      Diagnostic gratuit – 30 min
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                    <Link href="/projets" className="gap-2">
                      Voir des cas concrets
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            )}

            {/* Trust signals */}
            {isHome && (
              <FadeIn direction="up" delay={400}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sans engagement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-green-500" />
                    Réponse sous 48h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-green-500" />
                    NDA possible
                  </span>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Right column - Stats cards */}
          {isHome && (
            <div className="grid grid-cols-2 gap-4">
              <FadeIn direction="left" delay={200}>
                <StatCard
                  icon={Zap}
                  value="8min → 30s"
                  label="Saisie commande"
                  highlight
                />
              </FadeIn>
              <FadeIn direction="left" delay={300}>
                <StatCard
                  icon={BarChart3}
                  value="-80%"
                  label="Ressaisies"
                  isAnimated
                />
              </FadeIn>
              <FadeIn direction="left" delay={400}>
                <StatCard
                  icon={TrendingUp}
                  value="+35%"
                  label="Productivité"
                  isAnimated
                />
              </FadeIn>
              <FadeIn direction="left" delay={500}>
                <StatCard
                  icon={Clock}
                  value="4h"
                  label="Gagnées / semaine"
                  suffix="/sem"
                />
              </FadeIn>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  highlight?: boolean;
  isAnimated?: boolean;
  suffix?: string;
}

function StatCard({ icon: Icon, value, label, highlight = false, isAnimated = false }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl p-5 transition-transform hover:scale-[1.02] ${
        highlight
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30'
          : 'bg-white/10 backdrop-blur-sm text-white ring-1 ring-white/10'
      }`}
    >
      <Icon className={`h-6 w-6 mb-3 ${highlight ? 'text-blue-200' : 'text-blue-400'}`} />
      <p className={`text-2xl font-bold ${highlight ? 'text-white' : 'text-white'}`}>
        {isAnimated ? (
          <AnimatedCounter value={value} />
        ) : (
          value
        )}
      </p>
      <p className={`text-sm mt-1 ${highlight ? 'text-blue-100' : 'text-slate-400'}`}>{label}</p>
    </div>
  );
}
