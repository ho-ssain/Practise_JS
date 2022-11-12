// object destructuring
const band = {
  bandName: "Linkin Park",
  famousSong: "Numb",
  year: 2000,
  Album: 'Hybrid'
};

let { bandName: b, famousSong: s, ...rest } = band;
console.log(rest);
