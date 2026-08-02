//Concrete that has to be implemented by concete class

export interface SwiggyRules{ // It is 100% abstract / unimplemented methods

    menu():void 
    acceptOrder():void
    prepareFood():void
}


export interface ZomatoRules{ // It is 100% abstract / unimplemented methods

    trackOrder():void 
    cancelOrder():void

}