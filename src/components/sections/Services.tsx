import Link from 'next/link';
import { Search, Zap, Brain, ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';

const iconMap = {
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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Un parcours en 3 étapes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            On comprend, on améliore, on optimise. Chaque étape apporte de la valeur. Vous avancez à
            votre rythme.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden transition-all hover:shadow-lg ${
                  service.isEntryPoint
                    ? 'ring-2 ring-blue-600 shadow-md'
                    : 'border border-gray-200'
                }`}
              >
                {/* Badge étape */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      service.isEntryPoint
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Étape {service.step}
                  </span>
                </div>

                {/* Badge point d'entrée */}
                {service.isEntryPoint && (
                  <div className="bg-blue-600 text-white text-xs font-medium text-center py-1">
                    Point d&apos;entrée recommandé
                  </div>
                )}

                <CardHeader className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm font-medium text-blue-600 mt-1">{service.tagline}</p>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {detailed ? (
                    <div className="space-y-6">
                      {/* Pour qui */}
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700 italic">{service.forWho}</p>
                      </div>

                      {/* Bénéfices */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ce que vous gagnez</h4>
                        <ul className="space-y-1">
                          {service.whatYouGet.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Livrables concrets */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ce que vous recevez concrètement</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-600 mt-1">→</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Durée et prix */}
                      <div className="pt-4 border-t border-gray-100 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">Durée : {service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-gray-900">
                            Budget indicatif : {service.priceRange}
                          </span>
                        </div>
                      </div>

                      {/* Note spéciale pour l'IA */}
                      {service.note && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <p className="text-sm text-amber-800">{service.note}</p>
                        </div>
                      )}

                      {/* CTA */}
                      <Button
                        asChild
                        className="w-full"
                        variant={service.isEntryPoint ? 'default' : 'outline'}
                      >
                        <a
                          href={getCalendlyUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {service.cta}
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.whatYouGet.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">{service.duration}</span> •{' '}
                          {service.priceRange}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {showLink && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/offres" className="gap-2">
                Voir le détail des offres
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
