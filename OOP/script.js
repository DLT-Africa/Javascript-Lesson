// OOP --> Object Oriented Programming.

// Object Literal
let person = {
  first_name: "Salman",
  last_name: "Kofoshi",

  getFunction: function () {
    //method --> a prperty whose value is a function
    return `My name is ${person.first_name} ${person.last_name}`;
  },

  phoneNumber: {
    mobile: "12345",
    landline: "6789",
  },
};

console.log(person.getFunction());
console.log(person.phoneNumber.landline);

// Object constructor.
function PersonTwo(first_name, last_name) {
  (this.first_name = first_name), (this.last_name = last_name);
}

let person1 = new PersonTwo("Hayzed", "Mabululu");
let person2 = new PersonTwo("Zainab", "Muritala");
console.log(person1);
console.log(person2);

// The NEW keyword
const student = {}; //simple object

const studentTwo = new Object();
// studentTwo.first_name = "Baba Oloye"

console.log(studentTwo);

const arr = [1, 2, 3];
const newArr = new Array(1, 2, 3);

console.log(arr, newArr);

// Date
const myBaiday = new Date();
console.log(myBaiday);

const myNumber = new Number(100.0);
console.log(myNumber.toFixed(0));

console.log(Object);
// console.log(Number)
// console.log(Array)
// console.log(Date)

// This keyword
function Sentence(words) {
  //constructor function syntax
  this.words = words;
  console.log(this);
}

const $_ = new Sentence(`Hello there! We're learning about this keyword`);

function Car(color, brand, wheels, id) {
  this.color = color;
  this.brand = brand;
  this.wheels = wheels;
  this.id = id;

  console.log(this);
}

const blueCar = new Car("Blue", "BMW", 4, "🚓");
const redCar = new Car("Red", "Ferrari", 4, "🏎️");

// create a cohort function with params (name, age, favFood, phoneNo, baiday), create new instances for three different cohorts, log the param argument onto the console --> baiday should be a new date instance. 10minutes.

function Cohort(name, age, favFood, phoneNo, baiday) {
  this.name = name;
  this.age = age;
  this.favFood = favFood;
  this.phoneNo = phoneNo;
  this.baiday = baiday;

  console.log(this);
}

const one = new Cohort(
  "Azeez Raheem",
  24,
  "Biscuit",
  8123456,
  new Date("17 July, 2001")
);
const two = new Cohort(
  "Tunmise Majek",
  34,
  "Rice and OKra",
  812345678,
  new Date("17 July, 2010")
);
const three = new Cohort(
  "Nafisat Hussein",
  27,
  "Garri and fried egg",
  8123456789,
  new Date("17 July, 2007")
);

// Class keyword.
// class declaration.
class Shape1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    console.log(this);
  }
}

const area = new Shape1(10, 2);

// class expression
// i --> anonymous
const Shape = class{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    
        console.log(this);
      }
} 

const area1 = new Shape1(10, 2);

// ii --> unanonymous
const BigBoy = class Bigie {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    
      }

    //   getter function
      get him() {
        return this.coder();
      }

    //   method
    coder() {
        return {name: this.name, age: this.age}
    }
} 

const instance = new BigBoy("Paiko", 40)
console.log(instance.him)

const School = class Academy {
    constructor(name, location) {
        this.name = name;
        this.location = location
    }

    get principal() {
        return this.seniorBoy()
    }

    seniorBoy() {
        return {name: this.name, location: this.location}
    }
}

const headMaster = new School("Hayzed", "PEGAMUT");
console.log(headMaster.principal)

// with an unanomymous class function named RectShape, create a constructor with params of length and breath, get the area of a rectangle using getter function and calculate method, create a new instance for the RectShape with its relative argument... answer to the console.

const RectShape = class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    get area() { //getter function
        return this.calc()
    }

    calc() { //method
        return this.length * this.breadth
    }
}

const square = new RectShape(10, 10)
console.log(square.area);

// Difference between const and class
// const detailOne = {
//     name: "Class Captain",
//     age: 540,
//     isBlack: false
// }
// const detailTwo = {
//     name: "Baba Oloye",
//     age: 640,
//     isBlack: true
// }

// const getDetailOne = new detailOne()
// console.log(getDetailOne)


class Detail {
    constructor(name, age, isPretty) {
        this.name = name;
        this.age = age;
        this.isPretty = isPretty;
    }
}

const detailOne = new Detail("Bash", 12, false);
const detailTwo = new Detail("Nafi", 10, false);
const detailThree = new Detail("Zainabu", 2, false);

const array = [detailOne, detailTwo]
array.push(detailThree)
array.shift(detailOne)
console.log(array)

const createPerson = (name, age, isHands) => {
    // const userSchema = {
    //     name, age, isHands
    // }

    // return userSchema

    return {name, age, isHands}
}

const personCreated = createPerson("Bode", 45, true)
const personCreated2 = createPerson("Soliu", 450, true)
console.log(personCreated)
console.log(personCreated2)


// INHERITANCE
class Animal {
    alive = true;
    
    isBeautiful = 'This animal is beautiful';

    eat() {
        console.log(`This ${this.name} can eat`)
    }

    sleep() {
        console.log(`This ${this.name} can sleep`)
    }
}

class Rabbit extends Animal {
    name = "Rabbit"

    run() {
        console.log(`This ${this.name} can run`)
    }
}

class Goat extends Animal{
    name = "goat"
}
const rabbit = new Rabbit()
rabbit.eat()
console.log(rabbit)

const goat = new Goat()
goat.eat();
console.log(goat.isBeautiful)