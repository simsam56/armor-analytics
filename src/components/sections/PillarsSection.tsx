'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Search, Compass, Users, type LucideIcon } from 'lucide-react';
import { sectionStagger, sectionChild, cardReveal, staggerContainer } from '@/lib/animations';

interface PillarCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: PillarCard[] = [
  {
    icon: Search,
    title: 'Le Repérage',
    description:
      'On cartographie vos process réels, vos irritants et vos opportunités IA. Pas de devinette, du terrain.',
  },
  {
    icon: Compass,
    title: 'Le Cap',
    description:
      'On déploie les solutions qui marchent, on mesure les gains, on itère chaque mois avec vous.',
  },
  {
    icon: Users,
    title: `L\u2019Équipage`,
    description:
      `On forme vos équipes à l\u2019IA par la pratique. Pour que la dynamique continue sans nous.`,
  },
];

export function PillarsSection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.15 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.15 });

  return (
    <section className="bg-breton-foam py-16 sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          variants={prefersReducedMotion ? undefined : sectionStagger}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : headerInView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={prefersReducedMotion ? undefined : sectionChild}
            className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em]"
          >
            Notre approche
          </motion.p>
          <motion.h2
            variants={prefersReducedMotion ? undefined : sectionChild}
            className="font-serif text-[36px] sm:text-[56px] leading-[1.06] font-normal text-breton-navy tracking-[-0.025em] max-w-[600px] mt-3"
          >
            L&apos;IA marche quand l&apos;entreprise se connaît.
          </motion.h2>
          <motion.p
            variants={prefersReducedMotion ? undefined : sectionChild}
            className="text-lg text-breton-slate leading-relaxed max-w-[480px] mt-4"
          >
            Pas un projet technique. Un chantier organisationnel. On vous accompagne de la
            cartographie à l&apos;autonomie.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 sm:mt-16"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={prefersReducedMotion ? undefined : cardsInView ? 'visible' : 'hidden'}
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={prefersReducedMotion ? undefined : cardReveal}
              className={[
                'group',
                'bg-white border border-breton-sand rounded-[22px] p-6 sm:p-10',
                'relative overflow-hidden',
                'transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                'hover:-translate-y-[6px]',
                'hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)]',
                'hover:border-transparent',
                'before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]',
                'before:bg-gradient-to-r before:from-breton-emerald before:to-breton-copper-light',
                'before:opacity-0 hover:before:opacity-100',
                'before:transition-opacity before:duration-[450ms]',
              ].join(' ')}
            >
              {/* Icon container */}
              <div
                className={[
                  'w-[52px] h-[52px] bg-breton-foam rounded-[16px]',
                  'flex items-center justify-center mb-5 sm:mb-6',
                  'transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                  'group-hover:bg-breton-emerald/8 group-hover:scale-105',
                ].join(' ')}
              >
                <pillar.icon className="h-6 w-6 text-breton-emerald" />
              </div>

              {/* Text */}
              <p className="font-serif text-[26px] font-normal text-breton-navy mb-2.5">
                {pillar.title}
              </p>
              <p className="text-[15px] text-breton-slate leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
