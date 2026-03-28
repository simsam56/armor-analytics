# Restructuration site balise-ia — Plan A

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructurer le site autour de 3 piliers (IA · Data · Formation), supprimer Calendly, promouvoir le quiz `/audit-ia` comme CTA principal, et créer les pages piliers.

**Architecture:** Migration des constantes en premier (fondation), puis suppression de Calendly (15 call sites), puis redirect /services, puis nouvelles pages piliers, puis homepage redesignée à 6 sections, puis quiz renforcé. Les composants existants (VideoBackground, LogoCarousel, HeroV3) sont conservés et adaptés.

**Tech Stack:** Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, shadcn/ui, Framer Motion, Resend, Playwright (E2E)

**Spec de référence:** `docs/superpowers/specs/2026-03-28-refonte-proposition-commerciale-design.md`

---

## Fichiers concernés

### Créer
- `src/app/ia/page.tsx` — page pilier IA & Automatisation
- `src/app/data/page.tsx` — page pilier Data & Reporting
- `src/app/formation/page.tsx` — page pilier Formation (statique pour Plan A)
- `src/app/formation/merci/page.tsx` — page confirmation (stub pour Plan A)
- `src/components/sections/QuizCta.tsx` — section quiz homepage

### Modifier
- `src/lib/constants.ts` — SERVICES restructuré, NAV_LINKS, PROCESS_STEPS supprimé, getCalendlyUrl() supprimé
- `src/components/layout/Header.tsx` — CTA → /audit-ia
- `src/components/layout/Footer.tsx` — supprimer Calendly
- `src/components/ui/sticky-cta.tsx` — CTA → /audit-ia
- `src/components/sections/HeroV3.tsx` — CTA quiz, titre allégé
- `src/components/sections/CtaContact.tsx` — supprimer Calendly
- `src/components/sections/CtaInline.tsx` — supprimer Calendly
- `src/components/sections/Services.tsx` — supprimer imports Calendly
- `src/components/sections/ContactSection.tsx` — supprimer Calendly
- `src/app/page.tsx` — 6 sections, ajouter QuizCta
- `src/app/audit-ia/page.tsx` — hero renforcé, résultats → /contact
- `src/app/a-propos/page.tsx` — supprimer Calendly
- `src/app/contact/page.tsx` — supprimer Calendly
- `src/app/merci/page.tsx` — supprimer Calendly
- `src/app/interventions/[ville]/page.tsx` — supprimer Calendly
- `src/app/consultant-data-lorient/page.tsx` — liens /services → /data
- `src/app/formation-ia-pme/page.tsx` — ajouter lien /formation
- `next.config.ts` — redirect /services → /ia
- `src/app/robots.ts` — disallowed /formation/merci/
- `e2e/navigation.spec.ts` — tests mis à jour
- `e2e/seo.spec.ts` — sitemap mis à jour

### Supprimer (imports seulement, pas les fichiers)
- Import `Methodology` dans les pages qui l'utilisent
- Import `PillarsSection` dans `src/app/page.tsx`
- Import `Services` dans `src/app/page.tsx` (remplacé par section 3 piliers inline ou nouveau composant)
- Import `Testimonials` dans `src/app/page.tsx`

---

## Task 1 : Mise à jour constants.ts

**Fichiers :**
- Modifier : `src/lib/constants.ts`

- [ ] **Lire le fichier actuel**

```bash
# Lire src/lib/constants.ts pour comprendre la structure actuelle
```

- [ ] **Restructurer SERVICES (2 entrées : ia, data)**

Remplacer l'export `SERVICES` existant (3 offres nautiques) par 2 entrées simplifiées :

```typescript
export const SERVICES = [
  {
    id: 'ia',
    title: 'IA & Automatisation',
    tagline: 'Automatisez ce qui freine, déployez ce qui sert',
    description:
      'OCR, agents IA, workflows n8n, intégrations ERP. On déploie des solutions concrètes, mesurées avant et après.',
    href: '/ia',
    icon: 'Bot',
    tools: ['n8n', 'Make', 'Python', 'Claude'],
    useCases: ['OCR & extraction de données', 'Agents IA métier', 'Automatisation de workflows', 'Intégration ERP'],
  },
  {
    id: 'data',
    title: 'Data & Reporting',
    tagline: 'Pilotez en temps réel, décidez avec des données fiables',
    description:
      'Data engineering, dashboards Power BI / Metabase, pipelines ETL. Vos données centralisées et exploitables.',
    href: '/data',
    icon: 'BarChart3',
    tools: ['Power BI', 'Metabase', 'Microsoft Fabric', 'DuckDB'],
    useCases: ['Dashboards temps réel', 'Data engineering / ETL', 'Centralisation des sources', 'Reporting automatisé'],
  },
];
```

