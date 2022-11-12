// Callback functions.
/**
 * What is Callback function?
 * A callback function is a function passed into another function 
 * as an argument, which is then invoked inside the outer function 
 * to complete some kind of routine or action.
 */
// function fun2() {
//   console.log('Inside func-1.');
// }

function fun1(callback) {
  console.log(callback);
  callback();
}

fun1(() => {
  console.log('Inside func1 !');
});