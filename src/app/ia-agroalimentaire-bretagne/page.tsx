import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Cog,
  FileText,
  BarChart3,
  ShieldCheck,
  Scan,
  HelpCircle,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'IA et automatisation pour PME agroalimentaire en Bretagne',
  description:
    'Automatisation des commandes, traçabilité qualité, conformité réglementaire. Diagnostic terrain gratuit pour PME agroalimentaires bretonnes.',
  openGraph: {
    title: 'IA et automatisation pour PME agroalimentaire en Bretagne \u2014 balise-ia',
    description:
      'Automatisation des commandes, tra\u00e7abilit\u00e9 qualit\u00e9, conformit\u00e9 r\u00e9glementaire. Diagnostic terrain gratuit pour PME agroalimentaires bretonnes.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/ia-agroalimentaire-bretagne',
  },
};

const PAIN_POINTS = [
  {
    icon: FileText,
    title: 'Commandes ressaisies manuellement',
    description:
      'Les commandes re\u00e7ues par email ou fax sont recopi\u00e9es une \u00e0 une dans l\u2019ERP. C\u2019est lent, c\u2019est source d\u2019erreurs, et \u00e7a mobilise vos \u00e9quipes ADV sur une t\u00e2che sans valeur ajout\u00e9e.',
  },
  {
    icon: ClipboardCheck,
    title: 'Tra\u00e7abilit\u00e9 des lots compil\u00e9e \u00e0 la main',
    description:
      'Avant chaque audit, vos \u00e9quipes qualit\u00e9 compilent manuellement la tra\u00e7abilit\u00e9 des lots depuis plusieurs sources. Un travail fastidieux, sujet aux oublis.',
  },
  {
    icon: AlertTriangle,
    title: 'Non-conformit\u00e9s d\u00e9tect\u00e9es trop tard',
    description:
      'Le reporting qualit\u00e9 est en retard, les non-conformit\u00e9s sont identifi\u00e9es apr\u00e8s coup. Les actions correctives arrivent quand le mal est fait.',
  },
  {
    icon: Clock,
    title: 'DLUO et contr\u00f4les dispers\u00e9s',
    description:
      'DLUO, contr\u00f4les lib\u00e9ratoires et r\u00e9sultats d\u2019analyses sont \u00e9parpill\u00e9s entre LIMS, Excel et classeurs papier. Impossible d\u2019avoir une vue consolid\u00e9e.',
  },
  {
    icon: ShieldCheck,
    title: '2 semaines pour pr\u00e9parer un audit IFS/BRC',
    description:
      'La pr\u00e9paration d\u2019un audit IFS ou BRC mobilise 3 personnes pendant 2 semaines. Un effort disproportionn\u00e9 par rapport \u00e0 ce qu\u2019il devrait co\u00fbter.',
  },
  {
    icon: BarChart3,
    title: 'Z\u00e9ro visibilit\u00e9 sur les encours',
    description:
      'Aucun suivi temps r\u00e9el de la production. Les encours, les rendements et les \u00e9carts ne sont connus qu\u2019en fin de journ\u00e9e \u2014 ou en fin de semaine.',
  },
];

const SOLUTIONS = [
  {
    icon: Scan,
    title: 'Automatisation des commandes',
    description:
      'OCR + injection ERP : les commandes re\u00e7ues par email sont extraites, valid\u00e9es et inject\u00e9es automatiquement dans votre ERP.',
    metric: '-80\u00a0% de temps de traitement',
  },
  {
    icon: ClipboardCheck,
    title: 'Tra\u00e7abilit\u00e9 lot par lot en temps r\u00e9el',
    description:
      'Fini les classeurs papier. Chaque lot est trac\u00e9 num\u00e9riquement, de la r\u00e9ception mati\u00e8re premi\u00e8re \u00e0 l\u2019exp\u00e9dition produit fini.',
    metric: 'Fin des classeurs papier',
  },
  {
    icon: ShieldCheck,
    title: 'Reporting conformit\u00e9 automatis\u00e9',
    description:
      'Les rapports IFS, BRC et audits qualit\u00e9 sont g\u00e9n\u00e9r\u00e9s automatiquement \u00e0 partir de vos donn\u00e9es existantes.',
    metric: 'Audit pr\u00eat en 2h au lieu de 2 semaines',
  },
  {
    icon: BarChart3,
    title: 'Dashboard production et qualit\u00e9',
    description:
      'Un tableau de bord connect\u00e9 \u00e0 votre ERP et \u00e0 votre LIMS. Encours, rendements, non-conformit\u00e9s, DLUO : tout en temps r\u00e9el.',
    metric: 'Visibilit\u00e9 temps r\u00e9el',
  },
];