- [ ] **Ajouter export FREE_RESOURCES (tableau vide pour l'instant)**

```typescript
export type FreeResource = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'ia' | 'data' | 'general';
  format: 'pdf';
  duration: string;
  tags: string[];
  pdfKey: string; // chemin Vercel Blob : formations/gratuit/{slug}.pdf
};

export const FREE_RESOURCES: FreeResource[] = [];
// Les ressources PDF seront ajoutées ici quand le contenu sera prêt
```

- [ ] **Mettre à jour NAV_LINKS**

```typescript
export const NAV_LINKS = [
  { href: '/ia', label: 'IA' },
  { href: '/data', label: 'Data' },
  { href: '/formation', label: 'Formation' },
  { href: '/cas-clients', label: 'Réalisations' },
  { href: '/blog', label: 'Blog' },
];
```

- [ ] **Supprimer PROCESS_STEPS de constants.ts ET mettre à jour Methodology.tsx dans le même commit**

Retirer l'export `PROCESS_STEPS` de constants.ts. En même temps, supprimer le composant `src/components/sections/Methodology.tsx` (seul fichier qui l'importe depuis constants). Les landing pages (`intelligence-artificielle-bretagne`, `consultant-data-lorient`, `formation-ia-pme`) définissent leurs propres `const PROCESS_STEPS` locales et ne sont pas impactées.

```bash
# Après modification, vérifier qu'aucun import de constants PROCESS_STEPS ne reste :
grep -r "from '@/lib/constants'" src/ | grep PROCESS_STEPS
# Attendu : aucun résultat
```

- [ ] **Mettre à jour les tests E2E nav qui cassent dès maintenant**

Le test `navigation.spec.ts` qui cherche `a[href="/services"]` dans le header cassera dès que NAV_LINKS est mis à jour. Le corriger dans ce même commit pour ne pas laisser la suite en état cassé :

```typescript
// Dans e2e/navigation.spec.ts, remplacer le test qui cherche /services dans le header
// par une vérification des 3 nouveaux liens :
await expect(page.locator('header nav a[href="/ia"]')).toBeVisible();
await expect(page.locator('header nav a[href="/data"]')).toBeVisible();
await expect(page.locator('header nav a[href="/formation"]')).toBeVisible();
```

- [ ] **Supprimer getCalendlyUrl()**

Retirer la fonction `getCalendlyUrl()` et le champ `calendly` dans `SITE_CONFIG`. Garder un commentaire :

```typescript
// getCalendlyUrl() supprimé — remplacé par /audit-ia (quiz) et /contact
```

- [ ] **Vérifier que TypeScript compile**

```bash
npm run typecheck
```

Les erreurs TypeScript vont apparaître sur les fichiers qui importaient `getCalendlyUrl`, `PROCESS_STEPS` ou l'ancienne structure de `SERVICES`. C'est normal — elles seront corrigées dans les tasks suivantes.

- [ ] **Mettre à jour e2e/navigation.spec.ts — assertion `'Réserver un créneau'`**

Le texte du CTA change dans cette tâche (NAV_LINKS mis à jour, `getCalendlyUrl()` supprimé). Corriger dès maintenant pour ne pas laisser la suite cassée :

```typescript
// Remplacer l'assertion qui cherche 'Réserver un créneau' par le nouveau texte
await expect(page.getByRole('link', { name: /Faire le diagnostic/i }).first()).toBeVisible();
```

- [ ] **Commit**

```bash
git add src/lib/constants.ts src/components/sections/Methodology.tsx e2e/navigation.spec.ts
git commit -m "refactor: restructurer constants — SERVICES, FREE_RESOURCES, NAV_LINKS, supprimer PROCESS_STEPS et getCalendlyUrl"
```

---

## Task 2 : Suppression de Calendly (15 call sites)

