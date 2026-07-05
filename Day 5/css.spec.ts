import {test} from "@playwright/test"

test('Learn to interact using CSS', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');

  await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com");

  await page.locator('#password').fill("TestLeaf@2025"); 

  await page.locator('[class="button r4 wide primary"]').nth(0).click();

  await page.waitForTimeout(3000)
})
