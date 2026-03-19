'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCheck, Clock, Shield, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const SIGNALS = [
  {
    icon: UserCheck,
    title: 'Interlocuteur unique',
    description: 'Un chef de projet dédié, du diagnostic à la livraison',
  },
  {
    icon: Clock,
    title: 'Réponse sous 48h',
    description: 'Proposition commerciale en 48h après le premier échange',
  },
  {
    icon: Shield,
    title: 'Confidentialité garantie',
    description: 'NDA systématique, données hébergées en France',
  },
  {
    icon: MapPin,
    title: 'Interventions sur site',
    description: 'Basés à Lorient, on se déplace en Bretagne',
  },
];

export function TrustBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="border-y border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <motion.div key={signal.title} variants={fadeInUp} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1B4D3E]/10">
                  <Icon className="h-5 w-5 text-[#1B4D3E]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{signal.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{signal.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
