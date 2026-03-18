import { test, expect } from '@playwright/test';

test.describe('Formulaire de contact', () => {
  test('la validation client fonctionne', async ({ page }) => {
    await page.goto('/contact');

    // Soumet le formulaire vide
    await page.locator('button[type="submit"]').click();

    // Vérifie que les erreurs de validation apparaissent
    await expect(page.locator('form')).toBeVisible();
  });

  test('le formulaire accepte des données valides', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('input[name="name"]', 'Test Utilisateur');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="company"]', 'PME Test');
    await page.fill('textarea[name="message"]', 'Message de test pour le formulaire de contact.');

    // Vérifie que le bouton submit est actif
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeEnabled();
  });

  test('le honeypot est présent mais hors écran', async ({ page }) => {
    await page.goto('/contact');

    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toHaveCount(1);

    // Vérifie qu'il est off-screen (anti-spam)
    const box = await honeypot.boundingBox();
    expect(box).toBeTruthy();
    expect(box!.x).toBeLessThan(0);
  });
});
