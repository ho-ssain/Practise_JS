/**
 * What is array?
--> Array is a ordered collection of data/elements. (generally similar type)
--> Array is a data structure that stores a collection of elements.
 */

let fruits = ['apple', 'mango', 'grapes', 'banana'];
// fruits[1] = 'orange';
// console.log(fruits);

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// fruits.push('orange');
// console.log(fruits);

// let rem = fruits.pop();
// console.log(rem);
// console.log(fruits);

fruits.unshift('pine apple');
fruits.unshift('water melon');
console.log(fruits);

let rem = fruits.shift();
console.log(fruits, rem);
