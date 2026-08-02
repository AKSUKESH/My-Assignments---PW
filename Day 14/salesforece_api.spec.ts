import { expect, test } from "@playwright/test";


let url: any// declaring url globally so that url is accessible across all the tests
let token: any
let id: any


test.describe.serial("Create Lead Salesforce using API", async () => {



    /* GENERATE TOKEN */
    test("Generate Token", async ({ request }) => {


        //await page.goto("")


        const response = await request.post("https://orgfarm-72f0c7b9bc-dev-ed.develop.my.salesforce.com/services/oauth2/token", // Serilaization


            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "YOUR_CLIENT_ID",
                    "client_secret": "YOUR_CLIENT_SECRET",
                    "grant_type": "client_credentials"                   
                }
            }
        )



        const responseBody = await response.json(); // Deserialization JSON-> Object
        console.log(responseBody);

        token = responseBody.access_token
        console.log(token);


        url = responseBody.instance_url
        console.log(url);


        console.log(response.status()) // 200
        console.log(response.statusText()); //OK


        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK")
        


    })


    /* Create LEAD */


      test("Create Lead", async ({ request }) => {


        const createLeadResponse = await request.post(`${url}/services/data/v65.0/sobjects/Lead`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "Salutation": "Mr.",
                    "FirstName": "Kasi",
                    "LastName": "Viswanathan",
                    "Company": "News 18" // Creating though PLAYWIRGHT API
                }


            }
        )


        const responseBody = await createLeadResponse.json();
        console.log(responseBody);


        id = responseBody.id

        console.log(createLeadResponse.status()) // 200
        console.log(createLeadResponse.statusText()); //OK


        expect(createLeadResponse.status()).toBe(201);
        expect(createLeadResponse.statusText()).toBe("Created")


    })


    test("Fetch the lead Created", async ({ request }) => {


        const fetchResponse = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {


            headers: {
                "Authorization": `Bearer ${token}`
            }
        })


        const responseBody = await fetchResponse.json();


        console.log(responseBody);

        console.log(fetchResponse.status()) // 200
        console.log(fetchResponse.statusText()); //OK


        expect(fetchResponse.status()).toBe(200);
        expect(fetchResponse.statusText()).toBe("OK")
        

    })

    test("Update the lead Created", async ({ request }) => {


        const patchResponse = await request.patch(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {


            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {
                "FirstName": "Kasi Updated"
            }
        })

        console.log(patchResponse.status()) // 200
        console.log(patchResponse.statusText()); //OK


        expect(patchResponse.status()).toBe(204);
        expect(patchResponse.statusText()).toBe("No Content")
        

    })

    test("Delete the lead Created", async ({ request }) => {


        const deleteResponse = await request.delete(`${url}/services/data/v65.0/sobjects/Lead/${id}`, {


            headers: {
                "Authorization": `Bearer ${token}`
            }
        })



        console.log(deleteResponse.status()) // 200
        console.log(deleteResponse.statusText()); //OK


        expect(deleteResponse.status()).toBe(204);
        expect(deleteResponse.statusText()).toBe("No Content")
        


    })

})
