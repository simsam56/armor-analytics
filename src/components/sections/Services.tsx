import Link from 'next/link';
import { Search, Zap, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Zap,
  Brain,
};

interface ServicesProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Services({ showLink = true, detailed = false }: ServicesProps) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#40916C]">
            Notre approche
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un parcours en 3 étapes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            On comprend, on améliore, on optimise. Chaque étape apporte de la valeur. Vous avancez à
            votre rythme.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl border p-8 transition-all hover:shadow-lg ${
                  service.isEntryPoint
                    ? 'border-[#1B4D3E]/20 bg-[#1B4D3E]/[0.02] ring-1 ring-[#1B4D3E]/10'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B4D3E]/10">
                    <Icon className="h-6 w-6 text-[#1B4D3E]" />
                  </div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Étape {service.step}
                  </span>
                </div>

                {/* Entry point badge */}
                {service.isEntryPoint && (
                  <div className="mb-4 inline-flex items-center rounded-full bg-[#1B4D3E] px-3 py-1 text-xs font-medium text-white">
                    Point d&apos;entrée recommandé
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#40916C]">{service.tagline}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.description}</p>

                {detailed ? (
                  <DetailedContent service={service} />
                ) : (
                  <CompactContent service={service} />
                )}
              </div>
            );
          })}
        </div>

        {showLink && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild className="border-slate-300">
              <Link href="/services" className="gap-2">
                Voir le détail des offres
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function CompactContent({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="mt-6 space-y-4">
      <ul className="space-y-2">
        {service.benefits.slice(0, 3).map((benefit, idx) => (
          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-[#40916C] mt-0.5 shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-slate-100">
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-700">{service.duration}</span>
          <span className="mx-2 text-slate-300">·</span>
          {service.priceRange}
        </p>
      </div>
    </div>
  );
}

function DetailedContent({ service }: { service: (typeof SERVICES)[0] }) {
  return (
    <div className="mt-6 space-y-5">
      {/* Pour qui */}
      <div className="rounded-lg bg-slate-50 p-3">
        <p className="text-sm text-slate-600 italic">{service.forWho}</p>
      </div>

      {/* Bénéfices */}
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Ce que vous gagnez</h4>
        <ul className="space-y-1.5">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-[#40916C] mt-0.5 shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Livrables */}
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Ce que vous recevez</h4>
        <ul className="space-y-1.5">
          {(service.concreteDeliverables || []).map((deliverable, idx) => (
            <li key={idx} className="text-sm flex items-start gap-2">
              <span className="text-[#40916C] mt-0.5 shrink-0">→</span>
              <span>
                <span className="text-slate-700">{deliverable.item}</span>
                <span className="text-slate-400 ml-1">({deliverable.format})</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Durée et prix */}
      <div className="pt-4 border-t border-slate-100 space-y-1">
        <p className="text-sm text-slate-600">
          Durée : <span className="font-medium text-slate-900">{service.duration}</span>
        </p>
        <p className="text-sm font-medium text-slate-900">{service.priceRange}</p>
      </div>

      {/* CTA */}
      <Button
        asChild
        className="w-full"
        variant={service.isEntryPoint ? 'default' : 'outline'}
      >
        <a
          href="https://calendly.com/balise-ia/diagnostic"
          target="_blank"
          rel="noopener noreferrer"
        >
          {service.cta}
        </a>
      </Button>
    </div>
  );
}
