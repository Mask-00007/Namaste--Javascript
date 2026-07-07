// if
const score = 200;

if(score > 100) {
    let power = "fly";
    console.log(`User can ${power}`);    
};


// Nesting

const balance = 1000;

if(balance < 500) {
    console.log("less than");    
} else if(balance < 750) {
    console.log("less than 750"); 
} else {
    console.log("less than 1200");
};

const userLoggedIN = true;
const debitCard = true;

if(userLoggedIN && debitCard) {
    console.log("Allowed to buy courses"); 
}