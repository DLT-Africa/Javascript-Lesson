const cohorts = [
  "Soliu",
  "Zainab",
  "Azeez",
  "Nafisat",
  "sir Kenny",
  "Baba Oloye",
  "Abdul Lateef",

];
console.log(cohorts);


const change = (cohorts[1] = "Bash");

cohorts[7] = "Tolu"
// push method
const students = ["Yemi", "Sola", "Grace", "Maryam", "Femi", "Bola"];
    console.log(students);
const pushed = students.push("Babe", "Rofiat", "Rahmat")
console.log(pushed); // 
console.log(students);


// pop method
const numbers = [3, 4, 5, 6, 7 , 8 ,9];
console.log(numbers)

const popped = numbers.pop();
console.log(popped); 
console.log(numbers);

// 

    // ES5
for (let i = 0; i < cohorts.length; i++) {
    console.log(i, cohorts[i])
}

// ES6

for(const ES6 of cohorts) {
    console.log(ES6);
};

const nested = [[1,2], [3,4], [5,6]]
const newArr = nested[0];


console.log(newArr);

const object = {
    name : "John",
    age : 60
}

console.log(object)


const arr = [
    "Banana",
    10000,
    // {
    //     name : "Bala blu",
    //     age : 80,
    // },

    // function name () {
    //     alert("Boooooooooooooooooooooooooo😊")
    // }
]

console.log(typeof arr);