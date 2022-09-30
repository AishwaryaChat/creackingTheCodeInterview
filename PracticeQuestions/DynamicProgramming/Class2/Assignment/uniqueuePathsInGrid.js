// Unique Paths in a Grid

// Problem Description
// Given a grid of size n * m, lets assume you are starting at (1,1) and your goal is to reach (n, m). At any instance, if you are on (x, y), you can either go to (x, y + 1) or (x + 1, y).

// Now consider if some obstacles are added to the grids. How many unique paths would there be? An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Problem Constraints
// 1 <= n, m <= 100
// A[i][j] = 0 or 1

// Input Format
// Firts and only argument A is a 2D array of size n * m.

// Output Format
// Return an integer denoting the number of unique paths from (1, 1) to (n, m).

// Example Input
// Input 1:

//  A = [
//         [0, 0, 0]
//         [0, 1, 0]
//         [0, 0, 0]
//      ]
// Input 2:

//  A = [
//         [0, 0, 0]
//         [1, 1, 1]
//         [0, 0, 0]
//      ]

// Example Output
// Output 1:

//  2
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  Possible paths to reach (n, m): {(1, 1), (1, 2), (1, 3), (2, 3), (3, 3)} and {(1 ,1), (2, 1), (3, 1), (3, 2), (3, 3)}
//  So, the total number of unique paths is 2.
// Explanation 2:

//  It is not possible to reach (n, m) from (1, 1). So, ans is 0.

// function bottomUpApproach()
// Bottom up approach
// We always know the answer for last cell, if it's original value is 1 then
// directly we can return 0 because there will not be any path to reach last cell
// otherwise we will move in all cells
// for each cell the possible paths will be addition of possibile paths for its right and down cell
// Answer will be dp[0][0]
// TC = O(n*m)
// SC = O(n*m)
function solve(A) {
  let dp = [];
  let n = A.length;
  let m = A[0].length;
  if (A[n - 1][m - 1] === 1) return 0;
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      dp[i][j] = 0;
    }
  }
  dp[n - 1][m - 1] = 1;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i == n - 1 && j == m - 1) {
        dp[i][j] = 1;
      } else if (i == n - 1) {
        dp[i][j] = A[i][j] > 0 ? 0 : dp[i][j + 1];
      } else if (j == m - 1) {
        dp[i][j] = A[i][j] > 0 ? 0 : dp[i + 1][j];
      } else {
        dp[i][j] = A[i][j] > 0 ? 0 : dp[i + 1][j] + dp[i][j + 1];
      }
    }
  }
  return dp[0][0];
}

// function solveOpmitimsed(A) {
//   let n = A.length;
//   let m = A[0].length;
//   let dp = new Array(m).fill(0);
//   let dpiPlus1 = new Array(m).fill(0);
//   if (A[n - 1][m - 1] === 1) return 0;

//   dp[m - 1] = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = m - 1; j >= 0; j--) {
//       if (i !== n - 1 && j !== m - 1) {
//         if (i == n - 1) {
//           dp[j] = A[i][j] > 0 ? 0 : dp[j + 1];
//         } else if (j == m - 1) {
//           dp[j] = A[i][j] > 0 ? 0 : dpiPlus1[j];
//         } else {
//           dp[j] = A[i][j] > 0 ? 0 : dpiPlus1[j] + dp[j + 1];
//         }
//       }
//       dpiPlus1 = dp.map((a) => a);
//     }
//   }
//   console.log(dp);
//   return dp[0] + dpiPlus1[0];
// }

// Recursive solution

function topDown(A, dp, i, j, n, m) {
  if (i === n && j === m) {
    dp[i][j] = 1;
    return 1;
  }
  if (A[i][j] === 1) return 0;
  if (i === n)
    return dp[i][j + 1] ? dp[i][j + 1] : topDown(A, dp, i, j + 1, n, m);
  if (j === m)
    return dp[i + 1][j] ? dp[i + 1][j] : topDown(A, dp, i + 1, j, n, m);
  const left = dp[i + 1][j] ? dp[i + 1][j] : topDown(A, dp, i + 1, j, n, m);
  const right = dp[i][j + 1] ? dp[i][j + 1] : topDown(A, dp, i, j + 1, n, m);
  dp[i][j] = left + right;
  return dp[i][j];
}

function solveOptimised(A) {
  let n = A.length - 1;
  let m = A[0].length - 1;
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = undefined;
    }
  }
  if (A[n][m] === 1) return 0;
  return topDown(A, dp, 0, 0, n, m);
}

const A = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

console.log(solveOptimised(A));
