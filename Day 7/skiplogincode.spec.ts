

import { test } from "@playwright/test";


test.use({storageState:"Data/login_salesforce.json"})

test("Skip Login using the saved storage credentials/json file", async ({ page }) => {

    await page.goto("https://orgfarm-72f0c7b9bc-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home") // 

    await page.locator('//button[@title="App Launcher"]').click(); // home page

    await page.waitForTimeout(3000)

})