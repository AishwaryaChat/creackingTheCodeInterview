// Paths in Matrix Whose Sum Is Divisible by K
// Hard
// company
// Google
// You are given a 0-indexed m x n integer matrix grid and an integer k. You are currently at position (0, 0) and you want to reach position (m - 1, n - 1) moving only down or right.

// Return the number of paths where the sum of the elements on the path is divisible by k. Since the answer may be very large, return it modulo 109 + 7.

// Example 1:

// Input: grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3
// Output: 2
// Explanation: There are two paths where the sum of the elements on the path is divisible by k.
// The first path highlighted in red has a sum of 5 + 2 + 4 + 5 + 2 = 18 which is divisible by 3.
// The second path highlighted in blue has a sum of 5 + 3 + 0 + 5 + 2 = 15 which is divisible by 3.
// Example 2:

// Input: grid = [[0,0]], k = 5
// Output: 1
// Explanation: The path highlighted in red has a sum of 0 + 0 = 0 which is divisible by 5.
// Example 3:

// Input: grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1
// Output: 10
// Explanation: Every integer is divisible by 1 so the sum of the elements on every possible path is divisible by k.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 5 * 10^4
// 1 <= m * n <= 5 * 10^4
// 0 <= grid[i][j] <= 100
// 1 <= k <= 50

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

const cx = [0, 1];
const cy = [1, 0];

// TC - O(M*N*sums)
// This will lead to TLE
// SC - O(M*N*sums)
function dfs(x, y, grid, k, N, M, dp, sum) {
  if (x === N - 1 && y === M - 1) {
    return sum % k === 0 ? 1 : 0;
  }
  let key = `${x}_${y}_${sum}`;
  if (dp[key] !== undefined) return dp[key];
  let ans = 0;
  for (let i = 0; i < cx.length; i++) {
    const n = x + cx[i];
    const m = y + cy[i];
    if (n >= 0 && n < N && m >= 0 && m < M) {
      ans += dfs(n, m, grid, k, N, M, dp, sum + grid[n][m]);
    }
  }
  return (dp[key] = ans);
}

function solve(grid, k) {
  const N = grid.length;
  const M = grid[0].length;
  const dp = {}
  let ans = dfs(0, 0, grid, k, N, M, dp, grid[0][0]);
  return ans;
}

function solveBFS(grid, k) {
  const N = grid.length;
  const M = grid[0].length;
  const queue = new Queue();
  queue.enqueue([0, 0, grid[0][0]]);
  const visited = new Array(N).fill().map(() => new Array(M).fill(false));

  let ans = 0;
  while (!queue.isEmpty()) {
    const [x, y, dist] = queue.dequeue();
    if (x === N - 1 && y === M - 1 && dist % k === 0) ans += 1;
    visited[x][y] = true;
    for (let i = 0; i < cx.length; i++) {
      const n = x + cx[i];
      const m = y + cy[i];
      if (n >= 0 && n < N && m >= 0 && m < M && !visited[n][m]) {
        queue.enqueue([n, m, dist + grid[n][m]]);
      }
    }
  }
  return ans;
}

// The below solution is not relying on the sum states rather it is replying on sumMod(Sum of grid[i][j]%k) states, this way at any point during execution we will have only M*N*k states
// TC - O(M*N*k)
// TC - O(M*N*k)
const MOD = Math.pow(10, 9) + 7

function optimisedDFS(i, j, sumMod, dp, grid, k) {
  if (i === grid.length && j === grid[0].length) {
    return sumMod === 0 ? 1 : 0
  }
  if (dp[i][j][sumMod] !== undefined) return dp[i][j][sumMod]
  let ans = 0
  if (i + 1 < grid.length) {
    ans = (ans + optimisedDFS(i + 1, j, (sumMod + grid[i + 1][j]) % MOD)) % MOD
  }

  if (j + 1 < grid[0].length) {
    ans = (ans + optimisedDFS(i, j + 1, (sumMod + grid[i][j + 1]) % MOD)) % MOD
  }
  return dp[i][j][sumMod] = ans
}

function solveOptimised(grid, k) {
  const dp = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill().map(() => new Array(k)))
  return optimisedDFS(0, 0, grid[0][0] % k, dp, grid, k)
}

const grid = [
  [5, 2, 4],
  [3, 0, 5],
  [0, 7, 2],
];
const k = 3;
// Output: 2

// const grid = [[0, 0]];
// const k = 5;
// Output: 1

// const grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]]
// const k = 1
// Output: 10

console.log(solveOptimised(grid, k));
