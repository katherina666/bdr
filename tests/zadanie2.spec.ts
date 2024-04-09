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


test('Dodanie dzięcięcych butów do koszyka', async ({ page }) => {
  await goToEvershop(page);
  await goToMenu(page, 'Shop kids','Kid');
  await goToShoeName(page,'Continental 80 shoes')
  await addToCart(page,'L','Pink')
});
