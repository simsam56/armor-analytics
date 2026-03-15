import { MetricsBeforeAfter } from '@/components/visuals';

export function MetricsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Transformation concrète de votre quotidien
          </h2>
          <p className="mt-3 text-slate-600">
            Voici ce qui change quand on automatise vos process manuels.
          </p>
        </div>
        <MetricsBeforeAfter />
      </div>
    </section>
  );
}
