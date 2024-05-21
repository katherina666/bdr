import { test, expect} from '@playwright/test';

test('wizualne porównanie - zadanie domowe', async ({ page }) => {
    await page.goto('https://spree-multi-vendor-demo.herokuapp.com');
    await page.getByRole('link', { name: 'Contact us' }).click();
    await expect(page).toHaveScreenshot({mask: [page.locator('#contact_us_contact_submit')], maskColor: 'blue'})
  });

  