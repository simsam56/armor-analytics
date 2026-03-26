import { AnimatedDashboard } from '@/components/visuals/AnimatedDashboard';
import { DataFlowAnimation } from '@/components/visuals/DataFlowAnimation';
import {
  AgroChartVisual,
  MetallurgieChartVisual,
  PlasturgieChartVisual,
} from '@/components/visuals/AnimatedProjectVisual';
import { AnimatedWaves } from '@/components/visuals/AnimatedWaves';
import { AnimatedLighthouse } from '@/components/visuals/AnimatedLighthouse';
import { AnimatedCompass } from '@/components/visuals/AnimatedCompass';
import { FloatingBoat } from '@/components/visuals/FloatingBoat';

export default function PreviewVisualsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-breton-foam to-breton-sand pt-20 px-4">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-breton-navy mb-2">Preview — Composants visuels</h1>
          <p className="text-breton-granite">Page temporaire de preview</p>
        </div>

        {/* 1. Animated Dashboard */}
        <section>
          <h2 className="font-serif text-2xl text-breton-navy mb-6 text-center">
            1. AnimatedDashboard
          </h2>
          <AnimatedDashboard />
        </section>

        {/* 2. Data Flow */}
        <section>
          <h2 className="font-serif text-2xl text-breton-navy mb-6 text-center">
            2. DataFlowAnimation
          </h2>
          <DataFlowAnimation />
        </section>

        {/* 3. Project Visuals */}
        <section>
          <h2 className="font-serif text-2xl text-breton-navy mb-6 text-center">
            3. Project Visuals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-breton-sand overflow-hidden bg-white">
              <AgroChartVisual />
              <div className="p-4">
                <p className="text-xs text-breton-emerald font-semibold uppercase">Agroalimentaire</p>
                <p className="font-serif text-lg text-breton-navy">Commandes automatisées</p>
              </div>
            </div>
            <div className="rounded-2xl border border-breton-sand overflow-hidden bg-white">
              <MetallurgieChartVisual />
              <div className="p-4">
                <p className="text-xs text-breton-emerald font-semibold uppercase">Métallurgie</p>
                <p className="font-serif text-lg text-breton-navy">Pilotage data</p>
              </div>
            </div>
            <div className="rounded-2xl border border-breton-sand overflow-hidden bg-white">
              <PlasturgieChartVisual />
              <div className="p-4">
                <p className="text-xs text-breton-emerald font-semibold uppercase">Plasturgie</p>
                <p className="font-serif text-lg text-breton-navy">Optimisation déchets</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Animated Waves — full-width divider */}
      <div className="mt-20 -mx-4">
        <h2 className="font-serif text-2xl text-breton-navy mb-6 text-center px-4">
          4. AnimatedWaves (séparateur de section)
        </h2>
        <div className="bg-breton-foam">
          <AnimatedWaves variant="foam-to-white" />
        </div>
        <div className="bg-white h-16" />
        <div className="bg-white">
          <AnimatedWaves variant="white-to-foam" />
        </div>
      </div>

      {/* 5. Maritime visuals */}
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="font-serif text-2xl text-breton-navy mb-10 text-center">
          5. Visuels maritimes
        </h2>
        <div className="flex flex-wrap items-end justify-center gap-16">
          {/* Lighthouse */}
          <div className="text-center">
            <AnimatedLighthouse className="mx-auto" />
            <p className="text-sm text-breton-granite mt-4">AnimatedLighthouse</p>
            <p className="text-xs text-breton-granite/60">Dessin progressif + faisceau rotatif</p>
          </div>
          {/* Compass */}
          <div className="text-center">
            <AnimatedCompass className="mx-auto" />
            <p className="text-sm text-breton-granite mt-4">AnimatedCompass</p>
            <p className="text-xs text-breton-granite/60">Rose des vents + aiguille spring</p>
          </div>
          {/* Boat */}
          <div className="text-center">
            <FloatingBoat size="lg" className="mx-auto" />
            <p className="text-sm text-breton-granite mt-4">FloatingBoat</p>
            <p className="text-xs text-breton-granite/60">Voilier flottant + drapeau animé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
