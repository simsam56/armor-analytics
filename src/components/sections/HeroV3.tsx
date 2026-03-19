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

export function HeroV3() {
  return (
    <section className="relative overflow-hidden bg-[#0F2B23]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
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
            <MapPin className="h-3.5 w-3.5 text-[#40916C]" />
            <span>Lorient, Bretagne — Interventions sur site</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Vos données travaillent.{' '}
            <span className="text-[#40916C]">Pas vos équipes.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl sm:text-xl"
          >
            On automatise vos ressaisies, on fiabilise vos données, on vous donne les tableaux de bord pour piloter. Collectif data spécialisé PME industrielles bretonnes.
          </motion.p>

          {/* Key gains - horizontal */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#40916C]" />
              Saisie commande : 8 min → 30 sec
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#40916C]" />
              Reporting : J+5 → temps réel
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#40916C]" />
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
              className="bg-white text-[#1B4D3E] hover:bg-white/90 shadow-lg shadow-black/20 h-13 px-8 text-base font-semibold"
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#40916C]/30 to-transparent" />
    </section>
  );
}
