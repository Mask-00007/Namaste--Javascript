// Obejct can be decelared in two ways => Literal
//                                     => Constructor(SINGLETON) 

// OBJECT lITERALS ( works on key and values pair)
//(JS automatically converts all the object keys to the string)

const mySym = Symbol("key1"); // Trying to declare symbol in the oject literal

const JsUser = {
    [mySym]: "myKey1", //Always use square bracket for declaring the symbol
    name: "Vikrant",
    "full name": "Vikrant Thakur",
    age: 25,
    email: "vikrant@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Satuarday"],

};

// Accessing the object
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log( typeof JsUser.mySym);

// Changing the valye of object literals
JsUser.email = "thakur@chatgpt.com";
console.log(JsUser["email"]);

// Locking the value, so that noone can change it using freeze method
// Object.freeze(JsUser);
// Object.freeze(JsUser.email);
// JsUser.name = "Hitesh";
// JsUser.email = "apple@chatgpt.com";
console.log(JsUser);

// Declaring function in object literal
JsUser.greeting = function() {
    console.log("hello JS user");    
};

console.log(JsUser.greeting());

JsUser.greeting2 = function() {
    console.log(`hello JS user ${this.name}`);    
};

console.log(JsUser.greeting2());

 

                                  