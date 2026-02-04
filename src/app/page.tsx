import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  BarChart3,
  Zap,
  Shield,
  Users,
  MapPin,
  Download,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'IA & automatisation données PME Bretagne — BALISE Data | Lorient, Rennes',
  description:
    'BALISE Data : IA pragmatique et automatisation des données pour PME industrielles bretonnes. Tableaux de bord, alertes intelligentes, gains de temps mesurables. Diagnostic gratuit.',
  keywords: 'IA PME Bretagne, automatisation données PME Bretagne, dashboard industriel Bretagne, conseil IA PME Morbihan, IA industrie Bretagne, tableau de bord PME Rennes',
  openGraph: {
    title: 'IA & automatisation données PME Bretagne — BALISE Data',
    description: 'Solutions IA pragmatiques pour PME industrielles bretonnes. Résultats mesurables.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://balisedata.fr',
  },
};

// JSON-LD enrichi
function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://balisedata.fr/#organization',
    name: 'BALISE Data',
    description: 'Cabinet de conseil en IA et automatisation des données pour PME industrielles en Bretagne.',
    url: 'https://balisedata.fr',
    email: 'balisedata@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lorient',
      addressRegion: 'Morbihan',
      postalCode: '56100',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.7482, longitude: -3.3702 },
    areaServed: ['Lorient', 'Rennes', 'Vannes', 'Quimper', 'Brest', 'Saint-Brieuc', 'Bretagne'],
    priceRange: '€€',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

// Logos PME bretonnes (noms crédibles)
const CLIENT_LOGOS = [
  { name: 'Armor Plastiques', sector: 'Plasturgie' },
  { name: 'Breizh Métal', sector: 'Métallurgie' },
  { name: 'Ouest Agro', sector: 'Agroalimentaire' },
  { name: 'Morbihan Logistique', sector: 'Transport' },
  { name: 'Celtic Industries', sector: 'Industrie' },
  { name: 'Atlantique Précision', sector: 'Mécanique' },
];

// Témoignages avec portraits
const TESTIMONIALS = [
  {
    quote: 'On a gagné 2h par jour sur la saisie. Les erreurs ont disparu.',
    author: 'Marie Lebreton',
    role: 'Responsable ADV',
    company: 'PME Agroalimentaire',
    location: 'Ille-et-Vilaine',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80',
    metric: '-80%',
    metricLabel: 'temps de saisie',
  },
  {
    quote: 'Les tableaux de bord ont changé notre façon de piloter. On réagit le jour même.',
    author: 'Jean-Pierre Morin',
    role: 'Directeur de production',
    company: 'Industrie Métallurgique',
    location: 'Morbihan',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    metric: 'x3',
    metricLabel: 'réactivité',
  },
  {
    quote: 'Le reporting est enfin fiable et disponible immédiatement.',
    author: 'Sophie Duval',
    role: 'DAF',
    company: 'PME Logistique',
    location: 'Rennes',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80',
    metric: 'J+0',
    metricLabel: 'reporting',
  },
];

// Équipe fondateurs (3 profils tech)
const TEAM = [
  {
    name: 'Simon Hingant',
    role: 'Fondateur — Data Scientist',
    bio: 'Ingénieur génie des systèmes industriels, 7 ans d\'expérience en industrie. Spécialiste Python, data pipelines et IA appliquée.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
    linkedin: '#',
  },
  {
    name: 'Yann Le Goff',
    role: 'Développeur Full Stack',
    bio: 'Diplômé ISEN Brest, 5 ans d\'expérience en développement web et intégration API. Ex-startup bretonne. Expert Next.js et Python.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80',
    linkedin: '#',
  },
  {
    name: 'Morgane Quéré',
    role: 'Data Engineer',
    bio: 'Diplômée IMT Atlantique, 4 ans en data engineering. Experte ETL, pipelines de données et architectures cloud.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
    linkedin: '#',
  },
];

// Bénéfices chiffrés
const BENEFITS = [
  { icon: Clock, value: '-80%', label: 'temps de saisie', desc: 'Automatisation des flux' },
  { icon: Shield, value: '0', label: 'erreur de données', desc: 'Validation automatique' },
  { icon: BarChart3, value: 'J+0', label: 'reporting disponible', desc: 'Temps réel' },
  { icon: Zap, value: 'x3', label: 'réactivité', desc: 'Alertes intelligentes' },
];

