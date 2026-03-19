'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

function WaveSVG() {
  return (
    <div className="absolute bottom-0 left-0 right-0 wave-animation">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
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

export function HeroV3() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-breton-navy to-breton-slate hero-grain">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Location badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm ring-1 ring-white/10"
          >
            <MapPin className="h-3.5 w-3.5 text-breton-accent" />
            <span>Lorient, Bretagne — Interventions sur site</span>
          </motion.div>

          {/* Main headline — serif */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Vos données travaillent.{' '}
            <span className="text-breton-accent italic">Pas vos équipes.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl sm:text-xl"
          >
            On automatise vos ressaisies, on fiabilise vos données, on vous donne les tableaux de bord pour piloter. Collectif data spécialisé PME industrielles bretonnes.
          </motion.p>

          {/* Key gains */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-breton-accent" />
              Saisie commande : 8 min → 30 sec
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-breton-accent" />
              Reporting : J+5 → temps réel
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-breton-accent" />
              ROI démontrable, chiffré
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
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

          {/* Trust signals */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              Réponse sous 48h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              NDA possible
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Vagues SVG animées */}
      <WaveSVG />
    </section>
  );
}
