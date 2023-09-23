// Dates 

let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 21)
let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamps = Date.now()

// console.log(myTimeStamps); 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);

const text = newDate.toLocaleString('default', {
    weekday:"long",
})

console.log(text);