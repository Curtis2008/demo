const arr = [];

const name1 = prompt("Enter name: ");
const age = prompt("Enter age: ");
const hairColor = prompt("Enter hair color: ");


if (name1 !== "") arr.push(name1);
if (age !== "") arr.push(age);
if (hairColor !== "") arr.push(hairColor);

const del = prompt("Delete last element?")
if (del === "yes") arr.pop();


alert(arr);