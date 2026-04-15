'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sectionStagger, sectionChild, cardReveal } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

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
      id="a-propos"
      className="bg-breton-foam py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={inViewRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center"
        >
          {/* Left column — Photo */}
          <motion.div
            variants={card}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              style={{ y: parallaxY }}
              className="rounded-2xl h-[300px] lg:h-[400px] hover:scale-[1.02] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden relative"
            >
              <Image
                src="/simon-ordinateur.jpg"
                alt="Simon Hingant, fondateur balise-ia"
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
            <motion.p
              variants={child}
              className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-4"
            >
              À propos de balise-ia
            </motion.p>

            <motion.h2
              variants={child}
              className="font-sans text-[28px] lg:text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-breton-navy mb-5"
            >
              7 ans de terrain industriel. Puis la data.
            </motion.h2>

            <motion.div variants={child} className="space-y-4 text-breton-slate leading-relaxed">
              <p>
                Ingénieur en génie des systèmes industriels, j&apos;ai travaillé 7 ans
                dans l&apos;industrie (2017–2024) — chargé d&apos;affaires, responsable technique
                d&apos;exécution. Je connais le terrain : plannings, achats, logistique, production.
              </p>
              <p>
                En 2024, je me suis formé à la data science et à l&apos;intelligence artificielle.
                En 2025, j&apos;ai créé balise-ia pour aider les PME industrielles bretonnes
                à piloter leur production autrement.
              </p>
            </motion.div>

            <motion.div variants={child} className="mt-6">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-breton-emerald hover:underline"
              >
                Découvrir notre histoire
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
