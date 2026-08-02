import { SwiggyRules, ZomatoRules } from "./interface";

//Concerete Class

class A2B implements SwiggyRules,ZomatoRules{
 
    menu(): void {
        console.log("Display Menu");
        
    }
    acceptOrder(): void {
       console.log("Accept Order");
       
    }
    prepareFood(): void {
        console.log("Food Preparation");
        
        
    }

       trackOrder(): void {
        console.log("Tracking Information");
        
    }
    cancelOrder(): void {
        console.log("Accept Cancelation");
        
    }
    
}

const a2b = new A2B();
a2b.acceptOrder()
a2b.prepareFood()