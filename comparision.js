console.log("2" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null < 0); // false

console.log(null >= 0); // true (because an equality check == and comparisions < >= <= works differently.)
// Comparisions converts null to a number, treating it as 0.

// === (strict check, it also checks datatypes)
console.log("2" === 2);