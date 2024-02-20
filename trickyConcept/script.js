// Global scope.
// const name = "Zainab";
// const age = 17;
// const school = "Agege Primary School, Orile";
// const religion = "Christian"

// var g 

// Local scope 
// const localScope = () => {
//     const name = "Oloye Pupo";
//     const religion = "Muslim";
//     const activity = "Drinking of Wine!";

//     return `${name} who is a ${religion} enjoys ${activity}`;
// }

// const oloye = localScope()
// console.log(oloye)

// const test = () => {
//  console.log(religion)
// }

// test()


// if (true) {
//     const me = "aliyu"
   
  
// } 


// const exampleThree = () => {

//     const name = "chima"
    
//     // Block Scope 
//     if(true){
//         const schoolName = "LASU"

//         console.log(`${name} is a ${religion} and goes to ${schoolName}`)
//     }


    
// }


// exampleThree()



// HOISTING

// const a = 2  // something here is similar to func expresssio n and arrow func but its not similar to func declaration
// const b = 3

const result = exampleFive()
console.log(result)

function exampleFive(){
    return 2 + 2 
}


// const  exampleFive = () => {
//     return 2 + 2 
// }

const me = function (){}

const m = 2

console.log(g)

var g 

// g = 4

// console.log(g)



// let here 

// here = 5

// console.log(here)



// CLOSURE  // The scope regarding a function inside a function


const outerFunction = () => {
    const ben = 5


    const innerFunction = () => {
        const man = 7

        return ben + man
    }


   

    const final = innerFunction()

    console.log(final * 2)
}

outerFunction()

// const firstFunc = () => {
//     const div = 2

//     const secondFunc = () => {
//         const mult = 4

//         const number = true
//         let me 

//         if (number) {
//             me = 5
//         }

//         const answer = me * mult
//         console.log(answer)
//         return answer

        
//     }

//     return secondFunc()
// }

// firstFunc()


const firstFunc = () => {
    const div = 2

    const secondFunc = () => {
        
        let certainNumber
        const mult = 4

        if(true){
            certainNumber = 5
        }

        const ans = certainNumber * mult
        return ans 
    }

    const initialAnaswer = secondFunc()

    const finalAnswer = initialAnaswer / div

    console.log(finalAnswer)


}

firstFunc()













