function sayName() {
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("Y");
};

sayName();

function addTwoNumbers(num1, num2) {
//    let result = num1 + num2;
//    return result;
      return num1 + num2;
};

const result = addTwoNumbers(2, 4);
console.log("Result:", result);

function loginUserMessage(username) {
    // Using conditional statements
    if(username === undefined) {
        console.log("Please enter a username", username);   
    }
    return `${username} just logged in`;
};

console.log(loginUserMessage());

// While adding items to the carts, using function
function calculateCartPrice(...num1) { // using rest operator(...)
    return num1;
};

console.log(calculateCartPrice(200, 300, 400)); // Always gives output in the form of array

// How to convert object into function
const user = {
    username: "Rambo",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is
    ${anyobject.price}`);   
};

console.log(handleObject(user));

// How to convert array into function 

const arr = [100, 200, 300, 400];

function returnSecondValue(getArray){
    return getArray[1];
};

console.log(returnSecondValue(arr));

