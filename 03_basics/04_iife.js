// Immediatly Invoked Function Expressions (IIFE)
// if you want to run a funtion as soon as files get load

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()
//IIFE METHOD

(function chai(){
    console.log(`DB CONNECTED`);
})();
// last mai semi colan important hai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Bhalu bhaiya")