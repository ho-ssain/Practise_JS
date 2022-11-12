// ternary operator / conditional operator

const read = require('./read');
let age = read();

let drink = age <=5 ? "Milk" : "Coffee";
console.log(drink);
