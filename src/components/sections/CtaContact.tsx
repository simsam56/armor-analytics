'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl, getContactEmail } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export function CtaContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 bg-breton-navy" id="cta-contact">
      <motion.div
        ref={ref}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
        variants={prefersReducedMotion ? {} : fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Vous avez probablement déjà un premier chantier rentable
        </h2>
        <p className="mt-6 text-lg text-white/60 leading-relaxed">
          En 30 minutes, nous identifions ensemble un irritant concret, ce qu&apos;il coûte
          aujourd&apos;hui, et la meilleure façon de le traiter.
        </p>
        <p className="mt-2 text-sm text-white/60">
          Visio ou échange sur site en Bretagne selon votre contexte.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-white text-breton-navy hover:bg-breton-sand h-13 px-8 text-base font-semibold gap-2"
          >
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-5 w-5" />
              Demander un diagnostic
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/50">{getContactEmail()} · Réponse sous 48h</p>
      </motion.div>
    </section>
  );
}
