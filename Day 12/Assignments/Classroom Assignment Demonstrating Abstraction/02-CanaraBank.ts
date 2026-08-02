import { Payments } from "./01-Payments";

export abstract class CanaraBank implements Payments {

    recordPaymentDetails() {
        console.log("Payment Details Recorded");
    }

    abstract cashOnDelivery(): void;

    abstract upiPayments(): void;

    abstract cardPayments(): void;

    abstract internetBanking(): void;

}