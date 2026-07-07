let score = 33;
console.log(typeof score); // number

let data = "44abc";
// converting into number
let valueInNumber = Number(data);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN

let sc = null;
console.log(typeof null); // Object
console.log(sc);  // Null

// true => 1
// false => 0

let isLoggedIn = 1;
// converting into boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// "" => false
// "value" => true

let number = 99;
// converting into string
let stringNumber = String(number);
console.log(stringNumber);
console.log(typeof stringNumber);

// ********* OPERATIONS *********** 
let value = 3;
let negValue = -value;
console.log(negValue);


// for power operation, we use ** (2**2 = 4)

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3);

console.log(true);
console.log(+true); // tricky conversion

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table([num1, num2, num3]); // worst way of assigning variable

// Prefix and Postfix