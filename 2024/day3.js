const fs = require("fs");

const input = fs.readFileSync("../input/day3.txt").toString();
const matchArray = input.match(/(mul\(\d{1,3}\,\d{1,3}\))|(do[n't]*\(\))/g);

const mul = (x, y) => {
  return x * y;
};

let total = 0;
let isDo = true;

matchArray.forEach((x) => {
  if (x.match(/don't/)) {
    isDo = false;
    return;
  } else if (x.match(/do\(/)) {
    isDo = true;
    return;
  } else if (isDo) {
    const num1 = x.match(/\((\d{1,3})\,/);
    const num2 = x.match(/\,(\d{1,3})\)/);
    total += mul(parseInt(num1[1]), parseInt(num2[1]));
  }

  console.log(total);
});
