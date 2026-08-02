

import { test } from "@playwright/test";

test.use({ storageState: "Data/login_salesforce.json" })

test("Learn Playwright Locators getByRole()", async ({ page }) => {


    // await page.goto("https://login.salesforce.com/?locale=in");

    // const imageVisibile = await page.getByAltText("Salesforce login").isVisible();

    // console.log(imageVisibile);
    

    // //  await page.locator("").fill("") // xpath or css locators

    // await page.getByRole("textbox", { name: "Username" }).fill("ravindran.ramdas@testleaf.com") // playwright locators

    // //  await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com"); // looks for the label tag

    // // await page.getByText("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com")// text based xpath

    // await page.getByRole("textbox", { name: "Password" }).fill("Ravi@testleaf#123");

    // await page.getByRole("button", { name: "Log In" }).click();

      await page.goto("https://orgfarm-72f0c7b9bc-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home") // 

     //await page.locator('//button[@title="App Launcher"]').click(); // home page

    await page.getByTitle("App Launcher",{exact:true}).click() // title attribute in DOM

    await page.getByRole("button",{name:"View All Applications"}).click(); 

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads") // placegholder attribute in DOM

    //  


    await page.waitForTimeout(3000)
})