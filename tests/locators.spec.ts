import { test, expect } from '@playwright/test';

test('Lokalizator - getByRole', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    await page.getByRole('link', {name: 'Contact us'}).isVisible();
});

test('Lokalizator - getByText', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    await page.getByText('Best fashion brands').click();
});

test('Lokalizator - getByLabel', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    await page.getByLabel('Show search').click();
});

test('Lokalizator - getByPlaceholder', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com');
    await page.getByRole('link', {name: 'Contact us'}).click();
    await page.getByPlaceholder('Name').fill("test");
});

test('Lokalizator - getByAltText', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com');
    await page.getByAltText('Women').click();
});

test('Lokalizator - getByTitle', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com');
    await page.getByTitle('Fashion Marketplace').first().click();
});

test('Lokalizator - getByTestId', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com');
    await page.getByTestId('testid').click();
});