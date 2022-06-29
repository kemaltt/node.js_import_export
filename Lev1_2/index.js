const { names, numbers } = require("./data.js");
const {
  firstElt,
  notLastElt,
  lastElt,
  notFirstElt,
  position,
  removeElt,
  double,
  summe,
  randomNumber,
  firstStrUpp,
  allStrUpp,
  lastEltCheck,
} = require("./functions.js");

console.log(firstElt(names));
console.log(firstElt(numbers));

console.log(notLastElt(names));
console.log(notLastElt(numbers));

console.log(lastElt(names));
console.log(lastElt(numbers));

console.log(notFirstElt(names));
console.log(notFirstElt(numbers));

console.log(position(names, 20));
console.log(position(numbers, 20));

console.log(removeElt(names, "Simon"));
console.log(removeElt(numbers, 5));

console.log(double(numbers));

console.log(summe(numbers));

console.log(randomNumber(5, 10));

console.log(firstStrUpp("hello world"));

console.log(allStrUpp("hello world"));

console.log(lastEltCheck("Test", "t"));
console.log(lastEltCheck("Test", "d"));
