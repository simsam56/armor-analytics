'use client';

import { Building2, BarChart3, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

interface StackCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tools: string[];
  benefit: string;
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'erp',
    title: 'ERP & Gestion',
    icon: Building2,
    tools: ['Sage', 'Cegid', 'EBP', 'Divalto', 'Odoo'],
    benefit: 'On se connecte à votre ERP existant.',
  },
  {
    id: 'bi',
    title: 'Reporting & Pilotage',
    icon: BarChart3,
    tools: ['Power BI', 'Metabase', 'Looker Studio', 'Excel'],
    benefit: 'Tableaux de bord temps réel.',
  },
  {
    id: 'automation',
    title: 'Automatisation & Flux',
    icon: Zap,
    tools: ['Python', 'n8n', 'Make', 'API REST'],
    benefit: 'Zéro ressaisie, données fiables.',
  },
];

interface StackGridV4Props {
  className?: string;
}

export function StackGridV4({ className = '' }: StackGridV4Props) {
  return (
    <section className={`py-16 sm:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Pas besoin de changer vos outils
            </h2>
            <p className="mt-3 text-slate-600">
              On s'adapte à votre réalité, pas l'inverse.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {STACK_CATEGORIES.map((category, index) => (
            <FadeIn key={category.id} direction="up" delay={index * 100}>
              <StackCard category={category} />
            </FadeIn>
          ))}
        </div>

        {/* Sectors badges */}
        <FadeIn direction="up" delay={400}>
          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-500 mb-4">Secteurs d'expertise</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Agroalimentaire', 'Métallurgie', 'Plasturgie', 'Logistique'].map((sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface StackCardProps {
  category: StackCategory;
}

function StackCard({ category }: StackCardProps) {
  const Icon = category.icon;

  return (
    <div className="group rounded-2xl bg-slate-50 p-6 transition-all hover:bg-slate-100 hover:shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 group-hover:scale-110 transition-transform">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-slate-900">{category.title}</h3>
      </div>

      <p className="text-sm text-slate-600 mb-4">{category.benefit}</p>

      <div className="flex flex-wrap gap-2">
        {category.tools.slice(0, 4).map((tool) => (
          <span
            key={tool}
            className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
          >
            {tool}
          </span>
        ))}
        {category.tools.length > 4 && (
          <span className="inline-flex items-center text-xs text-slate-500">
            +{category.tools.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}
