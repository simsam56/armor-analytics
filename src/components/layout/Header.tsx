'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { getCalendlyUrl } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { LogoWithIcon } from '@/components/ui/logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <LogoWithIcon size="sm" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#1B4D3E]"
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
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
          <Button variant="ghost" asChild size="sm">
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button asChild size="sm" className="gap-2">
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-4 w-4" />
              Diagnostic gratuit
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 px-4 pb-4">
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
