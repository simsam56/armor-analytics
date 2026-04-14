import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle,
  Lock,
  Wrench,
  BookOpen,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: '7 ans de terrain industriel, puis la data',
  description:
    '7 ans de terrain industriel (Naval Group, fr\u00e9gates FDI) avant de fonder balise-ia \u00e0 Lorient. Data, IA et automatisation pour PME bretonnes.',
  openGraph: {
    title: 'À propos — balise-ia',
    description:
      '7 ans de terrain industriel puis la data. Fondateur de BALISE IA, basé à Lorient.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/a-propos',
  },
};

const DIFFERENTIATORS = [
  {
    us: 'Expérience terrain industriel (7 ans)',
    them: 'Consultants sortis d\u2019école',
  },
  {
    us: 'Interlocuteur unique du début à la fin',
    them: 'Commercial ≠ consultant ≠ développeur',
  },
  {
    us: 'J\u2019utilise vos outils existants',
    them: 'Remplacement complet du SI',
  },
  {
    us: 'Résultats en quelques semaines',
    them: 'Projet de 12-18 mois',
  },
  {
    us: 'Diagnostic terrain gratuit, sans engagement',
    them: 'Régie au jour facturé',
  },
  {
    us: 'Intervention sur site en Bretagne',
    them: 'Consultants parisiens en déplacement',
  },
];

const AREAS = ['Lorient', 'Vannes', 'Quimper', 'Brest', 'Rennes', 'Saint-Brieuc', 'Nantes'];

export default function AboutPage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Simon Hingant',
    jobTitle: 'Fondateur',
    worksFor: {
      '@type': 'Organization',
      name: 'balise-ia',
      url: 'https://www.balise-ia.fr',
    },
    sameAs: ['https://www.linkedin.com/company/balise-ia'],
    knowsAbout: [
      'Pilotage de production',
      'Data engineering',
      'Intelligence artificielle',
      'Power BI',
      'Automatisation industrielle',
      'Construction navale',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lorient',
      addressRegion: 'Bretagne',
      addressCountry: 'FR',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'À propos' }]} />
      <Hero
        title="7 ans de terrain industriel. Puis la data."
        subtitle="Ingénieur en génie des systèmes industriels, 7 ans sur le terrain — puis formation data science et IA pour créer balise-ia."
      />

      {/* Section 1 — Le parcours */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-breton-sand">
              <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-breton-emerald flex items-center justify-center">
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-breton-navy mb-2">2017–2024 : Le terrain</h3>
              <p className="text-breton-slate leading-relaxed">
                Ingénieur en génie des systèmes industriels. 7 ans dans l&apos;industrie — chargé
                d&apos;affaires, responsable technique d&apos;exécution. Des plannings, des achats,
                de la logistique, de la production. Je connais le terrain.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-breton-sand">
              <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-breton-emerald flex items-center justify-center">
                <span className="text-xs font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-breton-navy mb-2">2024 : La formation</h3>
              <p className="text-breton-slate leading-relaxed">
                Formation data science et intelligence artificielle. Pas pour fuir l&apos;industrie —
                pour lui apporter les outils qu&apos;elle n&apos;a pas encore.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-breton-emerald">
              <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-breton-emerald flex items-center justify-center">
                <span className="text-xs font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-breton-navy mb-2">2025 : balise-ia</h3>
              <p className="text-breton-slate leading-relaxed">
                Création de balise-ia, basé à Lorient. J&apos;aide les PME industrielles
                bretonnes à piloter leur production autrement — dashboards temps réel,
                automatisation des tâches répétitives, capture de la connaissance métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Ma conviction */}
      <section className="py-20 sm:py-24 bg-breton-sand">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
            Ma conviction
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl mb-6">
            L&apos;IA ne sert à rien si les équipes ne l&apos;adoptent pas.
          </h2>
          <p className="text-lg text-breton-slate leading-relaxed">
            Et les équipes n&apos;adoptent pas ce qu&apos;elles ne comprennent pas. Mon travail
            c&apos;est de faire le lien entre la technologie et les gens du terrain — parce que
            j&apos;ai été de leur côté.
          </p>
        </div>
      </section>

      {/* Section 3 — Ce que je ne fais pas */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
              Ce que je ne fais pas
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: XCircle,
                text: 'Je ne livre pas des outils et je disparais.',
              },
              {
                icon: XCircle,
                text: 'Je ne vends pas des logiciels à 50k€ qui ne tournent jamais.',
              },
              {
                icon: XCircle,
                text: 'Je ne travaille pas avec des entreprises qui veulent remplacer leurs équipes par de l\u2019IA.',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex gap-3 p-6 rounded-2xl bg-breton-foam border border-breton-sand"
              >
                <item.icon className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-breton-slate leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
              Mes engagements
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: 'Confidentialité',
                description:
                  'NDA systématique avant tout accès à vos données. Hébergement en France. Suppression des données de test après livraison.',
              },
              {
                icon: Wrench,
                title: 'Vos outils, pas les miens',
                description:
                  'Je me branche sur votre ERP, votre Excel, vos process existants. Pas de grand remplacement, pas de migration forcée.',
              },
              {
                icon: BookOpen,
                title: 'Autonomie garantie',
                description:
                  'Documentation complète, formation des équipes, support post-livraison. L\u2019objectif : que vous n\u2019ayez plus besoin de moi au quotidien.',
              },
            ].map((guarantee) => (
              <div
                key={guarantee.title}
                className="p-8 rounded-2xl bg-white border border-breton-sand"
              >
                <div className="h-12 w-12 rounded-xl bg-breton-emerald/10 flex items-center justify-center mb-6">
                  <guarantee.icon className="h-6 w-6 text-breton-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-breton-navy mb-3">{guarantee.title}</h3>
                <p className="text-breton-slate leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison */}
      <section className="py-20 sm:py-24 bg-breton-sand">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
              Ce qui me différencie
            </h2>
            <p className="mt-4 text-lg text-breton-slate">
              Concrètement, voici ce que ça change de travailler avec quelqu&apos;un qui vient
              du terrain plutôt qu&apos;une ESN ou un grand cabinet.
            </p>
          </div>

          <div className="space-y-3">
            {DIFFERENTIATORS.map((diff) => (
              <div key={diff.us} className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-breton-emerald/10 border border-breton-emerald/20 px-5 py-4">
                  <CheckCircle className="h-4 w-4 text-breton-emerald shrink-0" />
                  <span className="text-sm text-breton-navy font-medium">{diff.us}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white border border-breton-sand px-5 py-4">
                  <span className="text-breton-granite shrink-0 text-sm">✗</span>
                  <span className="text-sm text-breton-granite">{diff.them}</span>
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
              Basé à Lorient, j&apos;interviens en Bretagne
            </h2>
            <p className="mt-4 text-breton-slate">
              Les phases clés se font sur site. Le développement et le suivi courant peuvent se
              faire à distance pour optimiser vos coûts.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((city) => (
              <Link
                key={city}
                href={`/interventions/${city.toLowerCase().replace("'", '').replace(' ', '-')}`}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-breton-slate border border-breton-sand hover:border-breton-emerald/30 transition-colors"
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
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            Prêt à en discuter ?
          </h2>
          <p className="mt-4 text-lg text-breton-slate">
            Diagnostic terrain de 3 jours sur site, ou échange gratuit de 30 minutes. Sans
            engagement, sans jargon.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-13 px-8 text-base gap-2">
              <Link href="/audit-ia">Diagnostic terrain gratuit →</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base border-breton-sand"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-breton-granite">contact@balise-ia.fr</p>
        </div>
      </section>
    </>
  );
}
