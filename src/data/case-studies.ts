export interface CaseStudyMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudyNarrative {
  context: string;
  trigger: string;
  approach: string;
  difficulties?: string;
  firstValue: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  location: string;
  employees: string;
  duration: string;
  beforeState: {
    painPoints: string[];
  };
  intervention: {
    description: string;
    actions: string[];
    tools: string[];
  };
  afterState: {
    results: string[];
  };
  testimonial: string;
  author: string;
  role: string;
  metrics: CaseStudyMetric[];
  image: string;
  narrative?: CaseStudyNarrative;
  screenshots?: { src: string; alt: string; caption: string }[];
  relatedLinks?: { label: string; href: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'crm-intelligent',
    title: 'CRM connecté — veille personnalisée automatique et prospection intelligente',
    sector: 'Commercial / Prospection',
    location: 'Bretagne',
    employees: 'PME 10-250 salariés',
    duration: '4 semaines',
    beforeState: {
      painPoints: [
        'Prospection manuelle : recherche de contacts un par un sur LinkedIn ou Google',
        'Aucune veille structurée sur les signaux business (recrutements, levées de fonds, investissements)',
        'CRM classique rempli de contacts froids, sans priorisation',
        'Temps perdu à contacter des prospects qui n\'ont aucun besoin immédiat',
      ],
    },
    intervention: {
      description:
        'Un CRM piloté par une chaîne de 6 agents IA en cascade, chacun spécialisé sur une étape du pipeline commercial. Chaque jour, ils travaillent ensemble — sans intervention humaine — pour trouver, qualifier et contacter les bons prospects.',
      actions: [
        'Agent Prospector — scrute chaque jour des dizaines de sources web (presse économique, annonces légales, sites d\'emploi, réseaux sociaux) pour détecter les signaux business : recrutements, investissements, levées de fonds, ouvertures de sites. Résultat : une liste quotidienne d\'entreprises en mouvement, pertinentes pour votre activité.',
        'Agent Enricher — prend le relais sur chaque entreprise détectée. Il va chercher les contacts décisionnaires via les API Sirene, Hunter.io et Apollo : nom, poste, email vérifié, téléphone. Il croise plusieurs sources pour garantir la fiabilité des données.',
        'Agent Qualifier — applique un scoring ICP (Ideal Customer Profile) sur chaque lead enrichi. Il note sur 6 axes : secteur, taille, localisation, signaux détectés, historique, et pertinence métier. Seuls les leads qui correspondent à votre cible passent à l\'étape suivante.',
        'Agent Writer — rédige des emails personnalisés pour chaque prospect qualifié, en s\'appuyant sur le signal détecté. Pas de template générique : chaque message fait référence à l\'actualité concrète de l\'entreprise (« Vous recrutez un responsable qualité — nous aidons les industriels à structurer leur data qualité »).',
        'Agent Sender — gère l\'envoi avec warm-up SMTP intégré pour garantir la délivrabilité. Il respecte les quotas, espace les envois, et surveille les taux de rebond en temps réel.',
        'Agent Follow-up — programme et exécute les relances automatiques selon des règles configurables. Il adapte le message en fonction des interactions (ouverture, clic, réponse).',
      ],
      tools: ['Claude (IA)', 'Next.js', 'Vercel', 'Apollo', 'Hunter.io', 'API Sirene', 'SMTP warm-up'],
    },
    afterState: {
      results: [
        'Veille quotidienne automatique : les signaux business arrivent chaque matin',
        '342 leads détectés et enrichis automatiquement par semaine',
        'Scoring ICP à 100% — seuls les prospects qualifiés entrent dans le pipeline',
        'Emails personnalisés rédigés par l\'IA avec un taux d\'ouverture de 97%',
        'Temps de prospection divisé par 5 : l\'équipe se concentre sur les rendez-vous',
      ],
    },
    testimonial:
      'On ne prospecte plus à l\'aveugle. Chaque matin, l\'outil nous dit qui contacter et pourquoi. C\'est un changement radical.',
    author: 'Dirigeant PME',
    role: 'Gérant',
    metrics: [
      { label: 'Leads qualifiés / semaine', value: '342', highlight: true },
      { label: 'Taux scoring ICP', value: '100%' },
      { label: 'Taux ouverture emails', value: '97%' },
      { label: 'Temps prospection', value: '÷5' },
    ],
    image: '/videos/demo-crm.mp4',
    narrative: {
      context:
        'La plupart des PME prospectent encore à l\'ancienne : recherche manuelle sur LinkedIn, emails génériques envoyés à froid, relances oubliées dans un coin de tableur. Le commercial passe plus de temps à chercher des contacts qu\'à vendre. Et quand il trouve un prospect, il n\'a aucune idée de si c\'est le bon moment pour le contacter.',
      trigger:
        'Le vrai problème n\'est pas le CRM — c\'est qu\'il est déconnecté du monde réel. Un CRM classique stocke des contacts, mais il ne sait pas que l\'entreprise X vient de lever 2M€, que l\'usine Y recrute un responsable qualité, ou que le groupe Z investit dans un nouvel atelier. Ces signaux existent, ils sont publics — mais personne n\'a le temps de les surveiller manuellement.',
      approach:
        'Nous avons conçu un CRM d\'un nouveau genre : une chaîne de 6 agents IA qui travaillent en cascade, chacun spécialisé sur une étape. Le Prospector scrute chaque jour des dizaines de sources (presse éco, annonces légales, sites d\'emploi) et remonte les signaux pertinents. L\'Enricher va chercher les contacts décisionnaires via API. Le Qualifier note chaque lead selon votre profil client idéal. Le Writer rédige un email personnalisé qui fait référence au signal détecté — pas de template générique. Le Sender gère l\'envoi avec warm-up SMTP. Et le Follow-up programme les relances. Tout ça tourne chaque jour, sans intervention humaine.',
      difficulties:
        'Le principal défi : calibrer la pertinence des signaux. Un recrutement n\'est pas toujours une opportunité. Une levée de fonds peut concerner un secteur hors cible. Nous avons itéré sur les règles de scoring avec le client pour que seuls les signaux réellement exploitables remontent — et éviter le bruit.',
      firstValue:
        'Dès la première semaine, l\'outil a remonté un signal qu\'aucun commercial n\'aurait vu : une PME industrielle du Morbihan venait de publier un poste de responsable qualité, signe d\'une structuration en cours. L\'email personnalisé a été envoyé le jour même. Rendez-vous pris en 48h.',
    },
    screenshots: [
      {
        src: '/cas-clients/crm-intelligent/signaux.jpg',
        alt: 'Les 6 agents IA en cascade — Prospector, Enricher, Qualifier, Writer, Sender, Follow-up',
        caption: 'Les 6 agents IA travaillent en cascade. Chacun est spécialisé sur une étape : détection, enrichissement, scoring, rédaction, envoi, relance. Le pipeline à droite montre les volumes traités en temps réel.',
      },
      {
        src: '/cas-clients/crm-intelligent/pipeline.jpg',
        alt: 'Signaux business détectés automatiquement — recrutement, investissement, innovation',
        caption: 'La veille automatique remonte chaque jour les signaux business pertinents : recrutements, investissements, innovations. Chaque signal est rattaché à une entreprise avec ses contacts décisionnaires.',
      },
      {
        src: '/cas-clients/crm-intelligent/dashboard.jpg',
        alt: 'Vue campagnes — destinataires scorés et envoi automatique',
        caption: 'Les campagnes d\'emailing sont générées automatiquement. Chaque destinataire est scoré (A = priorité haute). L\'envoi respecte le warm-up SMTP pour garantir la délivrabilité.',
      },
    ],
    relatedLinks: [
      { label: 'Automatisation commandes PME', href: '/automatisation-commandes-pme' },
      { label: 'Intelligence artificielle Bretagne', href: '/intelligence-artificielle-bretagne' },
    ],
  },
  {
    slug: 'commandes-industrielles',
    title: 'Extraction automatique des commandes clients — PME métallurgie, Lorient',
    sector: 'Métallurgie / Industrie',
    location: 'Lorient (56)',
    employees: '45 salariés',
    duration: '3 semaines',
    beforeState: {
      painPoints: [
        'Commandes reçues par email en PDF — ressaisie manuelle dans l\'ERP, ligne par ligne',
        '8 minutes en moyenne par bon de commande, avec un risque d\'erreur à chaque saisie',
        'Aucune vérification automatique des prix : les écarts avec le catalogue passent inaperçus',
        'Pièces jointes éparpillées dans 3 boîtes mail, sans suivi centralisé',
      ],
    },
    intervention: {
      description:
        'Un agent IA connecté aux boîtes mail de l\'entreprise, qui détecte automatiquement les bons de commande, extrait les données par OCR, vérifie chaque ligne contre le catalogue ERP, et signale les écarts avant saisie.',
      actions: [
        'Connexion et synchronisation automatique de 3 boîtes mail (commandes, achats, comptabilité) — surveillance continue des emails entrants',
        'Détection IA des emails contenant un bon de commande (PDF en pièce jointe) avec score de certitude — les emails incertains sont signalés pour vérification humaine',
        'Extraction OCR des lignes de commande : référence article, désignation, quantité, prix unitaire, total — même sur des PDF scannés ou mal formatés',
        'Comparaison automatique avec le catalogue ERP : validation des prix, détection des écarts, signalement des références inconnues',
        'Saisie automatique dans SAP MM pour les commandes validées — les écarts sont remontés à un opérateur pour décision',
        'Tableau de bord temps réel : volume traité, taux de saisie automatique, temps moyen, fiabilité OCR, journal d\'exécution',
      ],
      tools: ['Claude (IA)', 'Next.js', 'Vercel', 'OCR (Vision)', 'API SAP MM', 'IMAP'],
    },
    afterState: {
      results: [
        'Traitement d\'un bon de commande en 45 secondes au lieu de 8 minutes',
        '92% des commandes saisies automatiquement sans intervention humaine',
        'Détection systématique des écarts de prix et des références inconnues',
        '0 erreur de saisie depuis la mise en production',
        'Gain estimé : 1,5 jour/semaine pour l\'assistante achats',
      ],
    },
    testimonial:
      'Avant, je passais mes matinées à copier-coller des bons de commande dans SAP. Maintenant c\'est fait quand j\'arrive. Et les écarts de prix, on les voit enfin — on en ratait avant.',
    author: 'Marine K.',
    role: 'Assistante achats',
    metrics: [
      { label: 'Temps de traitement', value: '45s', highlight: true },
      { label: 'Saisie automatique', value: '92%' },
      { label: 'Erreurs de saisie', value: '0' },
      { label: 'Gain hebdo', value: '1,5j' },
    ],
    image: '/videos/demo-commandes.mp4',
    narrative: {
      context:
        'Chez Scorff Métallurgie, une PME de 45 salariés à Lorient, les commandes clients arrivent par email — parfois sur la boîte commandes@, parfois directement à l\'acheteur ou à la comptable. Chaque jour, une dizaine de bons de commande en PDF à ouvrir, lire, et ressaisir manuellement dans SAP. 8 minutes par commande, sans compter les vérifications.',
      trigger:
        'Le vrai problème n\'était pas la lenteur — c\'était l\'invisible. Quand un fournisseur envoie un prix qui a changé de 12%, personne ne le voit si on ne compare pas ligne par ligne avec le catalogue. Et quand une référence article est inconnue, elle est saisie quand même, sans alerte. Les erreurs s\'accumulent silencieusement.',
      approach:
        'Nous avons connecté un agent IA aux 3 boîtes mail de l\'entreprise. Toutes les 15 minutes, il synchronise les emails, analyse chaque message et détecte ceux qui contiennent un bon de commande — avec un score de certitude. Les PDF sont extraits par OCR (même les scans), chaque ligne est comparée au catalogue ERP, et les écarts sont remontés avant saisie. Les commandes propres passent directement dans SAP.',
      difficulties:
        'Le principal défi : la qualité variable des PDF reçus. Certains fournisseurs envoient des scans à 150 dpi, d\'autres des PDF générés par leur ERP avec des mises en page exotiques. Nous avons itéré sur les prompts OCR et ajouté un score de confiance par ligne — en dessous de 85%, la commande passe en vérification humaine plutôt que d\'être saisie avec un doute.',
      firstValue:
        'Dès le 2e jour, l\'agent a détecté un écart de prix sur des joints toriques DN50 : 1,85 € au lieu de 1,65 € au catalogue. Sur 200 pièces, ça faisait 40 € d\'écart — invisible à l\'œil, mais détecté automatiquement. Le fournisseur avait changé son tarif sans prévenir.',
    },
    screenshots: [
      {
        src: '/cas-clients/commandes-industrielles/boites-mail.jpg',
        alt: 'Extraction des commandes clients — 3 boîtes mail connectées avec détection IA',
        caption: 'Les 3 boîtes mail de l\'entreprise sont synchronisées automatiquement. Chaque email est analysé par l\'IA : commande détectée (98%), à vérifier (62%), ou ignoré. Le statut ERP (Intégré / En attente) est visible en un coup d\'œil.',
      },
      {
        src: '/cas-clients/commandes-industrielles/inbox-commandes.jpg',
        alt: 'Inbox commandes — pipeline de traitement en 5 étapes',
        caption: 'Le pipeline complet : réception email → extraction OCR → vérification catalogue → validation humaine → saisie ERP. Chaque commande est suivie avec son statut en temps réel.',
      },
      {
        src: '/cas-clients/commandes-industrielles/detail-ocr.jpg',
        alt: 'Détail OCR — aperçu PDF et comparaison catalogue ERP',
        caption: 'L\'aperçu du PDF à gauche, les lignes extraites à droite. Chaque ligne est comparée au catalogue : vert = conforme, orange = écart de prix détecté, rouge = référence inconnue.',
      },
      {
        src: '/cas-clients/commandes-industrielles/tableau-bord.jpg',
        alt: 'Tableau de bord — KPIs, fiabilité OCR et journal d\'exécution',
        caption: 'Le tableau de bord affiche les KPIs (45s/commande, 92% auto, 0 erreur), la fiabilité OCR par niveau de confiance, et le journal d\'exécution en temps réel.',
      },
    ],
    relatedLinks: [
      { label: 'Automatisation commandes PME', href: '/automatisation-commandes-pme' },
      { label: 'Intelligence artificielle Bretagne', href: '/intelligence-artificielle-bretagne' },
    ],
  },
  {
    slug: 'metallurgie-finistere',
    title: 'Agent IA de pilotage production — PME métallurgie, Finistère',
    sector: 'Métallurgie / Industrie',
    location: 'Finistère (29)',
    employees: '80 salariés',
    duration: '8 semaines',
    beforeState: {
      painPoints: [
        '4h de compilation manuelle chaque semaine pour produire le rapport de production',
        'Découverte des problèmes qualité à J+5 minimum — après avoir produit des lots défectueux',
        'Pas de vision temps réel sur les cadences, TRS et taux de rebut par ligne',
        'Alertes inexistantes : les dérives passent inaperçues jusqu\'à ce qu\'elles deviennent critiques',
      ],
    },
    intervention: {
      description:
        'Un agent IA autonome qui collecte les données machines et ERP chaque matin à 5h30, calcule les KPIs de production (TRS, OEE, cadence, rebuts), détecte les anomalies, génère un rapport hebdomadaire rédigé en français, et envoie des alertes Slack en temps réel quand un seuil est franchi.',
      actions: [
        'Agent de collecte — connexion OPC-UA aux 3 lignes de production (pièces usinées, sous-ensembles soudés, assemblage) et synchronisation avec SAP pour les données qualité. Cycle automatique chaque matin à 5h30, sans intervention humaine.',
        'Dashboard temps réel — TRS, OEE, cadence et taux de rebut actualisés en continu. Production horaire sur 24h avec code couleur (vert/orange/rouge selon seuils). État des 3 lignes avec temps d\'arrêt cumulé.',
        'Détection d\'anomalies — l\'agent croise les données machines, qualité et approvisionnement pour identifier les corrélations. Exemple : chute de cadence ligne 2 corrélée au changement de lot matière première.',
        'Rapport hebdomadaire automatique — résumé exécutif rédigé par l\'IA, tableau comparatif semaine N vs N-1, points d\'attention identifiés avec analyse causale, plan d\'action suggéré avec priorités et responsables. Envoyé par email chaque lundi à 6h02.',
        'Alertes intelligentes — notification Slack immédiate quand une cadence passe sous seuil, quand un taux de rebut dépasse la tolérance, ou quand l\'analyse prédictive identifie un risque (usure plaquettes, dérive thermique broche).',
      ],
      tools: ['Claude (IA)', 'Next.js', 'Vercel', 'OPC-UA', 'API SAP', 'Slack'],
    },
    afterState: {
      results: [
        '4h/semaine de reporting économisées — le rapport est généré automatiquement',
        'Problèmes détectés en temps réel au lieu de J+5',
        '2 arrêts de ligne évités le premier mois grâce aux alertes prédictives',
        'TRS en hausse de 2 points grâce à la réactivité sur les anomalies',
        'Plan d\'action hebdomadaire priorisé — le directeur de production pilote au lieu de compiler',
      ],
    },
    testimonial:
      'Le lundi matin, le rapport est dans ma boîte mail avant que j\'arrive. Avec le plan d\'action priorisé, je sais exactement quoi traiter en premier. On a gagné 2 points de TRS en 3 mois.',
    author: 'Jean-Pierre M.',
    role: 'Directeur de production',
    metrics: [
      { label: 'Reporting', value: '-4h/sem', highlight: true },
      { label: 'TRS', value: '+2 pts' },
      { label: 'Réactivité', value: 'Temps réel' },
      { label: 'ROI', value: '3 mois' },
    ],
    image: '/videos/demo-production.mp4',
    narrative: {
      context:
        'Cette PME de métallurgie fine dans le Finistère (80 salariés, 3 lignes de production) avait un problème classique : les données de production existaient — dans la GPAO, dans les automates machines, dans les fichiers Excel du chef d\'atelier — mais personne ne les voyait au bon moment. Le responsable production passait chaque vendredi après-midi à compiler manuellement les chiffres de la semaine : TRS, cadences, écarts qualité, temps d\'arrêt. 4 heures de copier-coller pour un rapport que le directeur lisait le lundi matin.',
      trigger:
        'Le déclic est venu quand un problème qualité récurrent sur la ligne 2 n\'a été détecté qu\'au bout de 5 jours — après avoir produit 3 lots défectueux. Un changement de lot matière première (acier S355) avait provoqué une dispersion accrue sur les épaisseurs, impactant les temps de réglage. Personne ne l\'avait vu parce que le reporting était un rétroviseur à J+5, pas un outil de pilotage. Le directeur de production a cherché quelqu\'un qui comprenne la réalité d\'un atelier — pas un éditeur qui vend un MES à 200K€.',
      approach:
        'On a déployé un agent IA autonome connecté aux automates machines (OPC-UA) et à SAP. Chaque matin à 5h30, l\'agent collecte les données, calcule les KPIs, détecte les anomalies et croise les sources (machines + qualité + approvisionnement). À 6h02, le rapport hebdomadaire est dans la boîte mail du directeur — rédigé en français, avec analyse causale et plan d\'action priorisé. En parallèle, un dashboard temps réel affiche l\'état des 3 lignes en continu, et des alertes Slack partent instantanément quand un seuil est franchi.',
      difficulties:
        'Le principal défi : calibrer les seuils d\'alerte. Trop sensibles, on noie l\'équipe sous les notifications. Pas assez, on rate les vrais problèmes. On a itéré avec le chef d\'atelier pendant 2 semaines pour trouver le bon réglage par ligne et par indicateur. L\'analyse prédictive (usure plaquettes, dérive thermique) a aussi nécessité 3 semaines de données historiques avant d\'être fiable.',
      firstValue:
        'Dès la troisième semaine, l\'agent a détecté une dérive de cadence sur la ligne 2 — corrélée au changement de lot matière première S355 (fournisseur AcierPlus, lot #2026-1542). Alerte Slack envoyée en temps réel, investigation lancée dans l\'heure, zéro lot défectueux. Le même problème qui avait causé 3 lots perdus quelques mois plus tôt. Le vendredi suivant, le responsable production a regardé le rapport automatique et a dit : "C\'est exactement ce que je passais 4 heures à faire, en mieux."',
    },
    screenshots: [
      {
        src: '/cas-clients/metallurgie-finistere/dashboard.jpg',
        alt: 'Dashboard production temps réel — TRS, cadence, OEE, état des lignes et alertes',
        caption: 'Le dashboard affiche les KPIs en temps réel (TRS 87%, cadence 142 p/h, OEE 82%), la production horaire sur 24h avec code couleur, l\'état des 3 lignes et les alertes actives.',
      },
      {
        src: '/cas-clients/metallurgie-finistere/rapport-hebdo.jpg',
        alt: 'Rapport hebdomadaire généré automatiquement — plan d\'action, résumé exécutif, comparatif',
        caption: 'Le rapport de la semaine 16 : plan d\'action priorisé en haut, résumé exécutif rédigé par l\'IA, tableau comparatif semaine N vs N-1, et points d\'attention avec analyse causale.',
      },
      {
        src: '/cas-clients/metallurgie-finistere/journal-agent.jpg',
        alt: 'Journal de l\'agent — timeline horodatée des actions automatiques',
        caption: 'L\'agent trace chaque action : collecte ERP à 5h30, calcul KPIs à 5h45, génération rapport à 6h00, envoi email à 6h02, alerte Slack à 6h15. Tout est auditable.',
      },
    ],
    relatedLinks: [
      { label: 'Automatisation commandes PME', href: '/automatisation-commandes-pme' },
      { label: 'Pilotage production métallurgie', href: '/pilotage-production-metallurgie' },
      { label: 'Intelligence artificielle Bretagne', href: '/intelligence-artificielle-bretagne' },
    ],
  },
  {
    slug: 'agroalimentaire-morbihan',
    title: 'Automatisation des commandes — Agroalimentaire',
    sector: 'Agroalimentaire',
    location: 'Morbihan (56)',
    employees: '45 salariés',
    duration: '6 semaines',
    beforeState: {
      painPoints: [
        '2h de ressaisie par jour pour 3 personnes',
        '5-10 erreurs de saisie par semaine',
        'Délai de traitement commande : 4h en moyenne',
      ],
    },
    intervention: {
      description: 'Automatisation du flux de commandes entrantes.',
      actions: [
        'Extraction automatique des données des PDF et emails',
        'Validation et injection directe dans l\u2019ERP',
        'Alertes sur les commandes urgentes',
      ],
      tools: ['Python', 'API ERP', 'Email automation'],
    },
    afterState: {
      results: [
        '80% du temps de traitement éliminé',
        'Zéro erreur de saisie depuis 6 mois',
        'Délai de traitement : 15 minutes',
      ],
    },
    testimonial:
      'On a récupéré 2 heures par jour. L\u2019équipe peut enfin se concentrer sur la relation client.',
    author: 'Marie Lebreton',
    role: 'Responsable ADV',
    metrics: [
      { label: 'Temps gagné', value: '2h/jour', highlight: true },
      { label: 'Erreurs', value: '0' },
      { label: 'ROI', value: '4 mois' },
    ],
    image: '/agroalimentaire.jpg',
    relatedLinks: [
      { label: 'IA et automatisation', href: '/ia' },
      { label: 'IA pour l\u2019agroalimentaire breton', href: '/ia-agroalimentaire-bretagne' },
      { label: 'Tableaux de bord production', href: '/data' },
    ],
  },
  {
    slug: 'transport-logistique-cotes-armor',
    title: 'Reporting automatisé en J+0 — Transport & Logistique',
    sector: 'Transport & Logistique',
    location: "Côtes-d'Armor (22)",
    employees: '120 salariés',
    duration: '10 semaines',
    beforeState: {
      painPoints: [
        'Reporting disponible à J+5 au mieux',
        '30% du temps du DAF sur de la compilation',
        'Sources non connectées entre elles',
      ],
    },
    intervention: {
      description: 'Data warehouse unifié + dashboard direction automatisé.',
      actions: [
        'Consolidation automatique des sources (TMS, compta, RH)',
        'Dashboard direction avec KPIs métier',
        'Envoi automatique du rapport hebdomadaire',
      ],
      tools: ['dbt', 'Airbyte', 'Power BI'],
    },
    afterState: {
      results: [
        'Reporting disponible en J+0',
        'Fiabilité des données à 100%',
        'DAF libéré pour des tâches à valeur ajoutée',
      ],
    },
    testimonial:
      'Le CODIR a enfin des chiffres fiables dès le lundi matin. On peut prendre des décisions sur des données fraîches, plus sur des approximations.',
    author: 'Sophie Duval',
    role: 'DAF',
    metrics: [
      { label: 'Délai reporting', value: 'J+0', highlight: true },
      { label: 'Fiabilité', value: '100%' },
      { label: 'ROI', value: '5 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    relatedLinks: [
      { label: 'IA et automatisation', href: '/ia' },
      { label: 'Tableaux de bord production', href: '/data' },
    ],
  },
  {
    slug: 'industrie-plastique-ille-et-vilaine',
    title: 'Traçabilité qualité digitalisée — Industrie plastique',
    sector: 'Industrie plastique',
    location: 'Ille-et-Vilaine (35)',
    employees: '60 salariés',
    duration: '5 semaines',
    beforeState: {
      painPoints: [
        'Traçabilité incomplète, difficile à prouver',
        'Préparation des audits : 2-3 jours de recherche',
        'Fichiers Excel non versionnés',
      ],
    },
    intervention: {
      description: 'Digitalisation du suivi qualité avec traçabilité intégrée.',
      actions: [
        'Application de saisie terrain (tablettes)',
        'Traçabilité complète lot par lot',
        'Export automatique pour les audits',
      ],
      tools: ['Application web', 'Base de données', 'Export PDF'],
    },
    afterState: {
      results: [
        'Temps de recherche divisé par 10',
        'Dernier audit ISO : 0 non-conformité',
        'Préparation d\u2019audit : 30 minutes',
      ],
    },
    testimonial:
      'Lors du dernier audit ISO, on a pu sortir toutes les données en 5 minutes.',
    author: 'Nicolas Kermarrec',
    role: 'Responsable Qualité',
    metrics: [
      { label: 'Temps recherche', value: '/10', highlight: true },
      { label: 'Audits', value: '0 NC' },
      { label: 'ROI', value: '6 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    relatedLinks: [
      { label: 'Tableaux de bord production', href: '/data' },
      { label: 'IA et automatisation', href: '/ia' },
    ],
  },
  {
    slug: 'negoce-b2b-loire-atlantique',
    title: 'Analyse de rentabilité client — Négoce B2B',
    sector: 'Négoce B2B',
    location: 'Loire-Atlantique (44)',
    employees: '35 salariés',
    duration: '7 semaines',
    beforeState: {
      painPoints: [
        'Aucune visibilité sur les marges par client',
        'Décisions commerciales au feeling',
        'Effort commercial mal réparti',
      ],
    },
    intervention: {
      description: 'Analyse de rentabilité client et produit.',
      actions: [
        'Connexion à l\u2019ERP pour les données ventes',
        'Dashboard marge par client, famille, commercial',
        'Alertes sur les marges sous seuil',
      ],
      tools: ['API ERP', 'Python', 'Metabase'],
    },
    afterState: {
      results: [
        '+3 points de marge moyenne',
        '20% des clients étaient non rentables',
        '15 contrats renégociés ou arrêtés',
      ],
    },
    testimonial:
      'On a découvert que 20% de nos clients nous coûtaient de l\u2019argent. La marge a augmenté de 3 points.',
    author: 'Franck Le Bras',
    role: 'Directeur Commercial',
    metrics: [
      { label: 'Marge', value: '+3 pts', highlight: true },
      { label: 'Visibilité', value: '100%' },
      { label: 'ROI', value: '2 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    relatedLinks: [
      { label: 'Tableaux de bord production', href: '/data' },
      { label: 'IA et automatisation', href: '/ia' },
    ],
  },
];
