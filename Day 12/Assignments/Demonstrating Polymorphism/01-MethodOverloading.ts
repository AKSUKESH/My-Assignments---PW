class Report {

    // Overloaded Method Signatures

    reportStep(msg: string, status: string): void;

    reportStep(msg: string, status: string, snap: boolean): void;

    // Method Implementation

    reportStep(msg: string, status: string, snap?: boolean): void {

        console.log("Message : " + msg);
        console.log("Status : " + status);

        if (snap !== undefined) {
            console.log("Take Snapshot : " + snap);
        }

    }

}

const objReport = new Report();

// Calling Method with Two Arguments

objReport.reportStep("Login Successful", "PASS");

console.log("------------------------------");

// Calling Method with Three Arguments

objReport.reportStep("Payment Successful", "PASS", true);