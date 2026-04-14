'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Search, BarChart3, Bot, GraduationCap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LogoBalise } from '@/components/animations';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  BarChart3,
  Bot,
  GraduationCap,
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!servicesOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    menuBtnRef.current?.focus();
  }, []);

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

  // Find the Services nav item with children
  const servicesNav = NAV_LINKS.find((link) => 'children' in link && link.children);
  const directLinks = NAV_LINKS.filter((link) => 'href' in link && link.href);

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
        {/* Logo */}
        <LogoBalise size={42} textSize="text-[1.35rem]" href="/" />

        {/* Nav links — with Services dropdown */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-7">
          {/* Services dropdown */}
          {servicesNav && servicesNav.children && (
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                className="flex items-center gap-1 text-[0.9rem] font-medium transition-colors text-breton-slate hover:text-breton-navy"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
              >
                {servicesNav.label}
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-200',
                    servicesOpen && 'rotate-180'
                  )}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 rounded-xl shadow-lg border border-breton-sand bg-white p-2"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {servicesNav.children.map((child) => {
                    // Match icon from SERVICES constant
                    const serviceData = [
                      { href: '/diagnostic-ia', icon: 'Search' },
                      { href: '/pilotage-augmente', icon: 'BarChart3' },
                      { href: '/automatisation-agents-ia', icon: 'Bot' },
                      { href: '/formation-ia', icon: 'GraduationCap' },
                    ].find((s) => s.href === child.href);
                    const IconComp = serviceData ? ICON_MAP[serviceData.icon] : null;

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {IconComp && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-breton-emerald/10">
                            <IconComp className="h-4 w-4 text-breton-emerald" />
                          </div>
                        )}
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Direct links */}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href!}
              className="text-[0.9rem] font-medium transition-colors text-breton-slate hover:text-breton-navy"
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
            className="gap-2 bg-breton-navy text-white hover:bg-breton-slate"
          >
            <Link href="/contact">Diagnostic gratuit &rarr;</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 px-4 pb-4 bg-white rounded-b-xl shadow-lg">
          {/* Mobile Services expandable */}
          {servicesNav && servicesNav.children && (
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                {servicesNav.label}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    mobileServicesOpen && 'rotate-180'
                  )}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-1">
                  {servicesNav.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
                      onClick={closeMobileMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Direct links */}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href!}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-200">
            <Button asChild className="w-full bg-breton-navy hover:bg-breton-slate">
              <Link href="/contact" onClick={closeMobileMenu}>
                Diagnostic gratuit &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
