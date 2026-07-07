// Whta is Object literal?
const user = {
    username: "Hitesh",
    loginCunt: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("got useeer detailsfrom db");
        console.log(this);
        
    }
};

console.log(user.username);
console.log(user.getUserDetails());

// CONSTRUCTOR FUNCTION => It allows to creates multiple instances from a single object literal

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("Vivek", 12, false);
console.log(userOne);
console.log(userTwo);

// Whenever we use "new" keyword, an empty object will be created also known
// as instance.
// Constructor function will be called with the help of new keyword.
// "this" keyword will inject argument in the constructor and finally, we will get the output.





