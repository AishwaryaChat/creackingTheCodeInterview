// Generate Parentheses
// Medium
// company
// Amazon
// Adobe
// Apple
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// const n = 3;
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// const n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

// TC - O(2^n)
// SC - O(2^n)
function solve(n) {
  let ans = [];
  function generate(stack, open, close) {
    if (open === n && close === n) {
      ans.push(stack.join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      generate(stack, open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      generate(stack, open, close + 1);
      stack.pop();
    }
  }
  generate([], 0, 0);
  return ans;
}
const n = 3;
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// const n = 1
// Output: ["()"]

console.log(solve(n));
