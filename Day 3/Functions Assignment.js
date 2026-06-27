// Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("Sukesh");



// Arrow Function
const double = (number) => {
    return number * 2;
};

console.log(`Double Value: ${double(10)}`);



// Anonymous Function
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);



// Callback Function
function getUserData(callback) {

    setTimeout(function () {
        callback();
    }, 3000);

}

getUserData(function () {
    console.log("Call Back Function");
});