// nested destructuring
const users = [
  {
    id: 1,
    fname: 'Hasan',
    gender: "male"
  },
  {
    id: 2,
    fname: 'Habib',
    gender: "male"
  },
  {
    id: 3,
    fname: 'Hasib',
    gender: "male"
  },
];

// const [u1, u2, u3] = users;
// console.log(u1);

const [{id:i}, , {gender:g}] = users;
console.log(i);
console.log(g);