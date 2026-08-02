import { test, expect } from "@playwright/test";
import { leadData } from "../../Data/leadData";

test("Create Lead using Data Parameterization", async ({ page }) => {

    // Step 1: Navigate to Leaftaps

    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Step 2: Enter Username

    await page.locator("#username").fill("DemoSalesManager");

    // Step 3: Enter Password

    await page.locator("#password").fill("crmsfa");

    // Step 4: Click Login

    await page.locator(".decorativeSubmit").click();

    // Step 5: Click CRM/SFA

    await page.getByRole("link", { name: "CRM/SFA" }).click();

    // Step 6: Click Leads

    await page.getByRole("link", { name: "Leads" }).click();

    // Step 7: Click Create Lead

    await page.getByRole("link", { name: "Create Lead" }).click();

    // Step 8: Fill Mandatory Fields

    await page.locator("#createLeadForm_companyName").fill(leadData.companyName);

    await page.locator("#createLeadForm_firstName").fill(leadData.firstName);

    await page.locator("#createLeadForm_lastName").fill(leadData.lastName);

    // Step 9: Select Source using Label

    await page.locator("#createLeadForm_dataSourceId")
        .selectOption({ label: "Direct Mail" });

    // Step 10: Select Marketing Campaign using Value

    const marketingCampaign = page.locator("#createLeadForm_marketingCampaignId");

    await marketingCampaign.selectOption({ value: "DEMO_MKTG_CAMP" });

    const marketingOptions =
        await marketingCampaign.locator("option").allTextContents();

    console.log("Marketing Campaign Count : ", marketingOptions.length);

    console.log("Marketing Campaign Values");

    marketingOptions.forEach(option => console.log(option));

    // Step 11: Select Industry using Index

    await page.locator("#createLeadForm_industryEnumId")
        .selectOption({ index: 3 });

    // Step 12: Select Preferred Currency

    await page.locator("#createLeadForm_currencyUomId")
        .selectOption({ label: "INR - Indian Rupee" });

    // Step 13: Select Country

    await page.locator("#createLeadForm_generalCountryGeoId")
        .selectOption({ label: "India" });

    // Step 14: Select State

    await page.locator("#createLeadForm_generalStateProvinceGeoId")
        .selectOption({ label: "TAMILNADU" });

    // Step 15: Print State Count and Values

    const stateDropdown =
        page.locator("#createLeadForm_generalStateProvinceGeoId");

    const states =
        await stateDropdown.locator("option").allTextContents();

    console.log("State Count : ", states.length);

    console.log("States");

    states.forEach(state => console.log(state));

    // Step 16: Click Create Lead

    await page.locator(".smallSubmit").click();

});