// using VAR 
// const browserName = "Chrome";

// function getBrowserName() {

//     if (browserName === "Chrome") {

//         var browserName = "Edge";

//     }

//     console.log("Inside Function:", browserName);
// }

// getBrowserName();

// console.log("Global Variable:", browserName);


//using let

const browserName = "Chrome";

function getBrowserName() {

    if (browserName === "Chrome") {

        let browserName = "Edge";

        console.log("Inside Block:", browserName);
    }

    console.log("Outside Block:", browserName);
}

getBrowserName();