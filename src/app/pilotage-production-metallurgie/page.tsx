import type { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Bell,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Clock,
  TrendingUp,
  CalendarCheck,
  ChevronDown,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Pilotage production pour PME m\u00e9tallurgie et chaudronnerie | Bretagne',
  description:
    'Dashboard production temps r\u00e9el, TRS automatis\u00e9, tra\u00e7abilit\u00e9 qualit\u00e9. Par un ancien superviseur de production navale. Diagnostic terrain gratuit, Bretagne.',
  keywords:
    'pilotage production m\u00e9tallurgie, TRS automatis\u00e9, dashboard production PME, chaudronnerie Bretagne, tra\u00e7abilit\u00e9 qualit\u00e9 m\u00e9tallurgie, suivi production temps r\u00e9el',
  openGraph: {
    title: 'Pilotage production pour PME m\u00e9tallurgie et chaudronnerie \u2014 balise-ia',
    description:
      'Dashboard production temps r\u00e9el, TRS automatis\u00e9, tra\u00e7abilit\u00e9 qualit\u00e9. Par un ancien superviseur de production navale. Diagnostic terrain gratuit, Bretagne.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/pilotage-production-metallurgie',
  },
};

const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    text: 'Planning atelier qui explose au moindre al\u00e9a (panne, absence, retard fournisseur)',
  },
  {
    icon: Clock,
    text: 'TRS calcul\u00e9 \u00e0 la main, en fin de semaine, avec des donn\u00e9es d\u00e9j\u00e0 p\u00e9rim\u00e9es',
  },
  {
    icon: BookOpen,
    text: 'Fiches qualit\u00e9 papier impossibles \u00e0 exploiter pour les audits',
  },
  {
    icon: AlertTriangle,
    text: 'Connaissance des gammes et r\u00e9glages concentr\u00e9e dans la t\u00eate de 2-3 personnes',
  },
  {
    icon: Clock,
    text: 'ERP/GPAO sous-utilis\u00e9 : les op\u00e9rateurs saisissent le minimum',
  },
  {
    icon: AlertTriangle,
    text: 'Pas de visibilit\u00e9 temps r\u00e9el sur les encours et la charge atelier',
  },
];

const SOLUTIONS = [
  {
    icon: BarChart3,
    title: 'Dashboard production temps r\u00e9el',
    description:
      'TRS, encours, cadence par ligne \u2014 vos indicateurs cl\u00e9s accessibles en un coup d\u2019\u0153il, sans ressaisie ni tableur.',
  },
  {
    icon: Bell,
    title: 'Alertes automatiques sur d\u00e9rives',
    description:
      'D\u00e9tection en temps r\u00e9el des \u00e9carts qualit\u00e9 et des d\u00e9rives de production. Vous \u00eates pr\u00e9venu avant que le probl\u00e8me ne s\u2019aggrave.',
  },
  {
    icon: BookOpen,
    title: 'Base de connaissances atelier',
    description:
      'Gammes, r\u00e9glages, proc\u00e9dures \u2014 tout est document\u00e9 et accessible. Plus de d\u00e9pendance \u00e0 la m\u00e9moire de quelques experts.',
  },
  {
    icon: GraduationCap,
    title: 'Formation terrain sur site',
    description:
      'Adoption r\u00e9elle, pas un outil de plus. On forme vos \u00e9quipes sur le terrain, avec leurs donn\u00e9es, sur leurs postes.',
  },
];

