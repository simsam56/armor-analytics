'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Database,
  BarChart3,
  RefreshCw,
  Brain,
  ArrowRight,
  CheckCircle,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Database,
  BarChart3,
  RefreshCw,
  Brain,
  Zap,
};

interface ServicesProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Services({ showLink = true, detailed = false }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const numberedServices = SERVICES.filter((s) => !s.isTransversal);
  const transversalService = SERVICES.find((s) => s.isTransversal);

  return (
    <section id="offres" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Notre approche
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un parcours en 4 étapes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            On comprend, on structure, on visualise, on pilote. Chaque étape apporte de la valeur.
            Vous avancez à votre rythme.
          </p>
        </div>

        {/* 4 offres numérotées */}
        <motion.div
          ref={ref}
          className={`mt-16 grid gap-6 ${detailed ? 'lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'}`}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {numberedServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-xl hover:border-breton-emerald/40 ${
                  service.isEntryPoint
                    ? 'border-breton-emerald/20 bg-breton-emerald/[0.02] ring-1 ring-breton-emerald/10'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10">
                    {Icon && <Icon className="h-6 w-6 text-breton-emerald" />}
                  </div>
                  {service.step && (
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Étape {service.step}
                    </span>
                  )}
                </div>

                {/* Entry point badge */}
                {service.isEntryPoint && (
                  <div className="mb-4 inline-flex items-center rounded-full bg-breton-emerald px-3 py-1 text-xs font-medium text-white">
                    Point d&apos;entrée recommandé
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-breton-moss">{service.tagline}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {detailed ? (
                  <DetailedContent service={service} />
                ) : (
                  <CompactContent service={service} />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Module IA transversal */}
        {transversalService && (
          <TransversalIASection service={transversalService} detailed={detailed} />
        )}

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

function TransversalIASection({
  service,
  detailed,
}: {
  service: (typeof SERVICES)[0];
  detailed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const useCases =
    'useCases' in service
      ? (service.useCases as Array<{ stage: string; example: string; icon: string }>)
      : [];

  return (
    <motion.div
      ref={ref}
      className="mt-12 rounded-2xl border border-breton-accent/20 bg-gradient-to-br from-breton-accent/[0.04] to-breton-accent/[0.01] p-8 sm:p-10"
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-accent/10">
          <Brain className="h-6 w-6 text-breton-accent" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <span className="inline-flex items-center rounded-full bg-breton-accent/10 px-3 py-1 text-xs font-medium text-breton-accent">
              Transversal
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-breton-accent">{service.tagline}</p>
        </div>
      </div>

      {/* Connected steps pipeline */}
      <div className="mb-8 flex items-center justify-center gap-0 overflow-x-auto py-2">
        {useCases.map((useCase, idx) => {
          const Icon = iconMap[useCase.icon as keyof typeof iconMap];
          return (
            <div key={useCase.stage} className="flex items-center shrink-0">
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-breton-accent/10 ring-2 ring-breton-accent/20">
                  {Icon && <Icon className="h-4 w-4 text-breton-accent" />}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-breton-accent whitespace-nowrap">
                  {useCase.stage}
                </span>
              </div>
              {idx < useCases.length - 1 && (
                <div className="w-8 sm:w-14 h-px bg-breton-accent/30 mx-1 sm:mx-2 -mt-4" />
              )}
            </div>
          );
        })}
      </div>

      {detailed ? (
        /* Detailed: left/right layout */
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: description + benefits + price */}
          <div className="space-y-5">
            <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Cas d&apos;usage concrets
              </h4>
              <ul className="space-y-1.5">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-breton-accent mt-0.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-breton-accent/10 space-y-2">
              <p className="text-sm font-medium text-slate-900">{service.priceRange}</p>
              {service.note && (
                <p className="text-xs text-slate-500 italic">{service.note}</p>
              )}
            </div>
          </div>

          {/* Right: use cases cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => {
              const Icon = iconMap[useCase.icon as keyof typeof iconMap];
              return (
                <div
                  key={useCase.stage}
                  className="rounded-xl bg-white border border-slate-200 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {Icon && <Icon className="h-4 w-4 text-breton-accent" />}
                    <span className="text-xs font-semibold uppercase tracking-wider text-breton-accent">
                      {useCase.stage}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{useCase.example}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Compact: description + benefits inline */
        <div>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-4">
            {service.description}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {service.benefits.slice(0, 4).map((benefit, idx) => (
              <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-breton-accent shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
          {service.note && (
            <p className="mt-4 text-xs text-slate-500 italic">{service.note}</p>
          )}
        </div>
      )}
    </motion.div>
  );
}

function CompactContent({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="mt-6 space-y-4">
      <ul className="space-y-2">
        {service.benefits.slice(0, 3).map((benefit, idx) => (
          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-breton-moss mt-0.5 shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-slate-100">
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-700">{service.duration}</span>
          <span className="mx-2 text-slate-300">·</span>
          {service.priceRange}
        </p>
      </div>
    </div>
  );
}

function DetailedContent({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="mt-6 space-y-5">
      {/* Pour qui */}
      <div className="rounded-lg bg-slate-50 p-3">
        <p className="text-sm text-slate-600 italic">{service.forWho}</p>
      </div>

      {/* Bénéfices */}
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

      {/* Livrables */}
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

      {/* Durée et prix */}
      <div className="pt-4 border-t border-slate-100 space-y-1">
        <p className="text-sm text-slate-600">
          Durée : <span className="font-medium text-slate-900">{service.duration}</span>
        </p>
        <p className="text-sm font-medium text-slate-900">{service.priceRange}</p>
        {service.note && <p className="text-xs text-slate-500 italic mt-1">{service.note}</p>}
      </div>

      {/* CTA */}
      <Button
        asChild
        className="w-full"
        variant={service.isEntryPoint ? 'default' : 'outline'}
      >
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
