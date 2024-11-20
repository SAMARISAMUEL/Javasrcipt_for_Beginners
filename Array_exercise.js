//Declare an _empty_ array
const arr = [];
console.log(arr);
//Declare an array with more than 5 number of elements and Find the length of your array
const arr1 = [1, 2, 3, 4, 5, 6];
const arrFood = ["yam", "garri", "Rice", "Beans", "Egusi"];
console.log(arr1);
console.log(arr.length);
console.log(arrFood);
console.log(arrFood.length);
//Get the first item, the middle item and the last item of the array
let arrFirstItem = arr[0];
let arrMiddleItem = arr[4];
console.log(arrMiddleItem);
//Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
const mixedDataTypes = [
  300,
  "samari",
  true,
  undefined,
  null,
  { name: "samuel", occupation: "Automation Engineer", age: 36 + "years" },
];
console.log(mixedDataTypes.length);
let occu = mixedDataTypes[5].occupation;
console.log(occu.toUpperCase());
let vt = mixedDataTypes.includes("sa");
if (v === true) {
  console.log("it is fine");
} else {
  console.log("ygyegdhvh");
}
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let yr = companies.sort();
console.log(y);
let z = companies.reverse();
console.log(z);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const tex = text.split("");

document.getElementById("de").innerHTML = tex;
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const maxAge = Math.min(...ages);
console.log(maxAge);
const sum = ages.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
let ageSort = ages.sort();
console.log(ageSort);
console.log(ageSort[0]);
console.log(ageSort.length);
console.log(ageSort[9]);
console.log(ageSort[4] / 2);
const r = ages.length;

console.log(sum / r);
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const coun = countries.slice(10);
console.log(coun);
const y = countries.length;
console.log(y / 2);
const v = countries[97];
console.log(v);
const firstPart = countries.slice(96);
console.log(firstPart);
const secondPart = countries.slice(1, 97);
const sec = secondPart.push("zamunda");
console.log(secondPart);
