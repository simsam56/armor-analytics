'use client';

import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

export function CtaContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 bg-breton-navy" id="cta-contact">
      <motion.div
        ref={ref}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
        variants={prefersReducedMotion ? {} : fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Prêt à supprimer vos ressaisies ?
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Diagnostic gratuit de 30 minutes, sans engagement. On parle concret, pas jargon.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-breton-navy hover:bg-breton-sand h-13 px-8 text-base font-semibold gap-2"
          >
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-5 w-5" />
              Diagnostic gratuit — 30 min
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base gap-2"
          >
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/40">
          hello@balise-ia.fr · Réponse sous 48h
        </p>
      </motion.div>
    </section>
  );
}
