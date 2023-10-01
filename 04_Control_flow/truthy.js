const userEmail = []

if (userEmail) {
    console.log("Got User Email");
}else{
    console.log("Don't have user email");
}

// falsy values (jin values ko false assume kiya jata hai)

// false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN

// truthy value
// "0", 'false' , " "(string ke andar koi bhi value will be consider as truthy)
// [] , {}, function(){}, 

// check a array is empty

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10

// val1 = null  ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


// console.log(val1);

// _______________________Terniary Operator____________________________

// condition ? true : false

const iceteaPrice = 100 
iceteaPrice >= 180 ? console.log("less than 80") : console.log("more than 80");
