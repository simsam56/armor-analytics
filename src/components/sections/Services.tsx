'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Database,
  BarChart3,
  Brain,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Zap,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES, getCalendlyUrl } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Database,
  BarChart3,
  Brain,
  GraduationCap,
  Zap,
  RefreshCw,
};

interface ServicesProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Services({ showLink = true, detailed = false }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="offres" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Quatre façons de travailler avec balise-ia
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Vous pouvez démarrer par un audit, ou avancer directement sur un chantier prioritaire.
          </p>
        </div>

        {/* Grille 2×2 */}
        <motion.div
          ref={ref}
          className={`mt-16 grid gap-8 ${detailed ? 'lg:grid-cols-2' : 'md:grid-cols-2'}`}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`group relative rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg ${
                  service.isEntryPoint
                    ? 'border-breton-emerald/30 bg-breton-emerald/[0.02]'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-breton-emerald/10">
                    {Icon && <Icon className="h-5 w-5 text-breton-emerald" />}
                  </div>
                  {service.isEntryPoint && (
                    <span className="inline-flex items-center rounded-full bg-breton-emerald/10 px-3 py-1 text-xs font-medium text-breton-emerald">
                      Point d&apos;entrée recommandé
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-breton-moss">{service.tagline}</p>

                {detailed ? (
                  <DetailedContent service={service} />
                ) : (
                  <CompactContent service={service} />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {showLink && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild className="border-slate-300">
              <Link href="/services" className="gap-2">
                Voir le détail des offres
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function CompactContent({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="mt-5 space-y-5">
      <p className="text-slate-600 leading-relaxed">{service.description}</p>

      <div>
        <p className="text-sm font-semibold text-slate-900 mb-3">Livrables</p>
        <ul className="space-y-2">
          {service.deliverables.map((deliverable, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
              <span className="text-breton-emerald mt-0.5 shrink-0">→</span>
              {deliverable}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-slate-100">
        <p className="text-sm text-slate-500">
          Délai indicatif : <span className="font-medium text-slate-700">{service.duration}</span>
        </p>
      </div>

      <Button asChild className="w-full bg-breton-navy hover:bg-breton-slate">
        <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
          {service.cta}
        </a>
      </Button>
    </div>
  );
}

function DetailedContent({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="mt-5 space-y-4">
      <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>

      <div className="rounded-lg bg-slate-50 p-3">
        <p className="text-sm text-slate-600 italic">{service.forWho}</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Ce que vous gagnez</h4>
        <ul className="space-y-1.5">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-breton-moss mt-0.5 shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Ce que vous recevez</h4>
        <ul className="space-y-1.5">
          {(service.concreteDeliverables || []).map((deliverable, idx) => (
            <li key={idx} className="text-sm flex items-start gap-2">
              <span className="text-breton-moss mt-0.5 shrink-0">→</span>
              <span>
                <span className="text-slate-700">{deliverable.item}</span>
                <span className="text-slate-400 ml-1">({deliverable.format})</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-slate-100 space-y-1">
        <p className="text-sm text-slate-600">
          Durée : <span className="font-medium text-slate-900">{service.duration}</span>
        </p>
        <p className="text-sm font-medium text-slate-900">{service.priceRange}</p>
      </div>

      <Button asChild className="w-full" variant={service.isEntryPoint ? 'default' : 'outline'}>
        <a
          href="https://calendly.com/balise-ia/diagnostic"
          target="_blank"
          rel="noopener noreferrer"
        >
          {service.cta}
        </a>
      </Button>
    </div>
  );
}
