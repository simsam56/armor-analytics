'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Factory, Wrench, MapPin } from 'lucide-react';
import { sectionStagger, sectionChild, cardReveal } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

const TRUST_BADGES = [
  {
    icon: Factory,
    label: '7 ans en industrie navale',
  },
  {
    icon: Wrench,
    label: 'Planning, achats, logistique',
  },
  {
    icon: MapPin,
    label: 'Basé à Lorient, interventions sur site',
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
      id="pourquoi-moi"
      className="bg-breton-sand py-[80px] sm:py-[110px]"
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
                alt="Simon Hingant, fondateur balise-ia, ancien superviseur de production navale"
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
              Pourquoi moi
            </motion.p>

            {/* Title */}
            <motion.h2
              variants={child}
              className="font-serif text-[26px] lg:text-[38px] leading-[1.2] text-breton-navy mb-6"
            >
              Je ne suis pas un consultant IA qui découvre l&apos;industrie.
            </motion.h2>

            {/* Body */}
            <motion.div variants={child} className="space-y-4 text-breton-slate leading-relaxed">
              <p>
                J&apos;ai passé 7 ans sur le terrain — supervision de construction de frégates
                de défense chez Naval Group, planification de production, achats, logistique.
                J&apos;ai fait tourner des plannings à la main, géré des retards fournisseurs
                à 4h du matin, et consolidé des Excel que personne d&apos;autre ne comprenait.
              </p>
              <p>
                Aujourd&apos;hui je construis les outils que j&apos;aurais voulu avoir à l&apos;époque.
              </p>
              <p className="font-medium text-breton-navy">
                Ce que ça change pour vous : je n&apos;ai pas besoin qu&apos;on m&apos;explique
                ce qu&apos;est un ordre de fabrication, un TRS ou un aléa de ligne. Je comprends
                votre métier avant de parler technologie.
              </p>
            </motion.div>

            {/* Name & role */}
            <motion.div variants={child} className="mt-6">
              <p className="text-base font-semibold text-breton-navy">Simon Hingant</p>
              <p className="text-sm text-breton-granite mt-0.5">
                Fondateur, BALISE IA · Lorient
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={child}
              className="flex flex-wrap gap-2.5 mt-7"
              role="list"
              aria-label="Expérience terrain"
            >
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  role="listitem"
                  className="bg-white/60 border border-breton-sand px-4 py-2 rounded-xl text-xs text-breton-slate flex items-center gap-1.5 hover:border-breton-emerald/20 hover:bg-white transition-colors"
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
