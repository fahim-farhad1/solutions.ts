"use strict";
//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.
Object.defineProperty(exports, "__esModule", { value: true });
// const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];
// function filterEvenNumbers(numArray: number[]) {
//   let storeEvenNumber: number[] = [];
//   for (let i = 0; i < numArray.length; i++)
//     if (numArray[i] % 2 === 0) {
//       storeEvenNumber.push(numArray[i]);
//     }
//   return storeEvenNumber;
// }
// const catchArray: number[] = filterEvenNumbers(numberArray);
// console.log(catchArray);
//Problem 2: Write a function reverseString that takes a string as input and returns the reversed version of that string.
const inputString = "typescript";
function reverseString(receiveString) {
    let reverseString = "";
    for (let i = receiveString.length - 1; i >= 0; i--) {
        reverseString = reverseString + receiveString[i];
    }
    console.log(reverseString);
}
reverseString(inputString);
//# sourceMappingURL=solutions.js.map