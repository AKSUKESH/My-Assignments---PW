import { test, expect } from '@playwright/test';

test("Flipkart Multiple Window Handling", async ({ page, context }) => {

    //=========================================================
    // Step 1: Launch Flipkart
    //=========================================================

    await page.goto("https://www.flipkart.com/");

    console.log("Flipkart Home Page Opened");

    //=========================================================
    // Step 2: Search for Phone
    //=========================================================

    const searchBox = page.getByPlaceholder(
        "Search for Products, Brands and More",
        { exact: true }
    ).first();

    await searchBox.fill("Phone");

    await searchBox.press("Enter");

    console.log("Search Completed");

    //=========================================================
    // Step 3 & 4: Click Product and Capture Child Window
    //=========================================================

    const [childPage] = await Promise.all([

        context.waitForEvent("page"),

        page.getByText("Samsung Galaxy F70e 5G (Limelight Green, 128 GB)", { exact: true }).first().click()

    ]);

    await childPage.waitForLoadState("domcontentloaded");

    console.log("Child Window Opened");

    //=========================================================
    // Step 5: Print Titles
    //=========================================================

    console.log("Parent Page Title :");
    console.log(await page.title());

    console.log("Child Page Title :");
    console.log(await childPage.title());

    //=========================================================
    // Step 6: Print Product Name from Child Page
    //=========================================================

    const productName = childPage.locator("h1");

    await expect(productName).toBeVisible();

    console.log("Product Name :");

    console.log(await productName.textContent());

    //=========================================================
    // Step 7: Bring Parent Page to Front
    //=========================================================

    await page.bringToFront();

    console.log("Parent Page Activated");

    // Continue Navigation

    await page.locator("//span[text()='Electronics']").click();

    console.log("Navigated to Electronics");

    //=========================================================
    // Step 8: Close Child Page
    //=========================================================

    await childPage.close();

    console.log("Child Page Closed");

});