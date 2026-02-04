import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Cas clients IA & automatisation PME Bretagne — BALISE Data',
  description:
    'Résultats concrets de nos missions IA et automatisation : PME agroalimentaires, métallurgie, logistique en Bretagne. Gains de temps, fiabilité des données, tableaux de bord temps réel.',
  keywords: 'cas clients IA PME Bretagne, résultats automatisation industrie Bretagne, témoignages IA PME Lorient, success stories data Morbihan',
  openGraph: {
    title: 'Cas clients IA & automatisation PME Bretagne — BALISE Data',
    description: 'Des résultats concrets et mesurables chez nos clients PME industriels en Bretagne.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://balisedata.fr/cas-clients',
  },
};

const CASE_STUDIES = [
  {
    sector: 'Industrie agroalimentaire',
    location: 'Morbihan (56)',
    problem: 'Ressaisie manuelle des commandes entre emails et ERP. 2h/jour perdues par l\'équipe ADV.',
    intervention: 'Automatisation de l\'extraction des commandes clients (PDF, Excel, emails) et injection directe dans l\'ERP. Mise en place d\'alertes sur les commandes urgentes.',
    result: '80% du temps de traitement éliminé. Zéro erreur de saisie. Réactivité client x2.',
    testimonial: 'On a récupéré 2 heures par jour. L\'équipe peut enfin se concentrer sur la relation client plutôt que sur la saisie.',
    author: 'Responsable ADV',
    metrics: [
      { label: 'Temps gagné', value: '2h/jour' },
      { label: 'Erreurs', value: '0' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    sector: 'Métallurgie',
    location: 'Finistère (29)',
    problem: 'Aucune visibilité temps réel sur les encours de production. Reporting hebdomadaire manuel compilé par le responsable production.',
    intervention: 'Tableau de bord connecté aux données machines et ERP. Visualisation temps réel des encours, TRS, et écarts de production. Alertes automatiques sur anomalies.',
    result: '4h/semaine de reporting économisées. Réactivité x3 sur les problèmes de production.',
    testimonial: 'Maintenant on voit les problèmes en temps réel au lieu de les découvrir en fin de semaine. On a pu éviter plusieurs arrêts de ligne.',
    author: 'Directeur de production',
    metrics: [
      { label: 'Reporting', value: '-4h/sem' },
      { label: 'Réactivité', value: 'x3' },
    ],
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
  },
  {
    sector: 'Transport & Logistique',
    location: 'Côtes-d\'Armor (22)',
    problem: 'Compilation manuelle des KPIs pour le comité de direction. Données souvent erronées car provenant de multiples sources non connectées.',
    intervention: 'Dashboard automatisé avec consolidation multi-sources (TMS, comptabilité, RH). Envoi programmé du rapport hebdomadaire. Drill-down par agence.',
    result: 'Reporting disponible en J+0 au lieu de J+5. Fiabilité garantie, plus de corrections manuelles.',
    testimonial: 'Le CODIR a enfin des chiffres fiables dès le lundi matin. On peut prendre des décisions sur des données fraîches.',
    author: 'DAF',
    metrics: [
      { label: 'Délai reporting', value: 'J+0' },
      { label: 'Fiabilité', value: '100%' },
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    sector: 'Industrie plastique',
    location: 'Ille-et-Vilaine (35)',
    problem: 'Suivi qualité manuel sur fichiers Excel. Pas de traçabilité, difficultés lors des audits clients.',
    intervention: 'Digitalisation du suivi qualité avec formulaires terrain. Traçabilité complète des contrôles. Tableaux de bord qualité temps réel.',
    result: 'Audits clients passés sans non-conformité. Temps de recherche divisé par 10.',
    testimonial: 'Lors du dernier audit ISO, on a pu sortir toutes les données en 5 minutes. Avant c\'était des heures de recherche.',
    author: 'Responsable Qualité',
    metrics: [
      { label: 'Temps recherche', value: '/10' },
      { label: 'Audits', value: '0 NC' },
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&q=80',
  },
  {
    sector: 'Négoce B2B',
    location: 'Loire-Atlantique (44)',
    problem: 'Pas de visibilité sur les marges par client et par produit. Décisions commerciales à l\'aveugle.',
    intervention: 'Construction d\'un cube d\'analyse connecté à l\'ERP. Tableaux de bord marge par client, famille produit, commercial. Alertes sur marges dégradées.',
    result: '+3 points de marge moyenne identifiés via l\'analyse. Réallocation de l\'effort commercial.',
    testimonial: 'On a découvert que 20% de nos clients nous coûtaient de l\'argent. On a pu renégocier ou arrêter certains contrats.',
    author: 'Directeur Commercial',
    metrics: [
      { label: 'Marge', value: '+3 pts' },
      { label: 'Visibilité', value: '100%' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

const STATS = [
  { value: '15+', label: 'Clients accompagnés' },
  { value: '80%', label: 'Temps gagné en moyenne' },
  { value: '48h', label: 'Délai de réponse' },
];

export default function CasClientsPage() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[104px]" />

      <main id="main-content">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-[#F8FAF9] to-[#E2E8E5]" aria-labelledby="cases-title">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h1
                id="cases-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2922] leading-tight"
              >
                Des résultats{' '}
                <span className="text-[#1B4D3E]">concrets et mesurables</span>
              </h1>
              <p className="mt-6 text-lg text-[#64756C]">
                Découvrez comment nous avons aidé des PME bretonnes à automatiser
                leurs flux de données et améliorer leur pilotage.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16">
              {STATS.map((stat, index) => (
                <div key={stat.label} className={`text-center animate-fade-in-up delay-${(index + 1) * 100}`}>
                  <p className="text-4xl font-bold text-[#1B4D3E] stat-number">{stat.value}</p>
                  <p className="mt-2 text-sm text-[#64756C]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-white" aria-labelledby="all-cases-title">
          <div className="container-content">
            <h2 id="all-cases-title" className="sr-only">
              Tous nos cas clients
            </h2>

            <div className="space-y-16">
              {CASE_STUDIES.map((caseStudy, index) => (
                <article
                  key={index}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                >
                  {/* Image - alternate sides */}
                  <div className={`relative aspect-[16/10] rounded-lg overflow-hidden shadow-lg img-zoom ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={caseStudy.image}
                      alt={`Cas client ${caseStudy.sector}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#1B4D3E] text-white rounded text-sm font-medium">
                        {caseStudy.sector}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-2 text-sm text-[#64756C] mb-4">
                      <span>{caseStudy.location}</span>
                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-[#DC2626] uppercase tracking-wide mb-2">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        Problème initial
                      </h3>
                      <p className="text-[#334139]">{caseStudy.problem}</p>
                    </div>

                    {/* Intervention */}
                    <div className="mb-6">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-[#1B4D3E] uppercase tracking-wide mb-2">
                        <CheckCircle className="h-4 w-4" aria-hidden="true" />
                        Notre intervention
                      </h3>
                      <p className="text-[#334139]">{caseStudy.intervention}</p>
                    </div>

                    {/* Result */}
                    <div className="mb-6 p-4 bg-[#F0FDF4] rounded-lg border border-[#74C69D]">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-[#2D6A4F] uppercase tracking-wide mb-2">
                        <TrendingUp className="h-4 w-4" aria-hidden="true" />
                        Résultat
                      </h3>
                      <p className="font-medium text-[#1E2922]">{caseStudy.result}</p>

                      {/* Metrics */}
                      <div className="mt-4 flex gap-6">
                        {caseStudy.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-2xl font-bold text-[#2D6A4F] stat-number">{metric.value}</p>
                            <p className="text-xs text-[#64756C]">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="testimonial-card flex gap-3 p-4 bg-[#F8FAF9] rounded-lg border border-[#E2E8E5]">
                      <Quote className="h-5 w-5 text-[#CBD5D0] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="text-sm italic text-[#64756C]">&ldquo;{caseStudy.testimonial}&rdquo;</p>
                        <p className="mt-2 text-xs font-medium text-[#64756C]">— {caseStudy.author}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1B4D3E]" aria-labelledby="cta-title">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="cta-title" className="text-2xl sm:text-3xl font-bold text-white">
                Votre situation ressemble à l&apos;une de ces problématiques ?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Décrivez votre contexte, on vous répond sous 48h avec une première analyse
                et des pistes d&apos;amélioration.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1B4D3E] hover:bg-[#F1F5F3] text-base px-10 py-6 rounded-md shadow-lg hover-lift"
                >
                  <Link href="/contact">
                    Demander un diagnostic gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-white/60">
                balisedata@gmail.com — Sans engagement — Lorient, Bretagne
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
