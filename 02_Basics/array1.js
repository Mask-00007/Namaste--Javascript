// Array Methods
const myArr = new Array(1, 2, 3,  4, 5);
console.log(myArr);

myArr.push(6);
console.log(myArr);

// shift; unshift
// includes => true/false
console.log(myArr.includes(9));

// indexOf
console.log(myArr.indexOf(4));

// concat => merge 2 arrays
const arr1 = new Array(22, 23, 24, 25);
console.log(myArr.concat(arr1));

// join() => converts and binds array into string
const newArr = myArr.join();
console.log(newArr);

// slice => copies a portion of an array
console.log("A ", myArr);
const myA = myArr.slice(1, 3);
console.log(myA);

//splice =>
const myB = myArr.splice(1, 3);
console.log(myB); // give the array starting with index 1 to 3
console.log("B ", myArr); // give the remaninig array
