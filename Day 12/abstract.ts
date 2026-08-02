export abstract class Restaurant { // PW Wrapper

    acceptOrder() {
        console.log("Order Accepted");

    }

    payment() {
        console.log("Receive Payment");


    }

    deliver() {
        console.log("Deliver Food");

    }

    abstract prepareFood():void // Unimplemented method
}