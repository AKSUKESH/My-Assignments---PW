interface PageRules {

    verifyPage(): void;

}

//=====================================================
// Abstract Class
//=====================================================

abstract class BasePage {

    waitForPageLoad(): void {

        console.log("Waiting for page to load");

    }

    getPageTitle(): void {

        console.log("Getting page title");

    }

}

//=====================================================
// Login Page
//=====================================================

class LoginPage extends BasePage implements PageRules {

    verifyPage(): void {

        console.log("Login Page Verified");

    }

    enterUsername(): void {

        console.log("Username Entered");

    }

    enterPassword(): void {

        console.log("Password Entered");

    }

    clickLogin(): void {

        console.log("Login Button Clicked");

    }

}

//=====================================================
// Product Page
//=====================================================

class ProductPage extends BasePage implements PageRules {

    verifyPage(): void {

        console.log("Product Page Verified");

    }

    searchProduct(): void {

        console.log("Product Searched");

    }

    addToCart(): void {

        console.log("Product Added to Cart");

    }

}

//=====================================================
// Execution
//=====================================================

const login = new LoginPage();

login.waitForPageLoad();

login.verifyPage();

login.enterUsername();

login.enterPassword();

login.clickLogin();

login.getPageTitle();