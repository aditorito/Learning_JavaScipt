// singleton 

// object literals
// Object.create

const mySysm = Symbol("key1")
const Jsuser =  {
    name : "bholu",
    "full name": "bholu yadav",
    [mySysm]: "mySymb", 
    age : 18,
    location: "Noida",
    email:"bholu@andsons.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]); not possible with dot method

// console.log(Jsuser[mySysm]);

Jsuser.email = "bholu@ram.com"
// Object.reeze(Jsuser)
Jsuser.email = "sambhav@billu.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("hello js users");
}

Jsuser.greeting2 = function(){
    console.log(`hello my name is ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

