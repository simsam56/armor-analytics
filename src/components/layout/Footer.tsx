import Link from 'next/link';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-gray-900">
                Armor<span className="text-blue-600">Analytics</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600">
              {SITE_CONFIG.tagline}. Structure agile et réseau de spécialistes pour accompagner les
              PME industrielles dans leur transformation data et IA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                {SITE_CONFIG.location.region}
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-gray-500 transition-colors hover:text-blue-600"
              >
                Mentions légales
              </Link>
              <span className="text-sm text-gray-400">{SITE_CONFIG.location.city}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