**Fichiers :** 8 fichiers à modifier (voir liste complète dans la spec §3)

La stratégie : remplacer chaque `getCalendlyUrl()` par `/audit-ia` (CTAs principaux) ou `/contact` (CTAs secondaires). Règle générale :
- Bouton "Demander un diagnostic" / "Réserver un créneau" → `/audit-ia`
- Bouton "Nous contacter" / contact secondaire → `/contact`

- [ ] **Mettre à jour Header.tsx**

Trouver et remplacer les imports `getCalendlyUrl` et les boutons Calendly. Le CTA header devient :

```tsx
<Button asChild size="sm">
  <Link href="/audit-ia">Faire le diagnostic →</Link>
</Button>
```

- [ ] **Mettre à jour Footer.tsx**

Remplacer le lien Calendly par `/contact` dans la colonne contact du footer.

- [ ] **Mettre à jour sticky-cta.tsx**

```tsx
<a href="/audit-ia">Faire le diagnostic →</a>
```

- [ ] **Mettre à jour HeroV3.tsx**

CTA primaire → `/audit-ia`, CTA secondaire → `/cas-clients` (voir Task 7 pour le redesign complet du hero).

- [ ] **Mettre à jour CtaContact.tsx**

```tsx
<Button asChild size="lg">
  <Link href="/audit-ia">Faire le diagnostic →</Link>
</Button>
```

- [ ] **Mettre à jour CtaInline.tsx, Services.tsx, ContactSection.tsx**

Retirer les imports `getCalendlyUrl`. Remplacer les liens externes Calendly par des liens internes `/audit-ia` ou `/contact`.

- [ ] **Mettre à jour les pages app/ (6 fichiers)**

Pour chacune : `audit-ia/page.tsx`, `a-propos/page.tsx`, `contact/page.tsx`, `merci/page.tsx`, `interventions/[ville]/page.tsx`, `intelligence-artificielle-bretagne/page.tsx` — retirer les imports `getCalendlyUrl`, remplacer les liens par `/audit-ia` ou `/contact`.

`intelligence-artificielle-bretagne/page.tsx` a **2 occurrences** de `getCalendlyUrl` — les remplacer toutes les deux.

- [ ] **Vider src/app/services/page.tsx**

La page `/services` sera redirigée en Task 3. Pour éviter un conflit entre le fichier statique et la redirect, et supprimer l'import `getCalendlyUrl` cassant, remplacer le contenu par une page minimal qui redirige côté serveur :

```tsx
// src/app/services/page.tsx — placeholder jusqu'à suppression du fichier en Task 3
import { redirect } from 'next/navigation';
export default function ServicesPage() {
  redirect('/ia');
}
```

Cela résout l'import cassant ET prépare Task 3.

- [ ] **Vérifier que TypeScript compile sans erreur**

```bash
npm run typecheck
```

Attendu : 0 erreur TypeScript.

- [ ] **Commit**

```bash
git add -p  # stager fichier par fichier
git commit -m "feat: remplacer Calendly par /audit-ia et /contact (15 call sites)"
```

---

## Task 3 : Redirect /services → /ia

**Fichiers :**
- Modifier : `next.config.ts`
- Modifier : `src/app/consultant-data-lorient/page.tsx`
- Modifier : `src/app/formation-ia-pme/page.tsx`
- Modifier : `src/data/blog-articles.ts`

- [ ] **Ajouter la redirect dans next.config.ts**

Lire le fichier pour trouver la section `redirects`. Ajouter :

```typescript
async redirects() {
  return [
    // existante
    { source: '/projets', destination: '/cas-clients', permanent: true },
    // nouvelle
    { source: '/services', destination: '/ia', permanent: true },
  ];
},
```

- [ ] **Mettre à jour les liens internes /services dans consultant-data-lorient/page.tsx**

Chercher tous les `href="/services"` ou `/services` dans le fichier et les remplacer par `/data`.

- [ ] **Mettre à jour formation-ia-pme/page.tsx**

Remplacer liens `/services` par `/formation`. Ajouter un lien vers `/formation` dans la page (ex : "Voir notre catalogue de formations →").

- [ ] **Mettre à jour blog-articles.ts (×3)**

Chercher les 3 occurrences de `/services` dans `src/data/blog-articles.ts` et les remplacer par `/ia` ou `/data` selon le contexte de l'article.

