import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Target,
  Shield,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections';

export const metadata: Metadata = {
  title: 'À propos | Consultant IA & automatisation PME Bretagne — balise-ia',
  description:
    "Équipe d'experts en IA et automatisation des données pour PME industrielles. Basés à Lorient, nous intervenons dans toute la Bretagne. Pas de juniors, pas d'intermédiaires.",
  openGraph: {
    title: 'À propos | Consultant IA & automatisation PME Bretagne',
    description: "Une équipe d'experts IA et data, ancrée en Bretagne.",
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://balise-ia.fr/a-propos',
  },
};

const VALUES = [
  {
    icon: Target,
    title: 'Pragmatisme',
    description:
      'On part de vos vrais problèmes. Pas de solutions théoriques, mais des résultats mesurables rapidement.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description:
      'Basés à Lorient, on intervient sur site. Vous parlez directement aux experts qui font le travail.',
  },
  {
    icon: Shield,
    title: 'Transparence',
    description:
      'Prix clairs, délais tenus, résultats documentés. Pas de surprise, pas de frais cachés.',
  },
];

const ADVANTAGES = [
  {
    title: 'Pas de juniors',
    description: 'Seuls des experts confirmés travaillent sur votre projet.',
  },
  {
    title: "Pas d'intermédiaires",
    description: 'Vous échangez directement avec ceux qui réalisent le travail.',
  },
  {
    title: 'Intervention sur site',
    description: 'On vient chez vous pour comprendre votre contexte.',
  },
  {
    title: 'Approche terrain',
    description: 'On connaît les contraintes des PME industrielles.',
  },
];

const STORY_CHAPTERS = [
  {
    title: 'Le constat terrain',
    content:
      "Après plusieurs années passées en industrie, notre équipe a vu le même schéma se répéter dans chaque PME : des équipes compétentes qui perdent un temps fou sur des tâches sans valeur, des données dispersées impossibles à fiabiliser, et des décisions prises à l'instinct faute de mieux.",
  },
  {
    title: 'Le problème des solutions existantes',
    content:
      "Les grandes ESN proposent des solutions dimensionnées pour les grands comptes : chères, longues à déployer, et qui nécessitent des équipes techniques dédiées pour les maintenir. Les éditeurs de logiciels vendent des outils génériques qui ne s'adaptent pas aux spécificités de chaque métier.",
  },
  {
    title: 'Une approche différente',
    content:
      "balise-ia propose une approche pragmatique : on part de vos vrais problèmes (pas d'un cahier des charges théorique), on utilise vos outils existants (pas de grand remplacement), et on livre des résultats rapides (pas de projet de 18 mois). L'objectif : vous rendre autonomes, pas dépendants.",
  },
  {
    title: 'Pourquoi la Bretagne',
    content:
      "Parce qu'on y vit, qu'on y travaille, et qu'on connaît le tissu industriel local. Les PME bretonnes méritent des partenaires qui comprennent leur réalité, pas des consultants parisiens qui débarquent en TGV et repartent le soir même.",
  },
];

const AREAS = ['Lorient', 'Vannes', 'Quimper', 'Brest', 'Rennes', 'Saint-Brieuc', 'Nantes'];

export default function AboutPage() {
  return (
    <>
      <Hero
        title={"Une équipe d'experts,\nancrée en Bretagne"}
        subtitle="balise-ia accompagne les PME industrielles bretonnes dans leur transformation data. Automatisation des flux, tableaux de bord, reporting : on vous aide à piloter votre activité avec des données fiables."
      />

      {/* Pourquoi balise-ia existe */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#40916C]">Notre histoire</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pourquoi balise-ia existe
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              balise-ia est née d&apos;un constat simple : les PME industrielles ont les mêmes besoins data que les grands groupes, mais pas les mêmes moyens.
            </p>
          </div>

          <div className="space-y-8">
            {STORY_CHAPTERS.map((chapter, index) => (
              <div
                key={chapter.title}
                className="relative pl-8 border-l-2 border-slate-200 hover:border-[#1B4D3E] transition-colors"
              >
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-[#1B4D3E] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{chapter.title}</h3>
                <p className="text-slate-600 leading-relaxed">{chapter.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#40916C]">Nos valeurs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Une approche pragmatique et transparente
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white border border-slate-200"
              >
                <div className="h-12 w-12 rounded-xl bg-[#1B4D3E]/8 flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-[#1B4D3E]" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 sm:py-24 bg-[#0F2B23]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pourquoi nous choisir
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Ce qui nous différencie des grandes ESN et cabinets de conseil.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((advantage) => (
              <div
                key={advantage.title}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#40916C] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{advantage.title}</h3>
                    <p className="text-sm text-white/60">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#40916C]">Zone d&apos;intervention</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Basés à Lorient, on intervient en Bretagne
            </h2>
            <p className="mt-4 text-slate-600">
              Intervention à distance également possible pour le suivi et les ajustements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((city) => (
              <span
                key={city}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200"
              >
                <MapPin className="inline h-3.5 w-3.5 mr-1.5 text-[#1B4D3E]" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Envie d&apos;en discuter ?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Évaluez votre potentiel data en 3 minutes ou contactez-nous directement.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-13 px-8 text-base">
              <Link href="/audit-ia" className="gap-2">
                Faire mon audit IA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 px-8 text-base border-slate-300">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">contact@balise-ia.fr</p>
        </div>
      </section>
    </>
  );
}
