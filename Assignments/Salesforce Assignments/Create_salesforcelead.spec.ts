import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/salesforce.json'
});

test('Salesforce Create Lead', async ({ page }) => {

    //=========================================================
    // Test Data
    //=========================================================

    const firstName = "Hari";
    const lastName = "Prasad_" + Date.now();
    const companyName = "Flexco";

    //=========================================================
    // Step 1: Open Salesforce Home Page
    //=========================================================

    await page.goto("https://orgfarm-72f0c7b9bc-dev-ed.develop.lightning.force.com/lightning/page/home");

    await expect(
        page.getByRole('button', { name: 'App Launcher' })
    ).toBeVisible();

    console.log("✅ Salesforce Home Page Opened");

    //=========================================================
    // Step 2: Open App Launcher
    //=========================================================

    await page.getByRole('button', { name: 'App Launcher' }).click();

    console.log("✅ App Launcher Opened");

    //=========================================================
    // Step 3: Click View All Applications
    //=========================================================

    await page.getByRole('button', { name: 'View All Applications' }).click();

    await page.waitForTimeout(10000);

    console.log("✅ View All Applications Clicked");

    //=========================================================
    // Step 4: Search and Open Sales App
   //=========================================================

    const searchBox = page.getByRole('combobox', {
    name: 'Search apps or items...'
    });

    await expect(searchBox).toBeVisible();

    await searchBox.fill("Sales");

// Wait for the Sales result to appear
    const salesLink = page.getByRole('link', {
    name: 'Sales',
    exact: true
    });

    await expect(salesLink).toBeVisible({
    timeout: 30000
    });

    await salesLink.click();

    console.log("✅ Sales App Opened");

    //=========================================================
    // Step 5: Navigate to Leads
    //=========================================================

    await page.getByRole('link', { name: 'Leads' }).click();

    console.log("✅ Leads Page Opened");

    //=========================================================
    // Step 6: Click New
    //=========================================================

    await page.getByRole('button', { name: 'New' }).click();

    console.log("✅ New Lead Window Opened");

    //=========================================================
    // Step 7: Select Salutation
    //=========================================================

    await page.getByRole('combobox', { name: 'Salutation' }).click();

    await page.getByText('Mrs.').click();

    //=========================================================
    // Step 8: Enter First Name
    //=========================================================

    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);

    //=========================================================
    // Step 9: Enter Last Name
    //=========================================================

    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

    //=========================================================
    // Step 10: Enter Company Name
    //=========================================================

    await page.getByRole('textbox', { name: 'Company' }).fill(companyName);

    //=========================================================
    // Step 11: Select Lead Status
    //=========================================================

    await page.getByRole('combobox', { name: 'Lead Status' }).click();

    await page
        .getByLabel('New Lead')
        .getByTitle('Open - Not Contacted')
        .click();

    //=========================================================
    // Step 12: Click Save
    //=========================================================

    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    //=========================================================
    // Step 13: Verify Lead Created
    //=========================================================

    const leadName = page.locator("lightning-formatted-name");

    await expect(leadName).toContainText(lastName);

    console.log("Created Lead :", `${firstName} ${lastName}`);

    console.log("✅ Lead Created Successfully");
    console.log("Lead Name :", await leadName.textContent());

});