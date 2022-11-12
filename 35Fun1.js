const arr = function (a, t) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === t) return i;
  }
  return -1;
}; // function expression.


const ans = arr([1, 3, 4, 8, 9, 44, 33], 8);
if(ans == -1) console.log('Target is not find!');
else console.log(`Target is found in index: ${ans}`);