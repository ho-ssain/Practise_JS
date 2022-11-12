/**
 * Write a program to find prime number within a range
 */


const read = require('../../read');

function solve(s, e) {
  let count = 0;
  console.log(`The prime numbers between ${s} and ${e} are:`);
  for (let i = s; i <= e; i++) {
    if(i === 1) continue;
    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      count++;
      process.stdout.write(i + " ");
    }
  }
  console.log(`\nThe total number of prime numbers between ${s} to ${e} is: ${count}`);

}


//..............Main function..........
(function (){
  let [start, end] = read().split(" ");
  start = +start; 
  end = +end;
  solve(start, end);
})();