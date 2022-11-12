/**
 * What is Function?
 * Function is a set of statements to perform a task 
 * or calculate a value.
 */

// function add(n1, n2) {  
//   return n1 + n2;
// }

// const res = add(12, 23);
// console.log(res);


// function isEven(num) {
//   // if (num % 2 === 0) return true;
//   // return false;
//   return num % 2 === 0;
// }
// const ans = isEven(12);
// if (ans) console.log('Even !!!');
// else console.log('Odd !!!');


// function ch(params) {
//   return params[0];
// }

// console.log(ch("ABC"));


function arr(a, t) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === t) return i;
  }
  return -1;
}

const ans = arr([1, 3, 4, 8, 9, 44, 33], 8);
if(ans == -1) console.log('Target is not find!');
else console.log(`Target is found in index: ${ans}`);
