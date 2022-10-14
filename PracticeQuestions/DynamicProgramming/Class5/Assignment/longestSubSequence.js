// Longest Common Subsequence

// Problem Description
// Given two strings A and B. Find the longest common subsequence ( A sequence which does not need to be contiguous), which is common in both the strings.

// You need to return the length of such longest common subsequence.

// Problem Constraints
// 1 <= Length of A, B <= 1005

// Input Format
// First argument is a string A.
// Second argument is a string B.

// Output Format
// Return an integer denoting the length of the longest common subsequence.

// Example Input
// Input 1:

//  A = "abbcdgf"
//  B = "bbadcgf"
// Input 2:

//  A = "aaaaaa"
//  B = "ababab"

// Example Output
// Output 1:

//  5
// Output 2:

//  3

// Example Explanation
// Explanation 1:

//  The longest common subsequence is "bbcgf", which has a length of 5.
// Explanation 2:

//  The longest common subsequence is "aaa", which has a length of 3.

// TC - O(N*M)
// SC - O(N*M)

function solve(A, B) {
  const N = A.length;
  const M = B.length;
  let dp = [];
  for (let i = 0; i <= N; i++) {
    dp[i] = [];
    for (let j = 0; j <= M; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[N][M];
}

// const A = "abbcdgf";
// const B = "bbadcgf";

const A = "aaaaaa";
const B = "ababab";

console.log(solve(A, B));
