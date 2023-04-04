// Maximal Square
// Medium
// company
// TikTok
// Google
// Paypal
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4
// Example 2:

// Input: matrix = [["0","1"],["1","0"]]
// Output: 1
// Example 3:

// Input: matrix = [["0"]]
// Output: 0

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

// TC - O((n*m)^2)
// SC - O(1)
function solve(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        let sqLen = 1;
        let flag = true;
        while (sqLen + i < n && sqLen + j < m && flag) {
          for (let x = j; x <= sqLen + j; x++) {
            if (matrix[sqLen + i][x] !== "1") {
              flag = false;
              break;
            }
          }
          if (flag) {
            for (let y = i; y <= sqLen + i; y++) {
              if (matrix[y][sqLen + j] !== "1") {
                flag = false;
                break;
              }
            }
            if (flag) sqLen += 1;
          }
        }
        max = Math.max(max, sqLen);
      }
    }
  }
  return max * max;
}

// dynamic programming
// TC - O(n*m)
// SC - O(n*m)
function solveOptmised(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
        console.log(dp);
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
}

// dynamic programming
// TC - O(n*m)
// SC - O(n)
function solveSpaceOptmised(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const dp = new Array(n + 1).fill(0);
  let max = 0;
  let prev = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      let temp = dp[j];
      if (matrix[i - 1][j - 1] === "1") {
        dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1;
        max = Math.max(max, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }
  return max * max;
}

// const matrix = [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
// Output: 4

const matrix = [
  ["0", "1"],
  ["1", "0"],
];
// Output: 1

// const matrix = [["0"]]
// Output: 0

console.log(solveSpaceOptmised(matrix));
