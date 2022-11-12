const read = require('./read');

let temInDegree = read();

if (temInDegree < 0) {
  console.log('Extremely cold outside!');
} else if (temInDegree < 16) {
  console.log('It is cold outside!');
} else if (temInDegree < 25) {
  console.log('Weather is okey!');
} else if(temInDegree < 35) {
  console.log('Lets go for swim!');
} else if (temInDegree < 45) {
  console.log('Turn on AC!');
} else {
  console.log('Too hot !!!');
}
