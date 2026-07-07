const coding = ["js", "rb", "py", "java", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
});

console.log(values);

// filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter( (num) => num > 4);
// const newNums = myNums.filter( (num) => {
//         return num > 4;                 // Whenever paranthesis will be used
                                           // always mention "return".
//  });

console.log(newNums);

// reduce method
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTotal = myNums1.reduce((acc, currval) => (acc + currval), 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

const priceCart = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(`TOTAL PRICE FOR THE COURSE IS: ${priceCart}`);

