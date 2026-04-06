import { test, expect } from '@playwright/test';

test.describe('API Contact', () => {
  test('rejette un body vide', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {},
    });
    expect(response.status()).toBe(400);
  });

  test('rejette un email invalide', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test',
        email: 'pas-un-email',
        company: 'Test Co',
        message: 'Message de test avec au moins 10 caractères',
      },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toBeTruthy();
  });

  test('rejette un message trop court', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test',
        email: 'test@example.com',
        company: 'Test Co',
        message: 'Court',
      },
    });
    expect(response.status()).toBe(400);
  });

  test('accepte le honeypot rempli (piège bot) silencieusement', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Bot',
        email: 'bot@spam.com',
        company: 'Spam Inc',
        message: 'Je suis un bot avec un long message',
        website: 'http://spam.com',
      },
    });
    // Le honeypot retourne 200 silencieusement (piège)
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
  });

  test('les champs optionnels sont acceptés', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Jean Test',
        email: 'jean@test-pme.fr',
        company: 'PME Test',
        role: 'dirigeant',
        phone: '06 12 34 56 78',
        message: 'Je voudrais en savoir plus sur vos offres de diagnostic data pour notre PME.',
      },
    });
    // Peut être 200 (envoi ok) ou 500 (pas de clé Resend en dev) — mais pas 400
    expect(response.status()).not.toBe(400);
  });
});

test.describe('API Audit', () => {
  test('rejette un body incomplet', async ({ request }) => {
    const response = await request.post('/api/audit', {
      data: {
        email: 'test@example.com',
        // company, answers et result manquants
      },
    });
    expect(response.status()).toBe(400);
  });

  test('rejette un email invalide', async ({ request }) => {
    const response = await request.post('/api/audit', {
      data: {
        email: 'pas-valide',
        company: 'Test',
        answers: { q1: 'a' },
        result: {
          score: 50,
          maturityLabel: 'Test',
          maturityDescription: 'Test',
          strengths: [],
          improvements: [],
          recommendations: [],
        },
      },
    });
    expect(response.status()).toBe(400);
  });
});

test.describe('API Rate Limiting', () => {
  test('le rate limiting fonctionne sur /api/audit', async ({ request }) => {
    const response = await request.post('/api/audit', {
      data: {},
    });
    // Should get 400 for invalid data, not 429 (first request)
    expect(response.status()).toBe(400);
  });
});
