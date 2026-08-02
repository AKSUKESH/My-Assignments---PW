"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.waitForPageLoad = function () {
        console.log("Waiting for page to load");
    };
    BasePage.prototype.getPageTitle = function () {
        console.log("Getting page title");
    };
    return BasePage;
}());
exports.BasePage = BasePage;
