// Cherry Pickup
// Hard
// company
// Mathworks
// Uber
// ServiceNow
// You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.

// 0 means the cell is empty, so you can pass through,
// 1 means the cell contains a cherry that you can pick up and pass through, or
// -1 means the cell contains a thorn that blocks your way.
// Return the maximum number of cherries you can collect by following the rules below:

// Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
// After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path cells.
// When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
// If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.

// Example 1:

// Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
// Output: 5
// Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
// 4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
// Then, the player went left, up, up, left to return home, picking up one more cherry.
// The total number of cherries picked up is 5, and this is the maximum possible.
// Example 2:

// Input: grid = [[1,1,-1],[1,-1,1],[-1,1,1]]
// Output: 0

// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 50
// grid[i][j] is -1, 0, or 1.
// grid[0][0] != -1
// grid[n - 1][n - 1] != -1

// TC - O(N^3)
// SC - O(N^3)
function findMax(N, grid, r1, c1, c2, dp) {
  const r2 = r1 + c1 - c2;
  const key = `${r1}_${c1}_${c2}`;
  if (
    N === r1 ||
    N === r2 ||
    N === c1 ||
    N === c2 ||
    grid[r1][c1] === -1 ||
    grid[r2][c2] === -1
  )
    return (dp[key] = Number.MIN_SAFE_INTEGER);
  else if (r1 === N - 1 && c1 === N - 1) return (dp[key] = grid[r1][r1]);
  else if (dp[key] !== undefined) return dp[key];
  else {
    ans = grid[r1][c1];
    if (c1 !== c2) ans += grid[r2][c2];
    ans += Math.max(
      findMax(N, grid, r1, c1 + 1, c2 + 1, dp),
      findMax(N, grid, r1 + 1, c1, c2 + 1, dp),
      findMax(N, grid, r1, c1 + 1, c2, dp),
      findMax(N, grid, r1 + 1, c1, c2, dp)
    );
    return (dp[key] = ans);
  }
}

function solve(grid) {
  const N = grid.length;
  const dp = {};
  findMax(N, grid, 0, 0, 0, dp);
  console.log("dp", dp);
  return Math.max(0, dp["0_0_0"]);
}

// const grid = [
//   [0, 1, -1],
//   [1, 0, -1],
//   [1, 1, 1],
// ];

// const grid = [
//   [1, 1, -1],
//   [1, -1, 1],
//   [-1, 1, 1],
// ];

const grid = [[0]];

console.log(solve(grid));
