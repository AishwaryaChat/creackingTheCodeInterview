// Shortest Bridge
// Medium
// 3.5K
// 147
// company
// Amazon
// company
// Google
// company
// Microsoft
// You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

// An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

// You may change 0's to 1's to connect the two islands to form one island.

// Return the smallest number of 0's you must flip to connect the two islands.

// Example 1:

// Input: grid = [[0,1],[1,0]]
// Output: 1
// Example 2:

// Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
// Output: 2
// Example 3:

// Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Output: 1

// Constraints:

// n == grid.length == grid[i].length
// 2 <= n <= 100
// grid[i][j] is either 0 or 1.
// There are exactly two islands in grid.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");
// TC - O(N^2)
// SC - O(N^2) - visited and stack space
// The solution is given using multi source bfs
const cx = [-1, 0, 1, 0];
const cy = [0, 1, 0, -1];

function dfs(x, y, grid, N, visited, queue) {
  visited[x][y] = true;
  for (let i = 0; i < cx.length; i++) {
    const n = x + cx[i];
    const m = y + cy[i];
    if (
      n >= 0 &&
      n < N &&
      m >= 0 &&
      m < N &&
      !visited[n][m] &&
      grid[n][m] === 1
    ) {
      queue.enqueue([n, m, 0]);
      visited[n][m] = true;
      dfs(n, m, grid, N, visited, queue);
    }
  }
}
function bfs(grid, queue, visited, N) {
  while (!queue.isEmpty()) {
    const [x, y, dist] = queue.dequeue();
    visited[x][y] = true;
    for (let i = 0; i < cx.length; i++) {
      const n = x + cx[i];
      const m = y + cy[i];
      if (n >= 0 && n < N && m >= 0 && m < N && !visited[n][m]) {
        if (grid[n][m] === 1) return dist;
        visited[n][m] = true;
        queue.enqueue([n, m, dist + 1]);
      }
    }
  }
}

function solveBFS(grid) {
  const N = grid.length;
  let flag = false;

  let visited = new Array(N).fill().map(() => new Array(N).fill(false));
  const queue = new Queue();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        flag = true;
        queue.enqueue([i, j, 0]);
        dfs(i, j, grid, N, visited, queue);
        return bfs(grid, queue, visited,N);
      }
    }
  }
}

// const grid = [
//   [0, 1],
//   [1, 0],
// ];
// Output: 1

// const grid = [
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 1],
// ];
// Output: 2

const grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];
// Output: 1

// const grid = [
//   [0, 1, 0, 0, 0, 0],
//   [0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [1, 1, 0, 0, 0, 0],
// ];

console.log(solveBFS(grid));
