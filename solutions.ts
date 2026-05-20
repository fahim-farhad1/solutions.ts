//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

// const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];

// function filterEvenNumbers(numArray: number[]) : number[] {
//   let storeEvenNumber: number[] = [];
//   for (let i = 0; i < numArray.length; i++)
//     if (numArray[i] % 2 === 0) {
//       storeEvenNumber.push(numArray[i]);
//     }
//   return storeEvenNumber;
// }

// const catchArray = filterEvenNumbers(numberArray);
// console.log(catchArray);

//Problem 2: Write a function reverseString that takes a string as input and returns the reversed version of that string.
// const inputString: string = "typescript";

// function reverseString(receiveString: string) : string {
//   let reverseString = "";
//   for (let i = receiveString.length - 1; i >= 0; i--) {
//     reverseString = reverseString + receiveString[i];
//   }
//   return reverseString;
// }

// const getReverseString = reverseString(inputString);

// console.log(getReverseString);

// Problem 3: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

function checkType(value: string | number): string {
  if (typeof value == "string") {
    return "String";
  } else return "Number";
}
const catchReturnType = checkType("l");

console.log(catchReturnType);
