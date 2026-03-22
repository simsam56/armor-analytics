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
- [x] Preconnect Calendly
- [x] Footer tagline mis à jour
- [x] Quiz /audit-ia promu en homepage (CTA micro-conversion)
- [x] Contrastes WCAG (text-white/40 → /60)
- [x] GA4 + GTM infrastructure (activable via env vars)
- [x] Redirect 301 /projets → /cas-clients
- [x] Sitemap nettoyé
- [x] Hero /audit-ia : overlap header fixé
- [x] CLAUDE.md et TODO.md mis à jour

## Phase 12 — Acquisition SEO (à faire — priorité haute)

### Prérequis immédiats (Simon, hors code)
- [x] Créer Google Search Console + soumettre sitemap (fait, indexation en cours)
- [ ] Créer Google Business Profile Lorient (photos, services, horaires)
- [x] Configurer GA4 — G-FEZEF30YF9 actif en production
- [ ] Inscription Sortlist, Malt, annuaires bretons

### Blog / contenu éditorial
- [x] Route /blog avec listing articles
- [x] 5 premiers articles SEO rédigés et publiés :
  - /blog/power-bi-pme-industrielle
  - /blog/automatiser-saisie-commandes-erp
  - /blog/tableau-de-bord-production-kpi
  - /blog/consultant-data-bretagne
  - /blog/erp-excel-comment-en-sortir
- [ ] Rédiger 5 articles supplémentaires (longue traîne)
- [x] Landing pages SEO dédiées :
  - /power-bi-bretagne
  - /automatisation-commandes-pme
  - /consultant-data-lorient

### Backlinks
- [ ] CCI Morbihan — demander inscription annuaire partenaires
- [ ] BDI Bretagne — annuaire acteurs numériques
- [ ] Technopôle Lorient — partenariat
- [ ] Presse locale (Télégramme, Ouest-France) — article/interview
- [ ] Guest posts sur blogs PME/industrie

## Phase 13 — Crédibilité & preuves sociales (à faire — priorité haute)

- [ ] Obtenir 3-5 autorisations clients pour logos + citations nommées
- [x] Photos réelles équipe + terrain intégrées (simon, rémy, camille — portraits + action)
- [ ] Vidéo témoignage client (même courte, smartphone)
- [ ] Métriques vérifiées et sourcées (remplacer "10+ ans", "20+ projets")
- [ ] Avis Google Business Profile (viser 5+ avis)

## Phase 14 — Conversion / CRO (à faire — priorité moyenne)

- [ ] Email capture quiz : demander l'email AVANT de montrer les résultats
- [ ] Formulaire contact rapide (email + 1 question) comme alternative Calendly
- [ ] Email nurturing post-quiz (séquence 3-5 emails via Resend)
- [ ] A/B test CTA homepage quand trafic suffisant
- [ ] Page /ressources ou /guides avec PDF téléchargeables (lead magnets)

## Phase 15 — Technique (à faire — priorité moyenne)

- [ ] Security headers (CSP, X-Frame-Options, etc.) via next.config.ts
- [x] Cookie banner RGPD — consent mode v2, denied par défaut
- [ ] Microsoft Clarity (heatmaps gratuites)
- [ ] LinkedIn Insight Tag (retargeting B2B)
- [ ] Sentry monitoring erreurs
- [ ] Audit Lighthouse mobile post-déploiement
- [ ] Enrichir pages villes OU consolider en 1 page (anti-doorway)
