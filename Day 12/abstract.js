"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant() {
    }
    Restaurant.prototype.acceptOrder = function () {
        console.log("Order Accepted");
    };
    Restaurant.prototype.payment = function () {
        console.log("Receive Payment");
    };
    Restaurant.prototype.deliver = function () {
        console.log("Deliver Food");
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
