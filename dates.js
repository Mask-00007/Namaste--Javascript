// DATES ( Date is an object in JavaScript )

let myDate = new Date();
console.log(myDate); // Not recommended
console.log(myDate.toString());
console.log(myDate.toDateString()); // Best for understanding
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString()); // Widely Used
console.log(myDate.toLocaleString()); // Widely Used

let myCreatedDate = new Date(2003, 9, 21); // Another declaration method ("2003-10-21")
console.log(myCreatedDate.toDateString());

// --------- TIMESTAMPS -------------
let myTimeStamps = Date.now();
console.log(myTimeStamps);
