// Longest Balanced Substring

// Problem Description
// Given a string A made up of multiple brackets of type "[]" , "()" and "{}" find the length of the longest substring which forms a balanced string .

// Conditions for a string to be balanced :

// Blank string is balanced ( However blank string will not be provided as a test case ).
// If B is balanced : (B) , [B] and {B} are also balanced.
// If B1 and B2 are balanced then B1B2 i.e the string formed by concatenating B1 and B2 is also balanced.

// Problem Constraints
// 0 <= |A| <= 106

// Input Format
// First and only argument is an string A.

// Output Format
// Return an single integer denoting the lenght of the longest balanced substring.

// Example Input
// Input 1:

//  A = "[()]"
// Input 2:

//  A = "[(])"

// Example Output
// Output 1:

//  4
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  Substring [1:4] i.e "[()]" is the longest balanced substring of length 4.
// Explanation 2:

//  None of the substring is balanced so answer is 0.

// TC - O(N)
// SC - O(N)
function solve(A) {
  let dp = new Array(A.length);
  const opening = ["(", "[", "{"];
  const closing = [")", "]", "}"];
  let longest = 0;
  for (let i = 0; i < A.length; i++) {
    const openingIndexOfEle = opening.indexOf(A[i]);
    const closingIndexOfEle = closing.indexOf(A[i]);
    dp[i] = 0;
    if (openingIndexOfEle > -1) {
      // current element is an opening bracket
      dp[i] = 0;
    } else {
      // current element is a closing bracket
      if (A[i - 1] === opening[closingIndexOfEle]) dp[i] = 2 + (dp[i - 2] || 0);
      else if (A[i - dp[i - 1] - 1] === opening[closingIndexOfEle])
        dp[i] = 2 + (dp[i - 1] || 0) + (dp[i - dp[i - 1] - 2] || 0);
    }
    longest = Math.max(longest, dp[i]);
  }
  return longest;
}

// const A = "(())";

const A = "([[]]()}[]([[]]([[]]))[";
// Output - 4

//const  A = "[(])"
// Output - 0

console.log(solve(A));
