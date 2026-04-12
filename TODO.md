# TODO — balise-ia

## Phase 0–9 — Fondations → Déploiement (terminé)

Tout le socle technique, le design, les pages, les tests et le déploiement sont en place.
Voir historique git pour le détail.

## Phase 10 — Refonte homepage premium (terminé — 2026-03-20)

- [x] Hero simplifié : suppression particles/vagues/badges, local bar intégrée
- [x] Nouvelles sections : ProofBlock, ExpertisesBlock, ResultsBlock
- [x] Offres restructurées (4 cartes avec livrables, délais, CTA)
- [x] Cas clients compact redessinés
- [x] Méthode 4 étapes épurées (Comprendre, Prioriser, Déployer, Transmettre)
- [x] Incarnation : partenaire de proximité + 3 piliers
- [x] FAQ simplifiée (6 questions, sans onglets)
- [x] CTA final rewrité
- [x] Nav Header simplifiée (1 seul CTA)
- [x] SEO mots-clés optimisés

## Phase 11 — Audit SEO/UX/a11y (terminé — 2026-03-20)

- [x] Fix title tags doublonnés (5 pages)
- [x] Footer H3 → p sémantiques
- [x] Canonical URL homepage
- [x] Preconnect Calendly (supprimé depuis — Calendly retiré du site)
- [x] Footer tagline mis à jour
- [x] Quiz /audit-ia promu en homepage (CTA micro-conversion)
- [x] Contrastes WCAG (text-white/40 → /60)
- [x] GA4 + GTM infrastructure (activable via env vars)
- [x] Redirect 301 /projets → /cas-clients
- [x] Sitemap nettoyé
- [x] Hero /audit-ia : overlap header fixé
- [x] CLAUDE.md et TODO.md mis à jour

## Phase 12 — Acquisition SEO (terminé — 2026-04-06)

### Prérequis immédiats (Simon, hors code)
- [x] Créer Google Search Console + soumettre sitemap (fait, indexation en cours)
- [ ] Créer Google Business Profile Lorient (photos, services, horaires)
- [x] Configurer GA4 — G-FEZEF30YF9 actif en production
- [ ] Inscription Sortlist, Malt, annuaires bretons

### Blog / contenu éditorial
- [x] Route /blog avec listing articles
- [x] 9 articles SEO rédigés et publiés (5 initiaux + 4 ajoutés en phase audit)
- [x] Landing pages SEO dédiées (5 total) :
  - /power-bi-bretagne (JSON-LD FAQPage)
  - /automatisation-commandes-pme (JSON-LD FAQPage)
  - /consultant-data-lorient (JSON-LD LocalBusiness)
  - /formation-ia-pme (JSON-LD FAQPage)
  - /intelligence-artificielle-bretagne (JSON-LD FAQPage)
- [x] RSS feed /blog/feed.xml
- [x] BreadcrumbList JSON-LD sur blog/[slug] et interventions/[ville]
- [x] Section "Derniers articles" sur homepage
- [x] Maillage interne blog ↔ services

### Backlinks (Simon, hors code)
- [ ] CCI Morbihan — demander inscription annuaire partenaires
- [ ] BDI Bretagne — annuaire acteurs numériques
- [ ] Technopôle Lorient — partenariat
- [ ] Presse locale (Télégramme, Ouest-France) — article/interview
- [ ] Guest posts sur blogs PME/industrie

## Phase 13 — Crédibilité & preuves sociales (en cours)

- [ ] Obtenir 3-5 autorisations clients pour logos + citations nommées
- [x] Photos réelles équipe + terrain intégrées (simon, rémy, camille — portraits + action)
- [x] Photos compressées WebP (2.1MB → 30KB, 97-99% réduction)
- [ ] Vidéo témoignage client (même courte, smartphone)
- [ ] Métriques vérifiées et sourcées (remplacer "10+ ans", "20+ projets")
- [ ] Avis Google Business Profile (viser 5+ avis)
- [x] Pages cas-clients/[slug] individuelles (5 pages SSG)
- [x] Schema Review/Testimonial JSON-LD sur cas-clients
- [x] AggregateRating JSON-LD sur homepage

## Phase 14 — Conversion / CRO (à faire — priorité moyenne)

- [ ] Email capture quiz : demander l'email AVANT de montrer les résultats
- [ ] Formulaire contact rapide (email + 1 question) en entrée de conversion
- [ ] Email nurturing post-quiz (séquence 3-5 emails via Resend)
- [ ] A/B test CTA homepage quand trafic suffisant
- [ ] Page /ressources ou /guides avec PDF téléchargeables (lead magnets)
- [x] Conversion tracking GA4 (contact_form_submit, audit_quiz_complete, cookie_consent)

## Phase 15 — Technique (terminé — 2026-04-06)

- [x] Security headers (X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy, CSP)
- [x] Cookie banner RGPD — consent mode v2, denied par défaut, role="dialog", focus trap, Escape
- [x] Politique de confidentialité /politique-confidentialite (CNIL-compliant)
- [x] Microsoft Clarity (heatmaps) — activable via NEXT_PUBLIC_CLARITY_ID
- [x] LinkedIn Insight Tag (retargeting B2B) — activable via NEXT_PUBLIC_LINKEDIN_PARTNER_ID
- [ ] Sentry monitoring erreurs (à configurer en production)
- [x] Error boundary + error.tsx custom
- [x] Web Vitals reporting vers GA4
- [x] Rate limiting distribué (Upstash-ready)
- [x] PWA manifest + icônes 192×512
- [x] Dynamic imports VideoBackground (lazy loading)
- [x] Images WebP/AVIF config
- [x] npm audit fix (0 vulnérabilités)
- [x] 30 tests E2E Playwright

## Phase 16 — Prochaines étapes (à faire)

### Contenu (priorité haute)
- [ ] 5 articles blog longue traîne : RGPD et IA, n8n vs Make, coût data engineer vs consultant, migration Excel → Power BI, IA générative service client
- [ ] Page /ressources avec guides PDF (lead magnets)

### Infrastructure (priorité moyenne)
- [ ] Sentry error tracking (free tier)
- [ ] Base de données leads (Turso/Neon/Supabase)
- [ ] Templates email réutilisables (extraire du code des routes API)

### Code quality (priorité basse)
- [ ] Extraire composants réutilisables : FAQ accordion (×6), ProcessSteps (×4), VideoHeroCTA (×3)
- [ ] Convertir composants 'use client' inutiles en server components
- [ ] Storybook pour documentation composants
- [ ] Pages villes : enrichir contenu ou consolider (anti-doorway)
