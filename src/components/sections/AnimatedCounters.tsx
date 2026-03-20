'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// ---------- useCountUp hook ----------

function useCountUp(target: number, inView: boolean, duration = 2000): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return value;
}

// ---------- Individual counter cards ----------

function PercentCounter({ inView }: { inView: boolean }) {
  const count = useCountUp(80, inView);
  return (
    <div className="text-center">
      <p className="text-5xl sm:text-6xl font-bold text-breton-accent">{count}%</p>
      <p className="mt-3 text-sm text-white/60">de ressaisies éliminées</p>
    </div>
  );
}

function TimeCounter({ inView }: { inView: boolean }) {
  const count = useCountUp(8, inView);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setShowAfter(true), 2100);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div className="text-center">
      <p className="text-5xl sm:text-6xl font-bold text-breton-accent">
        {count} min{showAfter ? ' → 30 sec' : ''}
      </p>
      <p className="mt-3 text-sm text-white/60">saisie commande</p>
    </div>
  );
}

function RealtimeCounter({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <p className="text-5xl sm:text-6xl font-bold text-breton-accent">J+5 → Temps réel</p>
      <p className="mt-3 text-sm text-white/60">délai de reporting</p>
    </motion.div>
  );
}

function SavingsCounter({ inView }: { inView: boolean }) {
  const count = useCountUp(8280, inView);
  const formatted = count.toLocaleString('fr-FR');
  return (
    <div className="text-center">
      <p className="text-5xl sm:text-6xl font-bold text-breton-accent">{formatted}&nbsp;€</p>
      <p className="mt-3 text-sm text-white/60">économie annuelle type</p>
    </div>
  );
}

// ---------- Main section ----------

export function AnimatedCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const inView = isInView && !prefersReducedMotion;

  return (
    <section className="bg-breton-navy py-20 sm:py-24" id="resultats">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center"
          variants={prefersReducedMotion ? {} : fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Résultats
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Des résultats concrets</h2>
        </motion.div>

        {/* Counters grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={prefersReducedMotion ? {} : staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={prefersReducedMotion ? {} : fadeInUp}>
            <PercentCounter inView={inView} />
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : fadeInUp}>
            <TimeCounter inView={inView} />
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : fadeInUp}>
            <RealtimeCounter inView={inView} />
          </motion.div>
          <motion.div variants={prefersReducedMotion ? {} : fadeInUp}>
            <SavingsCounter inView={inView} />
          </motion.div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-14 text-center text-xs text-white/40"
          variants={prefersReducedMotion ? {} : fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Chaque projet fait l&apos;objet d&apos;un bilan chiffré avant/après.
        </motion.p>
      </div>
    </section>
  );
}
