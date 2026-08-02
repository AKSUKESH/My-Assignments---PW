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
//=====================================================
// Abstract Class
//=====================================================
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
//=====================================================
// Login Page
//=====================================================
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.verifyPage = function () {
        console.log("Login Page Verified");
    };
    LoginPage.prototype.enterUsername = function () {
        console.log("Username Entered");
    };
    LoginPage.prototype.enterPassword = function () {
        console.log("Password Entered");
    };
    LoginPage.prototype.clickLogin = function () {
        console.log("Login Button Clicked");
    };
    return LoginPage;
}(BasePage));
//=====================================================
// Product Page
//=====================================================
var ProductPage = /** @class */ (function (_super) {
    __extends(ProductPage, _super);
    function ProductPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductPage.prototype.verifyPage = function () {
        console.log("Product Page Verified");
    };
    ProductPage.prototype.searchProduct = function () {
        console.log("Product Searched");
    };
    ProductPage.prototype.addToCart = function () {
        console.log("Product Added to Cart");
    };
    return ProductPage;
}(BasePage));
//=====================================================
// Execution
//=====================================================
var login = new LoginPage();
login.waitForPageLoad();
login.verifyPage();
login.enterUsername();
login.enterPassword();
login.clickLogin();
login.getPageTitle();
