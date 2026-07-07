const name = "Vikrant";
const cgpa = 8;

console.log(`Hello my name is ${name} and I have secured ${cgpa} cgpa.`);

// String Interpolation (` ${} `)

// Best way to declare a string using "new String" keyword
const gameName = new String("Shubham");
console.log(gameName);
console.log(gameName.toUpperCase());

// CONCEPT OF SLICING
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4); // We can also provide negative value 
console.log(anotherString);

const notherString = gameName.slice(-3, 4);
console.log(notherString);

// TRIM and REPLACE METHOD
const newString1 = "     Vikrant     ";
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));

// SPLIT METHOD
console.log(gameName.split('-'));

 