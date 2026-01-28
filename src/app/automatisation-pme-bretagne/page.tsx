import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  ArrowRight,
  Zap,
  FileSpreadsheet,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  Clock,
  Database,
  Workflow,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ContactSection } from '@/components/sections';
import { TECH_STACK } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Automatisation pour PME en Bretagne | Balise IA Lorient',
  description:
    "Automatisation des process pour PME bretonnes. Fin des ressaisies Excel, connexion ERP, tableaux de bord temps réel. Basés à Lorient, interventions Bretagne.",
  openGraph: {
    title: 'Automatisation pour PME en Bretagne | Balise IA',
    description:
      "Automatisation des process pour PME bretonnes. Fin des ressaisies, données fiables, pilotage temps réel.",
  },
  keywords: [
    'automatisation PME Bretagne',
    'automatisation entreprise Lorient',
    'automatisation process Rennes',
    'fin ressaisies Excel',
    'connexion ERP automatique',
    'tableau de bord PME',
    'automatisation industrielle Bretagne',
  ],
};

export default function AutomatisationBretagePage() {
  return (
    <>
      {/* Hero SEO */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-emerald-400 mb-4">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Automatisation & intégration de données
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Automatisation pour PME en Bretagne
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Fini les ressaisies manuelles entre Excel et votre ERP. On connecte vos outils,
                on automatise les flux de données, et on vous donne des tableaux de bord
                fiables pour piloter votre activité.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5" />
                    Diagnostic automatisation – 30 min
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 border-slate-600 text-white hover:bg-slate-800">
                  <Link href="/offres">
                    Voir les tarifs
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Le problème */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Ces situations vous parlent ?
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="bg-red-50 rounded-xl p-6 ring-1 ring-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Ressaisies manuelles</h3>
                <p className="mt-2 text-sm text-slate-600">
                  "On passe des heures à recopier des données entre Excel, l'ERP et les mails."
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-red-50 rounded-xl p-6 ring-1 ring-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Données dispersées</h3>
                <p className="mt-2 text-sm text-slate-600">
                  "Chaque service a ses fichiers. Impossible d'avoir une vision consolidée."
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-red-50 rounded-xl p-6 ring-1 ring-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Reporting manuel</h3>
                <p className="mt-2 text-sm text-slate-600">
                  "Le DAF passe 2 jours à consolider les tableaux pour le comité de direction."
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="bg-red-50 rounded-xl p-6 ring-1 ring-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Erreurs fréquentes</h3>
                <p className="mt-2 text-sm text-slate-600">
                  "Des erreurs de saisie qu'on découvre trop tard, avec des conséquences."
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={500}>
              <div className="bg-red-50 rounded-xl p-6 ring-1 ring-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Pas de temps réel</h3>
                <p className="mt-2 text-sm text-slate-600">
                  "On pilote avec des données de la semaine dernière. On découvre les problèmes trop tard."
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={600}>
              <div className="bg-red-50 rounded-xl p-6 ring-1 ring-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900">Dépendance aux personnes</h3>
                <p className="mt-2 text-sm text-slate-600">
                  "Seul Jean-Pierre sait faire le reporting. Quand il est absent, c'est la catastrophe."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* La solution */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Ce qu'on met en place
              </h2>
              <p className="mt-3 text-slate-600">
                On connecte vos outils existants. Pas besoin de tout changer.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 h-full">
                <Database className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Centralisation des données</h3>
                <p className="mt-2 text-slate-600">
                  On connecte vos sources (ERP, Excel, emails, API) dans un entrepôt unifié.
                  Vos données sont accessibles, propres et à jour.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Connexion ERP (Sage, Cegid, EBP...)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Import automatique Excel/CSV
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Extraction emails et pièces jointes
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 h-full">
                <Workflow className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Automatisation des flux</h3>
                <p className="mt-2 text-slate-600">
                  On automatise les tâches répétitives. Les données circulent sans intervention
                  manuelle, avec contrôles et alertes.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Pipelines de données automatisés
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Contrôles qualité intégrés
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Alertes sur anomalies
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 h-full">
                <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">Tableaux de bord</h3>
                <p className="mt-2 text-slate-600">
                  Des dashboards clairs, à jour en temps réel, accessibles sur tous les écrans.
                  Fini les tableaux Excel manuels.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    KPIs métier temps réel
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Rapports générés automatiquement
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Accès web et mobile
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stack technique */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                On travaille avec vos outils
              </h2>
              <p className="mt-3 text-slate-600">
                Pas besoin de tout changer. On s'interface avec votre existant.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium text-slate-900 mb-3">ERP & Gestion</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.erp.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium text-slate-900 mb-3">Sources de données</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.data.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium text-slate-900 mb-3">Visualisation</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.bi.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium text-slate-900 mb-3">Automatisation</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.automation.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={500}>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium text-slate-900 mb-3">Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.cloud.map((tool) => (
                    <span key={tool} className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Résultats typiques
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-4">
            <FadeIn direction="up" delay={100}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">4h</div>
                <div className="text-sm text-slate-600 mt-1">gagnées par semaine</div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">80%</div>
                <div className="text-sm text-slate-600 mt-1">de ressaisies éliminées</div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">J+0</div>
                <div className="text-sm text-slate-600 mt-1">reporting temps réel</div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">0</div>
                <div className="text-sm text-slate-600 mt-1">erreurs de saisie</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Prêt à automatiser vos process ?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Diagnostic gratuit de 30 minutes. On identifie ensemble les quick wins
              et le potentiel d'automatisation pour votre PME.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-5 w-5" />
                  Diagnostic automatisation
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-blue-700"
              >
                <Link href="/cas-usage">
                  Voir des exemples
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
