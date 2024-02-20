// Function declaration.

function square(number) {
  //params is passed in the parenthesis
  //statement
}
square(); // funtion call/ invocation

// Function Expression
const nameFunction = function (params) {};

// Arrow Function
const arrowFn = () => {};

function sayHello(name) {
  console.log(`Hello ${name} `);
}
sayHello("Hayzed");

const division = (number) => {
  return number / number;
};

const answer = division(4);
console.log(answer);

const square2 = (number) => {
  return number * number;
};
const square3 = (number) => number * number;

// const notAccepted = name, age => {}

function add(number) {
  return number + number;
}

const sum = add(2);
console.log(sum);

const subtraction = () => {
  let a = 8;
  let b = 4;
  return a - b;
};

const minus = subtraction();
console.log(minus);

// Nested Function
function getScore() {
  const num1 = 2;
  const num2 = 3;
  const name = "DLT Africa";

  function add() {
    return `${name} is ${num1 + num2} years old`;
  }

  return add();
}

console.log(getScore());

const nestedFunction = (a, b, c) => {
  const anotherFunction = () => {
    return `${a + b + c}`;
  };

  return anotherFunction();
};

console.log(nestedFunction(2, 4, 6));


// Declare a function with two parameters, check if the addition of the two params is >= 10, it should return a statement showing 'Sum is greater than or equals to 10', if not - we should have the param1 + param2.

function addNumbers(a , b) {
    return a + b >= 10 ? "Sum is greater than or equals to 10" : a + b;
}

const greater = addNumbers(9, 10);
console.log(greater);

const lesser = addNumbers(3, 4);
console.log(lesser);


// Check for even numbers
const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false;
}

const even = isEven(6);
console.log(even)

const odd = isEven(7);
console.log(odd)

// check for prime number
function isPrime(number) {
    if(number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
        
    }
    return true;
}

const prime = isPrime()
console.log(prime)