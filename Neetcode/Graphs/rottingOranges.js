// Rotting Oranges
// Medium
// company
// Amazon
// Lyft
// Uber
// Google
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(N*M)
// SC - O(N*M)

const cx = [-1, 0, 1, 0];
const cy = [0, 1, 0, -1];

function solve(grid) {
  const N = grid.length;
  const M = grid[0].length;
  let queue = new Queue();
  let freshOranges = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 2) queue.enqueue([i, j, 0]);
      if (grid[i][j] === 1) freshOranges += 1;
    }
  }
  let ans = 0;
  while (!queue.isEmpty()) {
    const [x, y, t] = queue.dequeue();
    ans = Math.max(ans, t);
    for (let i = 0; i < cx.length; i++) {
      const n = x + cx[i];
      const m = y + cy[i];
      if (n >= 0 && n < N && m >= 0 && m < M && grid[n][m] === 1) {
        grid[n][m] = 2;
        freshOranges -= 1;
        queue.enqueue([n, m, t + 1]);
      }
    }
  }

  return freshOranges === 0 ? ans : -1;
}

// const grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];
// Output: 4
// Example 2:

const grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// const grid = [[0,2]]
// Output: 0

console.log(solve(grid));
