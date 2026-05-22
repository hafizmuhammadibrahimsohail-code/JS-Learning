// Primitives Datatypes
// 7 Types: String, Boolean, Null, Number, Undefined, Symbol, BigInt

const bigNumber = 188828222222822829292n;
const abc = ('123')
const xyz = ('123')

// console.log(abc === abc)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)


// Non-Primitives
// Arrays, Objects, Functions

const heros = ["Ibrahim", "Ahmed", "Sohaib"]
let myObj = {
    name: "hitesh",
    age: 22
}

// console.table(myObj)

const myFunction = function () {
    console.log("Hello World")
}

// console.table(heros)

const isLoggedIn = false;
const outsideTemp = null;

// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp)

let myYoutubeName = "Hafiz Ibrahim Sohail"

let anotherName = myYoutubeName

// console.log(anotherName)

let userOne = {
    email: "ibbi@gmail.com",
    upi: "user@123.com"
}

let userTwo = userOne

userTwo.email = "Ibrahim@456.com"

console.log(userOne.email);
