# Refonte Navigation, Homepage & Cas Clients — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refondre la navigation (dropdown Services), simplifier la homepage (hero épuré, section expertises, vignettes vidéo cas clients), transformer le listing `/cas-clients` en bibliothèque vidéo, et recentrer tous les CTA sur le contact direct.

**Architecture:** Modifications incrémentales sur le site Next.js existant. Nouveaux composants `ExpertisesSection` et `CaseStudiesPreview` pour la homepage, réécriture du listing cas clients, dropdown accessible dans le header. Pas de nouvelle dépendance.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons

**Spec:** `docs/superpowers/specs/2026-04-16-refonte-nav-homepage-cas-clients-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `src/lib/constants.ts` | NAV_LINKS type union avec children |
| Modify | `src/components/layout/Header.tsx` | Dropdown desktop + accordion mobile |
| Modify | `src/components/sections/HeroV3.tsx` | Supprimer TransformationDemo, nouveaux CTA |
| Create | `src/components/sections/ExpertisesSection.tsx` | 3 cartes expertises (Audit, IA, Data) |
| Create | `src/components/ui/LazyVideo.tsx` | Composant vidéo lazy partagé |
| Create | `src/components/sections/CaseStudiesPreview.tsx` | 3 vignettes vidéo homepage |
| Modify | `src/app/page.tsx` | Nouveau layout homepage |
| Modify | `src/app/cas-clients/page.tsx` | Bibliothèque grille vidéo |
| Modify | `src/components/sections/CtaContact.tsx` | CTA contact (plus audit) |
| Modify | `CLAUDE.md` | Mettre à jour sections homepage/header/CTA |
| Modify | `e2e/navigation.spec.ts` | Tests nav dropdown + CTA |
| Delete | `src/components/visuals/TransformationDemo.tsx` | Plus utilisé |
| Delete | `src/components/sections/PillarsSection.tsx` | Remplacé par ExpertisesSection |

---

### Task 1: NAV_LINKS — type union avec dropdown

**Files:**
- Modify: `src/lib/constants.ts:564-570`

- [ ] **Step 1: Modifier le type et les données NAV_LINKS**

Remplacer les lignes 564-570 par :

```typescript
export type NavLink =
  | { href: string; label: string }
  | { label: string; children: { href: string; label: string }[] };

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Services',
    children: [
      { href: '/audit-ia', label: 'Audit & Diagnostic' },
      { href: '/ia', label: 'IA & Automatisation' },
      { href: '/data', label: 'Pilotage data' },
    ],
  },
  { href: '/cas-clients', label: 'Cas clients' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];
```

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: Erreurs dans `Header.tsx` (accès à `link.href` sans vérifier le type) — c'est attendu, on corrige à la tâche suivante.

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: NAV_LINKS type union avec dropdown Services"
```

---

### Task 2: Header — Dropdown desktop + accordion mobile

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Réécrire le header avec dropdown**

Remplacer le contenu complet de `Header.tsx` :

