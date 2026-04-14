'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ScanText, MessageSquare, Workflow, BarChart3, Eye } from 'lucide-react';
import {
  OcrVisual,
  AgentVisual,
  FluxVisual,
  DashboardVisual,
  VisionVisual,
} from '@/components/visuals/use-case-visuals';

const USE_CASES = [
  {
    id: 'ocr',
    icon: ScanText,
    title: 'Automatisation documentaire',
    description:
      'OCR de bons de commande, BL, fiches qualit\u00e9, factures. Extraction automatique et injection directe dans votre GPAO ou ERP.',
    visual: OcrVisual,
  },
  {
    id: 'agent',
    icon: MessageSquare,
    title: 'Agent IA m\u00e9tier',
    description:
      'Base de connaissances pour op\u00e9rateurs : gammes, proc\u00e9dures, fiches de poste, consignes qualit\u00e9. Accessible 24/7 sur tablette.',
    visual: AgentVisual,
  },
  {
    id: 'flux',
    icon: Workflow,
    title: 'Automatisation de flux',
    description:
      'Synchronisation OF, gammes, temps de cycle entre GPAO, MES et ERP. Z\u00e9ro double saisie, donn\u00e9es \u00e0 jour en temps r\u00e9el.',
    visual: FluxVisual,
  },
  {
    id: 'dashboard',
    icon: BarChart3,
    title: 'Reporting & pilotage',
    description:
      'Dashboards de production : TRS, taux de rebut, encours, cadence. Vision multi-sites, CBN plus fiable \u00e0 partir des historiques.',
    visual: DashboardVisual,
  },
  {
    id: 'vision',
    icon: Eye,
    title: 'Qualit\u00e9 & vision',
    description:
      'Contr\u00f4le qualit\u00e9 visuel en sortie de ligne, lecture de compteurs, d\u00e9tection de d\u00e9fauts par IA. En temps r\u00e9el.',
    visual: VisionVisual,
  },
];

export function UseCases() {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const ActiveVisual = USE_CASES[active].visual;

  return (
    <section className="py-20 sm:py-32 bg-breton-foam">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
          Cas d&apos;usage
        </p>
        <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16 max-w-3xl">
          Ce qu&apos;on d&eacute;ploie dans vos ateliers
        </h2>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr] items-start">
          {/* Left — tabs */}
          <div className="space-y-2">
            {USE_CASES.map((uc, i) => (
              <button
                key={uc.id}
                type="button"
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-200 ${
                  active === i
                    ? 'bg-white shadow-lg border border-breton-sand'
                    : 'bg-transparent hover:bg-white/50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <uc.icon
                    className={`h-5 w-5 shrink-0 ${
                      active === i ? 'text-breton-copper' : 'text-breton-granite'
                    }`}
                  />
                  <h3
                    className={`text-base font-bold ${
                      active === i ? 'text-breton-navy' : 'text-breton-slate'
                    }`}
                  >
                    {uc.title}
                  </h3>
                </div>
                {active === i && (
                  <motion.p
                    className="text-sm text-breton-slate leading-relaxed pl-8"
                    initial={prefersReducedMotion ? {} : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                  >
                    {uc.description}
                  </motion.p>
                )}
              </button>
            ))}
          </div>

          {/* Right — visual */}
          <div className="bg-white rounded-2xl border border-breton-sand p-8 lg:p-12 flex items-center justify-center min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="w-full max-w-[440px]"
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveVisual />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
