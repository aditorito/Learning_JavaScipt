// var c = 300
// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope9

function one() {
    const username = "Bholu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
    // console.log(website);
   
}


// one()

if(true){
    const username = "sambhav"
    if(username === "sambhav"){
        const website = " youtuber"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ********************************** interesting *************************************

console.log(addone(5))

function addone(num) {
    return num + 1;
    
}

// upper wala error nahi dega but nicha wala dega jiska hum hoisting kehta hai
console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2;
    
}

