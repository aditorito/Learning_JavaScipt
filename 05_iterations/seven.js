const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nums = myNumbers.map( (num) => num + 10 )

// const newNums =  myNumbers
//                 .map( (num) => num*10 )
//                 .map( (num) =>  num - 1)
               
// console.log(newNums);
// expected output
// [
//     9, 19, 29, 39, 49,
//    59, 69, 79, 89, 99
//  ]

// filer main jo value true hoga wahi return hoga but map mai sab return hoga
const newNums =  myNumbers
                .map( (num) => num*10 )
                .map( (num) =>  num - 1)
                .filter( (num) =>  num >= 40)
               
// console.log(newNums);
