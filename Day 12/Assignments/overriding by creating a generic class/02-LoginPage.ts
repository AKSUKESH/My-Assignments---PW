import { BasePage } from "./01-BasePage";

class LoginPage extends BasePage {

    // Method Overriding

    performCommonTasks() {
        console.log("Performing Common Tasks in Login Page");
    }

}

const objBasePage = new BasePage();

objBasePage.findElement();
objBasePage.clickElement();
objBasePage.enterText();
objBasePage.performCommonTasks();

console.log("--------------------------------");

// Create LoginPage Object

const objLogin = new LoginPage();

objLogin.findElement();
objLogin.clickElement();
objLogin.enterText();
objLogin.performCommonTasks();