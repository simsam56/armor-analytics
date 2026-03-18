'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, getCalendlyUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LogoWithIcon } from '@/components/ui/logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoWithIcon size="sm" variant={scrolled ? 'default' : 'white'} />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-slate-600 hover:text-[#1B4D3E]'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
              scrolled ? 'text-slate-700' : 'text-white'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-3">
          <Button
            variant="ghost"
            asChild
            size="sm"
            className={cn(
              scrolled ? '' : 'text-white/80 hover:text-white hover:bg-white/10'
            )}
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className={cn(
              'gap-2',
              scrolled
                ? ''
                : 'bg-white text-[#1B4D3E] hover:bg-white/90'
            )}
          >
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              Diagnostic gratuit
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 px-4 pb-4 bg-white rounded-b-xl shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1B4D3E]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-200">
            <Button variant="outline" asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Nous contacter
              </Link>
            </Button>
            <Button asChild className="w-full gap-2">
              <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                Diagnostic gratuit – 30 min
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
