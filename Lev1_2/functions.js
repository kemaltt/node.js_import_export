const firstElt = (arr) => {
  return arr[0];
};

const notLastElt = (arr) => {
  return arr.slice(0, -1);
};
const lastElt = (arr) => {
  return arr[arr.length - 1];
};
const notFirstElt = (arr) => {
  arr.shift();
  return arr;
};

const position = (arr, n) => {
  if (n < 0 || n > arr.length) {
    return arr[arr.length - 1];
  } else {
    return arr[n];
  }
};

const removeElt = (arr, elt) => {
  return arr.filter((e) => e !== elt);
};

const double = (arr) => {
  return [...new Set(arr)];
};

const summe = (arr) => {
  return arr.reduce((a, b) => a + b);
};
// ==================================================
const randomNumber = (max, min) => {
  if (max > min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  if (max < min) {
    return Math.floor(Math.random() * (min - max) + max);
  }
};

const firstStrUpp = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
  // return string.slice(0,1).toUpperCase() + string.slice(1);
};

const allStrUpp = (string) => {
  return string.toUpperCase();
};

const lastEltCheck = (first, last) => {
  if (first.charAt(first.length - 1) === last) {
    return true;
  }
  return false;
};

module.exports = {
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
};
