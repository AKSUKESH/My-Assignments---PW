import { test as setup, expect } from '@playwright/test';

setup('Authenticate Salesforce', async ({ page }) => {

    await page.goto('https://login.salesforce.com');

    await page.locator('#username').fill('sukesh7800.d813d32f042a@agentforce.com');
    await page.locator('#password').fill('Sukikavi@00');

    await page.locator('#Login').click();
    

    // Wait until the App Launcher is visible after login
await expect(
    page.locator("//button[@title='App Launcher']")
).toBeVisible({
    timeout: 120000
});

console.log("Logged into Salesforce");

await page.context().storageState({
    path: "playwright/.auth/salesforce.json"
});

console.log("Authentication Saved Successfully");

});