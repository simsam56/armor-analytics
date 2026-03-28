import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bot, Workflow, ScanText, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IA & Automatisation',
  description:
    "Automatisez vos processus avec l'IA : OCR, agents IA, workflows n8n. Solutions concrètes pour PME bretonnes.",
  alternates: { canonical: 'https://www.balise-ia.fr/ia' },
};

export default function IaPage() {
  const useCases = [
    {
      icon: ScanText,
      title: 'OCR & extraction de données',
      description:
        'Éliminez la ressaisie manuelle. Traitez automatiquement vos bons de commande, factures et documents entrants.',
    },
    {
      icon: BrainCircuit,
      title: 'Agents IA métier',
      description:
        'Des agents qui comprennent vos process : qualification de leads, réponse aux emails, classification de tickets.',
    },
    {
      icon: Workflow,
      title: 'Automatisation de workflows',
      description:
        'Connectez vos outils (ERP, CRM, email) avec n8n ou Make. Zéro code côté client, tout piloté par vos données.',
    },
    {
      icon: Bot,
      title: 'Intégration ERP',
      description:
        'Synchronisation automatique entre vos outils métier. Finis les exports CSV et les doubles saisies.',
    },
  ];

  const tools = ['n8n', 'Make', 'Python', 'Claude', 'LangChain', 'Mistral'];

  return (
    <>
      <Hero
        title="Automatisez ce qui freine vos équipes"
        subtitle="OCR, agents IA, workflows n8n. On déploie des solutions concrètes, mesurées avant et après."
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
            Ce qu&apos;on automatise
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Des cas d&apos;usage éprouvés, pas des projets pilotes. Chaque mission se mesure avant
            et après.
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
      <Projects filter="ia" limit={2} />

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Prêt à automatiser ?</h2>
          <p className="mt-4 text-white/60">
            Le diagnostic identifie les 2-3 automatisations les plus rentables pour votre PME.
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
