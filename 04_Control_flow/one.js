// if Statment 

const isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log("You are logged in");
// }

// > , < , <= , >= , == , !=, === (also check type)

// if( 2 === "2"){
//     console.log("hogya hai tuj ko to pyaar");
// }

// short hand notation

const balance = 1000

// if( balance > 500) console.log("test")

// if(balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}
