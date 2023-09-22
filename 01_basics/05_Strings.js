const name = "bholu "
const repoCount = 50

// console.log(name + repoCount + " Value");

// back ticks

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

// declaring string

const gameName = new String("Vollyball")

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
console.log(gameName.charAt(3))
console.log(gameName.indexOf('y'))
// console.log(gameName.substring(2, 7)) it substring it will take negative strings as 0

// console.log(gameName.slice(-6,5))

const newStringOne = "         aditya partap singh"

// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
url.replace('%20','-')

// console.log(url.replace('%20','-'));

// console.log(url.includes('bholu'));

const arrayString = "bholu sambhav soni hridaya"

console.log(arrayString.split(' '))