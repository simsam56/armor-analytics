'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ClipboardCheck, Bot, BarChart3, ArrowRight } from 'lucide-react';
import { staggerContainer, cardReveal } from '@/lib/animations';

const EXPERTISES = [
  {
    icon: ClipboardCheck,
    title: 'Audit & Diagnostic',
    description:
      'On identifie vos 2-3 automatisations les plus rentables. 3 jours sur site, une roadmap claire.',
    href: '/audit-ia',
  },
  {
    icon: Bot,
    title: 'IA & Automatisation',
    description:
      'Agents IA, OCR, workflows branchés sur vos outils métier. Zéro ressaisie, zéro Excel.',
    href: '/ia',
  },
  {
    icon: BarChart3,
    title: 'Pilotage data',
    description:
      'Dashboards temps réel connectés à votre ERP/GPAO. Vos KPIs en un coup d\u2019œil.',
    href: '/data',
  },
];

export function ExpertisesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-breton-foam py-16 sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
          Nos expertises
        </p>
        <h2 className="font-serif text-[36px] sm:text-[56px] leading-[1.06] font-normal text-breton-navy tracking-[-0.025em] max-w-[600px]">
          Ce qu&apos;on déploie pour vous
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
        >
          {EXPERTISES.map((expertise) => (
            <motion.div
              key={expertise.title}
              variants={prefersReducedMotion ? undefined : cardReveal}
            >
              <Link
                href={expertise.href}
                className="group block bg-white border border-breton-sand rounded-[22px] p-6 sm:p-10
                  transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)] hover:border-transparent"
              >
                <div className="w-[52px] h-[52px] bg-breton-foam rounded-[16px] flex items-center justify-center mb-5 sm:mb-6
                  transition-all duration-[450ms] group-hover:bg-breton-emerald/8 group-hover:scale-105">
                  <expertise.icon className="h-6 w-6 text-breton-emerald" />
                </div>
                <p className="font-serif text-[26px] font-normal text-breton-navy mb-2.5">
                  {expertise.title}
                </p>
                <p className="text-[15px] text-breton-slate leading-relaxed mb-4">
                  {expertise.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-breton-copper group-hover:gap-2 transition-all">
                  Découvrir <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
