// Primitive datatypes (call by value)

// 7 types : String , NUmber , boolean , null , undefiened, Symbol, BigInt


const score = false
const id = Symbol('1234')

const anotherid = Symbol('1234')

console.log(id == anotherid);

const bigNum = 13245634232145

// javascript is dynamically typed language which means you don't need to specify type of variable

// reference datatye(non - primitve)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "bholu",
    age : 18
};

const myfunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros)