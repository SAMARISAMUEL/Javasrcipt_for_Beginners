let name = prompt("Enter your name");
if (name.length >= 7) {
  document.getElementById("de").innerHTML = "your name is too long";
} else {
  document.getElementById("de").innerHTML = "You are good";
}
//comparism with length
let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
let fame = firstName.length == lastName.length;
if (firstName.length > lastName.length) {
  document.getElementById(
    "de"
  ).innerHTML = `Your first name ${firstName} is longer than your family name ${lastName}`;
}
if (firstName.length == lastName.length) {
  document.getElementById(
    "de"
  ).innerHTML = `Your family name ${lastName} is equal to your given name ${firstName} `;
} else {
  document.getElementById(
    "de"
  ).innerHTML = `Your family name ${lastName} is longer than your given name ${firstName} `;
}
let myAge = 25;
let yourAge = 50;
let age = document.getElementById("de");
age.textContent = `My age is ${myAge} and your age is ${yourAge}`;
age.classList.add("mynewDiv");
//drive or not
let DOB = prompt("Enter your date of birth");
let currentYear = new Date().getFullYear();
let age = currentYear - DOB;
let output = document.getElementById("de");
let allow = 18 - age;

if (age <= 18) {
  output.textContent = `Since you are ${age}years old you are not old enough to drive , you will be allowed to drive in ${allow}years`;
  output.classList.add("not_old_enough");
} else {
  output.textContent = `Since you are ${age}years old you are  old enough to drive`;
  output.classList.add("old_enough");
}
let nowYear = new Date().getFullYear();
let nowMonth = new Date().getMonth();
let nowDate = new Date().getDate();
let nowHour = new Date().getHours();
let nowMinute = new Date().getMinutes();
let nowSec = new Date().getSeconds();
let solution = document.getElementById("de");
solution.textContent = `The date format is ${nowYear}-${nowMonth}-${nowDate} ${nowHour}:${nowMinute}:${nowSec}`;
