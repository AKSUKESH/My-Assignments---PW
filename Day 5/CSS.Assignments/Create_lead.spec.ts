import { test, expect } from "@playwright/test";

test("Create Lead", async ({ page }) => {

    // Navigate to the application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Login
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    // CRM/SFA
    await page.locator("text=CRM/SFA").click();

    // Leads
    await page.getByText("Leads", { exact: true }).click();

    // Create Lead
    await page.locator("a[href='/crmsfa/control/createLeadForm']").click();

    // Fill Lead Details
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");
    await page.locator("#createLeadForm_firstName").fill("Sukesh");
    await page.locator("#createLeadForm_lastName").fill("AK");
    await page.locator("#createLeadForm_personalTitle").fill("Mr");
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer");
    await page.locator("#createLeadForm_annualRevenue").fill("100000");
    await page.locator("#createLeadForm_departmentName").fill("Testing");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");

    // Preferred Currency - Select INR
    await page.locator("#createLeadForm_currencyUomId")
              .selectOption({ label: "INR - Indian Rupee" });

    // Preferred Country - Select India
    await page.locator("#createLeadForm_generalCountryGeoId")
              .selectOption({ label: "India" });

    // Create Lead
    await page.locator(".smallSubmit").click();

    // Print the page title
    console.log(await page.title());

    // Verify title
    await expect(page).toHaveTitle(/View Lead/);

});