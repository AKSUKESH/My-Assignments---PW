
/*1. Dynamic in Size
Arrays can grow or shrink in size as element are added

2. Heterogenous in Nature 
Arrays in Js can store different datatypes

*/


// let arrayChar = ["a","b","c","d","e"]

// //1, push() => add elements to the end of the the array
// arrayChar.push("f","g","h")
// console.log(arrayChar);

// /* O/p : 
// [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g', 'h'
// ] */

// //2. pop() => remove an element from the end of the array
// arrayChar.pop()
// console.log(arrayChar);

/* O/P:
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
]
 */


//3. unshift() => add one or more element to the front of the array

// arrayChar.unshift("x","y","z")
// console.log(arrayChar);

/* O/P :
[
  'x', 'y', 'z', 'a',
  'b', 'c', 'd', 'e',
  'f', 'g'
] */


  //4. shift() : remove only one element from the first part of the array

//   arrayChar.shift()
//   console.log(arrayChar);
  
  /* O/P:
  [
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f', 'g'
] */

//5. slice() :extract the part of an array wothout modifying the original array


let arrayChar1 = ["a","b","c","d","e"]

// const resultSlice = arrayChar1.slice(1,4);
// console.log(resultSlice); // ["b","c","d",]

// const resultSlice1 = arrayChar1.slice(-4,4); // -4 => "b" and 4 => "e"
// console.log(resultSlice1); // 


/* Notes for slice in array
1. start index is included and end index id not included and the character just before your last index is taken in consideration.
2.The start index and end index is not swappable which means the start index should be lower than the end index
3. slice will allow negative index 
*/

//6. splice() => add or remove the elments from the array

arrayChar1.splice(1,"x","y","z");
console.log(arrayChar1); // [ 'a', 'x', 'y', 'z', 'e' ]

// arrayChar1.splice(1,2,"x","y","z");
// console.log(arrayChar1); // [ 'a', 'x', 'y', 'z', 'z', 'e' ]


// //7. sort() 

// const sortArray = arrayChar1.sort()
// console.log(sortArray); // [ 'a', 'e', 'x', 'y', 'z', 'z' ]

// let numberArray = [10, 8, 9, 7];
// const sortNumArray = numberArray.sort()
// console.log(sortNumArray);// [ 10, 7, 8, 9 ] // will get sorted usin arrow



