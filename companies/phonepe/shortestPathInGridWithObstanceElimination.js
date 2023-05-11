// Shortest Path in a Grid with Obstacles Elimination
// Hard
// company
// Pinterest
// Google
// Amazon
// Phonepe
// You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

// Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

// Example 1:

// Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
// Output: 6
// Explanation:
// The shortest path without eliminating any obstacle is 10.
// The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
// Example 2:

// Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
// Output: -1
// Explanation: We need to eliminate at least two obstacles to find such a walk.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 40
// 1 <= k <= m * n
// grid[i][j] is either 0 or 1.
// grid[0][0] == grid[m - 1][n - 1] == 0

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(M * N * K)
// SC - O(M * N * K)
function solve(grid, k) {
  const M = grid.length;
  const N = grid[0].length;
  if (k >= M + N - 2) return M + N - 2;
  const visited = {};
  const queue = new Queue();
  queue.enqueue([0, 0, k, 0]);
  const cx = [0, 1, 0, -1];
  const cy = [1, 0, -1, 0];
  while (!queue.isEmpty()) {
    const [x, y, obstacles, dist] = queue.dequeue();
    if (x === M - 1 && y === N - 1) return dist;
    visited[`${x}_${y}_${obstacles}`] = true;
    for (let i = 0; i < 4; i++) {
      const m = x + cx[i];
      const n = y + cy[i];
      const key = `${m}_${n}_${obstacles}`;
      if (m < M && m >= 0 && n >= 0 && n < N && !visited[key]) {
        if (grid[m][n] === 1) {
          if (obstacles > 0) queue.enqueue([m, n, obstacles - 1, dist + 1]);
        } else {
          queue.enqueue([m, n, obstacles, dist + 1]);
        }
        visited[key] = true;
      }
    }
  }
  return -1;
}

// const grid = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [0, 0, 0],
//   [0, 1, 1],
//   [0, 0, 0],
// ];
// const k = 1;
// Output: 6

const grid = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 0, 0],
];
const k = 1;
// Output: -1

console.log(solve(grid, k));
