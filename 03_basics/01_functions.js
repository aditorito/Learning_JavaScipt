function sayMyname(){
    console.log('bholu');
}

// sayMyname();

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1 , num2){
    let result = num1 + num2
    return result
}


// console.log(addTwoNumbers(3,5));

// num1 and num2 are called parameters and 3 and 5 are arguments

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
    }
    else{
        return `${username} just logged in`
    }
    
}
// console.log(loginUserMessage("bholu bhaiya"));
// ...num1 will be used as rest operator so we can take as many input as many want in form of array
// function calculateCartPrice(...num1){
//     return num1;

// }
// console.log(calculateCartPrice(123, 456,789))

function calculateCartPrice(val1 , val2, ...num1){
    return num1 ;
}
// console.log(calculateCartPrice(123, 234, 345, 456,567));

const user = {
    username : "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username : "hitesh",
    price: 199
})

const myArray = [200, 400, 600, 800]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([200, 400]));