//Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];
// const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];

function filterEvenNumbers(numArray: number[]): number[] {

  let storeEvenNumber: number[] = [];

  for (let i = 0; i < numArray.length; i++) {

    const currentNumber = numArray[i];

    if (currentNumber !== undefined && currentNumber % 2 === 0) {

      storeEvenNumber.push(currentNumber);
    }
  }

  return storeEvenNumber;
}

const catchArray = filterEvenNumbers(numberArray);

console.log(catchArray);

// //Problem 2: Write a function reverseString that takes a string as input and returns the reversed version of that string.

const inputString: string = "typescript";

function reverseString(receiveString: string) : string {
  let reverseString = "";
  for (let i = receiveString.length - 1; i >= 0; i--) {
    reverseString = reverseString + receiveString[i];
  }
  return reverseString;
}

const getReverseString = reverseString(inputString);

console.log(getReverseString);

// Problem 3: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

function checkType(value: string | number): string {
  if (typeof value == "string") {
    return "String";
  }
  else return "Number";
}
const catchReturnType = checkType("l");

console.log(catchReturnType);

// Problem 4: Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

type User = {
  id: number;
  name: string;
  age: number;
};
const user: User = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T>(Obj: T, value: keyof T) => {
  return Obj[value];
};

const get = getProperty(user, "name");

console.log(`"${get}"`);

// Problem: 5 Define an interface Book with properties title, author, and publishedYear.
// Create a function toggleReadStatus that accepts a Book object and returns a new object
// with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (book: Book) => {
  return { ...book, isRead: true };
};

const getValue = toggleReadStatus(myBook);
console.log(getValue);

// Problem 6: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property.
// Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

class Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

class Student extends Person {
  grade: string;
  constructor(grade: string, n: string, a: number) {
    super(n, a);
    this.grade = grade;
  }

  getDetails = () => {
    return `Name:${this.name} Age:${this.age} Grade:${this.grade}`
  };
}

const student1 = new Student('A',"Fahim Farhad", 2);

console.log(student1.getDetails())



// Problem 7: Create a function getIntersection that takes two arrays of numbers and returns a 
// new array containing only the elements that are present in both arrays.

const getIntersection = (ar1: number[], ar2: number[]) =>{

  const res = ar1.filter((num) => ar2.includes(num))

  return res
}

const result = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

console.log(result)
