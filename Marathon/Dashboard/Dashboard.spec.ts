import { test, expect } from "@playwright/test";

let url: any;
let token: any;
let dashboardId: any;

test.use({
    storageState: "playwright/.auth/salesforce.json"
});

test.describe.serial("Salesforce Dashboard UI + API", () => {

    test("Create Dashboard, Delete via API and Verify", async ({ page, request }) => {

        //--------------------------------------------------
        // Test Data
        //--------------------------------------------------

        const dashboardName = "Salesforce Automation by Sukesh Playwright";

        //--------------------------------------------------
        // UI - Open Salesforce
        //--------------------------------------------------

        await page.goto("https://orgfarm-72f0c7b9bc-dev-ed.develop.lightning.force.com/lightning/page/home");

        console.log("Salesforce Home Page Opened");

        //--------------------------------------------------
        // Open App Launcher
        //--------------------------------------------------

        await page.getByRole("button", { name: "App Launcher" }).click();

        await page.getByRole("button", { name: "View All Applications" }).click();

        //--------------------------------------------------
        // Search Dashboard
        //--------------------------------------------------

        await page.getByRole("combobox", {
            name: "Search apps or items..."
        }).fill("Dashboards");

        await page.getByLabel("App Launcher")
            .getByRole("link", { name: "Dashboards" })
            .click();

        console.log("Dashboard Home Opened");

        //--------------------------------------------------
        // Create Dashboard
        //--------------------------------------------------

        await page.getByRole("button", { name: "New Dashboard" }).click();

        let dashboardFrame = page.frameLocator('iframe[name^="sfxdash"]');

        await dashboardFrame
            .getByRole("textbox", { name: "*Name" })
            .fill(dashboardName);

        console.log("Dashboard Name :", dashboardName);

        await dashboardFrame
            .getByRole("button", { name: "Create" })
            .click();

        // Dashboard Builder reloads after Create
        dashboardFrame = page.frameLocator('iframe[name^="sfxdash"]');

        await dashboardFrame
            .getByRole("button", { name: "Save" })
            .click();

        await dashboardFrame
            .getByRole("button", { name: "Done" })
            .click();

        console.log("Dashboard Created Successfully");

        //--------------------------------------------------
        // API - Generate Token
        //--------------------------------------------------

        const tokenResponse = await request.post(
            "https://orgfarm-72f0c7b9bc-dev-ed.develop.my.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },

                form: {
                    client_id: "YOUR_CLIENT_ID",
                    client_secret: "YOUR_CLIENT_SECRET",
                    grant_type: "client_credentials"
                }
            }
        );

        expect(tokenResponse.status()).toBe(200);

        const tokenBody = await tokenResponse.json();

        token = tokenBody.access_token;
        url = tokenBody.instance_url;

        console.log("Token Generated");

        //--------------------------------------------------
        // API - Fetch Dashboard
        //--------------------------------------------------

        const fetchDashboard = await request.get(
            `${url}/services/data/v65.0/query/?q=SELECT+Id,Title+FROM+Dashboard+WHERE+Title='${dashboardName}'`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        expect(fetchDashboard.status()).toBe(200);

        const fetchBody = await fetchDashboard.json();

        expect(fetchBody.records.length).toBeGreaterThan(0);

        dashboardId = fetchBody.records[0].Id;

        console.log("Dashboard ID :", dashboardId);

        //--------------------------------------------------
        // API - Delete Dashboard
        //--------------------------------------------------

        const deleteDashboard = await request.delete(
            `${url}/services/data/v65.0/sobjects/Dashboard/${dashboardId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        expect(deleteDashboard.status()).toBe(204);

        console.log("Dashboard Deleted Successfully");

        //--------------------------------------------------
        // UI Validation
        //--------------------------------------------------

const verifyDashboard = await request.get(
    `${url}/services/data/v65.0/sobjects/Dashboard/${dashboardId}`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
);

expect(verifyDashboard.status()).toBe(404);

console.log("Dashboard deletion verified successfully.");

    });

});