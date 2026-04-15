import { HeroV3 } from '@/components/sections/HeroV3';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  Layers,
  GraduationCap,
  FileText,
  ClipboardList,
  PackageSearch,
} from 'lucide-react';
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

      {/* 2. Avant / Apr\u00e8s — preuve visuelle */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Avant */}
            <div className="rounded-2xl border border-breton-sand bg-breton-foam p-8 sm:p-10">
              <p className="text-xs font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
                Avant
              </p>
              <ul className="space-y-4">
                {[
                  'Reporting Excel chaque vendredi, 4h minimum',
                  'Ressaisie manuelle des commandes dans l\u2019ERP',
                  'Donn\u00e9es \u00e9parpill\u00e9es, personne n\u2019a la m\u00eame version',
                  'D\u00e9pendance totale \u00e0 une personne-cl\u00e9',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">
                      &times;
                    </span>
                    <span className="text-breton-slate text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apr\u00e8s */}
            <div className="rounded-2xl border-2 border-breton-emerald/30 bg-breton-emerald/5 p-8 sm:p-10">
              <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.15em] mb-4">
                Apr&egrave;s
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Reporting automatique chaque matin', metric: '4h/sem \u00e9conomis\u00e9es' },
                  { text: 'Agent OCR qui saisit les commandes', metric: '80% du temps \u00e9limin\u00e9' },
                  { text: 'Dashboard temps r\u00e9el, une seule source', metric: 'Donn\u00e9es en J+0' },
                  { text: 'Process document\u00e9, autonomie de l\u2019\u00e9quipe', metric: 'Z\u00e9ro d\u00e9pendance' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-breton-emerald/20 flex items-center justify-center text-breton-emerald text-xs font-bold">
                      &check;
                    </span>
                    <span className="text-breton-slate text-sm leading-relaxed">
                      {item.text}{' '}
                      <span className="font-semibold text-breton-navy">{item.metric}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Agents IA — les 3 plus d\u00e9ploy\u00e9s */}
      <section id="services" className="py-20 sm:py-28 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Ce qu&apos;on d&eacute;ploie
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            Les 3 agents les plus demand&eacute;s
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: 'Agent de reporting',
                description:
                  'G\u00e9n\u00e8re vos rapports de production automatiquement. TRS, encours, cadence \u2014 chaque matin, sans intervention.',
                result: '4h/sem \u00e9conomis\u00e9es',
                sector: 'M\u00e9tallurgie, Finist\u00e8re',
                href: '/cas-clients',
              },
              {
                icon: ClipboardList,
                title: 'Agent de commandes',
                description:
                  'Lit vos bons de commande (OCR), v\u00e9rifie les \u00e9carts, saisit dans l\u2019ERP. Z\u00e9ro ressaisie.',
                result: '80% du temps \u00e9limin\u00e9',
                sector: 'Agroalimentaire',
                href: '/cas-clients',
              },
              {
                icon: PackageSearch,
                title: 'Agent de suivi d\u2019encours',
                description:
                  'Consolide vos donn\u00e9es GPAO, alerte quand un OF d\u00e9rape. Visibilit\u00e9 instantan\u00e9e sur l\u2019atelier.',
                result: 'Donn\u00e9es en J+0',
                sector: 'Transport & Logistique',
                href: '/cas-clients',
              },
            ].map((agent) => (
              <Link
                key={agent.title}
                href={agent.href}
                className="group flex flex-col rounded-2xl border border-breton-sand bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-breton-emerald/10 p-2.5">
                    <agent.icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-breton-navy">{agent.title}</h3>
                </div>
                <p className="text-breton-slate text-sm leading-relaxed flex-1">
                  {agent.description}
                </p>
                <div className="mt-6 pt-4 border-t border-breton-sand/60">
                  <p className="font-display text-xl font-bold text-breton-navy">{agent.result}</p>
                  <p className="text-xs text-breton-granite mt-1">{agent.sector}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-breton-copper group-hover:gap-3 transition-all">
                  Voir le cas <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/ia"
              className="inline-flex items-center gap-2 text-sm font-semibold text-breton-copper hover:gap-3 transition-all"
            >
              Voir tous les cas d&apos;usage <ArrowRight className="h-4 w-4" />
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
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            3 &eacute;tapes, du diagnostic au d&eacute;ploiement
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: Search,
                title: 'Diagnostic terrain',
                description:
                  '3 jours sur site. On observe, on \u00e9change, on cartographie vos irritants. Vous repartez avec une roadmap.',
              },
              {
                step: '02',
                icon: Layers,
                title: 'Prototype & validation',
                description:
                  'On d\u00e9ploie un premier agent IA sur un p\u00e9rim\u00e8tre restreint. Vous validez la valeur avant d\u2019\u00e9tendre.',
              },
              {
                step: '03',
                icon: GraduationCap,
                title: 'D\u00e9ploiement & adoption',
                description:
                  'Mise en production, prise en main par vos \u00e9quipes. L\u2019objectif\u00a0: que vous soyez autonomes.',
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

      {/* 5. &Agrave; propos */}
      <IncarnationSection />

      {/* 6. CTA final */}
      <CtaContact />
    </>
  );
}
