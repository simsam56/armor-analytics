'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, OFFER_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LogoBalise } from '@/components/animations';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!offersOpen) return;
    function handleClick(e: MouseEvent) {
      if (offersRef.current && !offersRef.current.contains(e.target as Node)) {
        setOffersOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [offersOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    menuBtnRef.current?.focus();
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-400',
        scrolled
          ? 'bg-white/85 backdrop-blur-[24px] saturate-[1.8] border-b border-breton-sand/50 shadow-sm'
          : 'bg-breton-foam/70 backdrop-blur-[24px] saturate-[1.8] border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo — calé à gauche */}
        <LogoBalise size={42} textSize="text-[1.35rem]" href="/" />

        {/* Nav links — centrés */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {/* Dropdown Nos offres */}
          <div ref={offersRef} className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[0.95rem] font-medium transition-colors text-breton-slate hover:text-breton-navy"
              onClick={() => setOffersOpen(!offersOpen)}
              aria-expanded={offersOpen}
            >
              Nos offres
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-200',
                  offersOpen && 'rotate-180'
                )}
              />
            </button>
            {offersOpen && (
              <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white border border-breton-sand/50 shadow-lg py-2 z-50">
                {OFFER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy transition-colors"
                    onClick={() => setOffersOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium transition-colors text-breton-slate hover:text-breton-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <div className="flex lg:hidden">
          <button
            ref={menuBtnRef}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-breton-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* CTAs droite */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-3">
          {SITE_CONFIG.phone && (
            <a
              href={`tel:+33${SITE_CONFIG.phone.replace(/\s/g, '').slice(1)}`}
              className="flex items-center gap-1.5 text-sm text-breton-slate hover:text-breton-navy transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE_CONFIG.phone}
            </a>
          )}
          <Button
            asChild
            size="sm"
            className="bg-breton-navy text-white hover:bg-breton-slate"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-breton-navy text-white hover:bg-breton-slate"
          >
            <Link href="/audit-ia">Diagnostic gratuit &rarr;</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 px-4 pb-4 bg-white rounded-b-xl shadow-lg">
          {/* Nos offres section */}
          <p className="px-3 pt-3 pb-1 text-xs font-semibold text-breton-granite uppercase tracking-wider">
            Nos offres
          </p>
          {OFFER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-slate-200 my-2" />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-200">
            <Button asChild className="w-full bg-breton-navy hover:bg-breton-slate">
              <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </Button>
            <Button asChild className="w-full bg-breton-navy hover:bg-breton-slate">
              <Link href="/audit-ia" onClick={closeMobileMenu}>
                Diagnostic gratuit &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
