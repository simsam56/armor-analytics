import { Calculator, Clock, AlertTriangle, TrendingDown } from 'lucide-react';
import { METHODOLOGY } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  'Temps de traitement': Clock,
  "Taux d'erreur": AlertTriangle,
  'Délai de disponibilité': TrendingDown,
  'Coût évité': Calculator,
};

export function Methodology() {
  return (
    <section id="methodologie" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {METHODOLOGY.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{METHODOLOGY.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHODOLOGY.metrics.map((metric) => {
            const Icon = iconMap[metric.name] || Calculator;
            return (
              <div
                key={metric.name}
                className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                <div className="rounded-lg bg-white p-3 text-sm">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exemple
                  </span>
                  <p className="mt-1 font-mono text-gray-700">{metric.example}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Chaque projet fait l&apos;objet d&apos;un bilan chiffré avant/après.
            <br />
            <span className="font-medium text-gray-700">
              NDA possible dès le premier échange.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
