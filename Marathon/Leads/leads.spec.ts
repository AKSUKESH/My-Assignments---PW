import { test, expect } from "@playwright/test";

let url: any;
let token: any;
let id: any;

const lastName = `Tamizh`;
const firstName = "Playwright";
const updatedFirstName = "Thigazh";
const company = "TestLeaf";
const title = "QA Engineer";

test.use({
    storageState: "playwright/.auth/salesforce.json"
});

test.describe.serial("Salesforce Lead UI + API Integration", () => {

    //-----------------------------------------------------
    // Generate Token
    //-----------------------------------------------------

    test("Generate Token", async ({ request }) => {

        const response = await request.post(

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

        const responseBody = await response.json();

        token = responseBody.access_token;

        url = responseBody.instance_url;

        console.log("Access Token :", token);

        console.log("Instance URL :", url);

        expect(response.status()).toBe(200);

        expect(response.statusText()).toBe("OK");

    });

    //-----------------------------------------------------
    // Create Lead
    //-----------------------------------------------------

    test("Create Lead", async ({ request }) => {

        const createLead = await request.post(

            `${url}/services/data/v65.0/sobjects/Lead`,

            {

                headers: {

                    "Authorization": `Bearer ${token}`,

                    "Content-Type": "application/json"

                },

                data: {

                    Salutation: "Mr.",

                    LastName: lastName,

                    Company: company

                }

            }

        );

        const responseBody = await createLead.json();

        id = responseBody.id;

        console.log("Lead Id :", id);

        expect(createLead.status()).toBe(201);

        expect(createLead.statusText()).toBe("Created");

    });

    //-----------------------------------------------------
    // Update Lead
    //-----------------------------------------------------

    test("Update Lead", async ({ request }) => {

        const updateLead = await request.patch(

            `${url}/services/data/v65.0/sobjects/Lead/${id}`,

            {

                headers: {

                    Authorization: `Bearer ${token}`

                },

                data: {

                    FirstName: updatedFirstName,

                    Title: title

                }

            }

        );

        expect(updateLead.status()).toBe(204);

        expect(updateLead.statusText()).toBe("No Content");

    });

    //-----------------------------------------------------
    // Delete Lead using UI
    //-----------------------------------------------------

    test("Delete Lead through UI", async ({ page }) => {

        //-------------------------------------------------

        // Open Salesforce

        //-------------------------------------------------

        await page.goto(

            "https://orgfarm-72f0c7b9bc-dev-ed.develop.lightning.force.com/lightning/page/home"

        );

        console.log("Salesforce Home Page Opened");

        //-------------------------------------------------

        // App Launcher

        //-------------------------------------------------

        await page.getByRole("button", {

            name: "App Launcher"

        }).click();

        console.log("App Launcher Opened");

        await page.getByRole("button", {

            name: "View All Applications"

        }).click();

        console.log("View All Applications Clicked");

        //-------------------------------------------------

        // Leads

        //-------------------------------------------------

        await page.getByRole("combobox", {

            name: "Search apps or items..."

        }).fill("Leads");

await page
    .getByLabel("App Launcher")
    .getByRole("link", { name: "Leads" })
    .click();

        console.log("Leads Page Opened");

        //-------------------------------------------------

        // Search Lead

        //-------------------------------------------------

        await page.getByPlaceholder("Search this list...")

            .fill(lastName);

        await page.keyboard.press("Enter");

        //-------------------------------------------------

        // Verify Lead

        //-------------------------------------------------

        await expect(

            // page.getByText(lastName)
            page.getByText(`${updatedFirstName} ${lastName}`).first()

        ).toBeVisible();

        // await expect(

        //     page.getByText(updatedFirstName)

        // ).toBeVisible();

        console.log("API Created & Updated Lead Verified");

        //-------------------------------------------------

        // Delete Lead

        //-------------------------------------------------

        await page.locator("//table/tbody/tr[1]")

            .getByRole("button")

            .click();

        await page.getByRole("menuitem", {

            name: "Delete"

        }).click();

        await page.getByRole("button", {

            name: "Delete"

        }).click();

        console.log("Lead Deleted");

        //-------------------------------------------------

        // Verify Deletion

        //-------------------------------------------------

// Wait for delete to complete
await expect(
    page.getByText("was deleted")
).toBeVisible({
    timeout: 15000
});

console.log("Lead Deleted Successfully");

// Clear existing search
const searchBox = page.getByPlaceholder("Search this list...");

await searchBox.fill("");

await searchBox.fill(lastName);

await page.keyboard.press("Enter");

// Wait for search results
await page.waitForTimeout(3000);

console.log("Lead Deletion Verified");

    });

});