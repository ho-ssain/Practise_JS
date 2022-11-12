// param destructuring
const person = {
  fName: 'Hossain',
  age: 21,
}

// function prt(obj) {
//   console.log(obj.fName);
//   console.log(obj.age);
// }

function prt({fName:nm, age}) {
  console.log(nm);
  console.log(age);
}

prt(person);