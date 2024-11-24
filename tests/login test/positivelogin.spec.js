import { test, expect } from "@playwright/test";
//
test.describe.only("PositiveTest", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });
  test("test", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').type("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
  test("test 2", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').type("problem_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
  test("test 3", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page
      .locator('[data-test="username"]')
      .type("performance_glitch_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
  test("test 5", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').type("error_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
  test("test 123", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').type("visual_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
  });
});
