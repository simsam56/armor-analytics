'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoWithIcon } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/audit-ia', label: 'Audit IA', highlight: true },
  { href: '/a-propos', label: 'À propos' },
  { href: '/cas-clients', label: 'Cas clients' },
  { href: '/contact', label: 'Contact' },
];

const EMAIL = 'balisedata@gmail.com';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      )}
      role="banner"
    >
      {/* Top bar */}
      <div className="bg-[#1B4D3E] text-white py-2 hidden sm:block">
        <div className="container-content flex justify-end">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-sm hover:text-[#74C69D] transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {EMAIL}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="container-content flex items-center justify-between py-3"
        role="navigation"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center logo-hover focus-visible:outline-offset-4"
          aria-label="BALISE Data - Accueil"
        >
          <LogoWithIcon size="md" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors focus-visible:outline-offset-4",
                'highlight' in link && link.highlight
                  ? "text-[#1B4D3E] font-semibold"
                  : "text-[#334139] hover:text-[#1B4D3E]"
              )}
            >
              {link.label}
              {'highlight' in link && link.highlight && (
                <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#1B4D3E] text-white">
                  NEW
                </span>
              )}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#1B4D3E] hover:bg-[#143D31] text-white rounded-md px-6 transition-base"
          >
            <Link href="/contact">
              Nous contacter
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#1B4D3E] hover:text-[#40916C] transition-colors sm:hidden"
            aria-label="Envoyer un email"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-lg p-3 text-[#334139] hover:bg-[#F8FAF9] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-x-0 top-[72px] sm:top-[88px] bottom-0 bg-white transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 visible mobile-menu-enter' : 'opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="h-full flex flex-col px-6 py-6">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-sm text-[#64756C] hover:text-[#1B4D3E] py-3 border-b border-[#E2E8E5] sm:hidden"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {EMAIL}
          </a>

          <nav className="flex-1 space-y-1 mt-4" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-4 text-lg font-medium text-[#334139] hover:text-[#1B4D3E] border-b border-[#E2E8E5] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 pb-safe">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#1B4D3E] hover:bg-[#143D31] text-white text-base py-6 rounded-md"
            >
              <Link href="/audit-ia" onClick={() => setMobileMenuOpen(false)}>
                Faire mon audit IA
              </Link>
            </Button>
            <p className="mt-4 text-center text-sm text-[#64756C]">
              Gratuit • 3 minutes • Résultats immédiats
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