- [ ] **Supprimer src/app/services/page.tsx**

```bash
git rm src/app/services/page.tsx
```

La redirect dans `next.config.ts` prend le relais. Plus de conflit canonical.

- [ ] **Tester la redirect localement**

```bash
npm run dev
# Naviguer vers http://localhost:3000/services
# Vérifier la redirect vers /ia (301 dans les devtools réseau)
```

- [ ] **Commit**

```bash
git add next.config.ts src/app/consultant-data-lorient/page.tsx src/app/formation-ia-pme/page.tsx src/data/blog-articles.ts
git rm src/app/services/page.tsx
git commit -m "feat: redirect /services → /ia, supprimer services/page.tsx, mettre à jour liens internes"
```

---

## Task 4 : Page /ia

**Fichiers :**
- Créer : `src/app/ia/page.tsx`

- [ ] **Écrire le test E2E d'abord**

Dans `e2e/navigation.spec.ts`, ajouter :

```typescript
test('/ia se charge avec le contenu IA', async ({ page }) => {
  await page.goto('/ia');
  await expect(page).toHaveTitle(/IA/i);
  await expect(page.locator('h1')).toContainText('IA');
  await expect(page.locator('a[href="/audit-ia"]')).toBeVisible();
});
```

- [ ] **Vérifier que le test échoue**

```bash
npx playwright test e2e/navigation.spec.ts --grep "ia se charge" --reporter=list
```

Attendu : FAIL (page 404)

- [ ] **Créer src/app/ia/page.tsx**

```tsx
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { FAQ } from '@/components/sections/FAQ';
import { Projects } from '@/components/sections/Projects';
import { CtaContact } from '@/components/sections/CtaContact';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'IA & Automatisation',
  description:
    'Automatisez vos tâches répétitives et déployez des solutions IA concrètes. OCR, agents IA, workflows n8n, intégrations ERP. PME bretonnes.',
  alternates: { canonical: 'https://www.balise-ia.fr/ia' },
};

const USE_CASES = [
  {
    title: 'OCR & extraction de données',
    description: 'Transformez emails, PDFs et fax en données structurées dans votre ERP. Fini la ressaisie manuelle.',
  },
  {
    title: 'Agents IA métier',
    description: 'Des assistants entraînés sur vos process : répondent aux questions, classifient, aiguillent.',
  },
  {
    title: 'Automatisation de workflows',
    description: 'Connectez vos outils avec n8n ou Make. Les données circulent sans intervention humaine.',
  },
  {
    title: 'Intégration ERP',
    description: 'Sage, Cegid, Dynamics 365 — on se branche sur votre existant. Pas de migration forcée.',
  },
];

const TOOLS = ['n8n', 'Make (Integromat)', 'Python', 'Claude', 'Power Automate'];

export default function IaPage() {
  return (
    <>
      <Hero
        title="Automatisez ce qui freine, déployez ce qui sert"
        subtitle="Des solutions IA concrètes, mesurées avant et après. On travaille avec vos outils existants."
      />

      {/* Cas d'usage */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">Ce qu&apos;on fait</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            IA & Automatisation
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-breton-emerald shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">{uc.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-16 bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-6">
            Outils maîtrisés
          </p>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-white border border-breton-sand px-4 py-1.5 text-sm font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2 cas clients filtrés IA */}
      <Projects filter="ia" maxItems={2} />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Identifiez vos opportunités IA
          </h2>
          <p className="mt-4 text-white/60">
            Le diagnostic prend 5 minutes et vous oriente vers les quick wins les plus rentables.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90">
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
```

**Ajout de la prop `filter` sur le composant `Projects` :**

Avant d'utiliser `Projects` avec `filter="ia"` ou `filter="data"`, lire `src/components/sections/Projects.tsx` et ajouter la prop optionnelle :

```tsx
// Dans Projects.tsx, ajouter à l'interface des props :
interface ProjectsProps {
  showLink?: boolean;
  detailed?: boolean;
  maxItems?: number;
  filter?: 'ia' | 'data'; // nouveau
}

// Dans le composant, filtrer PROJECTS si filter est fourni :
const filtered = filter
  ? PROJECTS.filter((p) =>
      filter === 'ia'
        ? ['OCR', 'Automatisation', 'IA'].some((tag) => p.tags.includes(tag))
        : ['Data Engineering', 'Reporting', 'Power BI', 'Data Platform'].some((tag) => p.tags.includes(tag))
    )
  : PROJECTS;
const displayed = maxItems ? filtered.slice(0, maxItems) : filtered;
```

