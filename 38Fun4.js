// lexical Scope
/**
 * What is lexical Scope?
 */
function myApp() {
  const v = 'value1';
  function myFunc1() {
    // const v = 58;
    console.log('Inside myFunc', v);
  }

  const myFunc2 = function () {

  };

  const myFunc3 = () => {

  };
  console.log(v);
  myFunc1();
}
myApp();