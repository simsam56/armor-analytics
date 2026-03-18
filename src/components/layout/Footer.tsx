import Link from 'next/link';
import { Linkedin, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { SITE_CONFIG, getCalendlyUrl, getContactEmail } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { LogoWithIcon } from '@/components/ui/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      {/* CTA Banner */}
      <div className="bg-[#1B4D3E]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-white">
                Prêt à supprimer vos ressaisies ?
              </h3>
              <p className="text-white/70 text-sm">
                Diagnostic gratuit de 30 minutes, sans engagement.
              </p>
            </div>
            <Button asChild variant="secondary" className="gap-2 shrink-0">
              <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                Réserver un créneau
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <LogoWithIcon size="sm" />
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-600 leading-relaxed">
              Collectif data & automatisation spécialisé PME industrielles. On supprime vos
              ressaisies, on fiabilise vos données, et on vous donne les tableaux de bord pour
              piloter votre activité.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-[#1B4D3E]" />
              <span>
                Basés à {SITE_CONFIG.location.city} – Interventions en {SITE_CONFIG.location.region}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-[#1B4D3E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${getContactEmail()}`}
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#1B4D3E]"
                >
                  <Mail className="h-4 w-4" />
                  {getContactEmail()}
                </a>
              </li>
              {SITE_CONFIG.social.linkedin && (
                <li>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#1B4D3E]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-slate-500 transition-colors hover:text-[#1B4D3E]"
              >
                Mentions légales
              </Link>
              <span className="text-sm text-slate-400">
                {SITE_CONFIG.location.city}, {SITE_CONFIG.location.region}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
