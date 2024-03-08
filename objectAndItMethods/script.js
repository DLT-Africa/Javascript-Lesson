 //OBJECTS

// Objects are used to represent real life datas

// object is an unordered collection of related data in form of key and value pairs 


// const firstName = "Lateef"

// const person = {
//     firstName,
//     surname: "Hayzed",
//     age: 158,
//     children:{
//         firstChild: "Eef",
//         secondChild: "Nafisah"
//     } 
// }

// console.log(person)


// ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT

const human = {
    firstName: 'Abdullah',
    "DLT africa location":"pegamut"
    
}


human.pet = {name:"cobra", age:3}
human.job = "headmaster"
human.favFood = 'Garri'

console.log(human.firstName)
console.log(human.pet.name)
console.log(human["firstName"])
console.log(human['DLT africa location'])



console.log(human)


// OBJECT BUILT IN METHOD

const pet = {
    petName: "dog",
    petSound: () => {
        console.log("Woof! Woof!")
    }
}

pet.petSound()


const dog = {
    name: "fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }

}

dog.listAllProperties()


const myObject = {
    myMethod1: () => {}, // arrow function
    myMethod2: function() {}, // function declearation
};

const animal = {
    name: "fluffy orange",
    age: 10,

    bark: () => {
        console.log("woof woof!")
    }
}

console.log(animal.name);
animal.bark();


//*******************OBJECT METHOD**************************** */
// OBJECT.KEYS()
// OBJECT.VALUE()
// OBJECT.ENTRIES()
// OBJECT.FREZEEZ()
// OBJECT.SEAL()


const employees = {
    boss: "Soliu",
    secretary: "azeez",
    sales: "zainab",
    account: "Bola",
    cleaner: "Ade"
}


// object.keys()
const employeeInfo = Object.keys(employees)
console.log(employeeInfo);


const session = {
    id: 1,
    date: "27-feb-2024",
    device: "Mobile",
    browser: "chrome"
}




// object.value
const sessionValue = Object.values(session)
console.log(sessionValue);



const operatingSystem = {
    name: "Linux",
    version: 18.04,
    license: "Open source"
}


// Object.entries()
const operatingSystemInfo = Object.entries(operatingSystem)
console.log(operatingSystemInfo);


const user = {
    username: "John",
    password: 12345
}


// 

const userInfo = Object.freeze(user)
console.log(userInfo);


userInfo.username = "Soliu"
console.log(userInfo);

const userOne = {
    userName: "John",
    password: 12345
}

const userInfo1 = Object.seal(userOne)
userInfo1.userName = "Az"
userInfo1.age = 32
console.log(userInfo1);


let x
let y

const person = {
    name: "AZ",
    age: 35,
    isAdmin: true,
    address: {
        street: "23 Unity and Peace Estate",
        city: "Ilorin",
        state: "kwara"
    },

    hobbies: ["Music", "Sport"]
}

// accessing an array inside an object

x = person.hobbies[0]
y = person.hobbies[1]
// let y = person["hobbies"][1];
console.log(x, y)

// updating a property

person.name = "Bode"
console.log(person);


// delete a property

delete person.address.state
console.log(person)


// adding a fuunction to an object with only function expression
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}
person.greet();


// value and refrence
// copying primitive value


// copying numbers 
let x1 = 1
let y1 = x1;

x1 = 2
console.log(x1)
console.log(y1);


// copying Strings

let firstPerson = "Mark"
let secondPerson = firstPerson

firstPerson = "Austin";
console.log(firstPerson)
console.log(secondPerson);

// copying complex value

// copying arrays

const animals = ["dogs", "cats"];
const otherAnimals = animals

animals.push("Goat");
console.log(animals === otherAnimals) ;


// copying object

const data = {
    firstName: "Zainab",
    lastName: "Abdullahi"
}

const otherdata = data;
// console.log(data);
console.log(data === otherdata)


// EQUALITY

const person1 = {
    firstName: "Soliu"
}
const otherPerson1 = {
    firstName: "Soliu"
}

console.log(person1 !== otherPerson1) // false

const otherPerson3 = person1
console.log(person1 === otherPerson3); // true




