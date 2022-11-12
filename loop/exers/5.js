/**
 * Write a program to check whether a number is prime or not
 */
/**
 * What is a prime number?
-> A prime number is a number that is divisible only by itself and 1
Example: 2, 3, 5...
-> 1 is not a prime number
*/
const read = require("../../read");
function solve(num) {
  let isPrime = true;
  for (let i = 2; i < num / 2; i++) {
    if(num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if(isPrime) console.log(`${num} is Prime!`);
  else console.log(`${num} is not Prime!`);
}

//.........main function...........
(function (){
  let num = +read();
  solve(num);
})();