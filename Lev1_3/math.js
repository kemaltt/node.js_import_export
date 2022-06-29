const math = (a, b, operator) => {
  // switch (operator) {
  //   case "+":
  //     return a + b;
  //   case "-":
  //     return a - b;
  //   case "*":
  //     return a * b;
  //   case "/":
  //     return a / b;
  //   default:
  //     return "error";
  // }
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "*" ||
    operator === "/"
  ) {
    return eval(a + operator + b);
  } else {
    return "error";
  }
};

module.exports = { math };
