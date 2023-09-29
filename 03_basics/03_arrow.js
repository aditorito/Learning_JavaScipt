const user = {
    username: "Bholu",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sambhav"
// user.welcomeMessage()
//  'this' means current context(also many extra functions of nodejs environment) but funtion ke outside vo empty hota hai {} kyuki app nodejs environment ke andar rem kar raha ho
//  yahi agar browser mai run karo to vo kuch value dega like click , events

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "Aditya Soni"
//     console.log(this.username);
// }

// arrow function

const chai = () => {
    let username = "Aditya Soni"
    console.log(this);
}

// chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 5))

// implicit return

// const addTwo = (num1 , num2) => (num1 + num2)


const addTwo = (num1 , num2) => ({username : "Harry "})

// console.log(addTwo(5, 7));

