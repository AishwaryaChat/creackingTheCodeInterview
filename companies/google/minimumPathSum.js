// Minimum Path Sum
// Medium
// company
// Google
// Goldman Sachs
// Amazon
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100

// TC - O(M*N)
// SC - O(M*N)
function solve(grid) {
  const M = grid.length;
  const N = grid[0].length;
  let dp = new Array(M).fill().map(() => new Array(N).fill(0));
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (i === 0 && j !== 0) dp[i][j] = grid[i][j] + dp[i][j - 1];
      else if (j === 0 && i !== 0) dp[i][j] = grid[i][j] + dp[i - 1][j];
      else if (j !== 0 && i !== 0)
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      else dp[i][j] = grid[i][j];
    }
  }
  return dp[M - 1][N - 1];
}

// TC - O(M*N)
// SC - O(N)
function solveSpaceOptimised(grid) {
  const M = grid.length;
  const N = grid[0].length;
  let dp = new Array(N).fill(0);
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (i === 0 && j !== 0) dp[j] = grid[i][j] + dp[j - 1];
      else if (j === 0 && i !== 0) dp[j] = grid[i][j] + dp[j];
      else if (j !== 0 && i !== 0)
        dp[j] = grid[i][j] + Math.min(dp[j - 1], dp[j]);
      else dp[j] = grid[i][j];
    }
  }
  return dp[N - 1];
}

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
// Output: 7

// const grid = [[1,2,3],[4,5,6]]
// Output: 12

console.log(solveSpaceOptimised(grid));
