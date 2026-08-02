class APIClient {

    // Overloaded Method Signatures

    sendRequest(endpoint: string): void;

    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

    // Method Implementation

    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {

        console.log("Endpoint : " + endpoint);

        if (requestBody !== undefined && requestStatus !== undefined) {
            console.log("Request Body : " + requestBody);
            console.log("Request Status : " + requestStatus);
        }

    }

}

// Create Object

const objAPI = new APIClient();

// Calling Method with One Argument

objAPI.sendRequest("/login");

console.log("------------------------------");

// Calling Method with Three Arguments

objAPI.sendRequest("/createUser", "{name:'Sukesh'}", true);