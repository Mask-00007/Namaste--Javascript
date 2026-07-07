class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`);   
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A NEW COURSE WAS ADDED BY ${this.username.toUpperCase()}`);
    }
}

const chai =  new Teacher("chai", "chai@tea.com", 123);

chai.addCourse();
const masalaChai = new user("masalaChai");
masalaChai.logMe();
