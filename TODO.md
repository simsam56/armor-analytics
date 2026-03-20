# TODO — balise-ia

## Phase 0 — Fondations (fait)

- [x] Structure Next.js 16 + TypeScript + Tailwind v4
- [x] ESLint + Prettier configurés
- [x] shadcn/ui installé (New York)
- [x] API contact (Resend + rate limiting + honeypot + Zod)
- [x] API audit (email + Google Sheets)
- [x] SEO de base (metadata, sitemap, robots, JSON-LD)
- [x] Logo phare Clean Silhouette V3 intégré
- [x] Branding unifié sur balise-ia
- [x] .env.example créé
- [x] CLAUDE.md, README.md, TODO.md remis à jour

## Phase 1 — Cohérence de marque (fait)

- [x] Palette bleu → vert brand (#1B4D3E / #40916C)
- [x] CSS custom properties (globals.css) alignées
- [x] gray-_ → slate-_ partout
- [x] ContactFormV7.tsx supprimé
- [x] site-config.ts fusionné dans constants.ts
- [x] Header premium : transparent → solide au scroll

## Phase 2 — Homepage premium (fait)

- [x] Hero refondu : fond vert profond, CTA blanc inversé
- [x] TrustBand (4 signaux de réassurance)
- [x] Section Services redesignée (cards premium)
- [x] Section Methodology refondée (3 étapes + métriques)
- [x] Labels de section uniformisés

## Phase 3 — Pages secondaires (fait)

- [x] Hero pages intérieures unifié (fond #0F2B23)
- [x] /services refondue
- [x] /projets refondue
- [x] /cas-clients refondue
- [x] /a-propos refondue (histoire, valeurs, avantages, zone intervention)
- [x] /audit-ia harmonisée
- [x] /contact refondue
- [x] /merci et /mentions-légales harmonisées

## Phase 4 — SEO local & performance (fait)

- [x] 6 pages localisées /interventions/{ville} (SSG)
- [x] Sitemap enrichi (13 URLs)
- [x] next.config.ts remotePatterns pour images
- [x] Liens villes dans le footer

## Phase 5 — Tests (fait)

- [x] Playwright installé et configuré
- [x] 17 tests E2E (navigation, SEO, formulaire)
- [x] Scripts test:e2e et test:e2e:ui ajoutés

## Phase 6 — Conversion et acquisition (fait)

- [x] Audit du parcours de conversion
- [x] Page audit-ia refondue (promesse concrète, quiz en focus)
- [x] EmailCapture amélioré (ton sobre, moins de friction)
- [x] AuditResult avec CTA Calendly direct
- [x] ContactForm amélioré

## Phase 7 — Finitions techniques (fait)

- [x] Metadata OG enrichies (keywords ciblés)
- [x] JSON-LD enrichi (ProfessionalService, horaires, prix, villes)
- [x] Tests API (7 tests : validation, honeypot, email, body incomplet)
- [x] Total : 24 tests E2E

## Phase 8 — Finitions visuelles (fait)

- [x] FadeIn au scroll sur les sections homepage
- [x] focus-visible custom vert brand
- [x] text-wrap: balance/pretty
- [x] Opacités Tailwind corrigées (/8 → /10)
- [x] Canonicals ajoutés sur toutes les pages principales

## Phase 9 — Déploiement (fait)

- [x] Code poussé sur GitHub (simsam56/armor-analytics)
- [x] Projet Vercel créé et déployé
- [x] DNS Infomaniak configuré (A @ + CNAME www → Vercel)
- [x] Domaine balise-ia.fr en ligne (HTTPS actif)
- [x] Variables Vercel configurées (RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_EMAIL)
- [x] Resend domaine vérifié + SPF/DKIM/DMARC en place
- [x] Email split : contact@ (expédition) / hello@ (réception Infomaniak)

## Phase 10 — Crédibilité & preuves (à faire — nécessite contenu réel)

- [ ] Vrais témoignages clients (quand disponibles)
- [ ] Logos clients réels (quand autorisés)
- [ ] Métriques réelles vérifiées
- [ ] Photos équipe / terrain (à intégrer — fichiers déjà dans /public)

## Phase 11 — Améliorations futures

- [ ] Images OpenGraph personnalisées par page
- [ ] Sentry pour le monitoring erreurs
- [ ] Audit Lighthouse mobile post-déploiement
