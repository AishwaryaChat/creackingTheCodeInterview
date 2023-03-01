// Shortest Path in Binary Matrix
// Medium
// company
// Facebook
// Amazon
// Google
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

// Example 1:

// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:

// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1

// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");
// TC - O(N^2)
// SC - O(N^2), can be reduced to O(1) if we are allowed to modify given griid
const cx = [-1, -1, 0, 1, 1, 1, 0, -1];
const cy = [0, 1, 1, 1, 0, -1, -1, -1];
function solve(grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
  const queue = new Queue();
  queue.enqueue([0, 0, 1]);
  let visited = new Array(n).fill().map(() => new Array(n).fill(false));
    visited[0][0] = true;
    while (!queue.isEmpty()) {
    const [x, y, d] = queue.dequeue();
    if (x === n - 1 && y === n - 1) return d;
    for (let i = 0; i < cx.length; i++) {
      const k = x + cx[i];
      const l = y + cy[i];
      if (
        k >= 0 &&
        k < n &&
        l >= 0 &&
        l < n &&
        !visited[k][l] &&
        grid[k][l] === 0
      ) {
        queue.enqueue([k, l, d + 1]);
        visited[k][l] = true;
      }
    }
  }
  return -1;
}

// const grid = [
//   [0, 1],
//   [1, 0],
// ];
// Output: 2

// const grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4

const grid = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 1, 1],
];
// Output: -1

console.log(solve(grid));
