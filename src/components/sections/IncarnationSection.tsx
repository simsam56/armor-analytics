'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Flag, Lock, MapPin } from 'lucide-react';
import { sectionStagger, sectionChild, cardReveal } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

const TRUST_BADGES = [
  {
    icon: Flag,
    label: 'Données hébergées en France',
  },
  {
    icon: Lock,
    label: 'NDA systématique',
  },
  {
    icon: MapPin,
    label: 'Interventions sur site',
  },
] as const;

export function IncarnationSection() {
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-20, 20],
  );

  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;
  const card = prefersReducedMotion ? noMotion : cardReveal;

  return (
    <section
      ref={sectionRef}
      id="qui-sommes-nous"
      className="bg-white py-[80px] sm:py-[110px]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={inViewRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-[72px] items-center"
        >
          {/* Left column — Photo */}
          <motion.div
            variants={card}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              style={{ y: parallaxY }}
              className="rounded-[28px] h-[300px] lg:h-[440px] hover:scale-[1.02] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden relative"
            >
              <Image
                src="/simon-ordinateur.jpg"
                alt="Simon Hingant présentant un tableau de bord data à un client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          </motion.div>

          {/* Right column — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Eyebrow */}
            <motion.p
              variants={child}
              className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-6"
            >
              Qui sommes-nous
            </motion.p>

            {/* Quote */}
            <motion.blockquote variants={child} className="relative pl-7 mb-7">
              <span
                className="absolute left-0 top-1 bottom-1 w-[3px] bg-gradient-to-b from-breton-emerald to-breton-copper-light rounded-full"
                aria-hidden="true"
              />
              <p className="font-serif text-[26px] lg:text-[34px] leading-[1.35] text-breton-navy italic">
                On ne vend pas de la technologie. On simplifie le quotidien des équipes qui font
                tourner les PME bretonnes.
              </p>
            </motion.blockquote>

            {/* Name & role */}
            <motion.div variants={child}>
              <p className="text-base font-semibold text-breton-navy">Simon Hingant</p>
              <p className="text-sm text-breton-granite mt-0.5">
                Fondateur, balise-ia · Lorient
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={child}
              className="flex flex-wrap gap-2.5 mt-7"
              role="list"
              aria-label="Garanties"
            >
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="bg-breton-foam border border-breton-sand px-4 py-2 rounded-xl text-xs text-breton-slate flex items-center gap-1.5 hover:border-breton-emerald/20 hover:bg-breton-emerald/[0.03] transition-colors"
                >
                  <Icon size={14} className="text-breton-emerald shrink-0" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
