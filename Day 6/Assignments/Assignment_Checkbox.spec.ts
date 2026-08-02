import { test, expect } from '@playwright/test';

test('LeafGround Checkbox Assignment', async ({ page }) => {

    // Step 1: Navigate to the page
    await page.goto('https://leafground.com/checkbox.xhtml');

    // Step 2: Click Basic Checkbox
    await page.locator("//h5[text()='Basic Checkbox']/following::div[contains(@class,'ui-chkbox-box')][1]").click();

    // Step 3: Click Notification Checkbox
    await page.locator("//h5[text()='Notification']/following::div[contains(@class,'ui-chkbox-box')][1]").click();

    // Step 4: Verify Notification Message
    let message = page.locator(".ui-growl-message").last();

    await expect(message).toBeVisible();
    console.log("Notification Message :", await message.textContent());

    // Step 5: Select Favorite Languages
    await page.locator("//label[text()='Java']/preceding-sibling::div").click();
    await page.locator("//label[text()='Python']/preceding-sibling::div").click();

    // Step 6: Click Tri-State Checkbox
    await page.locator("//div[contains(@id,'ajaxTriState')]//div[contains(@class,'ui-chkbox-box')]").click();

    // Step 7: Verify Tri-State Message
    message = page.locator(".ui-growl-message").last();

    await expect(message).toBeVisible();
    console.log("Tri-State Message :", await message.textContent());

    // Step 8: Click Toggle Switch
    await page.locator(".ui-toggleswitch-slider").click();

    // Step 9: Verify Toggle Switch Message
    message = page.locator(".ui-growl-message").last();

    await expect(message).toBeVisible();
    console.log("Toggle Message :", await message.textContent());

    // Step 10: Verify Disabled Checkbox
    const disabledCheckbox = page.locator("//h5[contains(text(),'Verify if check box is disabled')]/following::div[contains(@class,'ui-chkbox-box')][1]");

    await expect(disabledCheckbox).toHaveClass(/ui-state-disabled/);

    console.log("Disabled Checkbox Verified");

   // Step 11: Open the Select Multiple dropdown
    await page.locator(".ui-selectcheckboxmenu-trigger").click();

   // Wait for the panel to appear
    await page.locator(".ui-selectcheckboxmenu-panel").waitFor();

    // Step 12: Select multiple cities
    await page.locator("//label[text()='Miami']/preceding-sibling::div").click();
    await page.locator("//label[text()='London']/preceding-sibling::div").click();
    await page.locator("//label[text()='Paris']/preceding-sibling::div").click();

    // Close the dropdown
    await page.keyboard.press("Escape");

    // Step 13: Verify selected cities
    const selectedCities = await page
    .locator(".ui-selectcheckboxmenu-token-label")
    .allTextContents();

    console.log("Selected Cities :", selectedCities);

    expect(selectedCities).toContain("Miami");
    expect(selectedCities).toContain("London");
    expect(selectedCities).toContain("Paris");
});