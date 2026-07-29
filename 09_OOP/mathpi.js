const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// PROPERTY DESCRIPTOR

const chai = {
  name: "chai",
  price: 200,
  isAvailable: true,
  orderChai: function () {
    console.log(`Code fateeee giiii`);
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Let's iterate the object chai....
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
