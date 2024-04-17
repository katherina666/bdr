import { expect, type Page } from '@playwright/test';

export class ShoppingCart {
    protected page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.getByRole('button', { name: 'Add To Cart' }).click();
        await expect(this.page.getByText('Added to cart successfully!')).toBeVisible();
    }
    
    async viewCart() {
        await this.page.getByRole('link', { name: 'View cart' }).click();
        await expect(this.page.getByRole('heading', { name: 'Your shopping cart' })).toBeVisible();
    }
    
    async removeFromCart() {
        await this.page.getByRole('link', { name: 'Remove from cart' }).click();
        await expect(this.page.getByText('Your cart is empty.')).toBeVisible();
    }

}