const FAQ_ITEMS = [
  {
    question: '\u00c7a marche avec Sage X3 / Cegid\u00a0?',
    answer:
      'Oui. Notre solution s\u2019int\u00e8gre avec tous les ERP du march\u00e9 \u2014 Sage X3, Cegid, EBP, Dynamics, ou tout syst\u00e8me disposant d\u2019une API ou d\u2019un import CSV/EDI. On s\u2019adapte \u00e0 votre outil, pas l\u2019inverse.',
  },
  {
    question: 'Est-ce compatible avec notre LIMS\u00a0?',
    answer:
      'On connecte les sources existantes : LIMS, ERP, fichiers Excel, bases Access. L\u2019objectif est de consolider vos donn\u00e9es qualit\u00e9 sans remplacer vos outils.',
  },
  {
    question: 'Les audits IFS/BRC seront-ils plus simples\u00a0?',
    answer:
      'Oui. Les rapports de conformit\u00e9 sont g\u00e9n\u00e9r\u00e9s automatiquement \u00e0 partir des donn\u00e9es collect\u00e9es en continu. Plus besoin de compiler manuellement avant chaque audit \u2014 les \u00e9l\u00e9ments de preuve sont disponibles en quelques clics.',
  },
  {
    question: 'Combien de temps pour voir un r\u00e9sultat\u00a0?',
    answer:
      '4 \u00e0 8 semaines entre le diagnostic et les premiers gains mesurables. On commence par le chantier \u00e0 plus fort impact pour d\u00e9montrer la valeur rapidement.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function IaAgroalimentaireBretagnePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'Nos offres', href: '/ia' }, { label: 'Agroalimentaire' }]} />
      <Hero
        title="IA et automatisation pour l&apos;agroalimentaire breton"
        subtitle="Traçabilité, conformité, automatisation des commandes — des solutions terrain pour les PME agroalimentaires de 30 à 200 salariés."
      />

      {/* Les problèmes que je résous */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Le constat
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Les problèmes que je résous
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Dans l&apos;agroalimentaire, la donnée est partout — commandes, traçabilité, qualité,
            conformité — mais rarement exploitée correctement. Voici ce que je vois le plus souvent
            sur le terrain.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Ce que je mets en place */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ce que je mets en place
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Des solutions concrètes, déployées en quelques semaines, qui produisent des résultats
            mesurables dès le premier mois.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10">
                    <solution.icon className="h-6 w-6 text-breton-emerald" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{solution.description}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-breton-emerald">
                  <CheckCircle className="h-4 w-4" />
                  {solution.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas clients */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Résultats terrain
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cas clients agroalimentaires
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Ces projets ont été déployés dans des PME agroalimentaires bretonnes. Les résultats sont
            mesurés, pas estimés.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Automatisation des commandes
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                PME agroalimentaire, 45 salariés. Les commandes reçues par email étaient ressaisies
                manuellement dans l&apos;ERP par l&apos;équipe ADV. Après déploiement de
                l&apos;OCR et de l&apos;injection automatique :
              </p>
              <p className="mt-4 text-2xl font-bold text-breton-emerald">
                80&nbsp;% du temps de traitement éliminé
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
                >
                  <Link href="/cas-clients/commandes-agroalimentaire" className="gap-2">
                    Lire le cas complet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Conformité et audits qualité
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                PME agroalimentaire, 80 salariés. La préparation des audits IFS/BRC mobilisait
                3 personnes pendant 2 semaines. Après automatisation du reporting conformité :
              </p>
              <p className="mt-4 text-2xl font-bold text-breton-emerald">
                Préparation audit : de 2 semaines à 2 heures
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
                >
                  <Link href="/cas-clients/conformite-agroalimentaire" className="gap-2">
                    Lire le cas complet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic terrain */}
      <section className="py-20 sm:py-24 bg-breton-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-breton-sand">
              Première étape
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Diagnostic terrain gratuit — 3 jours sur site
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              On vient dans vos locaux, on observe vos process, on échange avec vos équipes. Vous
              repartez avec un plan d&apos;action chiffré et priorisé — pas un rapport de
              80 pages.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90">
                <Link href="/audit-ia" className="gap-2">
                  Mes priorités IA
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/contact" className="gap-2">
                  Nous contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Questions fréquentes
            </h2>

            <div className="mt-12 space-y-8">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="border-b border-slate-200 pb-8 last:border-0">
                  <h3 className="flex items-start gap-3 text-lg font-semibold text-slate-900">
                    <HelpCircle className="h-5 w-5 text-breton-copper shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="mt-3 pl-8 text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