Cette étape est requise avant d'écrire `<Projects filter="ia" maxItems={2} />` dans les pages piliers.

- [ ] **Vérifier que le test passe**

```bash
npm run dev &
npx playwright test e2e/navigation.spec.ts --grep "ia se charge" --reporter=list
```

Attendu : PASS

- [ ] **Commit**

```bash
git add src/app/ia/page.tsx src/components/sections/Projects.tsx e2e/navigation.spec.ts
git commit -m "feat: page /ia — IA & Automatisation"
```

---

## Task 5 : Page /data

**Fichiers :**
- Créer : `src/app/data/page.tsx`

- [ ] **Écrire le test E2E**

Dans `e2e/navigation.spec.ts`, ajouter :

```typescript
test('/data se charge avec le contenu Data', async ({ page }) => {
  await page.goto('/data');
  await expect(page).toHaveTitle(/Data/i);
  await expect(page.locator('h1')).toContainText('Data');
  await expect(page.locator('a[href="/audit-ia"]')).toBeVisible();
});
```

- [ ] **Vérifier que le test échoue**

```bash
npx playwright test e2e/navigation.spec.ts --grep "data se charge" --reporter=list
```

- [ ] **Créer src/app/data/page.tsx**

Structure identique à `/ia/page.tsx` avec contenu Data :

```tsx
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Data & Reporting',
  description:
    'Centralisez vos données, pilotez en temps réel avec des dashboards Power BI et Metabase. Data engineering pour PME bretonnes.',
  alternates: { canonical: 'https://www.balise-ia.fr/data' },
};

const USE_CASES = [
  {
    title: 'Dashboards temps réel',
    description: 'Power BI, Metabase — vos KPIs prodution, commercial et stocks en un seul écran.',
  },
  {
    title: 'Data engineering / ETL',
    description: 'Pipelines de données fiables. ERP, Excel, caisses, capteurs — tout centralisé, propre, versué.',
  },
  {
    title: 'Centralisation des sources',
    description: 'Données dispersées entre 3 systèmes ? On construit l&apos;entrepôt qui unifie tout.',
  },
  {
    title: 'Reporting automatisé',
    description: 'Fini le vendredi après-midi à compiler des tableaux. Le rapport arrive tout seul.',
  },
];

const TOOLS = ['Power BI', 'Metabase', 'Microsoft Fabric', 'DuckDB', 'dbt', 'Looker Studio'];

export default function DataPage() {
  return (
    <>
      <Hero
        title="Pilotez en temps réel, décidez avec des données fiables"
        subtitle="Data engineering, dashboards, reporting automatisé. Vos données centralisées et exploitables."
      />

      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">Ce qu&apos;on fait</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Data & Reporting
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-breton-emerald shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">{uc.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-6">Outils maîtrisés</p>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span key={tool} className="rounded-full bg-white border border-breton-sand px-4 py-1.5 text-sm font-medium text-slate-700">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Projects filter="data" maxItems={2} />

      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Identifiez vos opportunités data
          </h2>
          <p className="mt-4 text-white/60">
            5 minutes de quiz pour savoir par où commencer.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90">
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Vérifier que le test passe**

```bash
npx playwright test e2e/navigation.spec.ts --grep "data se charge" --reporter=list
```

- [ ] **Commit**

```bash
git add src/app/data/page.tsx e2e/navigation.spec.ts
git commit -m "feat: page /data — Data & Reporting"
```

---

## Task 6 : Page /formation

**Fichiers :**
- Créer : `src/app/formation/page.tsx`
- Créer : `src/app/formation/merci/page.tsx` (stub)
- Modifier : `src/app/robots.ts` — ajouter `/formation/merci/` aux disallowed

- [ ] **Écrire le test E2E**

```typescript
test('/formation se charge avec les deux sous-sections', async ({ page }) => {
  await page.goto('/formation');
  await expect(page).toHaveTitle(/Formation/i);
  await expect(page.getByText('Accompagnement sur site')).toBeVisible();
  await expect(page.getByText('Ressources gratuites')).toBeVisible();
});
```

- [ ] **Créer src/app/formation/page.tsx**

```tsx
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FREE_RESOURCES } from '@/lib/constants';
import { BookOpen, Users, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation',
  description:
    'Formations IA & Data pour PME bretonnes. Accompagnement sur site et ressources gratuites téléchargeables.',
  alternates: { canonical: 'https://www.balise-ia.fr/formation' },
};

