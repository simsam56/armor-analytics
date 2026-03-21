import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Zap,
  AlertTriangle,
  ArrowRight,
  Clock,
  TrendingUp,
  Ban,
  Cog,
  Database,
  Mail,
  ArrowDownToLine,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Automatisation des commandes pour PME industrielles',
  description:
    'Automatisez la saisie de vos commandes clients grâce à l&apos;OCR et à l&apos;intégration ERP. Fin des ressaisies manuelles, zéro erreur, traitement en quelques minutes. Compatible Sage, Cegid, Dynamics, EBP.',
  keywords:
    'automatisation commandes PME, OCR commandes, automatisation saisie ERP, automatisation commandes Sage, OCR bon de commande, intégration ERP automatique, automatisation ADV',
  openGraph: {
    title: 'Automatisation des commandes pour PME industrielles — balise-ia',
    description:
      'Fin des ressaisies manuelles : vos commandes sont extraites, validées et injectées dans votre ERP automatiquement.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://balise-ia.fr/automatisation-commandes-pme',
  },
};

const PAIN_POINTS = [
  {
    icon: Clock,
    title: '2 heures par jour de ressaisie',
    description:
      'Vos équipes ADV recopient les commandes reçues par email, fax ou courrier dans votre ERP. C&apos;est du temps perdu sur une tâche qui n&apos;apporte aucune valeur ajoutée.',
  },
  {
    icon: AlertTriangle,
    title: '5 à 10 erreurs de saisie par semaine',
    description:
      'Mauvais code article, quantité inversée, adresse de livraison erronée. Chaque erreur génère un avoir, un retour ou un litige client. Le coût est souvent sous-estimé.',
  },
  {
    icon: Ban,
    title: 'Délais de traitement imprévisibles',
    description:
      'Quand le carnet de commandes est plein, la pile de commandes à saisir s&apos;allonge. Les commandes urgentes se mélangent aux commandes standards, sans priorisation possible.',
  },
];

const SOLUTION_STEPS = [
  {
    icon: Mail,
    step: '01',
    title: 'Réception automatique',
    description:
      'Les commandes arrivent par email (PDF, Excel, image). Notre système les détecte et les récupère automatiquement, quel que soit le format du client.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Extraction OCR intelligente',
    description:
      'Un moteur OCR entraîné sur vos formats de commandes extrait les informations clés : références articles, quantités, adresses de livraison, conditions de paiement, dates souhaitées.',
  },
  {
    icon: Database,
    step: '03',
    title: 'Validation et enrichissement',
    description:
      'Les données extraites sont vérifiées automatiquement : correspondance des codes articles, contrôle des conditions commerciales, détection des incohérences. Les cas ambigus sont signalés pour vérification humaine.',
  },
  {
    icon: ArrowDownToLine,
    step: '04',
    title: 'Injection dans l&apos;ERP',
    description:
      'Les commandes validées sont injectées directement dans votre ERP, sans ressaisie. L&apos;équipe ADV est notifiée et peut se concentrer sur les cas qui nécessitent une attention humaine.',
  },
];

const BEFORE_AFTER = {
  before: [
    { metric: 'Temps de saisie par commande', value: '8 minutes' },
    { metric: 'Taux d&apos;erreur de saisie', value: '5%' },
    { metric: 'Délai de traitement moyen', value: '24 à 48 heures' },
    { metric: 'Priorisation des urgences', value: 'Manuelle, au feeling' },
    { metric: 'Coût annuel estimé', value: '~35 000 &euro; (1 ETP + litiges)' },
  ],
  after: [
    { metric: 'Temps de saisie par commande', value: '30 secondes (vérification)' },
    { metric: 'Taux d&apos;erreur de saisie', value: '< 0,5%' },
    { metric: 'Délai de traitement moyen', value: '< 2 heures' },
    { metric: 'Priorisation des urgences', value: 'Automatique (règles métier)' },
    { metric: 'Économie annuelle', value: '~28 000 &euro;' },
  ],
};

const COMPATIBLE_ERPS = [
  {
    name: 'Sage',
    versions: 'Sage 100, Sage X3, Sage Business Cloud',
    note: 'Connecteur API natif ou import fichiers',
  },
  {
    name: 'Cegid',
    versions: 'Cegid XRP, Cegid Manufacturing, Cegid Y2',
    note: 'Intégration via API ou flux EDI',
  },
  {
    name: 'Dynamics 365',
    versions: 'Business Central, Finance & Operations',
    note: 'API REST Microsoft native',
  },
  {
    name: 'EBP',
    versions: 'EBP Gestion Commerciale, EBP Manufacturing',
    note: 'Import structuré ou API selon version',
  },
  {
    name: 'Divalto',
    versions: 'Divalto Infinity',
    note: 'Connecteur personnalisé',
  },
  {
    name: 'Autres ERP',
    versions: 'SAP Business One, Odoo, sur mesure',
    note: 'Adaptable à tout ERP disposant d&apos;une API ou d&apos;un import fichier',
  },
];

