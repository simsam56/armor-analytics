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
  uniqueContent: string;
  industries: string[];
  challenges: string[];
  distance: string;
  postalCode: string;
  latitude: number;
  longitude: number;
}

const CITIES: CityData[] = [
  {
    slug: 'lorient',
    name: 'Lorient',
    department: 'Morbihan',
    departmentCode: '56',
    description:
      'Basés à Lorient, nous accompagnons les PME industrielles du Morbihan dans leur transformation data. Automatisation des flux, tableaux de bord, fiabilisation des données — on intervient directement sur site.',
    uniqueContent:
      "Lorient est le premier port de pêche de France et un pôle industriel majeur du sud Bretagne. La zone industrielle de Kerpont, le bassin naval avec Naval Group, les chantiers navals et le pôle course au large composent un écosystème économique dense et diversifié. Ces filières génèrent des volumes de données considérables, souvent sous-exploités.\n\nLes PME lorientaises ont des besoins data spécifiques liés à la logistique portuaire, la traçabilité maritime et la gestion de production en environnement naval. Entre le suivi des débarquements, la conformité des certifications et l'optimisation des flux entre ateliers et quais, les enjeux de structuration des données sont concrets et quotidiens.\n\nNotre implantation à Lorient nous permet d'intervenir directement sur site, de comprendre les contraintes terrain et de proposer des solutions adaptées aux rythmes et aux réalités de l'industrie portuaire et navale.",
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
    postalCode: '56100',
    latitude: 47.7486,
    longitude: -3.3702,
  },
  {
    slug: 'vannes',
    name: 'Vannes',
    department: 'Morbihan',
    departmentCode: '56',
    description:
      'Nous intervenons régulièrement à Vannes et dans le Morbihan. Les PME industrielles vannetaises ont les mêmes besoins data que les grands groupes — nous leur apportons les mêmes solutions, à leur échelle.',
    uniqueContent:
      "Vannes, porte d'entrée du golfe du Morbihan, est un carrefour économique majeur du sud Bretagne. Son tissu économique, à la fois tertiaire et touristique, s'appuie sur le technopôle de Vannes et un réseau dense d'entreprises de services, de distribution et d'agroalimentaire. La ville attire chaque année de nouvelles PME en croissance.\n\nLes entreprises vannetaises font face à des défis data bien identifiés : consolidation des données commerciales multi-canaux, pilotage de la saisonnalité touristique, optimisation des stocks en distribution et suivi qualité en agroalimentaire. Ces problématiques nécessitent des outils de pilotage adaptés, pas des solutions surdimensionnées.\n\nÀ une heure de Lorient, nous intervenons régulièrement à Vannes et dans le Morbihan pour aider les PME à transformer leurs données en leviers de décision concrets et mesurables.",
    industries: ['Agroalimentaire', 'Métallurgie', 'Plasturgie', 'Distribution'],
    challenges: [
      'ERP vieillissant mal exploité',
      'Tableaux de bord inexistants ou sous Excel',
      'Données qualité sur papier',
      'Pas de pilotage temps réel de la production',
    ],
    distance: '1h de Lorient',
    postalCode: '56000',
    latitude: 47.6553,
    longitude: -2.76,
  },
  {
    slug: 'quimper',
    name: 'Quimper',
    department: 'Finistère',
    departmentCode: '29',
    description:
      'Nous accompagnons les PME industrielles du Finistère Sud depuis Lorient. Quimper et sa région concentrent un tissu industriel dense, notamment en agroalimentaire, que nous connaissons bien.',
    uniqueContent:
      "Le Finistère Sud, autour de Quimper, concentre un tissu industriel parmi les plus denses de Bretagne. Les industries agroalimentaires — conserveries, produits de la mer, plats préparés — y côtoient la filière cosmétique bretonne et des PME industrielles implantées dans la zone de Creac'h Gwen et ses environs.\n\nCes entreprises, souvent familiales et ancrées dans leur territoire, manipulent des données de production, de traçabilité et de qualité qui restent trop souvent sur papier ou dans des tableurs isolés. Les audits ISO, les exigences de traçabilité alimentaire et la gestion multi-sites créent un besoin réel de structuration.\n\nDepuis Lorient, à une heure quinze de route, nous accompagnons les PME quimpéroises dans la mise en place de solutions data pragmatiques : tableaux de bord de production, automatisation du reporting qualité et connecteurs entre ERP et outils métiers.",
    industries: ['Agroalimentaire', 'Métallurgie', 'Cosmétique', 'Textile'],
    challenges: [
      'Traçabilité produit incomplète',
      'Consolidation de données multi-sites',
      'Reporting qualité pour audits ISO',
      'Automatisation des flux de commandes',
    ],
    distance: '1h15 de Lorient',
    postalCode: '29000',
    latitude: 47.996,
    longitude: -4.1024,
  },
  {
    slug: 'rennes',
    name: 'Rennes',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    description:
      'Nous intervenons à Rennes et en Ille-et-Vilaine pour les PME industrielles qui veulent structurer leurs données et automatiser leurs process. Une approche terrain, pas un cabinet parisien.',
    uniqueContent:
      "Rennes est le moteur économique de la Bretagne, porté par le pôle numérique Rennes Atalante, la French Tech Rennes Saint-Malo et un écosystème tech en pleine expansion. Le tissu automobile hérité de l'ère PSA, les entreprises de services numériques et les startups en croissance composent un paysage économique dynamique et exigeant.\n\nLes PME rennaises en croissance ont besoin de structurer leur data pour passer à l'échelle. Consolidation des données commerciales, automatisation des reportings, mise en place de tableaux de bord direction : ces chantiers sont souvent repoussés faute de ressources internes dédiées.\n\nL'écosystème tech rennais favorise l'adoption d'outils modernes, mais les PME industrielles ont besoin d'un accompagnement terrain pour traduire cette maturité technologique en résultats concrets. C'est précisément notre approche : pragmatique, orientée ROI, sans jargon inutile.",
    industries: ['Automobile', 'Agroalimentaire', 'Logistique', 'Électronique'],
    challenges: [
      'Données commerciales non exploitées',
      'Absence de tableaux de bord direction',
      'Processus manuels entre services',
      'Pas de vision consolidée multi-sites',
    ],
    distance: '2h de Lorient',
    postalCode: '35000',
    latitude: 48.1173,
    longitude: -1.6778,
  },
  {
    slug: 'brest',
    name: 'Brest',
    department: 'Finistère',
    departmentCode: '29',
    description:
      'Nous accompagnons les PME industrielles de Brest et du Finistère Nord. La région brestoise, avec son tissu naval et industriel, a des besoins data spécifiques que nous maîtrisons.',
    uniqueContent:
      "Brest est un pôle industriel stratégique, structuré autour du pôle mer Bretagne Atlantique, du technopôle Brest-Iroise et d'un écosystème naval et de défense de premier plan. Les énergies marines renouvelables, en plein essor, ajoutent une dimension supplémentaire à ce tissu économique déjà dense et technique.\n\nLes entreprises brestoises évoluent dans des environnements exigeants : traçabilité stricte, gestion de projets complexes multi-partenaires, conformité réglementaire dans les secteurs naval et défense. Ces contraintes génèrent des volumes de données importants qui nécessitent des outils de pilotage fiables et sécurisés.\n\nNotre connaissance du milieu industriel breton et notre approche terrain nous permettent d'accompagner les PME brestoises dans la structuration de leurs données, du diagnostic initial à la mise en production d'outils adaptés à leurs contraintes métier spécifiques.",
    industries: ['Naval & défense', 'Agroalimentaire', 'Énergie', 'Mécanique'],
    challenges: [
      'Suivi de production complexe (multi-projets)',
      'Données techniques dispersées',
      'Reporting projet chronophage',
      'Manque de connecteurs entre outils métiers',
    ],
    distance: '2h15 de Lorient',
    postalCode: '29200',
    latitude: 48.3904,
    longitude: -4.4861,
  },
  {
    slug: 'saint-brieuc',
    name: 'Saint-Brieuc',
    department: "Côtes-d'Armor",
    departmentCode: '22',
    description:
      "Nous intervenons à Saint-Brieuc et dans les Côtes-d'Armor. Les PME industrielles costarmoricaines bénéficient de notre approche pragmatique et de notre connaissance du terrain breton.",
    uniqueContent:
      "Saint-Brieuc et les Côtes-d'Armor forment un territoire en pleine mutation économique. Le tissu agroalimentaire historique du département côtoie désormais le chantier du parc éolien offshore, l'un des plus grands projets industriels de la façade atlantique, et un secteur BTP en transformation.\n\nLes PME industrielles costarmoricaines cherchent à moderniser leurs outils de pilotage pour rester compétitives. Gestion de production, suivi des stocks, reporting environnemental : les données existent mais restent trop souvent dispersées entre tableurs, logiciels métiers et documents papier.\n\nÀ une heure trente de Lorient, nous accompagnons les entreprises de Saint-Brieuc et des Côtes-d'Armor dans la structuration de leurs données et la mise en place de tableaux de bord opérationnels. Notre approche pragmatique s'adapte aux réalités du terrain costarmoricain.",
    industries: ['Agroalimentaire', 'Plasturgie', 'Logistique', 'BTP'],
    challenges: [
      'Gestion des déchets non optimisée',
      'Données de stock imprécises',
      'Reporting environnemental manuel',
      'Absence de prévisions de production',
    ],
    distance: '1h30 de Lorient',
    postalCode: '22000',
    latitude: 48.5141,
    longitude: -2.76,
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
      title: `Data & automatisation PME ${city.name} (${city.departmentCode})`,
      description: `Automatisation des données et tableaux de bord pour PME industrielles à ${city.name}, ${city.department}. Intervention sur site. Diagnostic gratuit.`,
      openGraph: {
        title: `Data & automatisation PME à ${city.name} — balise-ia`,
        description: `Collectif data spécialisé PME industrielles. Basés à Lorient, on intervient à ${city.name} et en ${city.department}.`,
        type: 'website',
        locale: 'fr_FR',
      },
      alternates: {
        canonical: `https://www.balise-ia.fr/interventions/${city.slug}`,
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

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `balise-ia \u2014 ${city.name}`,
    description: `Automatisation des données et tableaux de bord pour PME industrielles à ${city.name}, ${city.department}.`,
    url: `https://www.balise-ia.fr/interventions/${city.slug}`,
    email: SITE_CONFIG.email,
    telephone: '+33663857739',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.department,
      postalCode: city.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.latitude,
      longitude: city.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    parentOrganization: {
      '@type': 'ProfessionalService',
      name: 'balise-ia',
      url: 'https://www.balise-ia.fr',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Hero title={`Data & automatisation\nà ${city.name}`} subtitle={city.description} />

      {/* Tissu économique local */}
      <section className="py-16 sm:py-20 bg-breton-foam">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Le tissu économique à {city.name}
          </h2>
          <div className="mt-8 space-y-6">
            {city.uniqueContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-16 sm:py-20 bg-breton-foam">
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
                className="rounded-2xl bg-white border border-breton-sand p-8 text-center"
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
