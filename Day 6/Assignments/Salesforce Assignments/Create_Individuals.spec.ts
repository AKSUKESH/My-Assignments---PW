import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/salesforce.json'
});

test('Salesforce Create Individual', async ({ page }) => {

    //=========================================================
    // Test Data
    //=========================================================

    const lastName = "Prasad_" + Date.now();

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

    await page.getByRole('button', {
        name: 'App Launcher'
    }).click();

    console.log("✅ App Launcher Opened");

    //=========================================================
    // Step 3: Click View All Applications
    //=========================================================

    await page.getByRole('button', {
        name: 'View All Applications'
    }).click();

    console.log("✅ View All Applications Clicked");

    //=========================================================
    // Step 4: Search and Open Individuals App
    //=========================================================

    const searchBox = page.getByRole('combobox', {
        name: 'Search apps or items...'
    });

    await searchBox.fill("Individuals");

    const individualsLink = page.getByRole('link', {
        name: 'Individuals'
    });

    await expect(individualsLink).toBeVisible();

    await individualsLink.click();

    console.log("✅ Individuals App Opened");

    //=========================================================
    // Step 5: Open All Individuals List
    //=========================================================

    await page.getByRole('button', {
        name: 'Select a List View:'
    }).click();

    await page.getByText("All Individuals").click();

    console.log("✅ All Individuals Opened");

    //=========================================================
    // Step 6: Click New
    //=========================================================

    await page.getByRole('button', {
        name: 'New'
    }).click();

    console.log("✅ New Individual Window Opened");

    //=========================================================
    // Step 7: Select Salutation
    //=========================================================

    await page.getByRole('button', {
        name: 'Salutation --None--'
    }).click();

    await page.getByRole('option', {
        name: 'Mr.'
    }).click();

    console.log("✅ Salutation Selected");

    //=========================================================
    // Step 8: Enter Last Name
    //=========================================================

    await page.getByRole('textbox', {
        name: 'Last Name *'
    }).fill(lastName);

    console.log("Last Name :", lastName);

    //=========================================================
    // Step 9: Click Save
    //=========================================================

    const saveButton = page.getByRole('button', {
    name: 'Save',
    exact: true
    });

    await saveButton.click();

    // Wait until the New Individual dialog closes
    await expect(saveButton).toBeHidden({
    timeout: 30000
    });

     //=========================================================
    // Step 10: Verify Individual Created
   //=========================================================

    // Verify Save button disappears which indicates save completed
    const createdIndividual = page.getByRole('link', {
    name: lastName
    });

    await expect(createdIndividual).toBeVisible({
    timeout: 30000
    });

    console.log("✅ Individual Created Successfully");
    console.log("Individual Name :", lastName);

});