export default function AutomatisationCommandesPage() {
  return (
    <>
      <Hero
        title="Automatisation des commandes pour PME industrielles"
        subtitle="Vos commandes sont extraites, validées et injectées dans votre ERP en quelques minutes. Fin des ressaisies manuelles, zéro erreur, plus de temps pour vos clients."
      />

      {/* Le problème */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Le constat
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            La saisie manuelle coûte plus cher qu&apos;on ne le croit
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Dans la plupart des PME industrielles, les commandes arrivent par email sous forme de
            PDF, de fichiers Excel ou de documents scannés. L&apos;équipe ADV les ressaisit
            manuellement dans l&apos;ERP — commande par commande, ligne par ligne. C&apos;est une
            source permanente de coûts cachés.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PAIN_POINTS.map((pain) => (
              <div key={pain.title} className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <pain.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{pain.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre solution */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Notre solution
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            OCR + pipeline + intégration ERP
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Nous déployons une chaîne complète d&apos;automatisation, de la réception de
            l&apos;email à l&apos;injection dans votre ERP. Le système apprend les formats de vos
            clients et s&apos;améliore avec le temps.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTION_STEPS.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-breton-accent/30">{item.step}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-breton-emerald/10">
                    <item.icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-8">
            <div className="flex items-start gap-4">
              <Cog className="h-6 w-6 text-breton-emerald shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Un système pragmatique, pas une usine à gaz
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Notre approche est progressive. On commence par les formats de commandes les plus
                  fréquents, on valide avec vos équipes, et on élargit ensuite. Le système inclut
                  toujours une interface de vérification pour les cas ambigus : vos équipes gardent
                  le contrôle, mais n&apos;ont plus à tout ressaisir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats concrets — Avant / Après */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Résultats mesurés
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Résultats concrets chez un client agroalimentaire
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            PME agroalimentaire dans le Morbihan, 45 salariés. L&apos;équipe ADV (3 personnes)
            passait 2 heures par jour à ressaisir les commandes reçues par email. Projet déployé en
            6 semaines.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Avant */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-red-700">
                <AlertTriangle className="h-5 w-5" />
                Avant
              </h3>
              <div className="mt-6 space-y-4">
                {BEFORE_AFTER.before.map((item) => (
                  <div
                    key={item.metric}
                    className="flex items-center justify-between border-b border-red-200/50 pb-3 last:border-0"
                  >
                    <span className="text-sm text-slate-700">{item.metric}</span>
                    <span className="text-sm font-semibold text-red-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Après */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-breton-emerald">
                <TrendingUp className="h-5 w-5" />
                Après
              </h3>
              <div className="mt-6 space-y-4">
                {BEFORE_AFTER.after.map((item) => (
                  <div
                    key={item.metric}
                    className="flex items-center justify-between border-b border-emerald-200/50 pb-3 last:border-0"
                  >
                    <span className="text-sm text-slate-700">{item.metric}</span>
                    <span className="text-sm font-semibold text-breton-emerald">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics highlights */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { value: '80%', label: 'du temps de traitement éliminé' },
              { value: '0', label: 'erreur de saisie depuis 6 mois' },
              { value: '4 mois', label: 'pour atteindre le ROI' },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200 bg-white px-8 py-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-breton-emerald">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
            >
              <Link href="/cas-clients" className="gap-2">
                Voir tous nos cas clients
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compatible avec vos outils */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Compatibilité
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Compatible avec vos outils
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Notre solution s&apos;adapte à votre ERP, pas l&apos;inverse. Nous avons déjà intégré
            les principaux ERP du marché PME. Si le vôtre n&apos;est pas dans la liste, contactez-nous :
            il suffit d&apos;une API ou d&apos;un mécanisme d&apos;import.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPATIBLE_ERPS.map((erp) => (
              <div key={erp.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-breton-navy">{erp.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{erp.versions}</p>
                <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                  <Zap className="h-4 w-4 text-breton-accent shrink-0 mt-0.5" />
                  {erp.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comment on travaille
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Un projet d&apos;automatisation des commandes dure en moyenne 4 à 8 semaines, de
              l&apos;analyse des formats existants à la mise en production.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Analyse des formats',
                description:
                  'On récupère un échantillon de vos commandes, on identifie les formats récurrents et les champs à extraire.',
              },
              {
                step: '02',
                title: 'Configuration OCR',
                description:
                  'On entraîne le moteur d&apos;extraction sur vos formats. On définit les règles de validation avec vos équipes.',
              },
              {
                step: '03',
                title: 'Intégration ERP',
                description:
                  'On connecte la sortie du pipeline à votre ERP. On teste sur un flux réel en parallèle de la saisie manuelle.',
              },
              {
                step: '04',
                title: 'Mise en production',
                description:
                  'On bascule progressivement. On forme l&apos;équipe ADV à l&apos;interface de vérification. On assure le suivi post-déploiement.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-3xl font-bold text-breton-accent/30">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
