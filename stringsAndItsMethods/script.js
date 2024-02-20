// Types of strings 

// single quote ('')

// const world = ' i am a boy'
// // double quote ("")
// const words = " i am a boy"


// // backticks (``) \
// const worlds = `i am a boy`


// // console.log(world, words, worlds)

// const age = 12 
// const school = 'DLT'
// const name = 'eef'


// const sentence = `my name is ${name}, i am ${age} years old and i go to ${school} school`

// console.log(sentence)


// const math = "2 + 2"

// const mathematics = `${2 + 2}` 



// const lines = `1
// 2
// 3
// 4
// 5`

// console.log(lines)

// const numerals = `Hello i'm Aliyu and i am from "kogi state"`
// console.log(numerals)

// Checking the length of a string

const name = "Hayzed" 

console.log(name.length)

console.log(name[0])


// Changing the case of string


const words = "i am a boy"

const word = "SHE IS A GIRL"

console.log(words.toUpperCase())
console.log(word.toLowerCase())

// Checking for Substring 

const man  = "I love coding and my favourite language is Javascript, Javascript"

const final = man.indexOf('Javascript')
const main = man.lastIndexOf('Javascript')

// const caps = man[31].toUpperCase()
// console.log(caps)


console.log(main)
console.log(final)

const check = man.includes('favourite')

const starting = man.startsWith('I')
const ending = man.endsWith('t')


console.log(check)
console.log(starting)
console.log(ending)
