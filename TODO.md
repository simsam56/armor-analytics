# TODO - Armor Analytics

## MVP (Minimum Viable Product) ✅

- [x] Structure projet Next.js + TypeScript + Tailwind
- [x] Configuration ESLint + Prettier
- [x] Installation shadcn/ui
- [x] Composants réutilisables (Header, Footer, Hero, etc.)
- [x] Page d'accueil avec toutes les sections
- [x] Page Services détaillée
- [x] Page Projets avec cas d'usage
- [x] Page Contact avec formulaire et Calendly
- [x] Page Merci (confirmation)
- [x] Page Mentions légales
- [x] SEO (metadata, sitemap, robots, JSON-LD)
- [x] API route contact avec Resend
- [x] Documentation (README, .env.example)

## Post-MVP

### Contenu & Design

- [ ] Ajouter de vraies images/illustrations (hero, projets)
- [ ] Créer un logo vectoriel
- [ ] Ajouter des témoignages clients
- [ ] Page "À propos" avec présentation de l'équipe/collectif
- [ ] Blog/Ressources pour SEO et thought leadership

### Fonctionnalités

- [ ] Intégrer réellement Calendly (remplacer CALENDLY_URL)
- [ ] Ajouter analytics (Plausible, Umami ou Vercel Analytics)
- [ ] Ajouter tracking conversions (pixels si nécessaire)
- [ ] Formulaire multi-étapes pour qualification leads
- [ ] Chatbot simple pour qualification

### SEO & Performance

- [ ] Ajouter images OpenGraph personnalisées par page
- [ ] Optimiser images avec next/image
- [ ] Auditer Lighthouse et corriger les points faibles
- [ ] Ajouter FAQ structurée (schema.org) sur chaque page service
- [ ] Créer des pages de contenu localisé (Lorient, Vannes, Quimper, etc.)

### Technique

- [ ] Tests E2E (Playwright ou Cypress)
- [ ] Tests unitaires pour l'API contact
- [ ] Monitoring erreurs (Sentry)
- [ ] Rate limiting sur l'API contact
- [ ] Honeypot anti-spam sur le formulaire
- [ ] Validation Zod côté serveur

### Infrastructure

- [ ] Configurer domaine personnalisé
- [ ] Mettre en place backup des données
- [ ] Configurer alertes (uptime, erreurs)

## Notes

### Calendly

Remplacer `CALENDLY_URL` dans `src/lib/constants.ts` par votre vrai slug Calendly.

### Resend

1. Créer un compte sur https://resend.com
2. Vérifier votre domaine
3. Récupérer la clé API
4. Configurer les variables d'environnement

### Images

Les images par défaut sont absentes. Pour un site de production :

- Hero : illustration data/IA sobre
- Projets : screenshots ou illustrations métier
- Logo : à créer et placer dans /public
