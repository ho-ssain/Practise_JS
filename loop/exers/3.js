/**
 * Write a program to display n terms of natural number and their sum
 */
const read = require("../../read");
process.stdout.write("Input a number of items: ");
let items = read();
let sum = 0;
for(let i = 1; i <= items; i++) {
  process.stdout.write(i + " ");
  sum += i;
}
console.log(`\nThe sum of the ${items} natural number is: ${sum}`);
