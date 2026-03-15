'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Zap,
  BarChart3,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl, siteConfig } from '@/lib/site-config';
import { HeroIllustration } from '@/components/visuals';

interface HeroV3Props {
  variant?: 'home' | 'page';
  title?: string;
  subtitle?: string;
}

export function HeroV3({ variant = 'home', title, subtitle }: HeroV3Props) {
  const isHome = variant === 'home';

  const defaultTitle = 'On supprime vos ressaisies\net votre reporting manuel';
  const defaultSubtitle =
    'Collectif data spécialisé PME industrielles. On automatise, on fiabilise, on vous donne les tableaux de bord pour piloter.';

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Location badge */}
            {isHome && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/80">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Basés à Lorient – {siteConfig.location.region}</span>
              </div>
            )}

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl whitespace-pre-line leading-tight">
              {displayTitle}
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {displaySubtitle}
            </p>

            {/* Stats row */}
            {isHome && (
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <StatCard icon={Zap} value="8h → 30min" label="saisie commande" highlight />
                <StatCard icon={BarChart3} value="-40%" label="erreurs" />
                <StatCard icon={TrendingUp} value="+35%" label="productivité" />
                <StatCard icon={Shield} value="ROI" label="démontrable" />
              </div>
            )}

            {/* CTAs */}
            {isHome && (
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button size="lg" asChild className="w-full sm:w-auto shadow-lg shadow-blue-600/20">
                  <a
                    href={getCalendlyUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Diagnostic gratuit – 30 min
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/contact" className="gap-2">
                    Nous contacter
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            )}

            {/* Trust signals */}
            {isHome && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 lg:justify-start">
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
            )}
          </div>

          {/* Right column - Illustration */}
          {isHome && (
            <div className="relative">
              {/* Main illustration */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 ring-1 ring-slate-200/50">
                <HeroIllustration className="w-full" />
              </div>

              {/* Floating card overlay */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-8 bg-white rounded-xl shadow-xl p-4 ring-1 ring-slate-100 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Saisie commande</p>
                    <p className="font-semibold text-slate-900">
                      <span className="text-red-500 line-through text-sm">8 min</span>
                      <span className="mx-1">→</span>
                      <span className="text-green-600">30 sec</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Second floating card */}
              <div className="absolute -top-2 -right-2 sm:top-4 sm:-right-4 bg-white rounded-xl shadow-xl p-3 ring-1 ring-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Reporting</p>
                    <p className="font-semibold text-green-600 text-sm">Temps réel</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-slate-100 opacity-40 blur-3xl" />
    </section>
  );
}

// Stat card component
interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  highlight?: boolean;
}

function StatCard({ icon: Icon, value, label, highlight = false }: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-3 ${
        highlight
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
          : 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-100'
      }`}
    >
      <Icon className={`h-5 w-5 mb-1 ${highlight ? 'text-blue-100' : 'text-blue-600'}`} />
      <p className={`text-lg font-bold ${highlight ? 'text-white' : 'text-slate-900'}`}>{value}</p>
      <p className={`text-xs ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>{label}</p>
    </div>
  );
}
