'use client';

import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Bot, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { sectionStagger, sectionChild, staggerContainer, cardReveal } from '@/lib/animations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  BarChart3,
};

interface ServicesProps {
  showLink?: boolean;
}

export function Services({ showLink = true }: ServicesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.1 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const shouldReduce = useReducedMotion();

  return (
    <section id="offres" className="py-16 sm:py-[110px] bg-white">
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
            Nos expertises
          </motion.p>
          <motion.h2
            variants={shouldReduce ? undefined : sectionChild}
            className="font-serif text-[32px] sm:text-[50px] leading-[1.08] font-normal text-breton-navy tracking-[-0.025em]"
          >
            Deux piliers, une seule logique
          </motion.h2>
          <motion.p
            variants={shouldReduce ? undefined : sectionChild}
            className="text-[17px] text-breton-slate leading-relaxed mt-4"
          >
            IA &amp; automatisation ou data &amp; reporting — des solutions concrètes, mesurées
            avant et après, au service de votre activité.
          </motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="mt-16 grid gap-8 md:grid-cols-2"
          variants={shouldReduce ? undefined : staggerContainer}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={shouldReduce ? undefined : cardReveal}
                className="group relative rounded-[22px] border border-breton-sand bg-white p-8 sm:p-10
                  transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)] hover:border-breton-emerald/20"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-breton-foam mb-5">
                  {Icon && <Icon className="h-5 w-5 text-breton-emerald" />}
                </div>

                {/* Title + tagline */}
                <h3 className="font-serif text-[23px] font-normal text-breton-navy">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-breton-emerald">{service.tagline}</p>

                {/* Description */}
                <p className="mt-4 text-[15px] text-breton-slate leading-relaxed">
                  {service.description}
                </p>

                {/* Use cases */}
                <ul className="mt-5 space-y-2">
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-breton-slate">
                      <span className="text-breton-emerald mt-0.5 shrink-0">→</span>
                      {useCase}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full bg-breton-foam px-3 py-1 text-xs font-medium text-breton-slate border border-breton-sand"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Button asChild variant="outline" className="border-breton-sand hover:border-breton-emerald/40 hover:bg-breton-foam">
                    <Link href={service.href} className="gap-2">
                      Découvrir
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {showLink && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild className="border-breton-sand">
              <Link href="/contact" className="gap-2">
                Discuter de votre projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
