// Declaring objects with the help of constructor
const tinderUser = new Object(); // Singleton Object
// const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Vikrant";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
    email: "google@microsoft.com",
    fullname: {
        userfullname: {
            firstname: "Apple",
            lastname: "google"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);

// Combining more than one objects
const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

// const obj3 = Object.assign({}, obj1, obj2);
// using spread operator
const obj3 = {...obj1, ...obj2};
console.log(obj3);

// Intresting facts(VVIP)
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Always returns the value in array format
console.log(Object.entries(tinderUser)); // Returns array of each key and value pair

// To check if the object has existing key: value pair or not
console.log(tinderUser.hasOwnProperty("isLogged"));


// Destructuring of objects
const course = {
    coursename: "Namaste JS",
    courseprice: 999,
    courseinstructor: "Hitesh"
};

// To access the key: value pair, we use the concept of destructuring using {}
const {courseinstructor} = course;
console.log(courseinstructor);


