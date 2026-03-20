# balise-ia

Site web vitrine B2B pour **balise-ia**, collectif data & automatisation spécialisé PME industrielles bretonnes, basé à Lorient.

> Le nom du repo (`armor-analytics`) est un vestige historique. Le produit s'appelle **balise-ia**.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** + **shadcn/ui** (New York)
- **Resend** (emails) + **googleapis** (Google Sheets, optionnel)
- **Vercel** (hébergement)

## Setup

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev                   # http://localhost:3000
```

## Scripts

| Commande               | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Dev server (Turbopack, port 3000) |
| `npm run build`        | Build production                  |
| `npm start`            | Serveur production                |
| `npm run lint`         | ESLint avec auto-fix              |
| `npm run typecheck`    | Vérification TypeScript           |
| `npm run format`       | Prettier write                    |
| `npm run format:check` | Prettier check                    |

## Variables d'environnement

Voir [.env.example](.env.example) pour la liste complète.

| Variable                       | Requis | Description                    |
| ------------------------------ | ------ | ------------------------------ |
| `RESEND_API_KEY`               | Oui    | Clé API Resend                 |
| `RESEND_FROM_EMAIL`            | Oui    | Email expéditeur vérifié       |
| `CONTACT_EMAIL`                | Oui    | Email destinataire formulaires |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Non    | Google Sheets (lead capture)   |
| `GOOGLE_PRIVATE_KEY`           | Non    | Google Sheets                  |
| `GOOGLE_SHEET_ID`              | Non    | Google Sheets                  |

## Déploiement

Chaque push sur `master` déclenche un déploiement automatique sur Vercel.

## Conventions

- Commits : [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, etc.)
- Formatage : Prettier (semi, singleQuote, printWidth 100)
- Linting : ESLint next/core-web-vitals + typescript + prettier

## Licence

Propriétaire — balise-ia
