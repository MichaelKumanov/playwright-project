import { test, expect } from "@playwright/test";

test.describe("Negative Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("test1", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("locked_out_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Sorry, this user has been locked out."
      )
    ).toBeVisible();
  });
  //username correct + password correct

  test("test 2", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("seeecret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });
  //username correct + password incorrect

  test("test 3", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standaard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });
  //username incorrect + password correct

  test("test 4", async ({ page }) => {
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standaard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("seeecret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });
  //username incorrect + password incorrect

  test("test 5", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(" ");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });
  //username empty + password correct

  test("test 6", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(" ");
    await page.locator('[data-test="login-button"]').click();
    await expect(
      page.getByText(
        "Epic sadface: Username and password do not match any user in this service"
      )
    ).toBeVisible();
  });
  //username correct + password empty

  test("test 7", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByText("Accepted usernames are:")).toBeVisible();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("");
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click();
    await expect(page.locator('div').filter({ hasText: /^Epic sadface: Username is required$/ })).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
//username empty + password empty
