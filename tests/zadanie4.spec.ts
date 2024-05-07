import { test, expect } from '@playwright/test';
import { MenuPage } from '../pageObjects/menuPage';
import { ProductsPage } from '../pageObjects/productsPage';

let menu: MenuPage
let product: ProductsPage



test.beforeEach(async ({ page }) => {
    menu = new MenuPage(page)
    product = new ProductsPage(page)
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
})

test('kupienie produktu przez użytkownika', async ({ page }) => {
    await menu.goToMenu('Ambiance Men','Men');
    await product.choseProduct('Denim Shirt Denim Shirt $', 'Denim Shirt','L')
    await page.getByRole('button', { name: 'Add To Cart' }).click();
    await page.getByRole('link', { name: 'Checkout' }).click();
    await page.locator('#order_email').fill('kasia@test.pl');
    await page.getByRole('button', { name: 'Continue as a guest' }).click();
    await page.locator('css=#order_bill_address_attributes_firstname').fill('kasia');
    await page.locator('css=#order_bill_address_attributes_lastname').fill('keller');
    await page.locator('css=#order_bill_address_attributes_address1').fill('zbożowa 4');
    await page.locator('css=#order_bill_address_attributes_city').fill('szczecin');
    await page.locator('css=#order_bill_address_attributes_zipcode').fill('66-666');
    await page.locator('css=#order_bill_address_attributes_phone').fill('666666666');
    await page.locator('css=#order_bill_address_attributes_country_id').selectOption('Poland');
    await page.locator('css=#order_bill_address_attributes_state_id').selectOption('Zachodniopomorskie');
    await page.getByText('Order use billing').uncheck();
    await page.locator('css=#order_ship_address_attributes_firstname').fill('paweł');
    await page.locator('css=#order_ship_address_attributes_lastname').fill('gołąbek');
    await page.locator('css=#order_ship_address_attributes_address1').fill('testowa 666');
    await page.locator('css=#order_ship_address_attributes_city').fill('szczecin');
    await page.locator('css=#order_ship_address_attributes_zipcode').fill('66-777');
    await page.locator('css=#order_ship_address_attributes_phone').fill('123456789');
    await page.locator('css=#order_ship_address_attributes_country_id').selectOption('Poland');
    await page.locator('css=#order_ship_address_attributes_state_id').selectOption('Zachodniopomorskie');
    await page.getByRole('button', { name: 'Save and Continue' }).click();
    await page.locator('label').filter({ hasText: 'Express WORLD $' }).locator('span').first().click();
    await page.getByRole('button', { name: 'Save and Continue' }).click();
    await page.locator('label').filter({ hasText: 'Check' }).locator('span').click();
    await page.getByRole('button', { name: 'Save and Continue' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await expect(page.getByRole('heading', { name: 'Order placed successfully' })).toBeVisible();
});