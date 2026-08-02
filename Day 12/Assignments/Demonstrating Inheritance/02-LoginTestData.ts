import { TestData } from "./01-TestData";

class LoginTestData extends TestData {

    enterUsername() {
        console.log("Username Entered");
    }

    enterPassword() {
        console.log("Password Entered");
    }

}

const objTestData = new TestData();

objTestData.enterCredentials();
objTestData.navigateToHomePage();

console.log("-----------------------------");

const objLogin = new LoginTestData();

objLogin.enterCredentials();
objLogin.enterUsername();
objLogin.enterPassword();
objLogin.navigateToHomePage();