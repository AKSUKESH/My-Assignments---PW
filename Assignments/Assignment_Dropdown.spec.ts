import { test, expect } from '@playwright/test';

test('LeafGround Dropdown Assignment', async ({ page }) => {

    // Step 1: Navigate to Select page
    await page.goto("https://leafground.com/select.xhtml");

    // =========================================================
    // Step 2: Select your favorite UI Automation Tool
    // =========================================================

    const toolDropdown = page.locator("//select").first();

    await toolDropdown.selectOption({ label: "Playwright" });

    // =========================================================
    // Step 3: Print all automation tools
    // =========================================================

    const tools = toolDropdown.locator("option");

    const toolCount = await tools.count();

    console.log("Automation Tools");

    for (let i = 1; i < toolCount; i++) {
        console.log(await tools.nth(i).textContent());
    }

    console.log("Total Tools :", toolCount - 1);

    // =========================================================
    // Step 4: Select Country
    // =========================================================

    await page.locator("#j_idt87\\:country").click();
    await page.locator("//li[text()='India']").click();

    // =========================================================
    // Step 5: Verify Cities are loaded
    // =========================================================

    await page.locator("#j_idt87\\:city").click();

    const cities = page.locator("//ul[contains(@id,'city_items')]/li");

    await expect(cities.first()).toBeVisible();

    const cityCount = await cities.count();

    console.log("Cities");

    for (let i = 0; i < cityCount; i++) {
        console.log(await cities.nth(i).textContent());
    }

    await page.locator("//li[text()='Chennai']").click();

// =========================================================
// Step 6: Choose any 3 Courses
// =========================================================

const showOptions = page.getByRole('button', { name: 'Show Options' });

// Selenium WebDriver
await showOptions.click();
await page.locator("li[data-item-value='Selenium WebDriver']").click();

// Playwright
await showOptions.click();
await page.locator("li[data-item-value='Playwright']").click();

// ReactJs (or RestAssured if preferred)
await showOptions.click();
await page.locator("li[data-item-value='ReactJs']").click();

console.log("Selected Courses Successfully");

console.log("Selected Courses Successfully");

    // =========================================================
    // Step 7: Select Language
    // =========================================================

    await page.locator("#j_idt87\\:lang").click();
    await page.locator("//li[text()='English']").click();

    // =========================================================
    // Print Values
    // =========================================================

    await page.locator("#j_idt87\\:value").click();

    const values = page.locator("//ul[contains(@id,'value_items')]/li");

    const valueCount = await values.count();

    console.log("Values");

    for (let i = 0; i < valueCount; i++) {
        console.log(await values.nth(i).textContent());
    }

    // =========================================================
    // Step 8: Select Two
    // =========================================================

    await page.locator("//li[text()='Two']").click();

    const selectedValue = page.locator("#j_idt87\\:value_label");

    await expect(selectedValue).toHaveText("Two");

    console.log("Selected Value :", await selectedValue.textContent());

});