export default function FormationPage() {
  return (
    <>
      <Hero
        title="Formez vos équipes à l&apos;IA et à la data"
        subtitle="Accompagnement sur site ou ressources en ligne. Pratique, pas théorique."
      />

      {/* Sous-section 1 : Accompagnement sur site */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10 mb-6">
                <Users className="h-6 w-6 text-breton-emerald" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Accompagnement sur site
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                On vient chez vous. Vos équipes apprennent en faisant, sur leurs vrais outils,
                avec leurs vrais process. La formation et la mise en place se font en même temps.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Ateliers pratiques en petits groupes (2-3h)',
                  'Adaptés à chaque métier (production, ADV, direction)',
                  'Outils : n8n, Claude, Excel IA, Power BI',
                  'Documentation et support post-formation inclus',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-breton-emerald shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Discutons de votre projet →</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-breton-foam border border-breton-sand p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
                Format type
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Durée', value: 'Demi-journée ou journée complète' },
                  { label: 'Participants', value: '4 à 8 personnes par atelier' },
                  { label: 'Lieu', value: 'Dans vos locaux (Bretagne)' },
                  { label: 'Suivi', value: 'Support 30 jours post-formation' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between border-b border-breton-sand pb-3">
                    <span className="text-sm text-slate-500">{row.label}</span>
                    <span className="text-sm font-medium text-slate-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sous-section 2 : Ressources gratuites */}
      <section className="py-[110px] bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-copper/10 mb-6">
            <BookOpen className="h-6 w-6 text-breton-copper" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ressources gratuites</h2>
          <p className="mt-4 text-lg text-slate-600">
            Guides et checklists pratiques, téléchargeables gratuitement.
          </p>

          {FREE_RESOURCES.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-breton-sand bg-white p-12 text-center">
              <Download className="mx-auto h-8 w-8 text-breton-granite mb-4" />
              <p className="text-slate-500">Ressources en préparation — revenez bientôt.</p>
              <p className="mt-2 text-sm text-slate-400">
                Abonnez-vous à notre newsletter pour être notifié.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FREE_RESOURCES.map((resource) => (
                <div key={resource.id} className="rounded-2xl bg-white border border-breton-sand p-6">
                  <span className="inline-block bg-breton-emerald/10 text-breton-emerald text-xs font-semibold px-2 py-1 rounded-full mb-4">
                    GRATUIT
                  </span>
                  <h3 className="font-bold text-slate-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{resource.description}</p>
                  {/* TODO Plan B: ouvrir modale de capture email. Pour l'instant FREE_RESOURCES=[] donc ce code ne s'affiche pas. */}
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger gratuitement
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Teaser formations vidéo v2 */}
          <div className="mt-12 rounded-2xl border border-dashed border-breton-copper/30 bg-white p-8 text-center">
            <p className="text-sm font-semibold text-breton-copper uppercase tracking-wider mb-2">
              Bientôt disponible
            </p>
            <p className="text-slate-700 font-medium">Formations vidéo en ligne</p>
            <p className="mt-2 text-sm text-slate-500">
              Modules courts et pratiques, accessibles à la demande.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Par où commencer ?
          </h2>
          <p className="mt-4 text-white/60">
            Le diagnostic identifie les formations les plus adaptées à vos équipes.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90">
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Créer src/app/formation/merci/page.tsx (stub)**

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function FormationMerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-breton-foam px-4">
      <div className="max-w-md text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-breton-emerald mb-6" />
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Vérifiez votre boîte email
        </h1>
        <p className="text-slate-600 mb-8">
          Votre ressource vous a été envoyée par email. Si vous ne la voyez pas, vérifiez vos spams.
        </p>
        <Button asChild>
          <Link href="/audit-ia">Faire le diagnostic →</Link>
        </Button>
      </div>
    </main>
  );
}
```

- [ ] **Mettre à jour src/app/robots.ts**

Ajouter `/formation/merci/` aux disallowed (la page stub est créée dans cette tâche — la protéger immédiatement) :

```typescript
// Résultat attendu dans la liste disallow :
disallow: ['/api/', '/merci/', '/formation/merci/'],
```

- [ ] **Vérifier que le test passe**

```bash
npx playwright test e2e/navigation.spec.ts --grep "formation se charge" --reporter=list
```

- [ ] **Commit**

```bash
git add src/app/formation/page.tsx src/app/formation/merci/page.tsx src/app/robots.ts e2e/navigation.spec.ts
git commit -m "feat: page /formation — accompagnement sur site + ressources gratuites + robots"
```

---

## Task 7 : Homepage redesign (6 sections)

**Fichiers :**
- Modifier : `src/app/page.tsx`
- Créer : `src/components/sections/QuizCta.tsx`
- Modifier : `src/components/sections/HeroV3.tsx` (allégement texte + CTA quiz)

- [ ] **Créer le composant QuizCta**

```tsx
// src/components/sections/QuizCta.tsx
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export function QuizCta() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-[110px] bg-breton-sand">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
            Diagnostic gratuit
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            En 5 minutes, identifiez vos opportunités data & IA
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Le quiz analyse votre situation et vous oriente vers le pilier le plus adapté.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-500">Gratuit · Sans engagement · Résultats immédiats</p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Mettre à jour src/app/page.tsx**

Remplacer les imports et sections :

```tsx
import { HeroV3 } from '@/components/sections/HeroV3';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { Projects } from '@/components/sections/Projects';
import { QuizCta } from '@/components/sections/QuizCta';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
// Supprimer : PillarsSection, Services, Testimonials, IncarnationSection

// Section 3 Piliers inline (3 cards simples)
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />

      {/* Section 2 : Métriques + Logos fusionnés */}
      <MetricsBand />
      <LogoCarousel />

      {/* Section 3 : 3 Piliers */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 mb-12">
            Ce qu&apos;on fait
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                href: '/ia',
                title: 'IA & Automatisation',
                description: 'OCR, agents IA, workflows n8n. Moins de saisie, plus de valeur.',
                tags: ['n8n', 'Make', 'Python'],
                accent: 'border-breton-emerald',
              },
              {
                href: '/data',
                title: 'Data & Reporting',
                description: 'Dashboards temps réel, data engineering, reporting automatisé.',
                tags: ['Power BI', 'Metabase'],
                accent: 'border-transparent',
              },
              {
                href: '/formation',
                title: 'Formation',
                description: 'Ateliers sur site et ressources gratuites pour vos équipes.',
                tags: ['Sur site', 'Ressources PDF'],
                accent: 'border-transparent',
                copper: true,
              },
            ].map((pilier) => (
              <Link
                key={pilier.href}
                href={pilier.href}
                className={`group rounded-2xl border-2 ${pilier.accent} border-breton-sand p-8 hover:border-breton-emerald transition-colors`}
              >
                <h3 className={`text-xl font-bold mb-3 ${pilier.copper ? 'text-breton-copper' : 'text-slate-900'}`}>
                  {pilier.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{pilier.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pilier.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-breton-foam border border-breton-sand rounded-full px-3 py-1 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 block text-sm font-semibold text-breton-emerald group-hover:underline">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 : Quiz CTA */}
      <QuizCta />

      {/* Section 5 : 2 cas clients */}
      <Projects maxItems={2} showLink />

      {/* Section 6 : CTA final */}
      <CtaContact />
    </>
  );
}
```

**Note :** Si `Projects` n'accepte pas encore `maxItems` et `showLink`, l'adapter ou créer un wrapper simple.

- [ ] **Alléger HeroV3.tsx**

- Raccourcir le titre si possible (dans le JSX ou via constants)
- S'assurer que le CTA primaire pointe vers `/audit-ia`
- CTA secondaire → `/cas-clients`

- [ ] **Tester visuellement en dev**

```bash
npm run dev
# Ouvrir http://localhost:3000
# Vérifier : 6 sections présentes, CTA "Faire le diagnostic" visible, 3 piliers cards cliquables
```

- [ ] **Commit**

```bash
git add src/app/page.tsx src/components/sections/QuizCta.tsx src/components/sections/HeroV3.tsx
git commit -m "feat: homepage redesign — 6 sections, 3 piliers, quiz CTA"
```

---

## Task 8 : Promotion du quiz /audit-ia

**Fichiers :**
- Modifier : `src/app/audit-ia/page.tsx`
- Modifier : `src/components/audit/AuditResult.tsx`

- [ ] **Lire les fichiers actuels**

```bash
# Lire src/app/audit-ia/page.tsx
# Lire src/components/audit/AuditResult.tsx
```

- [ ] **Renforcer la page /audit-ia**

Mettre à jour le titre et le sous-titre de la page pour un hero plus accrocheur :

```tsx
// Dans audit-ia/page.tsx, mettre à jour la metadata et le hero
export const metadata: Metadata = {
  title: 'Diagnostic IA & Data',
  description:
    'En 5 minutes, identifiez vos opportunités data & IA. Quiz gratuit pour PME bretonnes — résultats immédiats.',
};
// Hero : "Où en êtes-vous avec la data et l'IA ?" + sous-titre orienté bénéfice
```

- [ ] **Mettre à jour AuditResult.tsx**

S'assurer que le bouton final des résultats pointe vers `/contact` (pas Calendly) :

```tsx
// Remplacer le CTA Calendly dans AuditResult.tsx par :
<Button asChild size="lg">
  <Link href="/contact">Discutons de vos résultats →</Link>
</Button>
```

Si les résultats orientent vers un pilier (IA/Data/Formation), ajouter un lien vers la page pilier correspondante dans les recommandations.

- [ ] **Tester le quiz end-to-end**

```bash
npm run dev
# Aller sur http://localhost:3000/audit-ia
# Compléter le quiz
# Vérifier : résultats affichés, CTA "/contact" visible (pas Calendly)
```

- [ ] **Commit**

```bash
git add src/app/audit-ia/page.tsx src/components/audit/AuditResult.tsx
git commit -m "feat: promouvoir quiz /audit-ia — hero renforcé, CTA résultats → /contact"
```

---

## Task 9 : E2E tests

**Fichiers :**
- Modifier : `e2e/navigation.spec.ts`
- Modifier : `e2e/seo.spec.ts`

- [ ] **Mettre à jour e2e/navigation.spec.ts**

Corriger l'assertion restante qui casse :

1. Le test `'/services se charge avec les offres'` → **supprimer** (un test équivalent pour `/ia` a déjà été ajouté en Task 4 — ne pas renommer pour éviter le doublon)

**Note :** Le test `a[href="/services"]` dans le header a déjà été corrigé en Task 1. L'assertion `'Réserver un créneau'` a déjà été corrigée en Task 1. Ne pas re-patcher.

- [ ] **Mettre à jour e2e/seo.spec.ts**

Le test qui vérifie que le sitemap contient `/services` → mettre à jour pour vérifier `/ia`, `/data`, `/formation`.

**Note :** Si le sitemap est généré automatiquement par Next.js (depuis `src/app/sitemap.ts`), lire ce fichier et l'adapter pour inclure les nouvelles pages.

- [ ] **Lancer tous les tests E2E**

```bash
npm run test:e2e
```

Attendu : 24 tests passent (ou plus avec les nouveaux tests ajoutés).

- [ ] **Corriger les échecs restants le cas échéant**

- [ ] **Commit final**

```bash
git add e2e/
git commit -m "fix: mettre à jour tests E2E après restructuration"
```

---

## Task 10 : Build et déploiement

- [ ] **Build de production**

```bash
npm run build
```

Attendu : build sans erreur. Vérifier :
- Pas d'erreur TypeScript
- Pas de pages manquantes
- Les redirects sont dans le build output

- [ ] **Typecheck final**

```bash
npm run typecheck
```

- [ ] **Lint**

```bash
npm run lint
```

- [ ] **Commit final si ajustements**

```bash
git add .
git commit -m "fix: corrections post-build"
```

- [ ] **Push et vérifier le déploiement Vercel**

```bash
git push origin master
# Vérifier le déploiement dans le dashboard Vercel
# Tester sur l'URL de preview :
# - /ia, /data, /formation chargent
# - /services redirige vers /ia
# - Le CTA header pointe vers /audit-ia (pas Calendly)
```
