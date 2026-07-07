// Immediately Invoked Function Expressions (IIFE)
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) (); 

// To get rid off the problem which occurs sometimes due to global scope, 
// We use the concept of IIFE....

( (name) => {
    console.log(`DB connected two ${name}`);    
}) ("Rocky");

