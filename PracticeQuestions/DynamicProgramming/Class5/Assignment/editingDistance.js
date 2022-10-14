// Edit Distance
// Unsolved
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description
// Given two strings A and B, find the minimum number of steps required to convert A to B. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Problem Constraints
// 1 <= length(A), length(B) <= 450

// Input Format
// The first argument of input contains a string, A.
// The second argument of input contains a string, B.

// Output Format
// Return an integer, representing the minimum number of steps required.

// Example Input
// Input 1:

//  A = "abad"
//  B = "abac"
// Input 2:

//  A = "Anshuman"
//  B = "Antihuman

// Example Output
// Output 1:

//  1
// Output 2:

//  2

// Example Explanation
// Exlanation 1:

//  A = "abad" and B = "abac"
//  After applying operation: Replace d with c. We get A = B.

// Explanation 2:

//  A = "Anshuman" and B = "Antihuman"
//  After applying operations: Replace s with t and insert i before h. We get A = B.

// TC - O(N*M)
// SC - O(N*M), this can be reduced to O(2*M) since at any point of time we are using data from only 2 rows, current row or previous row

function solve(A, B) {
  const N = A.length;
  const M = B.length;
  let dp = [];
  for (let i = 0; i <= N; i++) {
    dp[i] = [];
    for (let j = 0; j <= N; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = 0;
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (i == 0 || j == 0) dp[i][j] = Math.max(i, j);
      else if (A[i - 1] === B[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else {
        dp[i][j] = Math.min(
          1 + dp[i - 1][j],
          1 + dp[i][j - 1],
          1 + dp[i - 1][j - 1]
        );
      }
    }
  }
  return dp[N][M];
}

// const A = "abad";
// const B = "abac";

const A = "Anshuman";
const B = "Antihuman";

// const A = "a";
// const B = "b";

console.log(solve(A, B));
