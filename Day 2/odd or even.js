 // Function to check whether a number is Odd or Even

// function isOddOrEven(number) {

//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// // Declare and initialize a variable
// let num = 7;

// // Call the function and print the result
// console.log(num + " is " + isOddOrEven(num));



// Loop from 1 to 10 and check each number
function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i + " is " + isOddOrEven(i));
}