const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));


const othernum = 23.4567876

// console.log(othernum.toPrecision(4));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));


// ********************Math Library***************************

console.log(Math);

//console.log(Math.abs(-4))//make any negative number positive but not with positive

// console.log(Math.round(4.7))

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// ceil will give upper of any decimal part and floor will give lower of any decimal

// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4 ,3, 6, 8));

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.floor(Math.random()*(max - min + 1) + min)))