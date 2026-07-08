import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/salesforce.json'
});

test('Salesforce Edit Individual', async ({ page }) => {

    //=========================================================
    // Test Data
    //=========================================================

    const firstName = "Hari";

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
    // Step 4: Search and Open Individuals
    //=========================================================

    const searchBox = page.getByRole('combobox', {
        name: 'Search apps or items...'
    });

    await searchBox.fill("Individuals");

    await page.getByRole('link', {
        name: 'Individuals'
    }).click();

    console.log("✅ Individuals Opened");

    //=========================================================
    // Step 5: Click Actions Dropdown
    //=========================================================

    await page.getByRole('button', {
        name: 'Show Actions'
    }).nth(3).click();

    console.log("✅ Actions Menu Opened");

    //=========================================================
    // Step 6: Click Edit
    //=========================================================

    await page.getByRole('menuitem', {
        name: 'Edit'
    }).click();

    console.log("✅ Edit Window Opened");

    //=========================================================
    // Step 7: Update Salutation
    //=========================================================

    await page.getByRole('button', {
        name: 'Salutation Mr.'
    }).click();

    await page.getByRole('option', {
        name: 'Prof.'
    }).click();

    console.log("✅ Salutation Updated");

    //=========================================================
    // Step 8: Update First Name
    //=========================================================

    await page.getByRole('textbox', {
        name: 'First Name'
    }).fill(firstName);

    console.log("✅ First Name Updated");

    //=========================================================
    // Step 9: Save
    //=========================================================

    await page.getByRole('button', {
        name: 'Save',
        exact: true
    }).click();

    console.log("✅ Record Saved");

    //=========================================================
    // Step 10: Verify First Name Updated
    //=========================================================

    await expect(
    page.getByTitle(`${firstName} Prasad`).first()
    ).toBeVisible();

    console.log("✅ Individual Updated Successfully");
    console.log("Updated First Name :", firstName);

});