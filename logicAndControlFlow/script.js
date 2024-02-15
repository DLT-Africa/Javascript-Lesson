// IF statement
// const age = 18;

// const  bianca = 12

// if ( bianca > age){

//     console.log("You Are granted Admission")
// }else if(bianca === age){
//     console.log("your admission have been postponed to the next year")
// }else{
//     console.log("wait till u are above 18")
// }

// Truthy and Falsy values

//falsy values

// false
// ""
// 0
// null
// undefined
// NaN

// if("6ftu") {
//     console.log('truthy Value')
// }else{
//     console.log("falsy value")
// }

const password = "rapp";
const email = "y";

if (password && email) {
  console.log("Login Approved");
} else if (password || email) {
  console.log("password and email must be provided");
} else {
  console.log("unapproved!!!");
}

// create a good morning message if the time is less than 10:00am.
// if not, but the time is less than 20:00, create a good day message, otherwise good evening.

const time = "Good Morning";

if (!time) {
  console.log("Good afternoon");
} else {
  console.log("Good Morning");
}
// else if (time < 20) {
//     console.log("Good Day")
// } else {
//     console.log("Good evening")
// }

let temperature = 25;

if (temperature > 30) {
  console.log("its a hot day!");
} else {
  console.log("its not too hot today.");
}

let hour = new Date().getHours();

if (hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// let userIput = prompt("Pls enter ur age")

let score = 85;

if (score >= 90) {
  console.log("Excellent! you score an A.");
} else if (score >= 80) {
  console.log("well done! you score a B");
} else if (score >= 70) {
  console.log("Good Job! you score a C");
} else if (score >= 60) {
  console.log("you pass! you score  a D");
} else {
  console.log("sorry you failed. you score an F");
}

// SWITCH STATEMENT

let superHero = "Captain America";

switch (superHero) {
  case "iron Man":
    console.log("i am iron man..");
    break;
  case "Thor":
    console.log("That is my hammer!");
    break;
  case "Captain America":
    console.log("Never give up!");
  // break;
  case "Captain America":
    console.log("One short, one kill.!");
    break;
  default:
    console.log("Enter a valid superHero Name");
}

// console.log(superHero)

let day = new Date().getDay();

console.log(day);

let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;

  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);

let fruit = "Apple";
let message;

switch (fruit) {
  case "Apple":
    message = "Apple are crunchy and delicious";
    break;
  case "banana":
    message = "Banana are sweet and nutritious";
    break;
  case "orange":
    message = "orange are juicy and packed with vitamin C";
    break;
  case "grape":
    message = "Apple are crunchy and delicious";
    break;
  default:
    message = "Sorry we dont have information about that fruit";
}

console.log(message);

// TERNARY OPERATOR
const oldMan = 80;

// if (oldMan >= 80) {
//   console.log("you can drive");
// } else {
//   console.log("you may not drive");
// }

oldMan >= 80 ? console.log("u can drive") : console.log("u may not be drive");


let age = 20;

let canVote = age < 18 ? "YES you can vote!" : "NO you can't vote";
console.log(canVote)


