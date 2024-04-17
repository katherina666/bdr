import { test, expect } from '@playwright/test';
import { ShoppingCart } from '../pageObjects/shoppingCart';

let shoppingCart: ShoppingCart

async function goToMenu(page, menuLink: string, menuName: string) {
    await page.getByRole('link', { name: menuLink }).click();
  await expect(page.getByText(menuName, { exact: true }).nth(1)).toBeVisible();
}

async function choseProduct(page, productLink: string, productName: string, size: string) {
    await page.getByRole('link', { name: productLink }).click();
    await expect(page.getByRole('heading', { name: productName })).toBeVisible();
    await page.getByLabel(size, { exact: true }).nth(1).click();
}

test.beforeEach(async ({ page }) => {
    shoppingCart = new ShoppingCart(page)
})

test.afterEach(async () => {
    await shoppingCart.addToCart();
    await shoppingCart.viewCart();
    await shoppingCart.removeFromCart();
})

test('usuń produkt z koszyka', async ({ page }) => {
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
  await goToMenu(page, 'Ambiance Men', 'Men')
  await choseProduct(page, 'Denim Shirt Denim Shirt $', 'Denim Shirt','L')
});