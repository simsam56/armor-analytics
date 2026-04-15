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
  BarChart3,
  ClipboardList,
  PackageSearch,
  ShieldCheck,
  Repeat,
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

      {/* 2. Gains terrain — preuves imm\u00e9diates */}
      <section className="py-20 sm:py-28 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            R&eacute;sultats terrain
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            Gains op&eacute;rationnels observ&eacute;s chez nos clients
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                sector: 'M\u00e9tallurgie',
                problem: 'Reporting manuel chaque vendredi, 4h minimum',
                result: '4h/semaine \u00e9conomis\u00e9es',
                agent: 'Agent IA de reporting production',
              },
              {
                sector: 'Agroalimentaire',
                problem: 'Ressaisie manuelle de chaque commande fournisseur',
                result: '80% du temps de traitement \u00e9limin\u00e9',
                agent: 'Agent IA de commandes fournisseurs',
              },
              {
                sector: 'Transport & Logistique',
                problem: 'Reporting livr\u00e9 \u00e0 J+3, donn\u00e9es peu fiables',
                result: 'Reporting disponible en J+0',
                agent: 'Agent IA de centralisation donn\u00e9es',
              },
            ].map((proof) => (
              <Link
                key={proof.sector}
                href="/cas-clients"
                className="group rounded-2xl border border-breton-sand bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xs font-semibold text-breton-emerald uppercase tracking-wider">
                  {proof.sector}
                </span>
                <p className="mt-3 text-breton-slate text-sm">{proof.problem}</p>
                <p className="mt-4 font-display text-2xl font-bold text-breton-navy">
                  {proof.result}
                </p>
                <p className="mt-2 text-sm text-breton-copper font-medium">{proof.agent}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-breton-copper group-hover:gap-3 transition-all">
                  Voir le cas <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ce qu&apos;on d\u00e9ploie — agents IA concrets */}
      <section id="services" className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Agents IA m&eacute;tier
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-6 max-w-3xl">
            Ce qu&apos;on d&eacute;ploie dans vos ateliers
          </h2>
          <p className="text-lg text-breton-slate max-w-2xl mb-16">
            Chaque agent IA est sp&eacute;cialis&eacute; sur un irritant pr&eacute;cis de votre quotidien. On les d&eacute;ploie sur vos process existants, sans tout changer.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FileText,
                title: 'Agent de reporting production',
                description: 'G\u00e9n\u00e8re vos rapports de production automatiquement. TRS, encours, cadence \u2014 disponibles en temps r\u00e9el, plus le vendredi \u00e0 la main.',
                href: '/data',
              },
              {
                icon: ClipboardList,
                title: 'Agent de commandes fournisseurs',
                description: 'Extrait les donn\u00e9es de vos bons de commande (OCR), v\u00e9rifie les \u00e9carts, saisit dans l\u2019ERP. Z\u00e9ro ressaisie manuelle.',
                href: '/ia',
              },
              {
                icon: PackageSearch,
                title: 'Agent de suivi d\u2019encours',
                description: 'Consolide vos donn\u00e9es GPAO et vous alerte quand un OF d\u00e9rape. Visibilit\u00e9 instantan\u00e9e sur l\u2019avancement atelier.',
                href: '/data',
              },
              {
                icon: ShieldCheck,
                title: 'Agent de relance qualit\u00e9',
                description: 'D\u00e9tecte les non-conformit\u00e9s, d\u00e9clenche les actions correctives, trace l\u2019historique. Votre qualit\u00e9 document\u00e9e sans effort.',
                href: '/ia',
              },
              {
                icon: BarChart3,
                title: 'Agent de pilotage temps r\u00e9el',
                description: 'Dashboard connect\u00e9 \u00e0 vos sources de donn\u00e9es. Indicateurs, alertes anomalies, synth\u00e8ses automatiques chaque matin.',
                href: '/data',
              },
              {
                icon: Repeat,
                title: 'Agent de pr\u00e9paration planning',
                description: 'Pr\u00e9-calcule votre charge, identifie les conflits de ressources, propose un ordonnancement. Vous validez, il ex\u00e9cute.',
                href: '/ia',
              },
            ].map((agent) => (
              <Link
                key={agent.title}
                href={agent.href}
                className="group rounded-2xl border border-breton-sand bg-breton-foam/50 p-8 hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-breton-emerald/10 p-2.5">
                    <agent.icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-breton-navy">{agent.title}</h3>
                </div>
                <p className="text-breton-slate text-sm leading-relaxed">{agent.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. M\u00e9thode en 3 \u00e9tapes */}
      <section className="py-20 sm:py-32 bg-breton-foam">
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
                  '3 jours sur site. On observe vos process, on \u00e9change avec vos \u00e9quipes, on cartographie vos irritants. Vous repartez avec une roadmap prioris\u00e9e.',
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
                  'Mise en production, prise en main par vos \u00e9quipes sur site, documentation. L\u2019objectif\u00a0: que vous soyez autonomes.',
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
