import { test, expect, Page} from '@playwright/test';

async function goToEvershop(page: Page) {
    await page.goto('https://demo.evershop.io/');
    await expect(page.locator('.logo-icon')).toBeVisible();
}

async function goToMenu(page: Page, menuName: string, headingName: string) {
    await page.getByRole('link', { name: menuName }).click();
    await expect(page.getByRole('heading', { name: headingName })).toBeVisible();
}

async function goToShoeName(page: Page, shoeName: string) {
    await page.locator('a').filter({ hasText: shoeName }).click();
    await expect(page.getByRole('heading', { name: shoeName })).toBeVisible();
}

async function addToCart(page: Page, shoeSize: string, shoeColor: string) {
    await page.getByRole('link', { name: shoeSize, exact: true }).click();
    await page.getByRole('link', { name: shoeColor }).click();
    await page.getByRole('button', { name: 'ADD TO CART' }).click();
    }


test('Dodanie kobiecych butów do koszyka', async ({ page }) => {
  await goToEvershop(page);
  await goToMenu(page, 'Shop women','Women');
  await goToShoeName(page,'Alphaedge 4d reflective shoes')
  await addToCart(page,'M','White')
//   await page.getByRole('link', { name: 'M', exact: true }).click();
//   await page.getByRole('link', { name: 'White' }).click();
//   await page.getByRole('button', { name: 'ADD TO CART' }).click();
});

test('Dodanie męskich butów do koszyka', async ({ page }) => {
    await goToEvershop(page);
    await goToMenu(page, 'Shop men','Men');
    await goToShoeName(page,'Strutter shoes')
    // await page.locator('a').filter({ hasText: 'Strutter shoes' }).click();
    // await expect(page.getByRole('heading', { name: 'Strutter shoes' })).toBeVisible();
    await addToCart(page,'L','Grey')
    // await page.getByRole('link', { name: 'L', exact: true }).click();
    // await page.getByRole('link', { name: 'Grey' }).click();
    // await page.getByRole('button', { name: 'ADD TO CART' }).click();

  });