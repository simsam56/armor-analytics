import { HeroV3 } from '@/components/sections/HeroV3';
import { UseCases } from '@/components/sections/UseCases';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart3,
  Cpu,
  GraduationCap,
  ArrowRight,
  Search,
  Layers,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilotage production IA pour PME industrielles | Lorient, Bretagne',
  description:
    'Pilotage temps réel, automatisation et agents IA pour PME industrielles bretonnes. 7 ans de terrain. Résultats mesurés. Diagnostic gratuit.',
};

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. Hero */}
      <HeroV3 />

      {/* 2. Preuves — Résultats clients */}
      <section className="py-20 sm:py-28 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Résultats
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            Des résultats mesurés, pas des promesses
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                sector: 'Métallurgie',
                problem: 'Reporting manuel chaque vendredi, 4h minimum',
                result: '4h/semaine économisées',
                detail: 'Dashboard production temps réel déployé en 6 semaines',
              },
              {
                sector: 'Agroalimentaire',
                problem: 'Ressaisie manuelle de chaque commande fournisseur',
                result: '80% du temps de traitement éliminé',
                detail: 'OCR + workflow automatisé, intégration ERP',
              },
              {
                sector: 'Transport & Logistique',
                problem: 'Reporting livré à J+3, données peu fiables',
                result: 'Reporting disponible en J+0',
                detail: 'Centralisation données + reporting automatisé',
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
                <p className="mt-2 text-sm text-breton-granite">{proof.detail}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-breton-copper group-hover:gap-3 transition-all">
                  Voir le cas <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services — style Atos avec grandes images */}
      <section id="services" className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Services
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-breton-navy mb-16 max-w-3xl">
            Du diagnostic terrain à la mise en production
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: 'Tableaux de bord & pilotage',
                description:
                  'Votre planning Excel devient un dashboard temps r\u00e9el. TRS, encours, cadence — visible en un coup d\u2019\u0153il.',
                href: '/data',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
              },
              {
                icon: Cpu,
                title: 'Automatisations & IA m\u00e9tier',
                description:
                  'OCR commandes, base de connaissances atelier, workflows ERP. On \u00e9limine les t\u00e2ches r\u00e9p\u00e9titives.',
                href: '/ia',
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
              },
              {
                icon: GraduationCap,
                title: 'Formation aux outils mis en place',
                description:
                  'Directement en atelier, avec vos donn\u00e9es. Vos \u00e9quipes adoptent vraiment les outils qu\u2019on d\u00e9ploie.',
                href: '/formation',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl overflow-hidden bg-breton-foam hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="h-5 w-5 text-breton-copper" />
                    <h3 className="text-xl font-bold text-breton-navy">{service.title}</h3>
                  </div>
                  <p className="text-breton-slate leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-breton-copper group-hover:gap-3 transition-all">
                    D\u00e9couvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cas d'usage — visuels interactifs */}
      <UseCases />

      {/* 5. Méthode en 3 étapes */}
      <section className="py-20 sm:py-32 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Méthode
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            Comment on travaille avec vous
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
                  'On d\u00e9ploie un premier cas d\u2019usage sur un p\u00e9rim\u00e8tre restreint. Vous validez la valeur avant d\u2019\u00e9tendre.',
              },
              {
                step: '03',
                icon: GraduationCap,
                title: 'Déploiement & formation',
                description:
                  'Mise en production, formation de vos \u00e9quipes sur site, documentation. L\u2019objectif : que vous soyez autonomes.',
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

      {/* 6. À propos */}
      <IncarnationSection />

      {/* 7. CTA final */}
      <CtaContact />
    </>
  );
}
