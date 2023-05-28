// Basic Calculator
// Hard
// company
// Amazon
// Google
// Microsoft
// Paypal
// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Constraints:

// 1 <= s.length <= 3 * 10^5
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// There will be no two consecutive operators in the input.
// Every number and running calculation will fit in a signed 32-bit integer.

// TC - O(N)
function solve(s) {
  const N = s.length;
  let stack = [];
  let result = 0;
  let operand = 0;
  let sign = 1;
  for (let i = 0; i < N; i++) {
    let char = s[i];
    if (char === " ") continue;
    else if (!isNaN(char)) {
      operand = "";
      while (i < N && !isNaN(char)) {
        operand += char;
        char = s[++i];
      }
      i--;
      operand = Number(operand);
    } else if (char === "+") {
      result += sign * operand;
      sign = 1;
      operand = 0;
    } else if (char === "-") {
      result += sign * operand;
      sign = -1;
      operand = 0;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      sign = 1;
      result = 0;
    } else if (char === ")") {
      result += sign * operand;
      result *= stack.pop();
      result += stack.pop();
      operand = 0;
    }
  }
  return (result += sign * operand);
}
// 1 + 2 + (7 + (4))
// 3 1
// const s = "1 + 1"
// Output: 2

// const s = " 2-1 + 2 "
// Output: 3

// const s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
// const s = "1-(     -2)";
const s = "1 + 2 + (3-5 + (10-20))";

console.log(solve(s));
