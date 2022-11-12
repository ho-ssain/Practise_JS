const read = require('./read');
let winNum = Math.ceil(Math.random() * 10);
let guess = +read();
console.log(typeof winNum, typeof guess);
if (guess === winNum) {
  console.log('Congrats! Guess is Right.');
} else {
  if (guess < winNum) {
    console.log('To low!');
  } else {
    console.log('To high!');
  }
}



