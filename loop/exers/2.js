/**
 * Write a program to find the sum of first 10 natural numbers.
 */
let sum = 0;
console.log('The natural numbers are: ');
for (let i = 1; i <= 10; i++) {
  process.stdout.write(i + " ");
  sum += i;
}
console.log(`\nThe sum of first 10 natural numbers: ${sum}`);
