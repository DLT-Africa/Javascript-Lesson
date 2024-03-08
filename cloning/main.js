console.log("Hello world");


const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}

const otherPerson = person;

person.firstName = "Makalele";
 
console.log(person);
console.log(otherPerson);


console.log(person === otherPerson);


// SHALLOW CLONING
// spread OPerator (...)

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(...numbers);

// const newNumber = [...numbers];
// console.log(newNumber);


//To Get the equality

const numbers = [1, 2, 3, 4, 5, 6];
const copiedNumber = numbers;
const newNumber = [...numbers];
const numbers$ = numbers.slice(2, 4)

numbers.push(8);

console.log(numbers);
console.log(copiedNumber);
console.log(newNumber);
console.log(numbers$)
console.log(numbers === copiedNumber); //true
console.log(numbers === newNumber); // false



const originalNaf = {
    name: "Naf",
    age: 22,
    hobbies: ["Trouble", "Reading"]
}

let deepClon = JSON.parse(JSON.stringify(originalNaf))

deepClon .hobbies.push('Cooking');
console.log(originalNaf)
console.log(deepClon  )

//Object Cloning

// sample 1
const personDetails = {
    name: "Zainab",
    age: 40
}

const changeDetails = {...personDetails}

personDetails.name = "Soliu"

console.log(personDetails);

console.log(changeDetails);

// sample 1

// const originalObj = {
//     name: "Bash",
//     age: 20,
//     address: {
//         city: "Pegamut",
//         state: "Ogun"
//     }
// };

// const cloneObj = Object.assign({}, originalObj);

// cloneObj.name = "Naphy";
// cloneObj.address.city = "Elejigbo"

// console.log("Original Obj", originalObj);
// console.log("clone Obj", cloneObj);


//Spreading oprator
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];
const arr3 = [8, 9]

const merged = [...arr1, ...arr2, ...arr3];

console.log(merged);



// Sample4

const text = {name: "Bode"};
const numbs = [1, 2, 3, 4];

let cloneMerged = {...text, data:[ ...numbs]};
//{name: "soliu", [1, 2, 3, 4]}

cloneMerged.name= "Hayzed";
cloneMerged.data.push(5);

console.log(text);
console.log(numbs)
console.log(cloneMerged);


//DEEP CLONING

// const details =  {
//     firstName: "Kenny",
//     car: {
//         brand: "Toyota",
//         Wheels: 4,
//         color: 'red'
//     }
// }

// const newDetails = {...details};
// newDetails.firstName= "Mike";

// newDetails.car.color = "blue"

// console.log(details);
// console.log(newDetails);

// JSON.stringify()

const details =  {
    firstName: "Kenny",
    car: {
        brand: "Toyota",
        Wheels: 4,
        color: 'red'
    }
}

const stringifiedDetails = JSON.stringify(details);
console.log(stringifiedDetails);

const newDetails = JSON.parse(stringifiedDetails);
console.log(newDetails);

newDetails.car.color = "Blue";

console.log(details.car.color);
console.log(newDetails.car.color);


const originalObj = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Agege wa",
        area: 'Baba Yemi'
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalObj));

cloneObj.name = 'Soliu'
cloneObj.age =54
cloneObj.address.local = 'Pegamut';
cloneObj.address.area ="Mujayiduunu"

console.log(originalObj);
console.log(cloneObj)