/**
 * What is Object?
 * Object is a collection of properties.
 * Properties are key-value pairs.
 * Properties can be accessed using dot notation or bracket notation.
 * Properties can be added, updated, and deleted.
 * Properties can be enumerable or non-enumerable.
 */

/**
 * What is Object Literal?
 * Object literal is a notation for creating an object.
 */

// const person = {
//   name: "Hossain",
//   age: 23,
//   hobbies: ['sleeping', 'thinking', 'doing nothing']
// };

// console.log(typeof obj);
// console.log(obj);

// console.log(person);
// console.log(person.name); // dot notation.
// console.log(person.name);
// console.log(person['hobbies']); // bracket notation.

// person.gender = "male";
// console.log(person);

// bracket notation.........
// person['address'] = 'Tomchom bridge, Cumilla';
// console.log(person);



// defference dot vs bracket notation
// const fruits = {
//   name : "Mango",
//   'grow country': 'Bangladesh'
// };

// fruits["grow country"];
// // fruits.grow country // error!!!

const key = 'email';
const person = {
  name: "Hossain",
  age: 23,
  hobbies: ['sleeping', 'thinking', 'doing nothing']
};
person[key] = "awarehossain@gmial.com";
console.log(person);

