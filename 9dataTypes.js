// undefined................
// let firstName;
// console.log(firstName);

// var n;
// console.log(n);

// const p; // error!!!
// SyntaxError: Missing initializer in const declaration

// null..............
// let v = null;
// console.log(typeof v, v);


// BigInt................

let n1 = 123858585855555555555555555558585858585n;
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(n1);

let n2 = 89;
let s = n1 + n2;
// error!!! 
// TypeError: Cannot mix BigInt and other types, 
// use explicit conversions

