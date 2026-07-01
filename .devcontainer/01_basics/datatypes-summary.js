// Primitive

// 7 types : String , Number, Boolearn , null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const inLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 82299292255555556555n

// Refrence (Non primitive)

// Array, objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    
    name: "Abhishek",

    age: 20,

}

const myFunction = function(){
    console.log("Hello world");


}

console.log(typeof bigNumber);




// Refrence (Non primitive)



// Array , Objects , Functions






// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "abhishekpawar.com"
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",

    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "abhishek@.com"

console.log(userOne.emil);
console.log(userTwo.email);



