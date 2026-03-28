import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Target,
  Shield,
  MapPin,
  CheckCircle,
  Lock,
  Wrench,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections';
import { TeamSection } from '@/components/sections/TeamSection';
import { CoastalBand } from '@/components/sections/CoastalBand';

export const metadata: Metadata = {
  title: 'À propos | Collectif data & automatisation PME industrielles',
  description:
    "Collectif de spécialistes data et automatisation pour PME industrielles. Basés à Lorient, nous intervenons sur site en Bretagne. Pas de juniors, pas d'intermédiaires, des résultats mesurables.",
  openGraph: {
    title: 'À propos — balise-ia',
    description:
      'Collectif data spécialisé PME industrielles bretonnes. Basés à Lorient, on intervient sur site.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/a-propos',
  },
};

const VALUES = [
  {
    icon: Target,
    title: 'Pragmatisme',
    description:
      'On part de vos irritants quotidiens — pas d\u2019un cahier des charges théorique. Chaque intervention vise un gain concret et mesurable.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description:
      'Basés à Lorient, on se déplace chez vous. Entretiens métier, ateliers terrain, formation : on comprend votre réalité avant de proposer quoi que ce soit.',
  },
  {
    icon: Shield,
    title: 'Transparence',
    description:
      'Prix clairs dès le départ, délais tenus, résultats documentés dans un bilan chiffré. Pas de surprise en fin de projet.',
  },
];

const GUARANTEES = [
  {
    icon: Lock,
    title: 'Confidentialité',
    description:
      'NDA systématique avant tout accès à vos données. Hébergement en France. Suppression des données de test après livraison.',
  },
  {
    icon: Wrench,
    title: 'Vos outils, pas les nôtres',
    description:
      'On se branche sur votre ERP, votre Excel, vos process existants. Pas de grand remplacement, pas de migration forcée.',
  },
  {
    icon: BookOpen,
    title: 'Autonomie garantie',
    description:
      'Documentation complète, formation des équipes, support post-livraison. L\u2019objectif : que vous n\u2019ayez plus besoin de nous au quotidien.',
  },
];

const DIFFERENTIATORS = [
  {
    us: 'Experts seniors uniquement',
    them: 'Juniors sur le terrain',
  },
  {
    us: 'Interlocuteur unique du début à la fin',
    them: 'Commercial ≠ consultant ≠ développeur',
  },
  {
    us: 'On utilise vos outils existants',
    them: 'Remplacement complet du SI',
  },
  {
    us: 'Résultats en quelques semaines',
    them: 'Projet de 12-18 mois',
  },
  {
    us: 'Tarifs clairs, budget maîtrisé',
    them: 'Régie au jour facturé',
  },
  {
    us: 'Intervention sur site en Bretagne',
    them: 'Consultants parisiens en déplacement',
  },
];

const STORY_CHAPTERS = [
  {
    title: 'Le constat',
    content:
      'Dans les PME industrielles, le schéma est toujours le même : des équipes compétentes qui perdent du temps sur des tâches sans valeur. Des données dispersées entre ERP, Excel et fiches papier. Des décisions prises à l\u2019instinct faute de vision claire.',
  },
  {
    title: 'Le problème',
    content:
      'Les ESN proposent des solutions calibrées pour les grands comptes : chères, longues, et qui nécessitent des équipes IT dédiées. Les éditeurs vendent des logiciels génériques qui ne collent pas au métier. Résultat : les PME restent bloquées.',
  },
  {
    title: 'Notre réponse',
    content:
      'balise-ia intervient différemment : on part de vos vrais problèmes, on utilise vos outils existants, et on livre des résultats rapides. L\u2019objectif n\u2019est pas de vous rendre dépendants, mais de vous rendre autonomes.',
  },
];

const AREAS = ['Lorient', 'Vannes', 'Quimper', 'Brest', 'Rennes', 'Saint-Brieuc', 'Nantes'];

export default function AboutPage() {
  return (
    <>
      <Hero
        title={'Un collectif terrain,\nspécialisé PME industrielles'}
        subtitle="On connaît vos ERP, vos contraintes de production, vos enjeux de fiabilité. Parce qu'on a travaillé dans l'industrie avant de faire du conseil."
      />

      {/* Ce qu'on fait concrètement */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
                Ce qu&apos;on fait
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                On automatise ce qui vous fait perdre du temps
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Ressaisies entre outils, reporting manuel, données dispersées, fichiers Excel qui
                circulent par email — on élimine tout ça. On met en place des flux automatisés, des
                tableaux de bord utiles, et on forme vos équipes pour qu&apos;elles soient
                autonomes.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                On ne vend pas de la technologie. On vend du temps gagné, des erreurs évitées et de
                la visibilité sur votre activité.
              </p>
            </div>

            <div className="space-y-4">
              {GUARANTEES.map((guarantee) => (
                <div
                  key={guarantee.title}
                  className="flex gap-4 p-5 rounded-xl bg-breton-foam border border-breton-sand"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-breton-emerald/10">
                    <guarantee.icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{guarantee.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi balise-ia existe */}
      <section className="py-20 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
              Notre histoire
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pourquoi balise-ia existe
            </h2>
          </div>

          <div className="space-y-8">
            {STORY_CHAPTERS.map((chapter, index) => (
              <div key={chapter.title} className="relative pl-8 border-l-2 border-breton-sand">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-breton-emerald flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{chapter.title}</h3>
                <p className="text-slate-600 leading-relaxed">{chapter.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bande vidéo côtière */}
      <CoastalBand />

      {/* Valeurs */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
              Nos principes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ce sur quoi on ne transige pas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-breton-foam border border-breton-sand"
              >
                <div className="h-12 w-12 rounded-xl bg-breton-emerald/10 flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-breton-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <TeamSection />

      {/* Comparaison ESN */}
      <section className="py-20 sm:py-24 bg-breton-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ce qui nous différencie
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Concrètement, voici ce que ça change de travailler avec un collectif terrain plutôt
              qu&apos;une ESN ou un grand cabinet.
            </p>
          </div>

          <div className="space-y-3">
            {DIFFERENTIATORS.map((diff) => (
              <div key={diff.us} className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4">
                  <CheckCircle className="h-4 w-4 text-breton-moss shrink-0" />
                  <span className="text-sm text-white font-medium">{diff.us}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/5 px-5 py-4">
                  <span className="text-white/30 shrink-0 text-sm">✗</span>
                  <span className="text-sm text-white/40">{diff.them}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
              Zone d&apos;intervention
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Basés à Lorient, on intervient en Bretagne
            </h2>
            <p className="mt-4 text-slate-600">
              Les phases clés se font sur site. Le développement et le suivi courant peuvent se
              faire à distance pour optimiser vos coûts.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((city) => (
              <Link
                key={city}
                href={`/interventions/${city.toLowerCase().replace("'", '').replace(' ', '-')}`}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-slate-700 border border-breton-sand hover:border-breton-emerald/30 transition-colors"
              >
                <MapPin className="inline h-3.5 w-3.5 mr-1.5 text-breton-emerald" />
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un premier échange ?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            30 minutes pour comprendre votre contexte. Sans engagement, sans jargon, on parle
            concret.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-13 px-8 text-base gap-2">
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base border-slate-300"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">contact@balise-ia.fr</p>
        </div>
      </section>
    </>
  );
}
