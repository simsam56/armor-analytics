import type { Metadata } from 'next';
import Image from 'next/image';
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

export const metadata: Metadata = {
  title: 'À propos | Consultant IA & automatisation PME Bretagne — BALISE Data',
  description:
    'Équipe d\'experts en IA et automatisation des données pour PME industrielles. Basés à Lorient, nous intervenons dans toute la Bretagne. Pas de juniors, pas d\'intermédiaires.',
  keywords: 'consultant IA Bretagne, expert automatisation données Lorient, cabinet conseil data PME Morbihan, équipe IA industrie Rennes',
  openGraph: {
    title: 'À propos | Consultant IA & automatisation PME Bretagne',
    description: 'Une équipe d\'experts IA et data, ancrée en Bretagne.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://balisedata.fr/a-propos',
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
    title: 'Pas d\'intermédiaires',
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

const SERVICES = [
  {
    title: 'Automatisation des flux',
    description: 'Connexion entre vos outils, suppression des ressaisies, circulation automatique des données.',
  },
  {
    title: 'Tableaux de bord',
    description: 'Vision claire de votre activité, indicateurs pertinents, accessible sur tous les écrans.',
  },
  {
    title: 'Alertes et suivi',
    description: 'Être prévenu au bon moment, suivre l\'évolution dans le temps.',
  },
];

const AREAS = ['Lorient', 'Vannes', 'Quimper', 'Brest', 'Rennes', 'Saint-Brieuc', 'Nantes'];

// Équipe - 3 profils tech
const TEAM = [
  {
    name: 'Simon Hingant',
    role: 'Fondateur — Data Scientist',
    bio: 'Ingénieur génie des systèmes industriels, Simon a passé 7 ans en industrie avant de fonder BALISE Data. Spécialiste Python, data pipelines et IA appliquée, il intervient sur l\'architecture des solutions et la stratégie data des clients.',
    specialties: ['Python', 'Machine Learning', 'Data Architecture'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Yann Le Goff',
    role: 'Développeur Full Stack',
    bio: 'Diplômé ISEN Brest, Yann a 5 ans d\'expérience en développement web et intégration API. Passé par une startup bretonne, il maîtrise les enjeux d\'agilité des PME. Il développe les interfaces et connecteurs entre vos outils.',
    specialties: ['Next.js', 'Python', 'API REST'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Morgane Quéré',
    role: 'Data Engineer',
    bio: 'Diplômée IMT Atlantique, Morgane cumule 4 ans d\'expérience en data engineering. Experte ETL et pipelines de données, elle conçoit les architectures robustes qui font circuler vos données en temps réel.',
    specialties: ['ETL', 'dbt', 'Cloud Data'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
];

export default function AboutPage() {
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
        <section className="section-padding bg-gradient-to-br from-[#F8FAF9] to-[#E2E8E5]" aria-labelledby="about-title">
          <div className="container-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1
                  id="about-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2922] leading-tight"
                >
                  Une équipe d&apos;experts,{' '}
                  <span className="text-[#1B4D3E]">ancrée en Bretagne</span>
                </h1>
                <p className="mt-6 text-lg text-[#64756C]">
                  BALISE Data accompagne les PME industrielles bretonnes dans leur
                  transformation data. Automatisation des flux, tableaux de bord,
                  reporting : on vous aide à piloter votre activité avec des données
                  fiables.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#1B4D3E]" aria-hidden="true" />
                    <span className="font-medium text-[#1E2922]">Lorient, Morbihan</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-[#1B4D3E] hover:bg-[#143D31] text-white transition-base"
                  >
                    <Link href="/contact">
                      Nous contacter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Équipe BALISE Data en réunion de travail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-white" aria-labelledby="values-title">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="values-title" className="text-2xl sm:text-3xl font-bold text-[#1E2922]">
                Nos valeurs
              </h2>
              <p className="mt-4 text-[#64756C]">
                Une approche pragmatique et transparente, au service de vos résultats.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {VALUES.map((value, index) => (
                <div
                  key={value.title}
                  className={`p-8 rounded-lg bg-[#F8FAF9] border border-[#E2E8E5] card-hover animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  <div className="h-12 w-12 rounded-lg bg-[#1B4D3E]/10 flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6 text-[#1B4D3E]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2922] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#64756C]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="section-padding bg-[#F8FAF9]" aria-labelledby="services-title">
          <div className="container-content">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1 img-zoom shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Discussion technique avec un client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 id="services-title" className="text-2xl sm:text-3xl font-bold text-[#1E2922]">
                  Ce que nous mettons en place
                </h2>
                <div className="mt-8 space-y-6">
                  {SERVICES.map((service) => (
                    <div key={service.title} className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-[#1B4D3E] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-[#1E2922]">{service.title}</h3>
                        <p className="mt-1 text-[#64756C]">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="section-padding bg-[#1B4D3E]" aria-labelledby="advantages-title">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="advantages-title" className="text-2xl sm:text-3xl font-bold text-white">
                Pourquoi nous choisir
              </h2>
              <p className="mt-4 text-white/70">
                Ce qui nous différencie des grandes ESN et cabinets de conseil.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ADVANTAGES.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className={`p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-base animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#74C69D] shrink-0 mt-0.5" aria-hidden="true" />
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

        {/* Équipe */}
        <section className="section-padding bg-white" aria-labelledby="team-title">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="team-title" className="text-2xl sm:text-3xl font-bold text-[#1E2922]">
                L&apos;équipe
              </h2>
              <p className="mt-4 text-[#64756C]">
                3 profils tech complémentaires, tous expérimentés en environnement industriel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TEAM.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-[#F8FAF9] rounded-xl overflow-hidden border border-[#E2E8E5] card-hover animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1E2922]">{member.name}</h3>
                    <p className="text-[#1B4D3E] font-medium text-sm">{member.role}</p>
                    <p className="mt-3 text-sm text-[#64756C]">{member.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.specialties.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-medium rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="section-padding bg-[#F8FAF9]" aria-labelledby="area-title">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="area-title" className="text-2xl sm:text-3xl font-bold text-[#1E2922]">
                Zone d&apos;intervention
              </h2>
              <p className="mt-4 text-[#64756C]">
                Basés à Lorient, nous intervenons sur site dans toute la Bretagne et les Pays de la Loire.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {AREAS.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-[#F1F5F3] rounded-full text-sm font-medium text-[#475550] hover:bg-[#1B4D3E] hover:text-white transition-base cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-[#94A39B]">
              Intervention à distance également possible pour le suivi et les ajustements.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-white" aria-labelledby="cta-title">
          <div className="container-content">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="cta-title" className="text-2xl sm:text-3xl font-bold text-[#1E2922]">
                Envie d&apos;en discuter ?
              </h2>
              <p className="mt-4 text-lg text-[#64756C]">
                Évaluez votre potentiel IA en 3 minutes ou contactez-nous directement.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1B4D3E] hover:bg-[#143D31] text-white text-base px-8 py-6 cta-pulse"
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
                  className="border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E]/5 text-base px-8 py-6"
                >
                  <Link href="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-[#94A39B]">
                balisedata@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
