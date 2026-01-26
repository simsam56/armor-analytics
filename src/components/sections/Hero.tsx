import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCtas?: boolean;
}

export function Hero({
  title = 'Vos données sont éparpillées.\nVos décisions méritent mieux.',
  subtitle = 'Armor Analytics structure, automatise et valorise les données des PME industrielles bretonnes. Audit, pipelines de données, POC IA — une approche pragmatique, des résultats concrets.',
  showCtas = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {SITE_CONFIG.tagline}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl whitespace-pre-line">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>

          {showCtas && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href={`https://calendly.com/${SITE_CONFIG.calendly}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact" className="gap-2">
                  Demander un audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
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
