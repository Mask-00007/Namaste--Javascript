// truthy or falsy

// falsy values : false, 0, -0, BigInt 0n, null, "", undefined, NaN
// truthy values : true, [], "0","false", " ", {}, function() {}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
};

const myArr = [];

if(myArr.length === 0) {
    console.log("Array is empty");    
};

// Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10;

console.log(val1);

// Ternary Operator

// condition ? true : false
const iceTeaPrice = 150;
iceTeaPrice >= 80 ? console.log("less thaan 80") : console.log("more than 80");



