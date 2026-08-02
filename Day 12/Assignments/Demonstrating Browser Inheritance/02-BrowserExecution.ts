import { Browser } from "./01-Browser";

//=========================================
// Chrome Class
//=========================================

class Chrome extends Browser {

    openIncognito() {
        console.log("Chrome Opened in Incognito Mode");
    }

    clearCache() {
        console.log("Chrome Cache Cleared");
    }

}

//=========================================
// Edge Class
//=========================================

class Edge extends Browser {

    takeSnap() {
        console.log("Snapshot Captured");
    }

    clearCookies() {
        console.log("Edge Cookies Cleared");
    }

}

//=========================================
// Safari Class
//=========================================

class Safari extends Browser {

    readerMode() {
        console.log("Reader Mode Enabled");
    }

    fullScreenMode() {
        console.log("Full Screen Mode Enabled");
    }

}

//=========================================
// Chrome Object
//=========================================

const objChrome = new Chrome();

console.log("Browser Name : " + objChrome.browserName);
console.log("Browser Version : " + objChrome.browserVersion);

objChrome.openURL();
objChrome.openIncognito();
objChrome.clearCache();
objChrome.navigateBack();
objChrome.closeBrowser();

console.log("--------------------------------");

//=========================================
// Edge Object
//=========================================

const objEdge = new Edge();

console.log("Browser Name : " + objEdge.browserName);
console.log("Browser Version : " + objEdge.browserVersion);

objEdge.openURL();
objEdge.takeSnap();
objEdge.clearCookies();
objEdge.navigateBack();
objEdge.closeBrowser();

console.log("--------------------------------");

//=========================================
// Safari Object
//=========================================

const objSafari = new Safari();

console.log("Browser Name : " + objSafari.browserName);
console.log("Browser Version : " + objSafari.browserVersion);

objSafari.openURL();
objSafari.readerMode();
objSafari.fullScreenMode();
objSafari.navigateBack();
objSafari.closeBrowser();