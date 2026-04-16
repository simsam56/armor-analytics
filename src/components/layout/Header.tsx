'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, SITE_CONFIG, type NavLink } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LogoBalise } from '@/components/animations';

function isDropdown(link: NavLink): link is { label: string; children: { href: string; label: string }[] } {
  return 'children' in link;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    menuBtnRef.current?.focus();
  }, []);

  // Keyboard: Escape, ArrowDown/Up within dropdown
  useEffect(() => {
    if (!mobileMenuOpen && !dropdownOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (dropdownOpen) {
          setDropdownOpen(false);
          dropdownBtnRef.current?.focus();
        } else {
          closeMobileMenu();
        }
      }
      if (dropdownOpen && dropdownRef.current) {
        const items = dropdownRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]');
        const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLElement);
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          items[currentIndex < items.length - 1 ? currentIndex + 1 : 0]?.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          items[currentIndex > 0 ? currentIndex - 1 : items.length - 1]?.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, dropdownOpen, closeMobileMenu]);

  // Focus first item when dropdown opens
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      const firstItem = dropdownRef.current.querySelector<HTMLElement>('[role="menuitem"]');
      firstItem?.focus();
    }
  }, [dropdownOpen]);

  // Close desktop dropdown on click outside
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

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

        {/* Nav links desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-7">
          {NAV_LINKS.map((link) =>
            isDropdown(link) ? (
              <div key={link.label} ref={dropdownRef} className="relative">
                <button
                  ref={dropdownBtnRef}
                  type="button"
                  className="flex items-center gap-1 text-[0.9rem] font-medium transition-colors text-breton-slate hover:text-breton-navy"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  {link.label}
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', dropdownOpen && 'rotate-180')} />
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-breton-sand bg-white py-2 shadow-lg"
                    onMouseLeave={() => setDropdownOpen(false)}
                    role="menu"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.9rem] font-medium transition-colors text-breton-slate hover:text-breton-navy"
              >
                {link.label}
              </Link>
            )
          )}
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
            <Link href="/contact">Nous contacter &rarr;</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="space-y-1 px-4 pb-4 bg-white rounded-b-xl shadow-lg">
          {NAV_LINKS.map((link) =>
            isDropdown(link) ? (
              <div key={link.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  aria-expanded={mobileDropdownOpen}
                >
                  {link.label}
                  <ChevronDown className={cn('h-4 w-4 transition-transform', mobileDropdownOpen && 'rotate-180')} />
                </button>
                {mobileDropdownOpen && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
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
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-breton-slate hover:bg-breton-foam hover:text-breton-navy"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-200">
            <Button asChild className="w-full bg-breton-navy hover:bg-breton-slate">
              <Link href="/contact" onClick={closeMobileMenu}>
                Nous contacter &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
