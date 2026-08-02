import { test, expect } from "@playwright/test";

test("Validate Input Fields using Assertions", async ({ page }) => {

    await page.goto("https://leafground.com/input.xhtml");

    // Disabled textbox
    const disabledTextbox = page.locator('//input[@placeholder="Disabled"]');

    await expect(disabledTextbox).toBeDisabled();

    console.log("Disabled textbox validation passed.");

    // Enabled textbox
    const enabledTextbox = page.locator('//input[@placeholder="Babu Manickam"]');

    await expect(enabledTextbox).toBeEditable();

    await enabledTextbox.fill("Sukesh");

    console.log("Enabled textbox validation passed.");

    // Soft Assertion
    await expect.soft(enabledTextbox).toBeDisabled();

    console.log("Soft assertion executed.");

    await page.waitForTimeout(3000);

});