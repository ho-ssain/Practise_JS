// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const newA = [...a1, 44, 33, 22, ...a2];
// const newA2 = [...'ABC'];
// console.log(newA2);

const person = {
  name: "Hossain",
  age: 23,
  address: ['sleeping', 'thinking', 'doing nothing']
};
const person2 = {
  name: "Hasan",
  age: 18,
  hobbies: ['sleeping', 'thinking', 'doing nothing']
};

// const newPers = {...person, ...person2, birthdate: '3.08.98'};
// console.log(newPers);


const newPers = {...'ABC'};
const newPers2 = {...['mango', 'apple']};

console.log(newPers);
console.log(newPers2);