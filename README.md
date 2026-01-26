# Armor Analytics

Site web vitrine pour **Armor Analytics**, micro-agence collective spécialisée en Data & IA pour PME industrielles bretonnes.

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4 + shadcn/ui
- **Email** : Resend
- **Hébergement** : Vercel

## Fonctionnalités

- Pages : Accueil, Services, Projets, Contact, Merci, Mentions légales
- Formulaire de contact avec envoi email via Resend
- Intégration Calendly pour prise de rendez-vous
- SEO optimisé (metadata, sitemap, robots, JSON-LD LocalBusiness)
- Design responsive et accessible

## Installation

### Prérequis

- Node.js 18+
- npm ou yarn

### Setup

```bash
# Cloner le projet
git clone <repo-url>
cd armor-analytics

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer en développement
npm run dev
```

Le site est accessible sur http://localhost:3000

## Scripts disponibles

```bash
# Développement (avec Turbopack)
npm run dev

# Build de production
npm run build

# Lancer le build de production
npm start

# Linting (avec auto-fix)
npm run lint

# Formatage du code
npm run format

# Vérification du formatage
npm run format:check
```

## Variables d'environnement

| Variable            | Description                         | Exemple                      |
| ------------------- | ----------------------------------- | ---------------------------- |
| `RESEND_API_KEY`    | Clé API Resend                      | `re_xxx...`                  |
| `RESEND_FROM_EMAIL` | Email d'envoi (vérifié dans Resend) | `contact@armor-analytics.fr` |
| `CONTACT_EMAIL`     | Email de réception des demandes     | `contact@armor-analytics.fr` |

## Déploiement sur Vercel

### 1. Importer le projet

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur "New Project"
3. Importer depuis GitHub
4. Sélectionner le repo `armor-analytics`

### 2. Configurer les variables d'environnement

Dans les settings du projet Vercel :

1. Aller dans "Settings" > "Environment Variables"
2. Ajouter les variables :
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_EMAIL`

### 3. Configurer le domaine

1. Aller dans "Settings" > "Domains"
2. Ajouter votre domaine (ex: `armor-analytics.fr`)
3. Configurer les DNS chez votre registrar :
   - Type A : `@` → `76.76.21.21`
   - Type CNAME : `www` → `cname.vercel-dns.com`

### 4. Déployer

Chaque push sur `main` déclenche automatiquement un déploiement.

Pour un déploiement manuel :

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## Configuration à personnaliser

### Calendly

Remplacer `CALENDLY_URL` dans `src/lib/constants.ts` par votre slug Calendly :

```typescript
calendly: 'votre-nom/rendez-vous-30min',
```

### Informations de contact

Modifier `src/lib/constants.ts` :

```typescript
export const SITE_CONFIG = {
  name: 'Armor Analytics',
  email: 'contact@armor-analytics.fr',
  url: 'https://armor-analytics.fr',
  // ...
};
```

## Structure du projet

```
armor-analytics/
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── api/contact/        # API route pour formulaire
│   │   ├── contact/
│   │   ├── mentions-legales/
│   │   ├── merci/
│   │   ├── projets/
│   │   ├── services/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Hero, Services, Projects, etc.
│   │   ├── ui/                 # shadcn/ui components
│   │   └── JsonLd.tsx          # Schema.org
│   └── lib/
│       ├── constants.ts        # Configuration du site
│       └── utils.ts            # Utilitaires
├── public/                     # Assets statiques
├── .env.example
├── TODO.md                     # Roadmap et améliorations
└── README.md
```

## Conventions de commit

Utiliser le format Conventional Commits :

```
type(scope): description

[body optionnel]
```

Types :

- `feat`: nouvelle fonctionnalité
- `fix`: correction de bug
- `docs`: documentation
- `style`: formatage (pas de changement de code)
- `refactor`: refactoring
- `test`: ajout de tests
- `chore`: maintenance

Exemples :

```bash
git commit -m "feat(contact): add honeypot spam protection"
git commit -m "fix(seo): correct JSON-LD schema"
git commit -m "docs: update deployment instructions"
```

## Contribuer

1. Créer une branche feature : `git checkout -b feat/ma-feature`
2. Commiter les changements : `git commit -m "feat: description"`
3. Pousser la branche : `git push origin feat/ma-feature`
4. Ouvrir une Pull Request

## Licence

Propriétaire - Armor Analytics
