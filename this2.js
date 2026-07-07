const user = {
    username: "Rambo",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); 
        // This refers current context 
        // console.log(this);
         
    }
};

user.welcomeMessage();
user.username = "Joe";
user.welcomeMessage();

console.log(this); // it gives empty but in browser console, it gives window as global scope

function chai() {
    console.log(this);   
};

console.log(chai());


// ----------- ARROW FUNCTION ---------
// Basic Method
const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(2, 3));

// Implicit Method 
const addTwo1 = (num1, num2) => (num1 + num2);
console.log(addTwo1(2, 3));

