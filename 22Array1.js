// how to clone array.
let a1 = [1, 2, 3, 4];
let a2;

// way 1
a2 = [1, 2, 3, 4];

// way 2
a2 = a1.slice(0).concat([5, 6]); // fast

// way 3
a2 = [].concat(a1, [5, 6]);

// way 4
a2 = [...a1, 5, 6]; // most use
