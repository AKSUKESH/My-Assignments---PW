import { Restaurant } from "./abstract";


class A2B extends Restaurant{ // LoginPage{}

    prepareFood(){
        console.log("South Indian Veg Food");        
    }

}

class Zaitoon extends Restaurant{

    prepareFood(){
        console.log("Non Veg Food");
        
    }

}

class Domino extends Restaurant{

        prepareFood(){
        console.log("Italian Pizza");
        
    }

}

const obja2b = new A2B()
obja2b.acceptOrder()
obja2b.prepareFood()
obja2b.deliver()
obja2b.payment()

const objzai = new Zaitoon()
objzai.acceptOrder()
objzai.prepareFood()
objzai.deliver()
objzai.payment()


const objdom = new Domino()
objdom.acceptOrder()
objdom.prepareFood()
objdom.deliver()
objdom.payment()