const FAQ_ITEMS = [
  {
    question: '\u00c7a marche avec notre ERP/GPAO actuel ?',
    answer:
      'Oui. On s\u2019interface avec Sage, Cegid, Divalto, Dynamics, Clipper ou n\u2019importe quel ERP/GPAO du march\u00e9. On travaille avec ce qui est en place \u2014 pas besoin de tout changer.',
  },
  {
    question: 'Nos op\u00e9rateurs vont-ils adopter les outils ?',
    answer:
      'C\u2019est la question cl\u00e9 \u2014 et c\u2019est pour \u00e7a qu\u2019on forme sur site, avec les \u00e9quipes, sur leurs postes. J\u2019ai \u00e9t\u00e9 de leur c\u00f4t\u00e9 pendant 7 ans en production navale. On con\u00e7oit des outils simples, pas des usines \u00e0 gaz.',
  },
  {
    question: 'Combien de temps pour un premier r\u00e9sultat ?',
    answer:
      '4 \u00e0 8 semaines entre le diagnostic et le premier dashboard en production. On commence par ce qui a le plus d\u2019impact, pas par un projet \u00e0 6 mois.',
  },
  {
    question: 'Et si on n\u2019a pas de MES ?',
    answer:
      'La majorit\u00e9 des PME m\u00e9tallurgie n\u2019en ont pas. On travaille avec ce qui existe : ERP, GPAO, fichiers Excel, saisies manuelles. On structure et on automatise \u00e0 partir de l\u2019existant.',
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

export default function PilotageProductionMetallurgiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        title="Pilotage production pour PME m&eacute;tallurgie et chaudronnerie"
        subtitle="Dashboard temps r&eacute;el, TRS automatis&eacute;, tra&ccedil;abilit&eacute; qualit&eacute; &mdash; par quelqu&apos;un qui a pilot&eacute; des lignes de production pendant 7 ans."
      />

      {/* Les problèmes que je connais */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Le terrain
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Les probl&egrave;mes que je connais
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Avant de faire du conseil, j&apos;ai pass&eacute; 7 ans en production navale. Ces
            probl&egrave;mes, je les ai v&eacute;cus de l&apos;int&eacute;rieur.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAIN_POINTS.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-breton-copper/10">
                  <point.icon className="h-5 w-5 text-breton-copper" />
                </div>
                <p className="text-slate-700 leading-relaxed">{point.text}</p>
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
            Des outils concrets, adapt&eacute;s &agrave; votre niveau de maturit&eacute; et &agrave;
            vos &eacute;quipes. Pas de solution &laquo;&nbsp;cl&eacute; en main&nbsp;&raquo; qui
            finit dans un tiroir.
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas client */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            R&eacute;sultat terrain
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            De 4h de reporting manuel &agrave; un dashboard temps r&eacute;el
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            PME m&eacute;tallurgie, Finist&egrave;re &mdash; 45 salari&eacute;s, 3 lignes de
            production.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-breton-emerald" />
                <span className="text-3xl font-bold text-breton-emerald">-4h</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">de reporting par semaine</p>
            </div>
            <div className="rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5 text-breton-emerald" />
                <span className="text-3xl font-bold text-breton-emerald">&times;3</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">r&eacute;activit&eacute; sur les
                d&eacute;rives</p>
            </div>
            <div className="rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <CalendarCheck className="h-5 w-5 text-breton-emerald" />
                <span className="text-3xl font-bold text-breton-emerald">3 mois</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">pour atteindre le ROI</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
            >
              <Link href="/cas-clients/metallurgie-finistere" className="gap-2">
                Lire le cas client complet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Diagnostic terrain */}
      <section className="py-20 sm:py-24 bg-breton-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Diagnostic terrain gratuit
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
            3 jours sur site. On observe vos flux, on &eacute;change avec vos &eacute;quipes, on
            identifie les 3 chantiers prioritaires. Vous repartez avec un plan
            d&apos;action chiffr&eacute;, pas un rapport g&eacute;n&eacute;rique.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90 font-semibold"
            >
              <Link href="/audit-ia" className="gap-2">
                D&eacute;marrer le diagnostic
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
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Questions fr&eacute;quentes
          </h2>

          <div className="mt-12 mx-auto max-w-3xl divide-y divide-slate-200">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-900">
                  {item.question}
                  <ChevronDown className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
