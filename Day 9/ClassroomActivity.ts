// Create a type alias
type PaymentMethod = "UPI" | "CreditCard" | "PayPal";

// Function that accepts only the above payment methods
function makePayment(method: PaymentMethod): void {
    console.log(`Payment Method Chosen: ${method}`);
}

// Function calls
makePayment("UPI");
makePayment("CreditCard");
