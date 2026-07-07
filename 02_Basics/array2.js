const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// Concat method => returns new array
console.log(marvel_heroes.concat(dc_heroes));

// spread operator
const allHeroes = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes);

// making array from given value
console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
