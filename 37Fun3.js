// // function inside function
// const app = () => {
//   console.log('Inside app!');
//   const myFunc = () => console.log('Hello MyFunc!');
//   const addTwo = (n1, n2) => n1 + n2;
//   const mul = (n1, n2) => n1 * n2;

//   myFunc();
//   addTwo();
//   console.log(mul(12, 3));
// };
// //..........................................
// app();

// self executing function.........
const app = () => {
  console.log('Inside app!');
  (() => console.log('Hello MyFunc!'))();
  const add = ((n1, n2) => n1 + n2)(12, 32);
  const mul = ((n1, n2) => n1 * n2)(12, 3);
  console.log(add);
  console.log(mul);
};
//..........................................
app();