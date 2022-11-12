// function returns function
const ans = (() => {
  return () => 'Hello Hossain!';
})();
// console.log(ans);
const r = ans();
console.log(r);
