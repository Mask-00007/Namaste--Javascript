const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);


console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// PROPERTY DESCRIPTOR

const chai = {
    name: "chai",
    price: 200,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



