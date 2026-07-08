import { test, expect } from '@playwright/test';

test('LeafGround Radio Assignment', async ({ page }) => {

    // Step 1: Navigate to Radio Page
    await page.goto("https://leafground.com/radio.xhtml");

    // =========================================================
    // Locators
    // =========================================================

    const defaultSelectedRadio = page.locator(".ui-radiobutton-box.ui-state-active").first();

    const chromeRadio = page.locator("//label[text()='Chrome']/preceding-sibling::div").first();
    const chromeRadioBox = chromeRadio.locator(".ui-radiobutton-box");

    const cityRadio = page.locator("//label[text()='Chennai']/preceding-sibling::div").first();
    const cityRadioBox = cityRadio.locator(".ui-radiobutton-box");

    const defaultAgeGroup = page.locator(".ui-radiobutton-box.ui-state-active").last();

    // =========================================================
    // Step 2: Verify Default Selected Radio Button
    // =========================================================

    await expect(defaultSelectedRadio).toBeVisible();

    console.log("✅ Default Radio Button is Selected");

    // =========================================================
    // Step 3: Select Favorite Browser
    // =========================================================

    await chromeRadio.click();

    await expect(chromeRadioBox).toHaveClass(/ui-state-active/);

    console.log("✅ Favorite Browser Selected : Chrome");

    // =========================================================
    // Step 4: Select City
    // =========================================================

    await cityRadio.click();

    await expect(cityRadioBox).toHaveClass(/ui-state-active/);

    console.log("✅ City Selected : Chennai");

    // =========================================================
    // Step 5: Verify Default Age Group
    // =========================================================

    await expect(defaultAgeGroup).toBeVisible();

    console.log("✅ Default Age Group is Selected");

});