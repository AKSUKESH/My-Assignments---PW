import { test, expect } from "@playwright/test";

test("Create Lead using XPath", async ({ page }) => {

    // Navigate to the application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Login
    await page.locator("//input[@id='username']").fill("Demosalesmanager");
    await page.locator("//input[@id='password']").fill("crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();

    // CRM/SFA
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    // Leads
    await page.locator("//a[text()='Leads']").click();

    // Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    // Company Name
    await page.locator("//input[@id='createLeadForm_companyName']").fill("TestLeaf");

    // First Name
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Sukesh");

    // Last Name
    await page.locator("//input[@id='createLeadForm_lastName']").fill("AK");

    // Source
      await page.selectOption("//select[@id='createLeadForm_dataSourceId']",{value: 'LEAD_DIRECTMAIL'});

    // Salutation
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mr");

    // Title
    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("QA Engineer");

    // Annual Revenue
    await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("100000");

    // Department
    await page.locator("//input[@id='createLeadForm_departmentName']").fill("Testing");

    // Phone Number
    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9876543210");

    // Preferred Currency
    await page.locator("//select[@id='createLeadForm_currencyUomId']")
              .selectOption({ label: "INR - Indian Rupee" });

    // Preferred Country
    await page.locator("//select[@id='createLeadForm_generalCountryGeoId']")
              .selectOption({ label: "India" });

    // Create Lead
    await page.locator("//input[@class='smallSubmit']").click();

    // Print Page Title
    console.log("Page Title : " + await page.title());

    // Verify Title
    await expect(page).toHaveTitle(/View Lead/);

});