```typescript
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

  // Close dropdown on Escape
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
```

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: dropdown Services dans le header (desktop hover + mobile accordion)"
```

---

### Task 3: HeroV3 — Supprimer TransformationDemo + nouveaux CTA

**Files:**
- Modify: `src/components/sections/HeroV3.tsx`
- Delete: `src/components/visuals/TransformationDemo.tsx`

- [ ] **Step 1: Simplifier HeroV3**

Remplacer le contenu complet de `HeroV3.tsx` :

```typescript
'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;

  return (
    <section className="relative -mt-16 flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-breton-foam to-breton-sand pt-32 pb-16">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={child}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-breton-sand bg-white/80 px-4 py-1.5 text-sm font-semibold text-breton-navy backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-breton-emerald" />
            </span>
            PME industrielles &bull; Bretagne
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-[clamp(32px,5.5vw,64px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy"
          >
            Vos donn&eacute;es terrain, enfin pilotables
          </motion.h1>

          <motion.p
            variants={child}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-breton-slate"
          >
            On remplace vos fichiers Excel, ressaisies et suivis manuels par des agents IA
            branch&eacute;s sur vos outils m&eacute;tier.
          </motion.p>

          <motion.div
            variants={child}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-breton-navy px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-breton-slate"
            >
              Nous contacter &rarr;
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center rounded-full border border-breton-navy/20 bg-white px-8 py-4 text-base font-semibold text-breton-navy transition-colors duration-200 hover:bg-breton-foam"
            >
              Voir nos cas clients
            </Link>
          </motion.div>
        </motion.div>

        {/* Micro-proofs */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-breton-granite"
        >
          <span>7 ans de terrain industriel</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>12+ projets d&eacute;ploy&eacute;s</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Lorient, Bretagne</span>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Supprimer TransformationDemo**

```bash
rm src/components/visuals/TransformationDemo.tsx
```

Vérifier qu'il n'est importé nulle part ailleurs :

```bash
grep -r "TransformationDemo" src/
```

Expected: aucun résultat (l'import a été retiré du hero).

- [ ] **Step 3: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroV3.tsx
git rm src/components/visuals/TransformationDemo.tsx
git commit -m "feat: hero épuré — suppression TransformationDemo, CTA contact"
```

---

### Task 4: ExpertisesSection — 3 cartes (Audit, IA, Data)

**Files:**
- Create: `src/components/sections/ExpertisesSection.tsx`

- [ ] **Step 1: Créer le composant**

```typescript
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ClipboardCheck, Bot, BarChart3, ArrowRight } from 'lucide-react';
import { staggerContainer, cardReveal } from '@/lib/animations';

const EXPERTISES = [
  {
    icon: ClipboardCheck,
    title: 'Audit & Diagnostic',
    description:
      'On identifie vos 2-3 automatisations les plus rentables. 3 jours sur site, une roadmap claire.',
    href: '/audit-ia',
  },
  {
    icon: Bot,
    title: 'IA & Automatisation',
    description:
      'Agents IA, OCR, workflows branch\u00e9s sur vos outils m\u00e9tier. Z\u00e9ro ressaisie, z\u00e9ro Excel.',
    href: '/ia',
  },
  {
    icon: BarChart3,
    title: 'Pilotage data',
    description:
      'Dashboards temps r\u00e9el connect\u00e9s \u00e0 votre ERP/GPAO. Vos KPIs en un coup d\u2019\u0153il.',
    href: '/data',
  },
];

export function ExpertisesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-breton-foam py-16 sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
          Nos expertises
        </p>
        <h2 className="font-serif text-[36px] sm:text-[56px] leading-[1.06] font-normal text-breton-navy tracking-[-0.025em] max-w-[600px]">
          Ce qu&apos;on d&eacute;ploie pour vous
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
        >
          {EXPERTISES.map((expertise) => (
            <motion.div
              key={expertise.title}
              variants={prefersReducedMotion ? undefined : cardReveal}
            >
              <Link
                href={expertise.href}
                className="group block bg-white border border-breton-sand rounded-[22px] p-6 sm:p-10
                  transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)] hover:border-transparent"
              >
                <div className="w-[52px] h-[52px] bg-breton-foam rounded-[16px] flex items-center justify-center mb-5 sm:mb-6
                  transition-all duration-[450ms] group-hover:bg-breton-emerald/8 group-hover:scale-105">
                  <expertise.icon className="h-6 w-6 text-breton-emerald" />
                </div>
                <p className="font-serif text-[26px] font-normal text-breton-navy mb-2.5">
                  {expertise.title}
                </p>
                <p className="text-[15px] text-breton-slate leading-relaxed mb-4">
                  {expertise.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-breton-copper group-hover:gap-2 transition-all">
                  D&eacute;couvrir <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ExpertisesSection.tsx
git commit -m "feat: ExpertisesSection — 3 cartes Audit, IA, Data"
```

---

### Task 5: LazyVideo — composant partagé

**Files:**
- Create: `src/components/ui/LazyVideo.tsx`

- [ ] **Step 1: Créer le composant**

```typescript
'use client';

import { useRef, useEffect } from 'react';

export function LazyVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/LazyVideo.tsx
git commit -m "feat: LazyVideo — composant vidéo lazy partagé (IntersectionObserver)"
```

---

### Task 6: CaseStudiesPreview — 3 vignettes vidéo homepage

**Files:**
- Create: `src/components/sections/CaseStudiesPreview.tsx`

- [ ] **Step 1: Créer le composant**

```typescript
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/data/case-studies';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { staggerContainer, cardReveal } from '@/lib/animations';

const videoCases = CASE_STUDIES.filter((c) => c.image.endsWith('.mp4')).slice(0, 3);

export function CaseStudiesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-white py-16 sm:py-[110px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-3">
              R&eacute;alisations
            </p>
            <h2 className="font-serif text-[36px] sm:text-[56px] leading-[1.06] font-normal text-breton-navy tracking-[-0.025em]">
              Cas clients
            </h2>
          </div>
          <Link
            href="/cas-clients"
            className="text-sm text-breton-navy font-semibold whitespace-nowrap hover:text-breton-emerald transition-colors"
          >
            Tout voir &rarr;
          </Link>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
        >
          {videoCases.map((cs) => (
            <motion.article
              key={cs.slug}
              variants={prefersReducedMotion ? undefined : cardReveal}
            >
              <Link
                href={`/cas-clients/${cs.slug}`}
                className="group block rounded-[22px] border border-breton-sand bg-white overflow-hidden
                  hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)]
                  transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <LazyVideo
                  src={cs.image}
                  className="aspect-video bg-breton-foam"
                />
                <div className="p-5">
                  <span className="text-[11px] text-breton-emerald font-semibold uppercase tracking-[0.08em]">
                    {cs.sector} &middot; {cs.location}
                  </span>
                  <h3 className="font-serif text-lg text-breton-navy mt-1 group-hover:text-breton-emerald transition-colors">
                    {cs.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-breton-copper group-hover:gap-2 transition-all">
                    Voir le cas <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CaseStudiesPreview.tsx
git commit -m "feat: CaseStudiesPreview — 3 vignettes vidéo avec lazy playback"
```

---

### Task 7: Homepage — Nouveau layout

**Files:**
- Modify: `src/app/page.tsx`
- Delete: `src/components/sections/PillarsSection.tsx`

- [ ] **Step 1: Réécrire page.tsx**

Remplacer le contenu complet de `src/app/page.tsx` :

```typescript
import { HeroV3 } from '@/components/sections/HeroV3';
import { ExpertisesSection } from '@/components/sections/ExpertisesSection';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agents IA m\u00e9tier pour PME industrielles | balise-ia, Lorient',
  description:
    'Agents IA m\u00e9tier pour supprimer les ressaisies, fiabiliser le reporting et piloter la production. 7 ans de terrain industriel. Bretagne.',
};

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. Hero */}
      <HeroV3 />

      {/* 2. Proof strip */}
      <section className="py-12 bg-white border-b border-breton-sand/50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { metric: '4h/sem', label: '\u00e9conomis\u00e9es en reporting' },
              { metric: '80%', label: 'de ressaisies \u00e9limin\u00e9es' },
              { metric: 'J+0', label: 'reporting disponible' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-breton-navy">
                  {item.metric}
                </p>
                <p className="mt-1 text-sm text-breton-granite">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Nos expertises */}
      <ExpertisesSection />

      {/* 4. Cas clients */}
      <CaseStudiesPreview />

      {/* 5. M\u00e9thode */}
      <section className="py-20 sm:py-28 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            M\u00e9thode
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            3 \u00e9tapes, du diagnostic au d\u00e9ploiement
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Diagnostic terrain',
                description:
                  '3 jours sur site. Observation, \u00e9changes, cartographie des irritants. Vous repartez avec une roadmap.',
              },
              {
                step: '02',
                title: 'Prototype & validation',
                description:
                  'Un premier agent IA sur un p\u00e9rim\u00e8tre restreint. Vous validez la valeur avant d\u2019\u00e9tendre.',
              },
              {
                step: '03',
                title: 'D\u00e9ploiement & adoption',
                description:
                  'Mise en production, prise en main par vos \u00e9quipes. Objectif\u00a0: autonomie.',
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-display text-[80px] font-bold text-breton-sand leading-none">
                  {item.step}
                </span>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-breton-navy mb-3">{item.title}</h3>
                  <p className="text-breton-slate leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. \u00c0 propos */}
      <IncarnationSection />

      {/* 7. CTA final */}
      <CtaContact />
    </>
  );
}
```

- [ ] **Step 2: Supprimer PillarsSection**

```bash
rm src/components/sections/PillarsSection.tsx
```

Vérifier qu'il n'est importé nulle part :

```bash
grep -r "PillarsSection" src/
```

Expected: aucun résultat.

- [ ] **Step 3: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git rm src/components/sections/PillarsSection.tsx
git commit -m "feat: nouveau layout homepage — expertises + vignettes vidéo cas clients"
```

---

### Task 8: Page /cas-clients — Bibliothèque grille vidéo

**Files:**
- Modify: `src/app/cas-clients/page.tsx`

- [ ] **Step 1: Réécrire le listing cas clients**

Remplacer le contenu complet de `src/app/cas-clients/page.tsx` :

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CASE_STUDIES } from '@/data/case-studies';
import { CaseStudyGrid } from './CaseStudyGrid';

export const metadata: Metadata = {
  title: 'Cas clients',
  description:
    'D\u00e9couvrez nos r\u00e9alisations : agents IA, automatisation, dashboards pour PME industrielles en Bretagne.',
};

export default function CasClientsPage() {
  return (
    <>
      <Hero
        title="Nos r\u00e9alisations"
        subtitle="Des r\u00e9sultats concrets et mesurables pour des PME industrielles bretonnes."
      />

      <section className="py-16 sm:py-[110px] bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyGrid caseStudies={CASE_STUDIES} />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Créer le composant CaseStudyGrid (client)**

Créer `src/app/cas-clients/CaseStudyGrid.tsx` :

```typescript
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/data/case-studies';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { staggerContainer, cardReveal } from '@/lib/animations';

export function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={prefersReducedMotion ? undefined : staggerContainer}
      initial={prefersReducedMotion ? undefined : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
    >
      {caseStudies.map((cs) => (
        <motion.article
          key={cs.slug}
          variants={prefersReducedMotion ? undefined : cardReveal}
        >
          <Link
            href={`/cas-clients/${cs.slug}`}
            className="group block rounded-[22px] border border-breton-sand bg-white overflow-hidden
              hover:-translate-y-[6px] hover:shadow-[0_24px_64px_rgba(12,31,63,0.1)]
              transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            {cs.image.endsWith('.mp4') ? (
              <LazyVideo src={cs.image} className="aspect-video bg-breton-foam" />
            ) : (
              <div className="aspect-video bg-breton-foam relative">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-5">
              <span className="text-[11px] text-breton-emerald font-semibold uppercase tracking-[0.08em]">
                {cs.sector} &middot; {cs.location}
              </span>
              <h3 className="font-serif text-lg text-breton-navy mt-1 group-hover:text-breton-emerald transition-colors">
                {cs.title}
              </h3>
              <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-breton-copper group-hover:gap-2 transition-all">
                Voir le cas <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
```

- [ ] **Step 3: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/app/cas-clients/page.tsx src/app/cas-clients/CaseStudyGrid.tsx
git commit -m "feat: page cas-clients — bibliothèque grille vidéo"
```

---

### Task 9: CtaContact — CTA contact (plus audit)

**Files:**
- Modify: `src/components/sections/CtaContact.tsx`

- [ ] **Step 1: Mettre à jour les CTA**

Dans `src/components/sections/CtaContact.tsx`, remplacer les deux liens CTA.

Remplacer :
```typescript
              Demander un diagnostic terrain →
```
Par :
```typescript
              Nous contacter →
```

Remplacer :
```typescript
              Prendre contact →
```
Par :
```typescript
              Voir nos cas clients →
```

Et mettre à jour le href du second lien de `/contact` à `/cas-clients`.

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/CtaContact.tsx
git commit -m "feat: CTA final — contact direct + cas clients"
```

---

### Task 10: Vérification vidéos — crop et qualité

**Files:**
- Vérifier: `public/videos/demo-crm.mp4`, `public/videos/demo-commandes.mp4`, `public/videos/demo-production.mp4`, `public/assistant-documentaire.mp4`

- [ ] **Step 1: Inspecter les résolutions vidéo**

```bash
for f in public/videos/demo-*.mp4 public/assistant-documentaire.mp4; do
  echo "=== $f ==="
  ffprobe -v quiet -select_streams v:0 -show_entries stream=width,height,duration -of csv=p=0 "$f" 2>/dev/null || echo "ffprobe not available"
done
```

- [ ] **Step 2: Vérifier les bandes noires visuellement**

Lancer `npm run dev` et inspecter chaque vidéo dans le navigateur sur la page `/cas-clients`. Vérifier qu'aucune bande noire n'est visible avec `object-fit: cover` sur les vignettes 16:9.

Si des bandes persistent, ajouter `object-position: center top` ou crop ffmpeg :

```bash
ffmpeg -i input.mp4 -vf "crop=in_w:in_h-40:0:40" -c:a copy output.mp4
```

- [ ] **Step 3: Commit si modifications**

```bash
git add public/videos/ public/assistant-documentaire.mp4
git commit -m "fix: crop bandes noires vidéos cas clients"
```

---

### Task 11: Nettoyage — suppression code mort + Projects

**Files:**
- Évaluer: `src/components/sections/Projects.tsx`
- Évaluer: `src/components/sections/LogoCarousel.tsx` (mentionné dans le spec original mais retiré du layout)

- [ ] **Step 1: Vérifier si Projects est encore utilisé**

```bash
grep -r "Projects" src/ --include="*.tsx" --include="*.ts"
```

Si uniquement importé dans les pages `/ia`, `/data`, `/formation` (pas la homepage), le garder. Si plus importé nulle part, le supprimer.

- [ ] **Step 2: Vérifier si LogoCarousel était dans la homepage**

```bash
grep -r "LogoCarousel" src/
```

Le Logo Carousel a été retiré du nouveau layout homepage (pas dans le spec). Si le client le veut toujours, on le remettra. Pour l'instant, vérifier s'il est utilisé ailleurs.

- [ ] **Step 3: Supprimer le code mort**

Supprimer les fichiers qui ne sont plus importés nulle part.

- [ ] **Step 4: Run build complet**

```bash
npm run build
```

Expected: PASS sans warnings.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: suppression code mort (TransformationDemo, PillarsSection)"
```

---

### Task 12: Tests E2E — mise à jour

**Files:**
- Modify: `e2e/navigation.spec.ts`
- Modify: `e2e/seo.spec.ts`

- [ ] **Step 1: Lancer les tests existants pour voir ce qui casse**

```bash
npx playwright test --reporter=list 2>&1 | head -80
```

- [ ] **Step 2: Corriger les tests de navigation**

Mettre à jour les sélecteurs et assertions pour :
- Le dropdown "Services" (plus un lien direct)
- Le CTA header "Nous contacter" (plus "Diagnostic gratuit")
- La page `/cas-clients` (grille au lieu du listing détaillé)

- [ ] **Step 3: Relancer les tests**

```bash
npx playwright test --reporter=list
```

Expected: tous les tests passent.

- [ ] **Step 4: Commit**

```bash
git add e2e/
git commit -m "test: mise à jour tests E2E — dropdown nav, CTA contact, grille cas clients"
```

---

### Task 13: CLAUDE.md — mise à jour documentation

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Mettre à jour les sections impactées**

Sections à modifier :
- **Header** : mentionner le dropdown Services + CTA "Nous contacter"
- **Homepage — ordre des sections** : nouveau layout (Hero → Métriques → Expertises → Cas clients → Méthode → Incarnation → CTA)
- **CTA** : mentionner que le CTA principal est "Nous contacter" → `/contact`

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: mise à jour CLAUDE.md — nouveau layout homepage, dropdown nav, CTA contact"
```
