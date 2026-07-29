// Detailing of Prototype...
// const myName = "Vikrant     ";
// const myCName = "Omveer     ";

// console.log(myCName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// First Test case for Object/function

Object.prototype.messi = function () {
  console.log(`messi is present in all objects`);
};

heroPower.messi();

// Testing on Array

myHeroes.messi();

// Now let's solve the length trimming problem
const myName = "Vikrant     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(` True length is: ${this.trim().length}`);
};

myName.trueLength();
"Omver    ".trueLength();
