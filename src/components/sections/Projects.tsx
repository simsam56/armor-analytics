import Link from 'next/link';
import {
  ArrowRight,
  Factory,
  MapPin,
  Users,
  Wrench,
  Clock,
  CheckCircle,
  Quote,
  Calendar,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PROJECTS, SITE_CONFIG } from '@/lib/constants';

interface ProjectsProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Projects({ showLink = true, detailed = false }: ProjectsProps) {
  return (
    <section id="realisations" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Réalisations
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cas clients réels, anonymisés
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Noms anonymisés, résultats réels. PME et réseaux bretons.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <CardHeader className="bg-slate-50 border-b border-slate-200">
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Factory className="h-4 w-4 text-breton-emerald" />
                    {project.sector}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-breton-emerald" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-breton-emerald" />
                    {project.companySize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Wrench className="h-4 w-4 text-breton-emerald" />
                    {project.existingTools}
                  </span>
                </div>
                <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="pt-6">
                {detailed ? (
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Colonne gauche : contexte et approche */}
                    <div className="space-y-6">
                      {/* Contexte */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Le contexte</h4>
                        <p className="text-slate-600">{project.context}</p>
                        <div className="mt-3 bg-red-50 border border-red-100 rounded-lg p-3">
                          <p className="text-sm text-red-800 font-medium">
                            Problème : {project.pain}
                          </p>
                        </div>
                      </div>

                      {/* Approche */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Notre approche</h4>
                        <ul className="space-y-2">
                          {project.approach.map((item, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-breton-emerald/10 text-breton-emerald text-xs font-medium shrink-0">
                                {idx + 1}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Livrables */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Livrables</h4>
                        <ul className="space-y-1">
                          {project.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Durée */}
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="h-4 w-4" />
                        <span>Durée du projet : {project.duration}</span>
                      </div>
                    </div>

                    {/* Colonne droite : résultats et témoignage */}
                    <div className="space-y-6">
                      {/* Métriques avant/après V2 */}
                      {project.beforeAfter && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                            <h5 className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-3">
                              Avant
                            </h5>
                            <ul className="space-y-2">
                              {project.beforeAfter.before.map((item, idx) => (
                                <li key={idx} className="text-sm">
                                  <span className="text-slate-600">{item.metric}</span>
                                  <span className="block font-medium text-red-700">{item.value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                            <h5 className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-3">
                              Après
                            </h5>
                            <ul className="space-y-2">
                              {project.beforeAfter.after.map((item, idx) => (
                                <li key={idx} className="text-sm">
                                  <span className="text-slate-600">{item.metric}</span>
                                  <span className="block font-medium text-green-700">{item.value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Résultat principal */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h4 className="font-semibold text-green-900 mb-2">Résultat principal</h4>
                        <p className="text-2xl font-bold text-green-700">{project.results.main}</p>
                      </div>

                      {/* Résultats secondaires */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Autres bénéfices</h4>
                        <ul className="space-y-2">
                          {project.results.secondary.map((result, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Note technique V2 */}
                      {project.techNote && (
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                            Précision technique
                          </p>
                          <p className="text-sm text-slate-600">{project.techNote}</p>
                        </div>
                      )}

                      {/* Témoignage */}
                      {project.testimonial && (
                        <div className="bg-breton-emerald/5 border border-breton-emerald/10 rounded-xl p-6">
                          <Quote className="h-6 w-6 text-breton-moss mb-2" />
                          <p className="text-slate-700 italic mb-3">
                            &ldquo;{project.testimonial.quote}&rdquo;
                          </p>
                          <p className="text-sm font-medium text-breton-emerald">
                            — {project.testimonial.author}
                          </p>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-sm text-slate-600 mb-3">
                          Vous avez une problématique similaire ?
                        </p>
                        <Button asChild size="sm">
                          <a
                            href={`https://calendly.com/${SITE_CONFIG.calendly}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Calendar className="h-4 w-4" />
                            En parler en 30 min
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Résultat principal — EN PREMIER */}
                    <div className="bg-breton-emerald/10 border border-breton-emerald/20 rounded-lg p-4">
                      <p className="text-xs font-medium text-breton-moss uppercase tracking-wider mb-1">Résultat</p>
                      <p className="text-lg font-bold text-breton-emerald">{project.results.main}</p>
                    </div>

                    <p className="text-slate-600 text-sm">{project.context}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-breton-emerald/5 px-2.5 py-0.5 text-xs font-medium text-breton-emerald"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {showLink && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projets" className="gap-2">
                Voir le détail des réalisations
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
