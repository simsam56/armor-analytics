'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;

  return (
    <section className="relative min-h-[85vh] flex items-center bg-breton-navy overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(26,107,74,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12 py-28 sm:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={child}
              className="text-sm font-semibold text-breton-emerald uppercase tracking-[0.15em] mb-6"
            >
              Agents IA m&eacute;tier &bull; PME industrielles
            </motion.p>

            <motion.h1
              variants={child}
              className="font-display text-[clamp(32px,5.5vw,64px)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
            >
              Reporting, commandes, suivi d&apos;encours&nbsp;: des agents IA d&eacute;ploy&eacute;s
              sur vos process m&eacute;tier.
            </motion.h1>

            <motion.p
              variants={child}
              className="mt-6 text-lg text-white/55 leading-relaxed max-w-[480px]"
            >
              On automatise les t&acirc;ches r&eacute;p&eacute;titives de vos ateliers et
              back-offices. Sur vos outils, avec vos &eacute;quipes.
            </motion.p>

            <motion.div variants={child} className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white text-breton-navy hover:bg-breton-sand transition-colors duration-200"
              >
                Diagnostic terrain gratuit &rarr;
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Visual: Dashboard mockup */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-breton-emerald" />
                  <span className="text-sm font-medium text-white/70">
                    Production &mdash; Temps r&eacute;el
                  </span>
                </div>
                <span className="text-xs text-white/40">Mis &agrave; jour il y a 2 min</span>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-white/40 mb-1">TRS</p>
                  <p className="text-2xl font-bold text-breton-emerald">87%</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-white/40 mb-1">Encours</p>
                  <p className="text-2xl font-bold text-white">142</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-white/40 mb-1">Rebut</p>
                  <p className="text-2xl font-bold text-breton-copper">1.2%</p>
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-20">
                {[65, 72, 58, 80, 75, 90, 85, 88, 70, 92, 87, 78].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-breton-emerald/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-white/30">6h</span>
                <span className="text-[10px] text-white/30">18h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
