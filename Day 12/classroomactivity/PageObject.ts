import { BasePage } from "./BasePage";
import { PageRules } from "./PageRules";

class LoginPage extends BasePage implements PageRules {

    verifyPage() {
        console.log("Login Page Verified");
    }

    enterUsername() {
        console.log("Username Entered");
    }

    enterPassword() {
        console.log("Password Entered");
    }

    clickLogin() {
        console.log("Login Button Clicked");
    }

}

class ProductPage extends BasePage implements PageRules {

    verifyPage() {
        console.log("Product Page Verified");
    }

    searchProduct() {
        console.log("Product Searched");
    }

    addToCart() {
        console.log("Product Added to Cart");
    }

}

const objLogin = new LoginPage();

objLogin.waitForPageLoad();
objLogin.verifyPage();
objLogin.enterUsername();
objLogin.enterPassword();
objLogin.clickLogin();
objLogin.getPageTitle();