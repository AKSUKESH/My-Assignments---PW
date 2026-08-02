"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("./abstract");
var A2B = /** @class */ (function (_super) {
    __extends(A2B, _super);
    function A2B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A2B.prototype.prepareFood = function () {
        console.log("South Indian Veg Food");
    };
    return A2B;
}(abstract_1.Restaurant));
var Zaitoon = /** @class */ (function (_super) {
    __extends(Zaitoon, _super);
    function Zaitoon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zaitoon.prototype.prepareFood = function () {
        console.log("Non Veg Food");
    };
    return Zaitoon;
}(abstract_1.Restaurant));
var Domino = /** @class */ (function (_super) {
    __extends(Domino, _super);
    function Domino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Domino.prototype.prepareFood = function () {
        console.log("Italian Pizza");
    };
    return Domino;
}(abstract_1.Restaurant));
var obja2b = new A2B();
obja2b.acceptOrder();
obja2b.prepareFood();
obja2b.deliver();
obja2b.payment();
var objzai = new Zaitoon();
objzai.acceptOrder();
objzai.prepareFood();
objzai.deliver();
objzai.payment();
var objdom = new Domino();
objdom.acceptOrder();
objdom.prepareFood();
objdom.deliver();
objdom.payment();
