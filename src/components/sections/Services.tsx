'use client';

import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
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
  Compass,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES, getCalendlyUrl } from '@/lib/constants';
import {
  sectionStagger,
  sectionChild,
  staggerContainer,
  cardReveal,
} from '@/lib/animations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Database,
  BarChart3,
  Brain,
  GraduationCap,
  Zap,
  RefreshCw,
  Compass,
  Users,
};

interface ServicesProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Services({ showLink = true, detailed = false }: ServicesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.1 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const shouldReduce = useReducedMotion();

  return (
    <section id="offres" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="max-w-2xl"
          variants={shouldReduce ? undefined : sectionStagger}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={shouldReduce ? undefined : sectionChild}
            className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-4"
          >
            Nos offres
          </motion.p>
          <motion.h2
            variants={shouldReduce ? undefined : sectionChild}
            className="font-serif text-[36px] sm:text-[56px] leading-[1.06] font-normal text-breton-navy tracking-[-0.025em]"
          >
            Le Repérage. Le Cap. L&apos;Équipage.
          </motion.h2>
          <motion.p
            variants={shouldReduce ? undefined : sectionChild}
            className="text-lg text-breton-slate leading-relaxed mt-4"
          >
            Trois façons de travailler avec nous, une seule logique : que l&apos;IA serve vraiment
            votre entreprise.
          </motion.p>
        </motion.div>

        {/* Grille 2×2 */}
        <motion.div
          ref={gridRef}
          className={`mt-16 grid gap-8 ${detailed ? 'lg:grid-cols-3' : 'md:grid-cols-3'}`}
          variants={shouldReduce ? undefined : staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                variants={shouldReduce ? undefined : cardReveal}
                className={`group relative cursor-pointer rounded-[22px] border p-8 sm:p-10
                  transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)] hover:border-breton-emerald/20
                  ${
                    service.isEntryPoint
                      ? 'border-[1.5px] border-breton-emerald bg-breton-emerald/[0.01]'
                      : 'border-breton-sand bg-white'
                  }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-breton-foam">
                    {Icon && <Icon className="h-5 w-5 text-breton-emerald" />}
                  </div>
                  {service.isEntryPoint && (
                    <span className="inline-flex items-center rounded-full bg-breton-emerald/8 px-3 py-1 text-xs font-medium text-breton-emerald">
                      Point d&apos;entrée recommandé
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-[26px] font-normal text-breton-navy">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-breton-emerald">{service.tagline}</p>

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
      <p className="text-[15px] text-slate-600 leading-relaxed">{service.description}</p>

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

      <div className="flex items-center justify-between pt-5 border-t border-breton-sand">
        <p className="text-sm text-slate-500">
          Délai indicatif : <span className="font-medium text-slate-700">{service.duration}</span>
        </p>
      </div>

      <Button asChild className="w-full bg-breton-navy hover:bg-breton-slate">
        <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
          <span>{service.cta.replace('→', '').trim()}</span>
          <span className="ml-1 group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
            →
          </span>
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

      <div className="pt-3 border-t border-breton-sand">
        <p className="text-sm text-slate-600">
          Durée : <span className="font-medium text-slate-900">{service.duration}</span>
        </p>
      </div>

      <Button asChild className="w-full" variant={service.isEntryPoint ? 'default' : 'outline'}>
        <a
          href="https://calendly.com/balise-ia/diagnostic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{service.cta.replace('→', '').trim()}</span>
          <span className="ml-1 group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
            →
          </span>
        </a>
      </Button>
    </div>
  );
}
