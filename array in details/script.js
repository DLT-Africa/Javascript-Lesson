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

/************ ARRAY METHOD****************/

/*********************push() ****************/ 
const students = ["Yemi", "Sola", "Grace", "Maryam", "Femi", "Bola"];
    console.log(students);
const pushed = students.push("Babe", "Rofiat", "Rahmat")
console.log(pushed); // 
console.log(students);


/*********************pop() ****************/ 
const numbers = [3, 4, 5, 6, 7 , 8 ,9];
console.log(numbers)

const popped = numbers.pop();
console.log(popped); 
console.log(numbers);


/*********************shift() ****************/ 

const colors = ["Violent", "red", "Blue", "Black"];

console.log(colors)

const rmFirst = colors.shift()
console.log(rmFirst);
console.log(colors);

/*********************unshift() ****************/ 
const months = ["March", "July", "september", "January"];

console.log(months);

const adMonth = months.unshift("Feb");
console.log(adMonth);
console.log(months);


/*********************splice() ****************/ 

const countries = ["Kenya", "Malaysia", "canada", "Qatar", "Nigeria"];
console.log(countries)

// countries.splice(3, 0 , "Eygpt", "Ghana", "Moro")
countries.splice(3, 2, "Eygpt", "Ghana", "Moro")
console.log(countries);

const wears = ["Gucci", "Versace", "D&G", "Nike", "LV"]
console.log(wears);

wears.splice(3)
console.log(wears);


const drinks = ["coke", "viju", "Gin", "Exotic", "Bobo"];
console.log(drinks);

drinks.splice(2, 1 )
console.log(drinks)

/*********************slice() ****************/
const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "HayZ"];
console.log(men) 


const newString = "Naheem"
console.log(newString.length);
const newSlice = newString.slice(2, 5 )
console.log(newSlice);

const BaddestMen = men.slice(2, 5)
console.log(BaddestMen)

const coolestAmong = men.slice(4)

console.log(coolestAmong);


/*********************toString() ****************/

const menSting = men.toString()
console.log(menSting);

const checkMen = men.includes("Abee");
console.log(checkMen)
const checkMen2 = men.includes("Bash");
console.log(checkMen2);


/*********************sort() ****************/
men.sort();
console.log(men);

const alph = ['G', 'F', 'K', 'A', "B", "Z"];
console.log(alph);

alph.sort();
console.log(alph);

const numbs = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4]
console.log(numbs);

numbs.sort((a, b) => a -b);
numbs.sort((a, b) => b -a);
console.log(numbs);


/*********************indexOf() ****************/

const $number = [1, 4, 3, 7, 2, 9, 8, 2, 4, 7, 5, 2]
console.log($number );

const indexOne = $number.indexOf(2);
console.log(indexOne);

const tutor = ["Abdullah","Naheem",  "Anate", "Seyi", "Soliu", "Anate"];
console.log(tutor);
 
const indexTt = tutor.indexOf("Anate")
console.log(indexTt)

const lastIndex = $number.lastIndexOf(7,);
console.log(lastIndex);

/*********************loop() ****************/
const _names = ['Zainab', "Bashirat", "Nafeesah"];

/************ES5****************/ 

//  for(let i =0; i < _names.length; i++) {
//     console.log(i, _names[i]);
//  };


 /************ES6****************/ 

//  for(const _name of _names) {
//     console.log(_name)
//  }
 

/*********************forEach() ****************/

_names.forEach(function() {});
  
_names.forEach((name, i, arr) => {
    console.log(name.toUpperCase());
    // console.log(i);
    // console.log(arr)
});

let _$numbers = [2, 4, 3, 1, 2, 4];

_$numbers.sort()


_$numbers.forEach(function(number, i) {
    console.log(number, i)
});


const mammals = ["Lion", "Cow", "Dog", "Cat"];
mammals.forEach((mammal, i)=> console.log(mammal, i));


// Example 3
let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16];

trans.forEach((tran)=> {
    console.log(totalVal, ( totalVal += tran), tran)
})

console.log(totalVal);


// Example 4
_names.forEach((name) => console.log(`Congratulations ${name} unah dey smoke india helm `))




/*********************map Method ****************/

// Example:1

const inventory = [
    {name:"Rice", price: 4000},
    {name:"Beans", price: 4000},
    {name:"Semo", price: 4000},
    {name:"Yam", price: 4000},
    {name:"Garri", price: 4000}
];


// inventory.map((value, i) =>{
//     console.log(value.name, i)
// })

const price = inventory.map((value)=> {
    return value.price
})

console.log(price)

const commmodities = inventory.map((commodity) => commodity.name)
console.log(commmodities);

let double = [2, 3, 4, 5, 6 , 7]

let double$ = double.map((numb)=> {
    return numb * 2
})
console.log(double$)