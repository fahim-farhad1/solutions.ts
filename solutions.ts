//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];

function filterEvenNumbers(numArray: number[]) {
  let storeEvenNumber: number[] = [];
  for (let i = 0; i < numArray.length; i++)
    if (numArray[i] % 2 === 0) {
      storeEvenNumber.push(numArray[i]);
    }
  return storeEvenNumber;
}

const catchArray: number[] = filterEvenNumbers(numberArray);
console.log(catchArray);
