const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python"
}

// for (const key in myObject) {
//     console.log(key);

// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

const programming = ["java", "ruby", "c++", "python"]
// for in loop mai key index reprsent krta hai

// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);

}