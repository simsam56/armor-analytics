'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function QuizCta() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-[110px] bg-breton-sand">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
            Diagnostic gratuit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            En 5 minutes, identifiez vos opportunités data &amp; IA
          </h2>
          <p className="mt-4 text-lg text-breton-slate">
            Le quiz analyse votre situation et vous oriente vers le pilier le plus adapté.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-breton-granite">Gratuit · Sans engagement · Résultats immédiats</p>
        </motion.div>
      </div>
    </section>
  );
}
