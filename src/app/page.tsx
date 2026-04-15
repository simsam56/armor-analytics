import { HeroV3 } from '@/components/sections/HeroV3';
import { ProblemsSection } from '@/components/sections/ProblemsSection';
import { Projects } from '@/components/sections/Projects';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import {
  BarChart3,
  GraduationCap,
  ArrowRight,
  Search,
  Bot,
  Layers,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilotage industriel et agents IA pour PME | Lorient, Bretagne',
  description:
    'Automatisation, pilotage augmenté et agents IA pour vos ateliers et back-offices. 7 ans de terrain industriel. Diagnostic gratuit, Bretagne.',
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  BarChart3,
  Bot,
  GraduationCap,
};

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. Hero */}
      <HeroV3 />

      {/* 2. Chiffres clés */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '7 ans', label: 'de terrain en production industrielle' },
              { value: 'Lorient', label: 'base, interventions sur site en Bretagne' },
              { value: '100%', label: 'PME industrielles' },
              { value: '3 jours', label: 'pour un premier diagnostic terrain' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(40px,5vw,64px)] font-bold tracking-[-0.03em] text-breton-navy leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-breton-granite">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problèmes */}
      <ProblemsSection />

      {/* 4. Services */}
      <section id="services" className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Services
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-breton-navy mb-16 max-w-3xl">
            Du diagnostic terrain à la mise en production
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((service) => {
              const ServiceIcon = ICON_MAP[service.icon];
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group rounded-2xl border border-breton-sand bg-breton-foam p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {ServiceIcon && <ServiceIcon className="h-5 w-5 text-breton-copper" />}
                    <h3 className="text-xl font-bold text-breton-navy">{service.title}</h3>
                  </div>
                  <p className="text-breton-slate leading-relaxed mb-4">{service.tagline}</p>
                  {service.isEntryPoint && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-breton-emerald bg-breton-emerald/10 px-3 py-1 rounded-full mb-3">
                      Point de départ recommandé
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-breton-copper group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Cas clients */}
      <Projects limit={3} showLink />

      {/* 6. Méthode en 3 étapes */}
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
                  '3 jours sur site. On observe vos process, on échange avec vos équipes, on cartographie vos irritants. Vous repartez avec une roadmap priorisée.',
              },
              {
                step: '02',
                icon: Layers,
                title: 'Prototype & validation',
                description:
                  'On déploie un premier cas d\u2019usage sur un périmètre restreint. Vous validez la valeur avant d\u2019étendre.',
              },
              {
                step: '03',
                icon: GraduationCap,
                title: 'Déploiement & formation',
                description:
                  'Mise en production, formation de vos équipes sur site, documentation. L\u2019objectif : que vous soyez autonomes.',
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

      {/* 7. À propos */}
      <IncarnationSection />

      {/* 8. CTA final */}
      <CtaContact />
    </>
  );
}
