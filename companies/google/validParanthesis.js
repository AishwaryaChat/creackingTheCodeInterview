// Valid Parentheses
// Easy
// company
// Amazon
// BlackRock
// Facebook
// Google
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 10^4
// s consists of parentheses only '()[]{}'.

// TC - O(N)
// SC - O(N)
function solve(s) {
  const bracketObj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else {
      let top = stack.pop();
      if (top !== bracketObj[s[i]]) return false;
    }
  }
  return stack.length === 0 ? true : false;
}

const s = "()";
// Output: true

// const s = "()[]{}"
// Output: true

// const s = "(]"
// Output: false

console.log(solve(s));
