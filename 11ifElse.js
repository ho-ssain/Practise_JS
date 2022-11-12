const read = require("./read.js");
// truthy and falsy values........................
/**
# falsy values.
--> false
--> 0
--> ""
--> null
--> undefined

# truthy values.
--> true
-->  1

 */

// if else statement

// let age = read();
// if(age >= 18){
//   console.log("Eligible !!!\n");
// }
// else{
//   console.log("Non-Eligible !!!\n");
// }

// let num = read();
// if(num % 2 === 0){
//   console.log("Even\n");
// }
// else{
//   console.log("Odd\n");
// }

let firstName = read();
if(firstName){
  console.log(firstName);
}else{
  console.log("Empty string!");
}
console.log(firstName);
console.log(typeof firstName);

