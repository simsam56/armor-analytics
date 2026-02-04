import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { LogoWithIcon } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

const EMAIL = 'balisedata@gmail.com';

const FOOTER_LINKS = {
  navigation: [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/cas-clients', label: 'Cas clients' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions légales' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2922]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-block logo-hover"
              aria-label="BALISE Data - Accueil"
            >
              <LogoWithIcon variant="white" size="lg" />
            </Link>
            <p className="mt-6 max-w-sm text-base text-white/60 leading-relaxed">
              IA pragmatique et automatisation des données pour les PME industrielles bretonnes.
              Résultats mesurables, approche terrain.
            </p>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-[#1B4D3E] transition-base"
              >
                <Link href="/contact">
                  Diagnostic gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="mt-6 space-y-4" aria-label="Navigation footer">
              {FOOTER_LINKS.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Contact
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/40 mt-0.5 shrink-0" aria-hidden="true" />
                <address className="text-sm text-white/60 not-italic">
                  Lorient, Morbihan<br />
                  Bretagne, France
                </address>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 text-white/40 group-hover:text-white shrink-0" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              © {currentYear} BALISE Data. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
