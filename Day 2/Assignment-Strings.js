function reverseString(str) {

    let chars = str.split("");
    let reversed = "";

    for (let i = chars.length - 1; i >= 0; i--) {
        reversed = reversed + chars[i];
    }

    return reversed;
}

function isPalindrome(str) {

    let reversedString = reverseString(str);

    return str === reversedString;
}


let word1 = "madam";
let word2 = "racecar";
let word3 = "hello";

console.log("Original String:", word1);
console.log("Reversed String:", reverseString(word1));
console.log("Palindrome:", isPalindrome(word1));

console.log("----------------");

console.log("Original String:", word2);
console.log("Reversed String:", reverseString(word2));
console.log("Palindrome:", isPalindrome(word2));

console.log("----------------");

console.log("Original String:", word3);
console.log("Reversed String:", reverseString(word3));
console.log("Palindrome:", isPalindrome(word3));