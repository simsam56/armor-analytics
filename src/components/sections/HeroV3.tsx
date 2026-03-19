'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';
import { fadeInUp, fadeInDown, scaleIn, heroStagger } from '@/lib/animations';
import ParticleBackground from '@/components/visuals/ParticleBackground';

const noMotion = { hidden: {}, visible: {} };

function WaveSVG() {
  return (
    <div className="absolute bottom-0 left-0 right-0 wave-animation">
      <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" preserveAspectRatio="none">
        <path
          d="M0 80 C360 20 720 100 1080 60 C1260 40 1380 70 1440 50 L1440 120 L0 120 Z"
          fill="#2E4057"
          fillOpacity="0.15"
        />
        <path
          d="M0 90 C240 50 480 110 720 70 C960 30 1200 90 1440 60 L1440 120 L0 120 Z"
          fill="#2E4057"
          fillOpacity="0.08"
        />
      </svg>
    </div>
  );
}

const HERO_WORDS = ['Vos données', 'travaillent.'];
const ACCENT_WORDS = ['Pas vos', 'équipes.'];

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const v = prefersReducedMotion ? noMotion : undefined;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-breton-navy to-breton-slate hero-grain">
      {/* Particle background */}
      <ParticleBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 w-full">
        <motion.div
          className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0"
          variants={prefersReducedMotion ? noMotion : heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Location badge */}
          <motion.div
            variants={v ?? fadeInDown}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm ring-1 ring-white/10"
          >
            <MapPin className="h-3.5 w-3.5 text-breton-accent" />
            <span>Lorient, Bretagne — Interventions sur site</span>
          </motion.div>

          {/* Headline — typing animation word by word */}
          <motion.h1
            variants={v ?? fadeInUp}
            className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-7xl leading-[1.05]"
          >
            {HERO_WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {ACCENT_WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em] text-breton-accent italic"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle — 1 line */}
          <motion.p
            variants={v ?? fadeInUp}
            className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl sm:text-xl lg:mx-0 mx-auto"
          >
            Votre équipe data externalisée. PME et réseaux bretons.
          </motion.p>

          {/* 3 animated metric badges */}
          <motion.div
            variants={v ?? fadeInUp}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {[
              { value: '8 min → 30 sec', label: 'saisie commande' },
              { value: 'J+5 → Temps réel', label: 'reporting' },
              { value: 'ROI chiffré', label: 'sur chaque projet' },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 ring-1 ring-white/10"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-semibold text-breton-accent">{badge.value}</span>
                <span className="text-xs text-white/50 ml-2">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={v ?? scaleIn}
            className="mt-10 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start"
          >
            <Button
              size="lg"
              asChild
              className="bg-white text-breton-navy hover:bg-breton-sand shadow-lg shadow-black/20 h-13 px-8 text-base font-semibold"
            >
              <a
                href={getCalendlyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2.5"
              >
                <Calendar className="h-5 w-5" />
                Diagnostic gratuit — 30 min
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base"
            >
              <Link href="/contact" className="gap-2.5">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <WaveSVG />
    </section>
  );
}
