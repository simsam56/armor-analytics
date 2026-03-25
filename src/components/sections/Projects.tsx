'use client';

import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS } from '@/lib/constants';
import { staggerContainer, cardReveal } from '@/lib/animations';

// Metric highlights derived from PROJECTS results
const PROJECT_METRICS: Record<string, { value: string; label: string }> = {
  'commandes-agroalimentaire': { value: '−80%', label: 'de temps de traitement' },
  'pilotage-metallurgie': { value: '4h/sem', label: 'gagnées sur le reporting' },
  'dechets-plasturgie': { value: '−25%', label: 'de coûts de collecte' },
};

interface ProjectsProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Projects({ showLink = true }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const displayed = PROJECTS.slice(0, 3);

  return (
    <section id="realisations" className="bg-breton-foam py-[80px] sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
              Réalisations
            </p>
            <h2 className="font-serif text-[32px] sm:text-[50px] leading-[1.08] font-normal text-breton-navy tracking-[-0.025em]">
              Cas clients
            </h2>
            <p className="text-[17px] text-breton-slate leading-relaxed mt-4">
              Des résultats mesurés, pas des promesses.
            </p>
          </div>
          {showLink && (
            <Link
              href="/cas-clients"
              className="text-sm text-breton-navy font-semibold whitespace-nowrap flex-shrink-0 hover:text-breton-emerald transition-colors duration-200"
            >
              Tout voir →
            </Link>
          )}
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? undefined : 'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14"
        >
          {displayed.map((project) => {
            const metric = PROJECT_METRICS[project.id];
            return (
              <motion.article
                key={project.id}
                variants={shouldReduceMotion ? undefined : cardReveal}
                className="bg-white border border-breton-sand rounded-[22px] overflow-hidden
                           hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)]
                           transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {/* Image placeholder */}
                <div className="h-[190px] bg-gradient-to-br from-breton-sand to-[#D4C4A8] flex items-center justify-center">
                  <span className="text-[13px] text-breton-granite font-medium">[Photo terrain]</span>
                </div>

                {/* Body */}
                <div className="p-7">
                  <p className="text-[11px] text-breton-emerald font-semibold uppercase tracking-[0.08em] mb-2">
                    {project.sector}
                  </p>
                  <h3 className="font-serif text-[19px] text-breton-navy font-normal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-breton-slate leading-relaxed">
                    {project.context}
                  </p>

                  {/* Metric highlight */}
                  {metric && (
                    <div className="mt-4 pt-3.5 border-t border-breton-sand flex items-baseline gap-2">
                      <span className="font-serif text-[28px] text-breton-navy leading-none">
                        {metric.value}
                      </span>
                      <span className="text-xs text-breton-granite">{metric.label}</span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
