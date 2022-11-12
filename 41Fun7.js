// rest parameters

function f1(...a) {
  let sum = 0;
  for (let i of a)
    sum += i;
  return sum;
}

const ans = f1(3, 4, 5, 6, 7, 8, 9);
console.log(ans);