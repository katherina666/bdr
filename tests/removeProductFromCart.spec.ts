import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm
// async function goToMenu(page, menuLink: string, menuName: string) {
//     await page.getByRole('link', { name: menuLink }).click();
//   await expect(page.getByText(menuName, { exact: true }).nth(1)).toBeVisible();
// }

// async function choseProduct(page, productLink: string, productName: string, size: string) {
//     await page.getByRole('link', { name: productLink }).click();
//     await expect(page.getByRole('heading', { name: productName })).toBeVisible();
//     await page.getByLabel(size, { exact: true }).nth(1).click();
// }

async function addToCart(page) {
    await page.getByRole('button', { name: 'Add To Cart' }).click();
    await expect(page.getByText('Added to cart successfully!')).toBeVisible();
}

async function viewCart(page) {
    await page.getByRole('link', { name: 'View cart' }).click();
    await expect(page.getByRole('heading', { name: 'Your shopping cart' })).toBeVisible();
}

async function removeFromCart(page) {
    await page.getByRole('link', { name: 'Remove from cart' }).click();
    await expect(page.getByText('Your cart is empty.')).toBeVisible();
}

test.beforeEach(async ({ page }) => {
    ecomm = new Ecomm(page)
  await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
})

test('usuń produkt z koszyka', async ({ page }) => {
    
  await ecomm.menu().goToMenu('Ambiance Men', 'Men')
  await ecomm.products().choseProduct('Denim Shirt Denim Shirt $', 'Denim Shirt','L')
  await addToCart(page)
  await viewCart(page)
  await removeFromCart(page)
});