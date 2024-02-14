// Variables.

// let 
// const

let message = "Hello Eef!";
message = "Hello Zainab!";
message = "Hayzed!"
console.log(message);

const greeting = "Good morning my Neighbor";
console.log(greeting)

const _name$ = "Al Fulaaniy Ileya 🏠";
console.log(_name$);

console.log(message, greeting, _name$)

// 1. Create a variable, call it student name and give it any value that you like, Make sure the value can be re assigned in the future, let's see your result on your console.
//2.  Create 3 variables, the nameing must be a mixture of dollar sign, number and undercore respectively. console.log().

let studentName = "Hayzed";
studentName = "Nafisat"
console.log(studentName);

const _var = "Hello!";
const var$ = "My Neighbour,";
const var_$4 = "How are you doing?";


console.log(_var, var$, var_$4);


// Data type
// String - Number - BigInt - Boolean - Symbol - Null - Undefined - typeOf - NAN ** Object - Array - Date

// String
// Single string - ''
// Double string - ""
// Back ticks - ``

const singleQuote = 'Who am I?';
const doubleQuote = "Who are you?";

console.log(singleQuote);
console.log(doubleQuote);

let name = "Team Lead";
const backTick = `Hello ${name}`;
console.log(backTick);

let newName = 'Toheeb';
let favouriteDrink = 'Bobo';

const details = `My name is ${newName}, and my favorite drink is ${favouriteDrink}`;
console.log(details);

const numberOne = 45;
const numberTwo = 10;

const add = numberOne + numberTwo;
console.log(add)
const sub = numberOne - numberTwo;
console.log(sub)
const div = numberOne / numberTwo;
console.log(div)
const mul = `${numberOne * numberTwo}`;
console.log(mul)

const numberThree = '10';
const numberFour = '14';
console.log(numberThree + numberFour)

console.log(10 + '15');
console.log(10 - '15');

// Boolean - True / False

const isBeautiful = false;
// console.log(typeof isBeautiful)

if (!isBeautiful) {
    console.log("This woman is beautiful")
} else {
    console.log("This wom.. is ugly")
}


// null
let age = null;
console.log(age);


// undefined
let x;
console.log(x);

// Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1.description);