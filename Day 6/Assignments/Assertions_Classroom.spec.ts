import { test, expect } from "@playwright/test";

test("Validate Input Fields using Assertions", async ({ page }) => {

    // Navigate to the page
    await page.goto("https://leafground.com/input.xhtml");

    // Part 2 - Disabled Textbox
    const disabledTextbox = page.locator('//input[@placeholder="Disabled"]');

    await expect(disabledTextbox).toBeDisabled();

    console.log("Disabled textbox validation passed.");

    // Part 3 - Enabled Textbox
    const enabledTextbox = page.locator('//input[@placeholder="Babu Manickam"]');

    await expect(enabledTextbox).toBeEditable();

    await enabledTextbox.fill("Sukesh");

    console.log("Enabled textbox validation passed.");

    // Part 4 - Soft Assertion (Intentionally Fails)
    await expect.soft(enabledTextbox).toBeEnabled();

    console.log("Soft assertion executed.");

    // Part 5 - Fill Data
    const learningTextbox = page.locator('//input[@value="Can you clear me, please?"]');

    await learningTextbox.fill("Playwright Learning");

    console.log("Data entered successfully.");

    await page.waitForTimeout(3000);

});