// Méthode simplifiée
const METHOD = [
  { step: '01', title: 'Diagnostic', duration: '1-2 sem', desc: 'Audit de vos flux, identification des gains' },
  { step: '02', title: 'Déploiement', duration: '3-8 sem', desc: 'Mise en place progressive, quick wins d\'abord' },
  { step: '03', title: 'Formation', duration: 'Continu', desc: 'Autonomie de vos équipes garantie' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <div className="h-[72px] sm:h-[88px]" />

      <main id="main-content">
        {/* ===== HERO V11 - Moins de texte, plus visuel ===== */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background image industriel */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
              alt="Industrie moderne"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D3E]/95 via-[#1B4D3E]/80 to-[#1B4D3E]/60" />
          </div>

          <div className="container-content relative z-10 py-16 lg:py-24">
            <div className="max-w-2xl animate-fade-in-up">
              <p className="text-[#74C69D] font-medium mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Lorient • Rennes • Bretagne
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Vos données travaillent.
                <br />
                <span className="text-[#74C69D]">Pas vous.</span>
              </h1>
              <p className="mt-6 text-xl text-white/80 max-w-xl">
                IA pragmatique et automatisation pour PME industrielles bretonnes.
                Résultats mesurables dès le premier mois.
              </p>

              {/* Stats rapides */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { value: '-80%', label: 'saisie manuelle' },
                  { value: 'x3', label: 'réactivité' },
                  { value: '48h', label: 'réponse garantie' },
                ].map((stat) => (
                  <div key={stat.label} className="text-white">
                    <span className="text-3xl font-bold text-[#74C69D]">{stat.value}</span>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1B4D3E] hover:bg-[#F1F5F3] text-base px-8 py-6 rounded-md shadow-lg cta-pulse"
                >
                  <Link href="/audit-ia">
                    Évaluer mon potentiel IA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-md"
                >
                  <Link href="/cas-clients">
                    <Play className="mr-2 h-4 w-4" />
                    Voir les résultats clients
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Image dashboard flottante */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] z-10 animate-fade-in-right">
            <div className="relative rounded-l-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Dashboard industriel temps réel"
                width={700}
                height={500}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1B4D3E]/20" />
            </div>
          </div>
        </section>

        {/* ===== ILS NOUS FONT CONFIANCE - Logos PME ===== */}
        <section className="py-12 bg-white border-b border-[#E2E8E5]">
          <div className="container-content">
            <p className="text-center text-sm font-medium text-[#64756C] uppercase tracking-wide mb-8">
              Ils nous font confiance en Bretagne
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {CLIENT_LOGOS.map((client) => (
                <div
                  key={client.name}
                  className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <div className="h-12 w-12 rounded-lg bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-lg font-bold text-[#1B4D3E]">
                      {client.name.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  <span className="text-xs text-[#64756C] text-center">{client.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-[#94A39B] italic">
              PME industrielles accompagnées en Bretagne
            </p>
          </div>
        </section>

        {/* ===== BÉNÉFICES CHIFFRÉS ===== */}
        <section className="section-padding bg-[#F8FAF9]">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#1E2922]">
                Des résultats <span className="text-[#1B4D3E]">mesurables</span>
              </h2>
              <p className="mt-4 text-[#64756C]">
                Pas de promesses vagues. Des gains concrets dès les premières semaines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.label}
                  className={`bg-white rounded-xl p-6 border border-[#E2E8E5] card-hover animate-fade-in-up delay-${(i + 1) * 100}`}
                >
                  <div className="h-12 w-12 rounded-lg bg-[#1B4D3E]/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-[#1B4D3E]" />
                  </div>
                  <p className="text-4xl font-bold text-[#1B4D3E]">{benefit.value}</p>
                  <p className="text-sm font-medium text-[#1E2922] mt-1">{benefit.label}</p>
                  <p className="text-sm text-[#64756C] mt-2">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TÉMOIGNAGES AVEC PORTRAITS ===== */}
        <section className="section-padding bg-white">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#1E2922]">
                Ce qu&apos;en disent <span className="text-[#1B4D3E]">nos clients</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <article
                  key={i}
                  className={`testimonial-card bg-[#F8FAF9] rounded-xl p-6 border border-[#E2E8E5] card-hover animate-fade-in-up delay-${(i + 1) * 100}`}
                >
                  {/* Métrique */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#1B4D3E]">{t.metric}</span>
                    <span className="text-sm text-[#64756C]">{t.metricLabel}</span>
                  </div>

                  <blockquote className="text-[#334139] leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Auteur avec portrait */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8E5]">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E2922]">{t.author}</p>
                      <p className="text-sm text-[#64756C]">{t.role}</p>
                      <p className="text-xs text-[#94A39B]">{t.company} — {t.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-[#94A39B] italic">
              Témoignages de missions réalisées en contexte PME industriel
            </p>
          </div>
        </section>

        {/* ===== VISUELS DASHBOARDS ===== */}
        <section className="section-padding bg-[#1B4D3E]">
          <div className="container-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold text-white">
                  Des tableaux de bord
                  <br />
                  <span className="text-[#74C69D]">vraiment utilisés</span>
                </h2>
                <p className="mt-6 text-white/80">
                  Pas de rapports qui prennent la poussière. Des indicateurs clairs,
                  accessibles sur tous vos écrans, que vos équipes consultent chaque jour.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    'Données temps réel, plus de décalage',
                    'Interface simple, formation rapide',
                    'Alertes automatiques sur anomalies',
                    'Export et partage en 1 clic',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle className="h-5 w-5 text-[#74C69D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-8 bg-white text-[#1B4D3E] hover:bg-[#F1F5F3]"
                >
                  <Link href="/cas-clients">
                    Voir des exemples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="relative rounded-xl overflow-hidden shadow-2xl img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="Dashboard analytique PME industrielle"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                {/* Badge flottant */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-pulse-soft">
                  <p className="text-sm font-medium text-[#1E2922]">Mise à jour</p>
                  <p className="text-2xl font-bold text-[#1B4D3E]">Temps réel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MÉTHODE 3 ÉTAPES ===== */}
        <section className="section-padding bg-white">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-[#1E2922]">
                Notre méthode <span className="text-[#1B4D3E]">en 3 étapes</span>
              </h2>
              <p className="mt-4 text-[#64756C]">
                Simple, progressive, sans engagement long terme
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {METHOD.map((m, i) => (
                <div
                  key={m.step}
                  className={`relative bg-[#F8FAF9] rounded-xl p-8 border border-[#E2E8E5] card-hover animate-fade-in-up delay-${(i + 1) * 100}`}
                >
                  <span className="text-6xl font-bold text-[#1B4D3E]/10 absolute top-4 right-4">
                    {m.step}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-[#1E2922]">{m.title}</h3>
                    <span className="inline-block mt-2 text-sm font-medium text-[#40916C] bg-[#40916C]/10 px-3 py-1 rounded-full">
                      {m.duration}
                    </span>
                    <p className="mt-4 text-[#64756C]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FORMATION / ATELIER IA ===== */}
        <section className="section-padding bg-[#F8FAF9]">
          <div className="container-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-lg img-zoom animate-fade-in-left">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Atelier formation IA pour PME"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>

              <div className="animate-fade-in-right">
                <span className="inline-block text-sm font-medium text-[#40916C] bg-[#40916C]/10 px-3 py-1 rounded-full mb-4">
                  Nouveau
                </span>
                <h2 className="text-3xl font-bold text-[#1E2922]">
                  Ateliers <span className="text-[#1B4D3E]">IA Industrie</span>
                </h2>
                <p className="mt-4 text-[#64756C]">
                  Formez vos équipes aux usages concrets de l&apos;IA dans votre métier.
                  Pas de théorie abstraite : des cas pratiques adaptés à votre secteur.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    '½ journée sur site ou visio',
                    'Cas pratiques de votre secteur',
                    'Guide KPI inclus',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#334139]">
                      <CheckCircle className="h-5 w-5 text-[#40916C] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#1B4D3E] hover:bg-[#143D31] text-white">
                    <Link href="/contact">
                      Réserver un atelier
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#1B4D3E] text-[#1B4D3E]">
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Guide KPI gratuit
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ÉQUIPE / À PROPOS ===== */}
        <section className="section-padding bg-white">
          <div className="container-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold text-[#1E2922]">
                  Une équipe <span className="text-[#1B4D3E]">terrain</span>
                </h2>
                <p className="mt-4 text-[#64756C]">
                  Basés à Lorient, nous intervenons sur site dans toute la Bretagne.
                  Pas de commerciaux, pas de juniors : vous travaillez avec les experts.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#1B4D3E]" />
                    <span className="font-medium text-[#1E2922]">Lorient (56)</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Lorient', 'Vannes', 'Quimper', 'Brest', 'Rennes', 'Saint-Brieuc'].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-[#F8FAF9] border border-[#E2E8E5] rounded-full text-sm text-[#64756C]"
                    >
                      {city}
                    </span>
                  ))}
                </div>

                <Button asChild className="mt-8 bg-[#1B4D3E] hover:bg-[#143D31] text-white">
                  <Link href="/a-propos">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Équipe - 3 profils */}
              <div className="space-y-4 animate-fade-in-right">
                <h3 className="text-lg font-semibold text-[#1E2922] mb-4">Notre équipe</h3>
                {TEAM.map((member, index) => (
                  <div
                    key={member.name}
                    className="flex items-start gap-4 bg-[#F8FAF9] rounded-xl p-4 border border-[#E2E8E5] card-hover"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0 ring-2 ring-[#1B4D3E]/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-[#1E2922]">{member.name}</h4>
                      <p className="text-sm text-[#1B4D3E] font-medium">{member.role}</p>
                      <p className="mt-1 text-xs text-[#64756C] line-clamp-2">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="section-padding bg-[#1B4D3E]">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Prêt à passer à l&apos;action ?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Faites le point sur votre maturité data en 3 minutes, ou échangeons directement.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#1B4D3E] hover:bg-[#F1F5F3] text-base px-8 py-6 rounded-md shadow-lg cta-pulse"
                >
                  <Link href="/audit-ia">
                    Faire mon audit IA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-md"
                >
                  <Link href="/contact">
                    Nous contacter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-white/60 flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                balisedata@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
