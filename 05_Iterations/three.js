// Iterating an object with the help of loop
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by app"
};

// for in loop

for (const key in myObject) {
    // console.log(key);
    console.log(myObject[key]);
}

// Let's test for in loop in case of array
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
    console.log(`${key} is equivalent to the ${programming[key]}`); 
}

// for each loop for array (VVIP)
const coding = ["js", "rb", "py", "java", "cpp"];
// coding.forEach( function (val) {
//     console.log(val);   
// });

// using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);   
// }

coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
     console.log(item, index, arr);
});