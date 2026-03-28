import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart3, Database, RefreshCw, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data & Reporting',
  description:
    'Dashboards temps réel, data engineering, reporting automatisé pour PME bretonnes. Power BI, Metabase, DuckDB.',
  alternates: { canonical: 'https://www.balise-ia.fr/data' },
};

export default function DataPage() {
  const useCases = [
    {
      icon: BarChart3,
      title: 'Dashboards temps réel',
      description:
        "Vos KPIs disponibles en un coup d\u2019\u0153il. Connecté directement à votre ERP, votre CRM ou vos fichiers Excel.",
    },
    {
      icon: Database,
      title: 'Data engineering / ETL',
      description:
        'Centralisez vos sources de données. Un pipeline fiable qui transforme vos données brutes en informations exploitables.',
    },
    {
      icon: RefreshCw,
      title: 'Reporting automatisé',
      description:
        'Finis les rapports manuels du lundi matin. Vos équipes reçoivent automatiquement les bons chiffres.',
    },
    {
      icon: TrendingUp,
      title: 'Pilotage en temps réel',
      description:
        "Décidez sur la base de données fraîches, pas d\u2019exports d\u2019hier. Alertes et seuils configurables.",
    },
  ];

  const tools = ['Power BI', 'Metabase', 'Microsoft Fabric', 'DuckDB', 'dbt', 'Python'];

  return (
    <>
      <Hero
        title="Pilotez votre activité avec des données fiables"
        subtitle="Dashboards, pipelines de données, reporting automatisé. Vos données centralisées et exploitables."
      />

      {/* CTA sous le hero */}
      <div className="bg-breton-sand py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
          <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
            <Link href="/audit-ia">Faire le diagnostic →</Link>
          </Button>
        </div>
      </div>

      {/* Cas d&apos;usage */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Ce qu&apos;on met en place
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Des cas d&apos;usage concrets, pas des tableaux de bord gadgets. Chaque dashboard se
            justifie par une décision qu&apos;il aide à prendre.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-breton-emerald/10">
                  <uc.icon className="h-5 w-5 text-breton-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-breton-navy mb-1">{uc.title}</h3>
                  <p className="text-breton-slate text-sm leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-16 bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-6">
            Nos outils
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-breton-sand bg-white px-4 py-1.5 text-sm font-medium text-breton-slate"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cas clients */}
      <Projects filter="data" limit={2} />

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Prêt à piloter avec des données fiables ?
          </h2>
          <p className="mt-4 text-white/60">
            Le diagnostic identifie les dashboards et automatisations les plus utiles pour votre
            PME.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90"
            >
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
