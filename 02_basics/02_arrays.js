const marvel_heros = ["Ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array  = another_array.flat(1)
// console.log(real_another_array);

console.log(Array.isArray("bholu yadav"))
// console.log(Array.from("bholu yadav")); convert into array


let score1 = 97
let score2 = 89
let score3 = 86

console.log(Array.of(score1, score2, score3));