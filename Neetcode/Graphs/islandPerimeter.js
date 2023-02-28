// Island Perimeter
// Easy
// company
// Bloomberg
// Apple
// Facebook
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4

// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.
// There is exactly one island in grid.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(N+E) for BFS, since we are traversing each cell once so TC - O(N^2)
function solve(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let visited = new Array(n).fill().map(() => new Array(m).fill(false));
  let sx = -1;
  let sy = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        sx = i;
        sy = j;
        break;
      }
    }
  }
  const queue = new Queue();
  let ans = 0;
  queue.enqueue([sx, sy]);
  let cx = [-1, 0, 1, 0];
  let cy = [0, 1, 0, -1];
  while (!queue.isEmpty()) {
    const [x, y] = queue.dequeue();
    visited[x][y] = true;
    for (let i = 0; i < cx.length; i++) {
      const k = x + cx[i];
      const l = y + cy[i];
      if (k < 0 || k >= n || l < 0 || l >= m || grid[k][l] === 0) {
        ans += 1;
      } else if (!visited[k][l]) {
        queue.enqueue([k, l]);
        visited[k][l] = true;
      }
    }
  }
  return ans;
}

// const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16

// const grid = [[1]]
// Output: 4

const grid = [[1, 0]];
// Output: 4

console.log(solve(grid));
