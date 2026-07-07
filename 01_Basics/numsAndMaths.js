const score = 400;

// But if we want strictly our input as number
const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); // Important

const otherNumber = 20.8899;
console.log(otherNumber.toPrecision(3)); // Range should be 1-21 & always returns a string

const hundreds = 1000000; // IMPORTANT METHOD
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++ MATHS +++++++++

console.log(Math);
console.log(Math.abs(-4)); // Absolute Value
console.log(Math.round(4.3)); // Lower Value
console.log(Math.ceil(4.3)); // Upper Value


console.log(Math.random()); // Generates Random Value
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // Floor will round off the value to the lower side

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);