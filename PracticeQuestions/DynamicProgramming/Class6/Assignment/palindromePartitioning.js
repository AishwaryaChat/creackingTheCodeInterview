/*
Problem Description
Given a string A, partition A such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of A.



Problem Constraints
1 <= length(A) <= 501



Input Format
The first and the only argument contains the string A.



Output Format
Return an integer, representing the minimum cuts needed.



Example Input
Input 1:

 A = "aba"
Input 2:

 A = "aab"


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 "aba" is already a palindrome, so no cuts are needed.
Explanation 2:

 Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/

// TC - O(N^2)
// SC - O(N^2)
const isPalindrome = require("./allPalindromeSubstrings");

function solve(A) {
  const isP = isPalindrome(A);
  const N = A.length;
  let cut = [];
  for (let i = 0; i < N; i++) {
    if (isP[0][i]) cut[i] = 0;
    else {
      cut[i] = i; // setting the maximum possible cuts value
      for (let j = 0; j < i; j++) {
        if (isP[j + 1][i]) {
          cut[i] = Math.min(cut[i], cut[j] + 1);
        }
      }
    }
  }
  return cut[N-1]
}

const A = "aab";

console.log(solve(A));
