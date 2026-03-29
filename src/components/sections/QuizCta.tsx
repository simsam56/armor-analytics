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
            Quelles sont vos priorités IA &amp; data ?
          </h2>
          <p className="mt-4 text-lg text-breton-slate">
            En 5 minutes, vous identifiez vos 2-3 priorités IA &amp; data : automatisation,
            tableaux de bord et intégration d&apos;intelligences artificielles. Résultats
            immédiats par email.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/audit-ia">Identifier mes priorit&eacute;s IA &amp; data →</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-breton-sand">
              <Link href="/contact">Ou nous contacter directement</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-breton-granite">5 min · Gratuit · Sans engagement</p>
        </motion.div>
      </div>
    </section>
  );
}
