// * ALWAYS AVOID RACE CONDITION BETWEEN CONSTRUCTOR AND SETTERS

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  //   get email() {
  //     return this._email.toUpperCase();
  //   }

  //   get email() {
  //     return this._email;
  //   }

  get email() {
    return `${this._email}BRO`;
  }

  set email(value) {
    this._email = value.toUpperCase();
  }

  //   set email(value) {
  //     this._email = value;
  //   }
}

const Yash = new User("yash@ai.com", "123");
console.log(Yash.password);
console.log(Yash.email);
