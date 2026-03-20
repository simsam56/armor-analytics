import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Calendar, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections';
import { SITE_CONFIG, getCalendlyUrl } from '@/lib/constants';

interface CityData {
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  description: string;
  industries: string[];
  challenges: string[];
  distance: string;
}

const CITIES: CityData[] = [
  {
    slug: 'lorient',
    name: 'Lorient',
    department: 'Morbihan',
    departmentCode: '56',
    description:
      'Basés à Lorient, nous accompagnons les PME industrielles du Morbihan dans leur transformation data. Automatisation des flux, tableaux de bord, fiabilisation des données — on intervient directement sur site.',
    industries: [
      'Agroalimentaire',
      'Naval & défense',
      'Pêche industrielle',
      'Logistique portuaire',
    ],
    challenges: [
      'Ressaisies entre ERP et fichiers Excel',
      'Reporting manuel hebdomadaire chronophage',
      'Données de production dispersées',
      'Manque de visibilité temps réel sur les encours',
    ],
    distance: 'Sur place',
  },
  {
    slug: 'vannes',
    name: 'Vannes',
    department: 'Morbihan',
    departmentCode: '56',
    description:
      'Nous intervenons régulièrement à Vannes et dans le Morbihan. Les PME industrielles vannetaises ont les mêmes besoins data que les grands groupes — nous leur apportons les mêmes solutions, à leur échelle.',
    industries: ['Agroalimentaire', 'Métallurgie', 'Plasturgie', 'Distribution'],
    challenges: [
      'ERP vieillissant mal exploité',
      'Tableaux de bord inexistants ou sous Excel',
      'Données qualité sur papier',
      'Pas de pilotage temps réel de la production',
    ],
    distance: '1h de Lorient',
  },
  {
    slug: 'quimper',
    name: 'Quimper',
    department: 'Finistère',
    departmentCode: '29',
    description:
      'Nous accompagnons les PME industrielles du Finistère Sud depuis Lorient. Quimper et sa région concentrent un tissu industriel dense, notamment en agroalimentaire, que nous connaissons bien.',
    industries: ['Agroalimentaire', 'Métallurgie', 'Cosmétique', 'Textile'],
    challenges: [
      'Traçabilité produit incomplète',
      'Consolidation de données multi-sites',
      'Reporting qualité pour audits ISO',
      'Automatisation des flux de commandes',
    ],
    distance: '1h15 de Lorient',
  },
  {
    slug: 'rennes',
    name: 'Rennes',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    description:
      'Nous intervenons à Rennes et en Ille-et-Vilaine pour les PME industrielles qui veulent structurer leurs données et automatiser leurs process. Une approche terrain, pas un cabinet parisien.',
    industries: ['Automobile', 'Agroalimentaire', 'Logistique', 'Électronique'],
    challenges: [
      'Données commerciales non exploitées',
      'Absence de tableaux de bord direction',
      'Processus manuels entre services',
      'Pas de vision consolidée multi-sites',
    ],
    distance: '2h de Lorient',
  },
  {
    slug: 'brest',
    name: 'Brest',
    department: 'Finistère',
    departmentCode: '29',
    description:
      'Nous accompagnons les PME industrielles de Brest et du Finistère Nord. La région brestoise, avec son tissu naval et industriel, a des besoins data spécifiques que nous maîtrisons.',
    industries: ['Naval & défense', 'Agroalimentaire', 'Énergie', 'Mécanique'],
    challenges: [
      'Suivi de production complexe (multi-projets)',
      'Données techniques dispersées',
      'Reporting projet chronophage',
      'Manque de connecteurs entre outils métiers',
    ],
    distance: '2h15 de Lorient',
  },
  {
    slug: 'saint-brieuc',
    name: 'Saint-Brieuc',
    department: "Côtes-d'Armor",
    departmentCode: '22',
    description:
      "Nous intervenons à Saint-Brieuc et dans les Côtes-d'Armor. Les PME industrielles costarmoricaines bénéficient de notre approche pragmatique et de notre connaissance du terrain breton.",
    industries: ['Agroalimentaire', 'Plasturgie', 'Logistique', 'BTP'],
    challenges: [
      'Gestion des déchets non optimisée',
      'Données de stock imprécises',
      'Reporting environnemental manuel',
      'Absence de prévisions de production',
    ],
    distance: '1h30 de Lorient',
  },
];

