// objects inside array.
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

for (let user of users) {
  console.log(user.fname);
}