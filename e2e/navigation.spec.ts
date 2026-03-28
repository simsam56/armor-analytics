import { test, expect } from '@playwright/test';

test.describe('Navigation et pages principales', () => {
  test('la homepage se charge et contient le hero', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/balise-ia/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('donnée');
  });

  test('le header contient le logo et la navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('header a[href="/"]').first()).toBeVisible();
    await expect(page.locator('header nav a[href="/ia"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/data"]')).toBeVisible();
    await expect(page.locator('header nav a[href="/formation"]')).toBeVisible();
  });

  test('le footer contient les liens et le CTA', async ({ page }) => {
    await page.goto('/');
    const siteFooter = page.locator('footer.bg-breton-navy');
    await expect(siteFooter).toBeVisible();
    await expect(siteFooter.locator('a[href="/ia"]').first()).toBeVisible();
    await expect(siteFooter).toContainText('balise-ia');
  });

  test('/projets redirige vers /cas-clients', async ({ page }) => {
    await page.goto('/projets');
    await expect(page).toHaveTitle(/Cas clients/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('/contact se charge avec le formulaire', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveTitle(/Contact/);
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });

  test('/a-propos se charge', async ({ page }) => {
    await page.goto('/a-propos');
    await expect(page).toHaveTitle(/Collectif/i);
    await expect(page.locator('h1')).toContainText('collectif');
  });

  test('/audit-ia se charge avec le quiz', async ({ page }) => {
    await page.goto('/audit-ia');
    await expect(page).toHaveTitle(/Diagnostic/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('/mentions-legales se charge', async ({ page }) => {
    await page.goto('/mentions-legales');
    await expect(page).toHaveTitle(/Mentions/);
    await expect(page.locator('h1')).toContainText('Mentions légales');
  });

  test('/ia se charge avec le contenu IA', async ({ page }) => {
    await page.goto('/ia');
    await expect(page).toHaveTitle(/Automatisation/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /diagnostic/i }).first()).toBeVisible();
  });

  test('/data se charge avec le contenu Data', async ({ page }) => {
    await page.goto('/data');
    await expect(page).toHaveTitle(/Tableaux de bord|reporting/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /diagnostic/i }).first()).toBeVisible();
  });

  test('/formation se charge avec les deux sous-sections', async ({ page }) => {
    await page.goto('/formation');
    await expect(page).toHaveTitle(/Formation/i);
    await expect(page.getByText('Accompagnement sur site')).toBeVisible();
    await expect(page.getByText('Ressources gratuites')).toBeVisible();
  });
});
