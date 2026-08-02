import { test } from "@playwright/test";

test("Create a Lead functionality using XPath locator", async ({ page }) => {

    // Navigate to Leaftaps
    await page.goto("https://leaftaps.com/opentaps/control/main");

    // Login
    await page.locator('//input[@id="username"]').fill("democsr2");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();

    // Navigate to Create Lead
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();

    // Fill Mandatory Fields
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("TestLeaf");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Sukesh");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("AK");

    // Select Data Source
    await page.selectOption(
        '//select[@id="createLeadForm_dataSourceId"]',
        { value: "LEAD_DIRECTMAIL" }
    );

    // Select Industry
    await page.selectOption(
        '//select[@id="createLeadForm_industryEnumId"]',
        { value: "IND_AEROSPACE" }
    );

    // Locate all the Industry dropdown options
    const dropdownValues = page.locator(
        '(//select[@id="createLeadForm_industryEnumId"]/option)'
    );

    // Get the total number of options
    const dropdownCount = await dropdownValues.count();

    console.log("Total Industry Options : " + dropdownCount);

    // Print each dropdown value
    for (let index = 1; index <= dropdownCount; index++) {

        console.log(
            await page.locator(
                `(//select[@id="createLeadForm_industryEnumId"]/option)[${index}]`
            ).innerText()
        );

    }

    await page.waitForTimeout(3000);

});