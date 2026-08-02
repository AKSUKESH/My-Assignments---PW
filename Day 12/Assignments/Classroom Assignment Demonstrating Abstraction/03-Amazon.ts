import { CanaraBank } from "./02-CanaraBank";

class Amazon extends CanaraBank {

    cashOnDelivery() {
        console.log("Cash On Delivery Payment Selected");
    }

    upiPayments() {
        console.log("UPI Payment Successful");
    }

    cardPayments() {
        console.log("Card Payment Successful");
    }

    internetBanking() {
        console.log("Internet Banking Payment Successful");
    }

}

const objAmazon = new Amazon();

objAmazon.cashOnDelivery();
objAmazon.upiPayments();
objAmazon.cardPayments();
objAmazon.internetBanking();
objAmazon.recordPaymentDetails();