// Longest valid Parentheses
// Problem Description
// Given a string A containing just the characters '(' and ')'.

// Find the length of the longest valid (well-formed) parentheses substring.

// Problem Constraints
// 1 <= length(A) <= 750000

// Input Format
// The only argument given is string A.

// Output Format
// Return the length of the longest valid (well-formed) parentheses substring.

// Example Input
// Input 1:

//  A = "(()"
// Input 2:

//  A = ")()())"

// Example Output
// Output 1:

//  2
// Output 2:

//  4

// Example Explanation
// Explanation 1:

//  The longest valid parentheses substring is "()", which has length = 2.
// Explanation 2:

//  The longest valid parentheses substring is "()()", which has length = 4.

// TC - O(N)
// SC - O(N)
function solve(A) {
  let N = A.length;
  let dp = new Array(N).fill(0);
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] === "(") dp[i] = 0;
    else if (A[i - 1] === "(") dp[i] = 2 + (dp[i - 2] || 0);
    else if (A[i - dp[i - 1] - 1] === "(")
      dp[i] = 2 + (dp[i - 1] || 0) + (dp[i - dp[i - 1] - 2] || 0);
    else dp[i] = 0;
    max = Math.max(max, dp[i]);
  }
  console.log(dp)
  return max;
}

// const A = "(()";
// Output: 2

// const A = ")()())";
// Output: 4

// const A = ")()((((())))))";
// Ouput: 12
// const A =
// (")()))(())((())))))())()(((((())())((()())(())((((())))())((()()))(()(((()()(()((()()))(())()))(((");
// const A = "((()(((((()(()((()(()))))())))()())((()))))))(())()()(";
const A = "()()()(())()((())(((()))())())))))))(((()())((()()()(()"

console.log(solve(A));
