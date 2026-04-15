import { test, expect } from '@playwright/test';

test.describe('SEO et metadata', () => {
  test('la homepage a les meta tags essentiels', async ({ page }) => {
    await page.goto('/');

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description).toContain('PME');

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('balise-ia');

    // Vérifie la langue
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('fr');
  });

  test('le sitemap est accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const body = await page.content();
    expect(body).toContain('balise-ia.fr');
    expect(body).toContain('/interventions/lorient');
    expect(body).toContain('/cas-clients');
    expect(body).toContain('/contact');
  });

  test('le robots.txt est accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
  });

  test('les pages localisées se chargent', async ({ page }) => {
    const cities = ['lorient', 'vannes', 'quimper', 'rennes', 'brest', 'saint-brieuc'];

    for (const city of cities) {
      const response = await page.goto(`/interventions/${city}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('une ville inexistante retourne 404', async ({ page }) => {
    const response = await page.goto('/interventions/paris');
    expect(response?.status()).toBe(404);
  });

  test('les pages cas-clients individuelles ont les meta tags', async ({ page }) => {
    await page.goto('/cas-clients/agroalimentaire-morbihan');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
  });

  test('le sitemap contient les nouvelles pages', async ({ page }) => {
    await page.goto('/sitemap.xml');
    const body = await page.content();
    expect(body).toContain('/cas-clients/agroalimentaire-morbihan');
    expect(body).toContain('/politique-confidentialite');
  });
});
