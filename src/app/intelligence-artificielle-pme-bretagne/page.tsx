import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  ArrowRight,
  Brain,
  Zap,
  BarChart3,
  Clock,
  CheckCircle2,
  MapPin,
  Building2,
  TrendingUp,
  FileText,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ContactSection } from '@/components/sections';
import { getCalendlyUrl, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Intelligence artificielle pour PME en Bretagne | Balise IA Lorient',
  description:
    "Expert IA pour PME bretonnes. OCR, automatisation, pilotage par la donnée. Basés à Lorient, interventions à Rennes et en Bretagne. Diagnostic gratuit.",
  openGraph: {
    title: 'Intelligence artificielle pour PME en Bretagne | Balise IA',
    description:
      "Expert IA pour PME bretonnes. Automatisation, pilotage par la donnée, résultats mesurables.",
  },
  keywords: [
    'intelligence artificielle Bretagne',
    'IA Bretagne',
    'IA PME Bretagne',
    'intelligence artificielle Lorient',
    'intelligence artificielle Rennes',
    'consultant IA Bretagne',
    'IA industrielle Bretagne',
    'automatisation PME Bretagne',
  ],
};

export default function IABretagePage() {
  return (
    <>
      {/* Hero SEO */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-blue-400 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Basés à {siteConfig.location.city} – Interventions en {siteConfig.location.region}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Intelligence artificielle pour PME en Bretagne
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Vous dirigez une PME en Bretagne et vous vous demandez si l'IA peut vous aider ?
                Balise IA accompagne les entreprises bretonnes dans l'automatisation et le pilotage
                par la donnée, avec des résultats mesurables.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5" />
                    Diagnostic IA gratuit – 30 min
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 border-slate-600 text-white hover:bg-slate-800">
                  <Link href="/cas-usage">
                    Voir des exemples concrets
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pourquoi l'IA pour les PME bretonnes */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Pourquoi l'intelligence artificielle pour votre PME bretonne ?
              </h2>
              <div className="mt-6 prose prose-slate max-w-none">
                <p className="text-lg text-slate-600">
                  Les PME industrielles bretonnes font face à des défis croissants : pénurie de
                  main-d'œuvre, pression sur les marges, exigences de traçabilité. L'intelligence
                  artificielle n'est plus réservée aux grands groupes : elle devient accessible
                  et rentable pour les entreprises de 10 à 250 salariés.
                </p>
                <p className="text-slate-600">
                  Chez Balise IA, nous ne proposons pas d'IA gadget. Chaque projet répond à un
                  problème concret : automatiser des tâches répétitives, exploiter des données
                  inexploitées, ou aider à la décision. Résultat : du temps gagné, des erreurs
                  évitées, et des décisions mieux informées.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="bg-slate-50 rounded-xl p-6">
                <Clock className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Gagner du temps</h3>
                <p className="mt-2 text-slate-600">
                  Automatiser les ressaisies, le reporting, la classification de documents.
                  4h/semaine gagnées en moyenne par nos clients.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-slate-50 rounded-xl p-6">
                <CheckCircle2 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Fiabiliser les données</h3>
                <p className="mt-2 text-slate-600">
                  80% des erreurs de saisie éliminées grâce à l'OCR intelligent et
                  l'automatisation des flux de données.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-slate-50 rounded-xl p-6">
                <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Piloter l'activité</h3>
                <p className="mt-2 text-slate-600">
                  Tableaux de bord temps réel, alertes automatiques, prévisions fiables
                  pour prendre de meilleures décisions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cas d'usage IA Bretagne */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-4">
              Exemples d'IA pour PME bretonnes
            </h2>
            <p className="text-slate-600 mb-12 max-w-2xl">
              Voici des cas concrets d'intelligence artificielle déployés dans des PME
              en Bretagne. Agroalimentaire, métallurgie, logistique : l'IA s'adapte
              à votre secteur.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn direction="up" delay={100}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">OCR intelligent</h3>
                    <p className="text-sm text-slate-500">Agroalimentaire, Distribution</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Extraction automatique des données de commandes (email, fax, PDF) et injection
                  dans l'ERP. Fin des ressaisies manuelles.
                </p>
                <p className="text-sm font-medium text-green-700">
                  → 80% du temps de traitement éliminé
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Pilotage production</h3>
                    <p className="text-sm text-slate-500">Métallurgie, Plasturgie</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Centralisation des données ERP/Excel, tableaux de bord temps réel,
                  alertes automatiques sur les dérives.
                </p>
                <p className="text-sm font-medium text-green-700">
                  → Visibilité temps réel, 4h/semaine gagnées
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Prévision & optimisation</h3>
                    <p className="text-sm text-slate-500">Industrie, Logistique</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Analyse des données historiques, modèles de prévision pour stocks,
                  charge ou volumes. Aide à la décision basée sur les données.
                </p>
                <p className="text-sm font-medium text-green-700">
                  → 15-25% de réduction des coûts ciblés
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Reporting automatisé</h3>
                    <p className="text-sm text-slate-500">Tous secteurs</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Fin des tableaux Excel manuels. Rapports générés automatiquement,
                  KPIs à jour en temps réel.
                </p>
                <p className="text-sm font-medium text-green-700">
                  → Reporting J+0 au lieu de J+5
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={500}>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/cas-usage">
                  Voir tous les cas d'usage
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn direction="up">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Expert IA basé à Lorient, interventions en Bretagne
                </h2>
                <p className="mt-4 text-slate-600">
                  Balise IA est un collectif de spécialistes en intelligence artificielle et
                  automatisation, basé à Lorient (Morbihan). Nous intervenons sur site dans
                  toute la Bretagne et à distance.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Lorient, Vannes, Quimper (Morbihan, Finistère)</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Rennes, Saint-Malo (Ille-et-Vilaine)</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Saint-Brieuc, Lannion (Côtes-d'Armor)</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span>Brest, Morlaix (Finistère Nord)</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Pourquoi un expert IA local ?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Connaissance du tissu local</p>
                      <p className="text-sm text-slate-600">
                        On connaît les PME bretonnes, leurs contraintes et leurs outils.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Interventions sur site</p>
                      <p className="text-sm text-slate-600">
                        Ateliers, formations, accompagnement au changement en présentiel.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Approche pragmatique</p>
                      <p className="text-sm text-slate-600">
                        Pas de gadgets, des solutions qui marchent avec vos outils existants.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Prêt à explorer l'IA pour votre PME bretonne ?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Réservez un diagnostic gratuit de 30 minutes. On analyse ensemble si l'IA
              est pertinente pour vous, sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Diagnostic IA gratuit
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-blue-700"
              >
                <Link href="/offres">
                  Voir les tarifs
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
