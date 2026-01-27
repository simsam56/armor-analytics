'use client';

import Link from 'next/link';
import { ArrowRight, Factory, MapPin, Users, Calendar, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { PROJECTS } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';

interface ProjectsV4Props {
  showLink?: boolean;
  detailed?: boolean;
  limit?: number;
}

export function ProjectsV4({ showLink = true, detailed = false, limit }: ProjectsV4Props) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Cas clients réels
            </h2>
            <p className="mt-3 text-slate-600">
              Cas réels, anonymisés. Résultats mesurés.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 100}>
              <ProjectCard project={project} detailed={detailed} />
            </FadeIn>
          ))}
        </div>

        {showLink && (
          <FadeIn direction="up" delay={400}>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/projets" className="gap-2">
                  Voir tous les cas
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  detailed?: boolean;
}

function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  // Sector-based background colors
  const sectorColors: Record<string, { bg: string; accent: string }> = {
    Agroalimentaire: { bg: 'from-green-600 to-green-700', accent: 'bg-green-100 text-green-700' },
    Métallurgie: { bg: 'from-slate-600 to-slate-700', accent: 'bg-slate-100 text-slate-700' },
    Plasturgie: { bg: 'from-blue-600 to-blue-700', accent: 'bg-blue-100 text-blue-700' },
  };
  const colors = sectorColors[project.sector] || { bg: 'from-slate-600 to-slate-700', accent: 'bg-slate-100 text-slate-700' };

  return (
    <div className="group flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Visual header */}
      <div className={`relative h-36 bg-gradient-to-br ${colors.bg} p-5`}>
        {/* TODO: Remplacer par une vraie image du secteur */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 400 150" className="w-full h-full" fill="none">
            <rect x="20" y="80" width="80" height="60" fill="white" rx="4" />
            <rect x="120" y="60" width="100" height="80" fill="white" rx="4" />
            <rect x="240" y="70" width="70" height="70" fill="white" rx="4" />
            <rect x="320" y="90" width="60" height="50" fill="white" rx="4" />
          </svg>
        </div>

        {/* Badges */}
        <div className="relative flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
            <Factory className="h-3 w-3" />
            {project.sector}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
            <MapPin className="h-3 w-3" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
            <Users className="h-3 w-3" />
            {project.companySize}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Problem - 1 line */}
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {project.pain}
        </p>

        {/* Result - prominent */}
        <div className="mt-4 rounded-xl bg-green-50 p-4 ring-1 ring-green-100">
          <p className="text-lg font-bold text-green-700">{project.results.main}</p>
        </div>

        {detailed && project.testimonial && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex gap-2">
              <Quote className="h-4 w-4 text-slate-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-600 italic line-clamp-2">
                  "{project.testimonial.quote}"
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  — {project.testimonial.author}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Button asChild size="sm" variant="ghost" className="w-full justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              Problématique similaire ?
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
