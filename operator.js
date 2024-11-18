// Calculate the area of a circle
const PI = 3.14;
let radius = 4;
let areaOfCircle = PI * radius * radius;
console.log("The area of a circle is: " + areaOfCircle);

// weight of an object
const accelerationDueToGravity = 9.81;
let mass = 50;
console.log(
  `The weight of the object is ${mass * accelerationDueToGravity}Newton`
);
let count = 0;
console.log(count);
console.log(count++);

//tenary operator

let isRaining = false;
isRaining ? console.log("you need a rain coat") : console.log("you are fine");

//check positive and negative numbers
let num = -2000;
num > 0
  ? console.log(`${num} is a positive number`)
  : console.log(`${num} is a negative number`);

// check if a number is a fraction
let num1 = 3;
(num / 2) % 0
  ? console.log(`${num} does not contain a fraction`)
  : console.log(`${num} contains a fraction`);
let now = document.getElementById("de");
now.textContent = new Date().getMinutes();
now.textContent = new Date().getDay();
