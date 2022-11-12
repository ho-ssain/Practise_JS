// Default Parameters

function addTwo(a, b = 32) {
  return a + b;
}

const ans = addTwo(4);
console.log(ans);