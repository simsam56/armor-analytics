import { HeroV3 } from '@/components/sections/HeroV3';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import { ArrowRight, Search, Layers, GraduationCap, ClipboardList } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agents IA m\u00e9tier pour PME industrielles | balise-ia, Lorient',
  description:
    'Agents IA m\u00e9tier pour supprimer les ressaisies, fiabiliser le reporting et piloter la production. 7 ans de terrain industriel. Diagnostic gratuit, Bretagne.',
};

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. Hero */}
      <HeroV3 />

      {/* 2. Proof strip */}
      <section className="py-12 bg-white border-b border-breton-sand/50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { metric: '4h/sem', label: '\u00e9conomis\u00e9es en reporting' },
              { metric: '80%', label: 'de ressaisies \u00e9limin\u00e9es' },
              { metric: 'J+0', label: 'reporting disponible' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-breton-navy">
                  {item.metric}
                </p>
                <p className="mt-1 text-sm text-breton-granite">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Agents IA */}
      <section id="services" className="py-20 sm:py-28 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Ce qu&apos;on d&eacute;ploie
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-breton-navy mb-12 max-w-xl">
            Nos agents IA les plus d&eacute;ploy&eacute;s
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Agent de reporting */}
            <Link
              href="/cas-clients"
              className="group relative flex flex-col rounded-2xl border border-breton-sand bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-breton-emerald focus-visible:ring-offset-2"
            >
              {/* Mockup dashboard */}
              <div className="bg-breton-navy/[0.03] p-5 border-b border-breton-sand/60">
                <div className="rounded-xl bg-white border border-breton-sand p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-breton-emerald" />
                      <span className="text-[11px] font-medium text-breton-slate">Reporting production</span>
                    </div>
                    <span className="text-[10px] text-breton-granite">Automatique &bull; 6h02</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="rounded-lg bg-breton-foam p-2">
                      <p className="text-[10px] text-breton-granite">TRS</p>
                      <p className="text-sm font-bold text-breton-emerald">87%</p>
                    </div>
                    <div className="rounded-lg bg-breton-foam p-2">
                      <p className="text-[10px] text-breton-granite">Cadence</p>
                      <p className="text-sm font-bold text-breton-navy">142/h</p>
                    </div>
                    <div className="rounded-lg bg-breton-foam p-2">
                      <p className="text-[10px] text-breton-granite">Rebut</p>
                      <p className="text-sm font-bold text-breton-copper">1.2%</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {[60, 72, 55, 80, 68, 90, 85, 88, 75, 92, 87, 78].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-breton-emerald/40" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-breton-emerald uppercase tracking-wider">M&eacute;tallurgie</span>
                <h3 className="mt-2 text-lg font-bold text-breton-navy group-hover:text-breton-emerald transition-colors">Agent de reporting</h3>
                <p className="mt-2 text-sm text-breton-slate leading-relaxed flex-1">
                  G&eacute;n&egrave;re vos rapports de production chaque matin. TRS, encours, cadence &mdash; sans intervention.
                </p>
                <div className="mt-4 pt-4 border-t border-breton-sand/60 flex items-center justify-between">
                  <p className="font-display text-lg font-bold text-breton-navy">4h/sem &eacute;conomis&eacute;es</p>
                  <ArrowRight className="h-4 w-4 text-breton-copper group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Agent de commandes */}
            <Link
              href="/cas-clients"
              className="group relative flex flex-col rounded-2xl border border-breton-sand bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-breton-emerald focus-visible:ring-offset-2"
            >
              {/* Mockup flux commandes */}
              <div className="bg-breton-navy/[0.03] p-5 border-b border-breton-sand/60">
                <div className="rounded-xl bg-white border border-breton-sand p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-breton-copper" />
                      <span className="text-[11px] font-medium text-breton-slate">Traitement commandes</span>
                    </div>
                    <span className="text-[10px] text-breton-granite">3 trait&eacute;es &bull; 0 erreur</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { ref: 'BDC-2847', status: 'Saisi ERP', statusColor: 'text-breton-emerald bg-breton-emerald/10' },
                      { ref: 'BDC-2848', status: 'V&eacute;rifi&eacute;', statusColor: 'text-breton-emerald bg-breton-emerald/10' },
                      { ref: 'BDC-2849', status: 'OCR en cours', statusColor: 'text-breton-copper bg-breton-copper/10' },
                    ].map((cmd) => (
                      <div key={cmd.ref} className="flex items-center justify-between rounded-lg bg-breton-foam px-3 py-2">
                        <div className="flex items-center gap-2">
                          <ClipboardList className="h-3 w-3 text-breton-granite" />
                          <span className="text-xs font-medium text-breton-navy">{cmd.ref}</span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cmd.statusColor}`}>
                          {cmd.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-breton-emerald uppercase tracking-wider">Agroalimentaire</span>
                <h3 className="mt-2 text-lg font-bold text-breton-navy group-hover:text-breton-emerald transition-colors">Agent de commandes</h3>
                <p className="mt-2 text-sm text-breton-slate leading-relaxed flex-1">
                  Lit vos bons de commande, v&eacute;rifie les &eacute;carts, saisit dans l&apos;ERP. Z&eacute;ro ressaisie.
                </p>
                <div className="mt-4 pt-4 border-t border-breton-sand/60 flex items-center justify-between">
                  <p className="font-display text-lg font-bold text-breton-navy">80% du temps &eacute;limin&eacute;</p>
                  <ArrowRight className="h-4 w-4 text-breton-copper group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/ia"
              className="inline-flex items-center gap-2 text-sm font-semibold text-breton-copper hover:gap-3 transition-all"
            >
              Voir tous nos cas d&apos;usage <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. M\u00e9thode */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            M&eacute;thode
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            3 &eacute;tapes, du diagnostic au d&eacute;ploiement
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: Search,
                title: 'Diagnostic terrain',
                description:
                  '3 jours sur site. Observation, \u00e9changes, cartographie des irritants. Vous repartez avec une roadmap.',
              },
              {
                step: '02',
                icon: Layers,
                title: 'Prototype & validation',
                description:
                  'Un premier agent IA sur un p\u00e9rim\u00e8tre restreint. Vous validez la valeur avant d\u2019\u00e9tendre.',
              },
              {
                step: '03',
                icon: GraduationCap,
                title: 'D\u00e9ploiement & adoption',
                description:
                  'Mise en production, prise en main par vos \u00e9quipes. Objectif\u00a0: autonomie.',
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-display text-[80px] font-bold text-breton-sand leading-none">
                  {item.step}
                </span>
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="h-5 w-5 text-breton-copper" />
                    <h3 className="text-xl font-bold text-breton-navy">{item.title}</h3>
                  </div>
                  <p className="text-breton-slate leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. \u00c0 propos */}
      <IncarnationSection />

      {/* 6. CTA final */}
      <CtaContact />
    </>
  );
}
