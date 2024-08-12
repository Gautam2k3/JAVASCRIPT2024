const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batmen"];
// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);

// const all = marvelHeroes.concat(dcHeroes);
// console.log(all);

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);  //Good Syntaxing ho rhi hai yaha pe

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const ralanotherArray = anotherArray.flat(Infinity);
// console.log(ralanotherArray);

const puch = Array.isArray("Hitesh");
const puch2 = Array.from("Hitesh");

console.log(puch);
console.log(puch2);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
