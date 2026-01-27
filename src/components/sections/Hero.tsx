import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Clock, CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG, KEY_METRICS } from '@/lib/constants';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCtas?: boolean;
  showMetrics?: boolean;
  showLocation?: boolean;
  showTechProof?: boolean;
  variant?: 'home' | 'page';
}

export function Hero({
  title = 'Ressaisies, données éparpillées,\nreporting manuel ?',
  subtitle = 'On automatise, on fiabilise, on vous donne les tableaux de bord pour piloter.',
  showCtas = true,
  showMetrics = true,
  showLocation = true,
  showTechProof = true,
  variant = 'home',
}: HeroProps) {
  const isHome = variant === 'home';

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-blue-50 to-white ${isHome ? 'py-16 sm:py-24' : 'py-12 sm:py-16'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge localisation */}
          {showLocation && isHome && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>Basés à Lorient – Interventions en Bretagne</span>
            </div>
          )}

          <h1
            className={`font-bold tracking-tight text-gray-900 whitespace-pre-line ${isHome ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}
          >
            {title}
          </h1>

          <p
            className={`mt-6 leading-8 text-gray-600 ${isHome ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}`}
          >
            {subtitle}
          </p>

          {/* Métriques de preuve */}
          {showMetrics && isHome && (
            <div className="mt-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <p className="text-2xl font-bold text-blue-600">{KEY_METRICS.timesSaved}</p>
                  <p className="text-sm text-gray-600">{KEY_METRICS.timesSavedContext}</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <p className="text-2xl font-bold text-blue-600">{KEY_METRICS.errorReduction}</p>
                  <p className="text-sm text-gray-600">{KEY_METRICS.errorReductionContext}</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <p className="text-2xl font-bold text-blue-600">{KEY_METRICS.projectsDelivered}</p>
                  <p className="text-sm text-gray-600">{KEY_METRICS.projectsDeliveredContext}</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <p className="text-2xl font-bold text-blue-600">{KEY_METRICS.responseTime}</p>
                  <p className="text-sm text-gray-600">{KEY_METRICS.responseTimeContext}</p>
                </div>
              </div>
              {/* Lien vers méthodologie */}
              <p className="mt-3 text-center">
                <Link
                  href="#methodologie"
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Comment on mesure ces gains
                </Link>
              </p>
            </div>
          )}

          {/* Bloc preuve : stack technique et secteurs */}
          {showTechProof && isHome && (
            <div className="mt-8 rounded-xl bg-white/50 p-4 ring-1 ring-gray-200">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
                <span className="font-medium text-gray-700">On maîtrise :</span>
                <span>Sage • Cegid • EBP</span>
                <span>Excel • Power BI • Metabase</span>
                <span>Python • Make • n8n</span>
              </div>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
                <span>Agroalimentaire</span>
                <span>•</span>
                <span>Métallurgie</span>
                <span>•</span>
                <span>Plasturgie</span>
                <span>•</span>
                <span>Logistique</span>
              </div>
            </div>
          )}

          {/* CTAs */}
          {showCtas && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a
                  href={`https://calendly.com/${SITE_CONFIG.calendly}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Appel découverte gratuit – 30 min
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/contact" className="gap-2">
                  Demander un diagnostic
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}

          {/* Réassurance sous les CTAs */}
          {showCtas && isHome && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Sans engagement
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-green-500" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Confidentialité garantie
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-100 opacity-50 blur-3xl" />
    </section>
  );
}
