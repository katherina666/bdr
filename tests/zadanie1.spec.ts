import { test, expect } from '@playwright/test';

test('zadanie 1', async ({ page }) => {
  await page.goto('https://demo.evershop.io/')
  await page.getByRole('link', { name: 'Men', exact: true }).click()
  await page.locator('a').filter({ hasText: 'Nike air zoom pegasus' }).click()
  await expect(page.locator('h1')).toContainText('Nike air zoom pegasus 35')
});