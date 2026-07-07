// while loop

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`); 
    index = index + 2;
}

// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(element);   
}

// Maps => Gives unique value and works on key: value pair
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("FR", "FRANCE");

console.log(map);

// Applying loops on map()
for(const [key, value] of map) {
    console.log(key, ":-", value);  
} 


// Applying loop on object => It will not work on object, we have another method to iterate an object
const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
};

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value); 
// }