export function generateStaticParams() {
  return CITIES.map((city) => ({ ville: city.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  // Note: we need to handle this synchronously for static generation
  return params.then(({ ville }) => {
    const city = CITIES.find((c) => c.slug === ville);
    if (!city) return { title: 'Page non trouvée' };

    return {
      title: `Data & automatisation PME ${city.name} (${city.departmentCode}) — balise-ia`,
      description: `Automatisation des données et tableaux de bord pour PME industrielles à ${city.name}, ${city.department}. Intervention sur site. Diagnostic gratuit.`,
      openGraph: {
        title: `Data & automatisation PME à ${city.name} — balise-ia`,
        description: `Collectif data spécialisé PME industrielles. Basés à Lorient, on intervient à ${city.name} et en ${city.department}.`,
        type: 'website',
        locale: 'fr_FR',
      },
      alternates: {
        canonical: `https://balise-ia.fr/interventions/${city.slug}`,
      },
    };
  });
}

export default async function CityPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = CITIES.find((c) => c.slug === ville);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Hero title={`Data & automatisation\nà ${city.name}`} subtitle={city.description} />

      {/* Secteurs locaux */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
                Secteurs à {city.name}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Les industries qu&apos;on accompagne en {city.department}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {city.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full bg-breton-emerald/10 px-4 py-2 text-sm font-medium text-breton-emerald"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-breton-emerald" />
                <span>{city.distance} — Intervention sur site</span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
                Problématiques terrain
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Ce qu&apos;on résout pour vous
              </h2>
              <ul className="mt-6 space-y-3">
                {city.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-breton-moss shrink-0 mt-0.5" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos offres */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Comment on intervient à {city.name}
            </h2>
            <p className="mt-4 text-slate-600">
              On part de vos vrais problèmes. Un diagnostic sur site, puis des solutions concrètes
              avec des résultats mesurables.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Diagnostic sur site',
                description: `On vient à ${city.name} pour comprendre vos process, vos données, vos irritants. Durée : 1 à 2 semaines.`,
                price: '2 000 – 5 000 € HT',
              },
              {
                step: '2',
                title: 'Automatisation',
                description:
                  'On met en place les automatisations et tableaux de bord. Vos équipes sont formées et autonomes.',
                price: '8 000 – 25 000 € HT',
              },
              {
                step: '3',
                title: 'IA ciblée',
                description:
                  "Si pertinent, on déploie une solution IA sur un cas d'usage précis. OCR, prévision, classification.",
                price: '15 000 – 40 000 € HT',
              },
            ].map((offer) => (
              <div
                key={offer.step}
                className="rounded-2xl bg-white border border-slate-200 p-8 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-breton-emerald text-white font-bold">
                  {offer.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{offer.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{offer.description}</p>
                <p className="mt-4 text-sm font-medium text-slate-500">{offer.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            PME à {city.name} ?{'\n'}On se déplace chez vous.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Diagnostic gratuit de 30 minutes, sans engagement. On parle concret, pas jargon.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-breton-emerald hover:bg-white/90 h-13 px-8 text-base font-semibold"
            >
              <a
                href={getCalendlyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2.5"
              >
                <Calendar className="h-5 w-5" />
                Diagnostic gratuit — 30 min
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base"
            >
              <Link href="/contact" className="gap-2.5">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">{SITE_CONFIG.email}</p>
        </div>
      </section>
    </>
  );
}
