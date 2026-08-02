export class Browser {

    browserName: string = "Chrome";

    browserVersion: string = "138.0";

    openURL() {
        console.log("Browser URL Opened");
    }

    closeBrowser() {
        console.log("Browser Closed");
    }

    navigateBack() {
        console.log("Navigated to Previous Page");
    }

}