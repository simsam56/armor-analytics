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
    await expect(page.locator('header nav a[href="/services"]')).toBeVisible();
  });

  test('le footer contient les liens et le CTA', async ({ page }) => {
    await page.goto('/');
    const siteFooter = page.locator('footer.bg-breton-navy');
    await expect(siteFooter).toBeVisible();
    await expect(siteFooter).toContainText('Réserver un créneau');
    await expect(siteFooter).toContainText('balise-ia');
  });

  test('/services se charge avec les offres', async ({ page }) => {
    await page.goto('/services');
    await expect(page).toHaveTitle(/Offres/);
    await expect(page.locator('h1')).toContainText('IA');
    await expect(page.getByRole('heading', { name: 'Le Repérage' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Le Cap' }).first()).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Équipage/ }).first()
    ).toBeVisible();
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
    await expect(page).toHaveTitle(/propos/);
    await expect(page.locator('h1')).toContainText('collectif');
  });

  test('/audit-ia se charge avec le quiz', async ({ page }) => {
    await page.goto('/audit-ia');
    await expect(page).toHaveTitle(/Audit/);
    await expect(page.locator('h1')).toContainText('données');
  });

  test('/mentions-legales se charge', async ({ page }) => {
    await page.goto('/mentions-legales');
    await expect(page).toHaveTitle(/Mentions/);
    await expect(page.locator('h1')).toContainText('Mentions légales');
  });
});
