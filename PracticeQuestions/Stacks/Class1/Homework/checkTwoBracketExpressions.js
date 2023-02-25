// Check two bracket expressions

// Problem Description
// Given two strings A and B. Each string represents an expression consisting of lowercase English alphabets, '+', '-', '(' and ')'.

// The task is to compare them and check if they are similar. If they are identical, return 1 else, return 0.

// NOTE: It may be assumed that there are at most 26 operands from ‘a’ to ‘z’, and every operand appears only once.

// Problem Constraints
// 1 <= length of the each String <= 100

// Input Format
// The given arguments are string A and string B.

// Output Format
// Return 1 if they represent the same expression else return 0.

// Example Input
// Input 1:

//  A = "-(a+b+c)"
//  B = "-a-b-c"
// Input 2:

//  A = "a-b-(c-d)"
//  B = "a-b-c-d"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  The expression "-(a+b+c)" can be written as "-a-b-c" which is equal as B.
// Explanation 2:

//  Both the expression are different.

const signObj = {
  "+": true,
  "-": false,
};

function adjacentSign(str, i) {
  if (i - 1 < 0) return true;
  if (str[i - 1] === "(") return true;
  return signObj[str[i - 1]];
}

function getTop(stack) {
  return stack[stack.length - 1];
}

// Here signStack is storing global sign for each character, that is sign before bracket

function getSign(str) {
  let signArr = new Array(26);
  let signStack = [true];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      // Check if adjacent sign is positive, then push next sign as watever was there at stack top
      if (adjacentSign(str, i)) signStack.push(getTop(signStack));
      // else adjacent sign is negative in this case the signs will reverse
      else signStack.push(!getTop(signStack));
    } else if (str[i] === ")") signStack.pop();
    else if (str[i] === "+" || str[i] === "-") continue;
    else {
      // Updating the sign for a character
      const charCode = str[i].charCodeAt(0) - 97;
      const localSign = adjacentSign(str, i);
      //   if global sign for that character is positive then simply update with the adjacent sign of the character
      if (getTop(signStack)) signArr[charCode] = localSign;
      //   else if global sign is negative, then update the negation of adjacent sign
      else signArr[charCode] = !localSign;
    }
  }
  return signArr;
}

// TC - O(N)
// SC - O(1)
function solve(A, B) {
  let aSign = getSign(A);
  let bSign = getSign(B);
  for (let i = 0; i < aSign.length; i++) {
    if (aSign[i] !== bSign[i]) return false;
  }
  return true;
}

// const A = "-(a+b+c)";
// const B = "-a-b-c";
// Input 2:

const A = "a-b-(c-d)";
const B = "a-b-c-d";

console.log(solve(A, B));
