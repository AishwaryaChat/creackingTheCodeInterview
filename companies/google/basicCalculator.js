// Basic Calculator III
// Hard
// company
// Google
// Amazon
// Apple
// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:

// Input: s = "1+1"
// Output: 2
// Example 2:

// Input: s = "6-4/2"
// Output: 4
// Example 3:

// Input: s = "2*(5+5*2)/3+(6/2+8)"
// Output: 21

// Constraints:

// 1 <= s <= 104
// s consists of digits, '+', '-', '*', '/', '(', and ')'.
// s is a valid expression.

function execute(operator, b, a) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/": {
      if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
        return Math.floor(a / b);
      } else return Math.ceil(a / b);
    }
  }
}

function precedence(op1, op2) {
  if (op2 === "(") return false;
  if ((op1 === "/" || op1 === "*") && (op2 === "+" || op2 === "-"))
    return false;
  return true;
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const N = s.length;
  let nums = [];
  let ops = [];
  for (let i = 0; i < N; i++) {
    let char = s[i];
    if (char === " ") continue;
    else if (!isNaN(char)) {
      let num = "";
      while (i < N && !isNaN(char)) {
        num += char;
        char = s[++i];
      }
      i--;
      nums.push(Number(num));
    } else if (char === "(") ops.push(char);
    else if (char === ")") {
      while (ops[ops.length - 1] !== "(")
        nums.push(execute(ops.pop(), nums.pop(), nums.pop()));
      ops.pop(); // popping "("
    } else {
      while (ops.length > 0 && precedence(char, ops[ops.length - 1]))
        nums.push(execute(ops.pop(), nums.pop(), nums.pop()));
      ops.push(char);
    }
  }
  while (ops.length > 0) {
    nums.push(execute(ops.pop(), nums.pop(), nums.pop()));
  }
  return nums.pop();
};

const s = "1+1";
// Output: 2
// Example 2:

// const s = "6-4/2"
// Output: 4
// Example 3:

// const s = "2*(5+5*2)/3+(6/2+8)"
// Output: 21

console.log(calculate(s));
