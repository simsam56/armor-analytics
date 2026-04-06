import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const VideoBackground = dynamic(
  () =>
    import('@/components/ui/video-background').then((m) => ({ default: m.VideoBackground })),
  {
    ssr: false,
    loading: () => <div className="relative w-full aspect-video" />,
  }
);
import { FREE_RESOURCES } from '@/lib/constants';
import { BookOpen, Users, Download, BrainCircuit, BarChart3, Wrench, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation IA et data pour PME en Bretagne — Sur site',
  description:
    'Formez vos équipes à l’IA et à la data. Ateliers sur site en Bretagne, accompagnement mensuel, transfert de compétences. Pas de jargon, des outils concrets.',
  openGraph: {
    title: 'Formation IA et data pour PME en Bretagne',
    description: 'Ateliers sur site en Bretagne, accompagnement mensuel, transfert de comp\u00e9tences.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: { canonical: 'https://www.balise-ia.fr/formation' },
};

const FORMATION_FAQ = [
  {
    q: 'Faut-il des compétences techniques préalables ?',
    a: 'Non. Nos formations partent de zéro et s’adaptent au niveau de chaque participant. On forme des dirigeants, des commerciaux, des techniciens et des administratifs.',
  },
  {
    q: 'Combien de personnes par session ?',
    a: '4 à 8 personnes par atelier pour garantir un accompagnement individuel. Au-delà, on dédouble les sessions.',
  },
  {
    q: 'La formation est-elle finançable ?',
    a: 'Nous travaillons à l’obtention de la certification Qualiopi pour permettre la prise en charge par les OPCO. En attendant, nos formations restent accessibles et rentabilisées dès la première semaine d’application.',
  },
  {
    q: 'Quel suivi après la formation ?',
    a: 'Support de 30 jours inclus après chaque session. Pour un accompagnement régulier, on propose un forfait mensuel avec des points réguliers.',
  },
  {
    q: 'Vous formez à quels outils exactement ?',
    a: 'Claude et ChatGPT (prompting avancé), Power BI (tableaux de bord), n8n et Make (automatisation), Excel avec IA. On s’adapte à vos outils existants.',
  },
];

const formationFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FORMATION_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function FormationPage() {
  const formations = [
    {
      icon: BrainCircuit,
      title: 'Formation IA & prompting',
      description:
        'Vos équipes apprennent à utiliser l’IA au quotidien : rédaction, analyse, automatisation de tâches. Cas pratiques sur leurs vrais sujets.',
      topics: ['Prompting avancé', 'Claude / ChatGPT', 'Cas d’usage métier', 'Limites et bonnes pratiques'],
    },
    {
      icon: BarChart3,
      title: 'Formation data & Power BI',
      description:
        'Vos équipes apprennent à lire, créer et modifier des tableaux de bord. Pour que le reporting ne dépende plus d’une seule personne.',
      topics: ['Lecture de dashboards', 'Création de rapports', 'Filtres et alertes', 'Bonnes pratiques data'],
    },
    {
      icon: Wrench,
      title: 'Formation automatisation',
      description:
        'Vos équipes apprennent à créer et maintenir des automatisations simples. Pour que les process continuent de tourner sans nous.',
      topics: ['n8n / Make', 'Scénarios de base', 'Déboggage', 'Bonnes pratiques'],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formationFaqJsonLd) }}
      />
      <Hero
        title="Rendez vos équipes autonomes sur l&apos;IA et la data"
        subtitle="Formations sur site en Bretagne. Pratique, pas théorique. Vos équipes repartent avec des outils qu&apos;elles utilisent dès le lendemain."
      />

      {/* CTA sous le hero */}
      <div className="bg-breton-sand py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
            <Link href="/contact">Discutons de votre projet →</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-breton-navy text-breton-navy"
          >
            <Link href="/audit-ia">Ou lancer le diagnostic</Link>
          </Button>
        </div>
      </div>

      {/* 3 formations */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Nos formations
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Chaque formation est adaptée à votre contexte. On part de vos vrais outils, vos vrais
            process, vos vrais problèmes.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {formations.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border-2 border-breton-sand p-8 flex flex-col"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-breton-emerald/10 mb-4">
                  <f.icon className="h-5 w-5 text-breton-emerald" />
                </div>
                <h3 className="text-lg font-bold text-breton-navy mb-2">{f.title}</h3>
                <p className="text-breton-slate text-sm leading-relaxed mb-4 flex-1">
                  {f.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {f.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-breton-foam border border-breton-sand rounded-full px-3 py-1 text-breton-slate"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement sur site */}
      <section className="py-[110px] bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10 mb-6">
                <Users className="h-6 w-6 text-breton-emerald" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-breton-navy">
                Accompagnement sur site
              </h2>
              <p className="mt-4 text-lg text-breton-slate leading-relaxed">
                On vient chez vous. Vos équipes apprennent en faisant, sur leurs vrais outils,
                avec leurs vrais process. La formation et la mise en place se font en même temps.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Ateliers pratiques en petits groupes (2-3h)',
                  'Adaptés à chaque métier (production, ADV, direction)',
                  'Documentation et support post-formation inclus',
                  'Accompagnement mensuel disponible',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-breton-emerald shrink-0" />
                    <span className="text-breton-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-breton-sand p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
                Format type
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Durée', value: 'Demi-journée ou journée complète' },
                  { label: 'Participants', value: '4 à 8 personnes par atelier' },
                  { label: 'Lieu', value: 'Dans vos locaux (Bretagne)' },
                  { label: 'Suivi', value: 'Support 30 jours post-formation' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between border-b border-breton-sand pb-3"
                  >
                    <span className="text-sm text-breton-granite">{row.label}</span>
                    <span className="text-sm font-medium text-breton-navy">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources gratuites */}
      <section className="py-16 sm:py-20 bg-white border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-copper/10 mb-6">
            <BookOpen className="h-6 w-6 text-breton-copper" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy">
            Ressources gratuites
          </h2>
          <p className="mt-4 text-lg text-breton-slate">
            Guides et checklists pratiques, téléchargeables gratuitement.
          </p>

          {FREE_RESOURCES.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-breton-sand bg-breton-foam p-12 text-center">
              <Download className="mx-auto h-8 w-8 text-breton-granite mb-4" />
              <p className="text-breton-slate">Ressources en préparation — revenez bientôt.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FREE_RESOURCES.map((resource) => (
                <div key={resource.id} className="rounded-2xl bg-breton-foam border border-breton-sand p-6">
                  <span className="inline-block bg-breton-emerald/10 text-breton-emerald text-xs font-semibold px-2 py-1 rounded-full mb-4">
                    GRATUIT
                  </span>
                  <h3 className="font-bold text-breton-navy mb-2">{resource.title}</h3>
                  <p className="text-sm text-breton-slate mb-4">{resource.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger gratuitement
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/ia"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Découvrir nos missions automatisation →
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/data"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Découvrir nos missions data →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-breton-foam">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-breton-navy text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {FORMATION_FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-breton-sand bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-breton-foam transition-colors">
                  <h3 className="font-medium text-breton-navy pr-4">{item.q}</h3>
                  <ChevronDown className="w-4 h-4 text-breton-granite shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-breton-slate leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/intelligence-artificielle-pme-bretagne-guide"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Lire : Guide IA pour les PME bretonnes →
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/ia"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Automatisation et IA →
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/data"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Tableaux de bord et reporting →
          </Link>
        </div>
      </section>

      {/* CTA avec vidéo drone */}
      <VideoBackground
        src="/videos/drone-sunset-voilier.mp4"
        poster="/videos/poster-sunset.jpg"
        startTime={3}
        overlayClassName="bg-breton-navy/75"
        className="py-20 sm:py-28"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Vos &eacute;quipes sont pr&ecirc;tes &agrave; monter en comp&eacute;tences ?
          </h2>
          <p className="mt-4 text-white/60">
            On d&eacute;finit ensemble le programme le plus adapt&eacute; &agrave; votre contexte.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90"
            >
              <Link href="/contact">Discutons de votre projet →</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:border-white/40"
            >
              <Link href="/audit-ia">Lancer le diagnostic</Link>
            </Button>
          </div>
        </div>
      </VideoBackground>
    </>
  );
}
