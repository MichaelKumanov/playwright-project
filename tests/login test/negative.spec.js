import { test, expect } from "@playwright/test";
//
test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page.getByText("Accepted usernames are:")).toBeVisible;
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("locked_out_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible;

  await page.goto("https://www.saucedemo.com/");
  await expect(page.getByText("Accepted usernames are:")).toBeVisible;
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("seeecret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(
    page.getByText(
      "Epic sadface: Username and password do not match any user in this service"
    )
  ).toBeVisible;
});