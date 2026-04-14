import { HeroV3 } from '@/components/sections/HeroV3';
import { UseCases } from '@/components/sections/UseCases';
import { Projects } from '@/components/sections/Projects';
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
  Factory,
  Anchor,
  UtensilsCrossed,
  Cog,
} from 'lucide-react';
import { BLOG_ARTICLES } from '@/data/blog-articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilotage production IA pour PME industrielles | Lorient, Bretagne',
  description:
    'Remplacez le planning Excel par un tableau de bord production temps r\u00e9el. 7 ans de terrain industriel. Diagnostic gratuit, Bretagne.',
};

export default function Home() {
  const latestArticles = [...BLOG_ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <JsonLd />

      {/* 1. Hero */}
      <HeroV3 />

      {/* 2. Services — style Atos avec grandes images */}
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

      {/* 3. Cas d'usage — visuels interactifs */}
      <UseCases />

      {/* 4. Secteur */}
      <section id="secteur" className="py-20 sm:py-32 bg-breton-navy">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold text-breton-emerald uppercase tracking-[0.15em] mb-4">
                Secteur
              </p>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-white mb-6">
                PME industrielles bretonnes
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                Ateliers de production, plannings GPAO, contraintes de livraison, dépendance
                aux personnes-clés. On connaît ces réalités parce qu&apos;on les a vécues
                pendant 7 ans.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Factory, label: 'Métallurgie & chaudronnerie' },
                  { icon: UtensilsCrossed, label: 'Agroalimentaire' },
                  { icon: Anchor, label: 'Nautisme & naval' },
                  { icon: Cog, label: 'Mécanique & sous-traitance' },
                ].map((sector) => (
                  <div
                    key={sector.label}
                    className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                  >
                    <sector.icon className="h-4 w-4 text-breton-emerald shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{sector.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80"
                alt="Atelier de production industrielle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chiffres clés */}
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

      {/* 6. Cas clients */}
      <Projects limit={3} showLink />

      {/* 7. Blog */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Insights
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy mb-16">
            Blog
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-breton-granite uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-breton-navy group-hover:text-breton-copper transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-breton-slate line-clamp-2 mb-4">{article.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-breton-copper group-hover:gap-3 transition-all">
                  Lire <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. À propos */}
      <IncarnationSection />

      {/* 9. CTA final */}
      <CtaContact />
    </>
  );
}
