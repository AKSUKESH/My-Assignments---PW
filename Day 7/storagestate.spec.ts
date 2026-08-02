
import { test } from "@playwright/test";


test("Learn Playwright Locators getByRole()",async ({page}) => {


    await page.goto("https://login.salesforce.com/?locale=in");

  //  await page.locator("").fill("") // xpath or css locators

    await page.getByRole("textbox",{name:"Username"}).fill("sukesh7800.d813d32f042a@agentforce.com") // playwright locators
   
    await page.getByRole("textbox",{name:"Password"}).fill("Sukikavi@00");

    await page.getByRole("button",{name:"Log In"}).click();

    await page.locator('//button[@title="App Launcher"]').click(); // home page

     await page.waitForTimeout(3000)

     //Save the cookies + localstorage from the the application tab in dev tool --> Local Storage

     await page.context().storageState({path:"Data/login_salesforce.json"})
})