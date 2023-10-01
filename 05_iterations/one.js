//  for loop 

// for (let i = 0; i <= 10; i++) {

//     if ( i == 7) {
//         console.log("7 is the best number nothing like that exits");
//     }
//     console.log(i);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log( `Outer loop value: ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`Outer loop value: ${i} and Inner loop value is: ${j}`);
        
//     }
    
// }

let myArray = ["flash", "batman", "superman"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }
// myArray.forEach(element => {
//     console.log(` superhero is ${element}`);
// });

//------------------------------- break and continue-----------------------------------

for (let index = 0; index <= 20; index++) {
    if (index == 7) {
        console.log("Dectected 7");
       continue
       
        
    }
    console.log(`Value of index is : ${index}` );
    
}