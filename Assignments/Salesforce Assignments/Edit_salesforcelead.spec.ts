import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/salesforce.json'
});

test('Salesforce Edit Lead', async ({ page }) => {

    //=========================================================
    // Test Data
    //=========================================================

    const updatedFirstName = "Subramani";
    const updatedLastName = "Raja";
    const updatedCompany = "Ford";

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
    // Step 5: Open Leads
    //=========================================================

    await page.getByRole('link', { name: 'Leads' }).click();

    console.log("✅ Leads Page Opened");

    //=========================================================
    // Step 6: Open First Lead
    //=========================================================

    // await page.locator("//table/tbody/tr[1]/th//a").click();
    // await page.getByRole('link', { name: 'Kavitha TN' }).click();
    await page.getByRole('link', { name: 'Kavitha TN' }).first().click();

    console.log("✅ Lead Record Opened");

    //=========================================================
    // Step 7: Click Edit
   //=========================================================

    await page.getByRole('button', {
    name: 'Show more actions'
    }).click();

    await page.getByRole('menuitem', {
    name: 'Edit'
    }).click();

    console.log("✅ Edit Window Opened");

    //=========================================================
    // Step 8: Update Salutation
    //=========================================================

    await page.getByRole('combobox', {
    name: 'Salutation'
    }).click();

    await page.getByText("Mr.").click();

    //=========================================================
   // Step 9: Update First Name
   //=========================================================

    await page.getByRole('textbox', {
    name: 'First Name'
    }).fill("Subramani");

    //=========================================================
    // Step 10: Update Last Name
   //=========================================================

    await page.getByRole('textbox', {
    name: 'Last Name'
    }).fill("Raja");

   //=========================================================
   // Step 11: Update Company
   //=========================================================

    await page.getByRole('textbox', {
    name: 'Company'
    }).fill("Ford");

    //=========================================================
    // Step 12: Save
    //=========================================================

    await page.getByRole('button', {
    name: 'Save',
    exact: true
    }).click();

    console.log("✅ Lead Updated Successfully");

    //=========================================================
   // Step 13: Verify Updated Lead
    //=========================================================

    const leadName = page.locator("lightning-formatted-name");

   await expect(leadName).toContainText("Raja");

   console.log("Updated Lead :", await leadName.textContent());

});