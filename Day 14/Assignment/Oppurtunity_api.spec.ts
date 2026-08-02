import { test, expect } from "@playwright/test";

let url: any;
let token: any;
let id: any;
let firstOpportunityId: any;

test.describe.serial("Salesforce Opportunity CRUD using API", async () => {

    /* GENERATE TOKEN */

    test("Generate Token", async ({ request }) => {

        const response = await request.post(
            "https://orgfarm-72f0c7b9bc-dev-ed.develop.my.salesforce.com/services/oauth2/token",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },

                form: {
                    "client_id": "YOUR_CLIENT_ID",
                    "client_secret": "YOUR_CLIENT_Secret",
                    "grant_type": "client_credentials"
                }
            }
        );

        const responseBody = await response.json();

        console.log(responseBody);

        token = responseBody.access_token;
        url = responseBody.instance_url;

        console.log("Access Token :", token);
        console.log("Instance URL :", url);

        console.log(response.status());
        console.log(response.statusText());

        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");

    });


    /* CREATE OPPORTUNITY */

    test("Create Opportunity", async ({ request }) => {

        const createOpportunity = await request.post(
            `${url}/services/data/v65.0/sobjects/Opportunity`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                data: {
                    "Name": "Opportunity Sukesh",
                    "CloseDate": "2025-03-15",
                    "StageName": "Prospecting"
                }
            }
        );

        const responseBody = await createOpportunity.json();

        console.log(responseBody);

        id = responseBody.id;

        console.log("Opportunity Id :", id);

        console.log(createOpportunity.status());
        console.log(createOpportunity.statusText());

        expect(createOpportunity.status()).toBe(201);
        expect(createOpportunity.statusText()).toBe("Created");

    });


    /* UPDATE OPPORTUNITY */

    test("Update Opportunity", async ({ request }) => {

        const updateOpportunity = await request.patch(
            `${url}/services/data/v65.0/sobjects/Opportunity/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },

                data: {
                    "Type": "New Customer",
                    "StageName": "Prospecting"
                }
            }
        );

        console.log(updateOpportunity.status());
        console.log(updateOpportunity.statusText());

        expect(updateOpportunity.status()).toBe(204);
        expect(updateOpportunity.statusText()).toBe("No Content");

    });


    /* GET ALL OPPORTUNITIES */

    test("Get All Opportunities", async ({ request }) => {

        const getOpportunity = await request.get(
            `${url}/services/data/v65.0/query/?q=SELECT+Id,Name,StageName+FROM+Opportunity`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const responseBody = await getOpportunity.json();

        console.log(responseBody);

        console.log("Total Opportunities :", responseBody.totalSize);

        firstOpportunityId = responseBody.records[0].Id;

        console.log("First Opportunity Id :", firstOpportunityId);

        console.log(getOpportunity.status());
        console.log(getOpportunity.statusText());

        expect(getOpportunity.status()).toBe(200);
        expect(getOpportunity.statusText()).toBe("OK");

    });


    /* DELETE FIRST OPPORTUNITY */

    test("Delete Opportunity", async ({ request }) => {

        const deleteOpportunity = await request.delete(
            `${url}/services/data/v65.0/sobjects/Opportunity/${firstOpportunityId}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        console.log(deleteOpportunity.status());
        console.log(deleteOpportunity.statusText());

        expect(deleteOpportunity.status()).toBe(204);
        expect(deleteOpportunity.statusText()).toBe("No Content");

    });

});