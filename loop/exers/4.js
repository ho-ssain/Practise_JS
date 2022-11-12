/**
 * Write a program to find the perfect numbers between 1 and 500
 */

/**
  * What is a perfect number?
-> A perfect number is a positive integer that is equal 
  to the sum of its proper positive divisors, that is, 
  the sum of its positive divisors excluding the number 
  itself (also known as its aliquot sum).
  example: 6 is a perfect number because 6 = 1 + 2 + 3
*/
for (let i = 1; i <= 500; i++) {
  let sum = 0;
  for( let j = 1; j <= i / 2; j++) {
    if (i % j === 0) sum += j;
  }
  if (sum === i)
    console.log(i);
}
