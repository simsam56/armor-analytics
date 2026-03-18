import { BarChart3, Zap, Building2 } from 'lucide-react';

interface StackCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tools: string[];
  description: string;
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'erp',
    title: 'ERP & Gestion',
    icon: Building2,
    tools: ['Sage', 'Cegid', 'EBP', 'Divalto', 'Odoo', 'Dolibarr'],
    description: 'On se connecte à votre ERP existant, sans le remplacer.',
  },
  {
    id: 'bi',
    title: 'BI & Reporting',
    icon: BarChart3,
    tools: ['Power BI', 'Metabase', 'Looker Studio', 'Excel avancé', 'Tableau'],
    description: 'Tableaux de bord temps réel, accessibles à tous.',
  },
  {
    id: 'automation',
    title: 'Automatisation & Data',
    icon: Zap,
    tools: ['Python', 'n8n', 'Make', 'Zapier', 'API REST', 'SQL'],
    description: 'Flux automatisés, zéro ressaisie, données fiables.',
  },
];

interface StackGridProps {
  className?: string;
}

export function StackGrid({ className = '' }: StackGridProps) {
  return (
    <section className={`py-16 bg-slate-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            On maîtrise vos outils
          </h2>
          <p className="mt-3 text-slate-600">
            Pas besoin de tout changer. On se branche sur votre existant et on automatise ce qui
            vous fait perdre du temps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STACK_CATEGORIES.map((category) => (
            <StackCard key={category.id} category={category} />
          ))}
        </div>

        {/* Sectors */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-slate-700 mb-3">
            Secteurs d&apos;expertise
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Agroalimentaire', 'Métallurgie', 'Plasturgie', 'Logistique', 'Mécanique'].map(
              (sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
                >
                  {sector}
                </span>
              )
            )}
          </div>
        </div>
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
    <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200/80 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B4D3E]/10">
          <Icon className="h-5 w-5 text-[#1B4D3E]" />
        </div>
        <h3 className="font-semibold text-slate-900">{category.title}</h3>
      </div>

      <p className="text-sm text-slate-600 mb-4">{category.description}</p>

      <div className="flex flex-wrap gap-2">
        {category.tools.map((tool) => (
          <span
            key={tool}
            className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
