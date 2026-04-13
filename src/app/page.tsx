import { HeroV3 } from '@/components/sections/HeroV3';
import { Projects } from '@/components/sections/Projects';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart3,
  Cpu,
  BookOpen,
  ArrowRight,
  Search,
  Layers,
  GraduationCap,
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

      {/* 2. Services — 3 cartes horizontales */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
            Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-breton-navy mb-3">
            Du diagnostic terrain à la mise en production
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            On intervient du diagnostic terrain à la mise en production de vos outils.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: 'Tableaux de bord & pilotage de production',
                description:
                  'Votre planning Excel devient un dashboard temps r\u00e9el. TRS, encours, cadence par ligne — visible d\u2019un coup d\u2019\u0153il.',
                href: '/data',
                image:
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
              },
              {
                icon: Cpu,
                title: 'Automatisations & IA m\u00e9tier',
                description:
                  'OCR commandes, base de connaissances atelier, workflows ERP. On \u00e9limine les t\u00e2ches r\u00e9p\u00e9titives.',
                href: '/ia',
                image:
                  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
              },
              {
                icon: BookOpen,
                title: 'Formation IA & data sur site',
                description:
                  'Directement en atelier, avec vos donn\u00e9es. Vos \u00e9quipes montent en comp\u00e9tences sur leurs vrais outils.',
                href: '/formation',
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-breton-sand overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon className="h-5 w-5 text-breton-emerald" />
                    <h3 className="text-lg font-bold text-breton-navy">{service.title}</h3>
                  </div>
                  <p className="text-sm text-breton-slate leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm font-semibold text-breton-emerald group-hover:underline">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secteur : PME industrielles bretonnes */}
      <section id="secteur" className="py-16 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
                Secteur
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-breton-navy mb-6">
                PME industrielles bretonnes
              </h2>
              <p className="text-breton-slate leading-relaxed mb-6">
                Ateliers de production, plannings GPAO, contraintes de livraison, dépendance
                aux personnes-clés — on connaît ces réalités parce qu&apos;on les a vécues.
                On travaille avec des PME de 50 à 200 salariés qui ont du planning, de la
                production et des équipes terrain.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Factory, label: 'M\u00e9tallurgie & chaudronnerie' },
                  { icon: UtensilsCrossed, label: 'Agroalimentaire' },
                  { icon: Anchor, label: 'Nautisme & naval' },
                  { icon: Cog, label: 'M\u00e9canique & sous-traitance' },
                ].map((sector) => (
                  <div
                    key={sector.label}
                    className="flex items-center gap-2 rounded-xl bg-white border border-breton-sand px-4 py-3"
                  >
                    <sector.icon className="h-4 w-4 text-breton-emerald shrink-0" />
                    <span className="text-sm text-breton-navy font-medium">{sector.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Atelier de production industrielle en Bretagne"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. R\u00e9sultats & chiffres cl\u00e9s */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
            Quelques rep&egrave;res
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-12">
            Chiffres cl&eacute;s
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '7 ans', label: 'en pilotage de production industrielle' },
              { value: 'Lorient', label: 'base, interventions sur site en Bretagne' },
              { value: '100%', label: 'PME industrielles' },
              { value: '3 jours', label: 'pour un premier diagnostic terrain' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl sm:text-5xl text-breton-sand">{stat.value}</p>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. M\u00e9thode en 3 \u00e9tapes */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
            M&eacute;thode
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-breton-navy mb-12">
            Comment on travaille avec vous
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
                title: 'D\u00e9ploiement & formation',
                description:
                  'Mise en production, formation de vos \u00e9quipes sur site, documentation. L\u2019objectif : que vous soyez autonomes.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-[64px] font-serif text-breton-sand/50 leading-none">
                  {item.step}
                </span>
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="h-5 w-5 text-breton-emerald" />
                    <h3 className="text-lg font-bold text-breton-navy">{item.title}</h3>
                  </div>
                  <p className="text-sm text-breton-slate leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cas clients */}
      <Projects limit={3} showLink />

      {/* 7. Insights & blog */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
            Insights
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-breton-navy mb-12">
            Blog
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl border border-breton-sand p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-breton-foam border border-breton-sand rounded-full px-3 py-1 text-breton-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-breton-navy group-hover:text-breton-emerald transition-colors mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-breton-slate line-clamp-2">{article.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-breton-emerald hover:underline"
            >
              Voir tous les articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. &Agrave; propos */}
      <IncarnationSection />

      {/* 9. CTA final */}
      <CtaContact />
    </>
  );
}
