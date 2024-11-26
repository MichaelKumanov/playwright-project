import { test, expect } from "@playwright/test";
//
test.describe("PositiveTest", () => {
  test("Buying process", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="password"]').press("Enter");
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page
      .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await expect(page.locator('[data-test="title"]')).toHaveText("Your Cart");
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      "2"
    );
    const cart_list = page.locator('[data-test="cart-list"]');
    const cart_items = cart_list.locator('//div[@class="cart_item"]');
    await expect(cart_items).toHaveCount(2);
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await expect(page.locator('[data-test="secondary-header"]')).toHaveText(
      "Checkout: Your Information"
    );
    await page.locator('[data-test="firstName"]').fill("michael");
    await page.locator('[data-test="lastName"]').fill("kumanov");
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill("356456");
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await expect(page.locator('[data-test="secondary-header"]')).toHaveText(
      "Checkout: Overview"
    );
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await expect(page.locator('[data-test="secondary-header"]')).toHaveText(
      "Checkout: Complete!"
    );
    await expect(page.locator('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!"
    );
    await expect(page.locator('[data-test="complete-text"]')).toHaveText(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
