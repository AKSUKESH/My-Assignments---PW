import { test, expect } from '@playwright/test';

test('W3Schools Alert Assignment', async ({ page }) => {

    //=========================================================
    // Step 1: Navigate to W3Schools Page
    //=========================================================

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    console.log("W3Schools Page Opened");

    //=========================================================
    // Step 2: Register Alert Event Listener
    //=========================================================

    page.on("dialog", async dialog => {

        console.log("Alert Message :", dialog.message());

        console.log("Alert Type :", dialog.type());

        await dialog.accept();

        console.log("Alert Accepted");

    });

    
    // Step 3: Switch to Frame and Click Try it
    

    const frame = page.frameLocator("#iframeResult");

    await frame.getByRole("button", { name: "Try it" }).click();

    
    // Step 4: Assert the Text After Handling the Alert
    

    const result = frame.locator("#demo");

    await expect(result).toHaveText("You pressed OK!");

    console.log("Result :", await result.textContent());

    console.log("Text Verified Successfully");

});