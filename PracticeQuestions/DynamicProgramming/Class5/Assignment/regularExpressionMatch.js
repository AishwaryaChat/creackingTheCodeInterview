// Regular Expression Match

// Problem Description
// Implement wildcard pattern matching with support for ' ? ' and ' * ' for strings A and B.

// ' ? ' : Matches any single character.
// ' * ' : Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Problem Constraints
// 1 <= length(A), length(B) <= 10^4

// Input Format
// The first argument of input contains a string A.
// The second argument of input contains a string B.

// Output Format
// Return 1 if the patterns match else return 0.

// Example Input
// Input 1:

//  A = "aaa"
//  B = "a*"
// Input 2:

//  A = "acz"
//  B = "a?a"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  Since '*' matches any sequence of characters. Last two 'a' in string A will be match by '*'.
//  So, the pattern matches we return 1.
// Explanation 2:

//  '?' matches any single character. First two character in string A will be match.
//  But the last character i.e 'z' != 'a'. Return 0.

// SC - O(N * M)
// TC - O(N * M)
function solve(A, B) {
  const N = A.length;
  const M = B.length;
  let DP = new Array(N + 1).fill().map((a) => new Array(M + 1).fill(false));
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (i === 0 && j === 0) DP[i][j] = true;
      else if (j === 0) DP[i][j] = false;
      else if (i === 0) DP[i][j] = B[j - 1] === "*" ? DP[i][j - 1] : false;
      else if (A[i - 1] === B[j - 1]) DP[i][j] = DP[i - 1][j - 1];
      else if (A[i - 1] !== B[j - 1]) {
        if (B[j - 1] === "?") DP[i][j] = DP[i - 1][j - 1];
        else if (B[j - 1] === "*") DP[i][j] = DP[i - 1][j] || DP[i][j - 1];
      }
    }
  }
  return DP[N][M];
}

// Since N & M can be 10^4 so N*M space will go beyond 10^6 and so we will get MLE(Memory limit exceed) and hence we have to find solution where SC - O(M)
// The below solution is a non-working solution. I am working on this and will find a solution soon.
// function solveSpaceOptimized(A, B) {
//     const N = A.length;
//     const M = B.length;
//     let DP1 = new Array(M + 1).fill(false)
//     let DP = new Array(M + 1).fill(false)
//     for (let i = 0; i <= N; i++) {
//       for (let j = 0; j <= M; j++) {
//         if (i === 0 && j === 0) DP[j] = true;
//         else if (j === 0) DP[j] = false;
//         else if (i === 0) DP[j] = B[j - 1] === "*" ? DP[j - 1] : false;
//         else if (A[i - 1] === B[j - 1]) DP[j] = DP1[j - 1];
//         else if (A[i - 1] !== B[j - 1]) {
//           if (B[j - 1] === "?") DP[j] = DP1[j - 1];
//           else if (B[j - 1] === "*") DP[j] = DP1[j] || DP[j - 1];
//         }
//         console.log("i", i,"DP inside j", j, "loop", DP)
//       }
//       DP1 = DP.map(a => a)
//     }
//     return DP[M];
//   }

// const A = "aaa";
// const B = "a*";

// const A = "acz"
// const B = "a?a"

// const A = "aab"
// const B = "c*a*b"

const A = "bbcbabca";
const B = "*bcba?";

console.log(solve(A, B));
