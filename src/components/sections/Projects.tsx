import Link from 'next/link';
import { ArrowRight, Factory } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/constants';

interface ProjectsProps {
  showLink?: boolean;
  detailed?: boolean;
}

export function Projects({ showLink = true, detailed = false }: ProjectsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cas d&apos;usage concrets
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des projets réalisés pour des PME industrielles comme la vôtre.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Factory className="h-4 w-4" />
                  {project.sector}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.context}</CardDescription>
              </CardHeader>
              <CardContent>
                {detailed ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Approche</h4>
                      <ul className="space-y-1">
                        {project.approach.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 font-medium">{idx + 1}.</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Livrables</h4>
                      <ul className="space-y-1">
                        {project.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Valeur créée</h4>
                      <p className="text-sm text-gray-700 bg-green-50 p-3 rounded-lg">
                        {project.value}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-800">{project.value}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
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
                Voir tous nos projets
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
