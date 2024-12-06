import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span').click();
});