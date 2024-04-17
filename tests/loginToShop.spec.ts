import { test, expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage'

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.loginToShop();
})

test.afterEach(async () => {
    await loginPage.signOut();
})

test('logowanie do sklepu', async ({ page }) => {
    // await page.goto('https://spree-multi-vendor-demo.herokuapp.com/');
    // await page.getByLabel('Show user menu').click();
    // await page.getByRole('link', { name: 'LOGIN' }).click();
    // await page.getByPlaceholder('Email').fill(process.env.LOGIN!);
    // await page.getByPlaceholder('Password').fill(process.env.PASSWORD!);
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByText('Logged in successfully').click();
    // await page.getByLabel('Show user menu').click();
    // await page.getByRole('link', { name: 'LOGOUT' }).click();
    // await page.getByText('Signed out successfully.').click();
    await page.locator('#header').getByRole('link', { name: 'Fashion Marketplace' }).click();
    await page.getByRole('link', { name: 'Women Women' }).click();
    await page.getByRole('link', { name: 'Midi Skirt With Bottoms Midi' }).click();
    await expect(page.getByRole('heading', { name: 'Midi Skirt With Bottoms' })).toBeVisible();
    
  });

  