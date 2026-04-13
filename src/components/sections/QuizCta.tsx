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
            Offre d&apos;entrée
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            Diagnostic terrain — 3 jours sur site
          </h2>
          <p className="mt-4 text-lg text-breton-slate max-w-2xl mx-auto">
            Je viens dans votre entreprise. J&apos;observe, j&apos;échange avec vos équipes,
            je cartographie vos irritants opérationnels. Vous repartez avec une roadmap claire
            et priorisée — les 3 chantiers qui auront le plus d&apos;impact, dans l&apos;ordre.
            Sans engagement sur la suite.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/audit-ia">Prendre rendez-vous →</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-breton-sand">
              <Link href="/contact">Ou nous contacter directement</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-breton-granite">
            3 jours sur site · Rapport écrit inclus · Déplacement Bretagne inclus
          </p>
        </motion.div>
      </div>
    </section>
  );
}
