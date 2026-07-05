import { test, chromium, firefox, expect } from "@playwright/test";

test("Launch Edge and Firefox", async () => {

    // -------------------- Edge Browser --------------------

    const edgeBrowser = await chromium.launch({
        channel: "msedge",
        headless: false
    });

    const edgeContext = await edgeBrowser.newContext();

    const edgePage = await edgeContext.newPage();

    await edgePage.goto("https://www.redbus.in");

    console.log("******** EDGE BROWSER ********");
    console.log("Title : " + await edgePage.title());
    console.log("URL   : " + edgePage.url());

    await expect(edgePage).toHaveURL(/redbus/);

    // -------------------- Firefox Browser --------------------

    const firefoxBrowser = await firefox.launch({
        headless: false
    });

    const firefoxContext = await firefoxBrowser.newContext();

    const firefoxPage = await firefoxContext.newPage();

    await firefoxPage.goto("https://www.flipkart.com");

    console.log("******** FIREFOX BROWSER ********");
    console.log("Title : " + await firefoxPage.title());
    console.log("URL   : " + firefoxPage.url());

    await expect(firefoxPage).toHaveURL(/flipkart/);

    // Wait for demonstration
    await edgePage.waitForTimeout(5000);

    // Close browsers
    await edgeBrowser.close();
    await firefoxBrowser.close();

});