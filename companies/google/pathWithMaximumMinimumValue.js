// Path With Maximum Minimum Value
// Medium
// 1.2K
// 116
// company
// Google
// company
// DoorDash
// company
// Facebook
// Given an m x n integer matrix grid, return the maximum score of a path starting at (0, 0) and ending at (m - 1, n - 1) moving in the 4 cardinal directions.

// The score of a path is the minimum value in that path.

// For example, the score of the path 8 → 4 → 5 → 9 is 4.

// Example 1:

// Input: grid = [[5,4,5],[1,2,6],[7,4,6]]
// Output: 4
// Explanation: The path with the maximum score is highlighted in yellow.
// Example 2:

// Input: grid = [[2,2,1,2,2,2],[1,2,2,2,1,2]]
// Output: 2
// Example 3:

// Input: grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// 0 <= grid[i][j] <= 10^9

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(k*N*M), where k is the range to search for score
function solve(grid) {
  const N = grid.length;
  const M = grid[0].length;
  const cx = [-1, 0, 1, 0];
  const cy = [0, 1, 0, -1];
  for (
    let score = Math.min(grid[0][0], grid[N - 1][M - 1]);
    score >= 0;
    score--
  ) {
    let queue = new Queue();
    queue.enqueue([0, 0, grid[0][0]]);
    let visited = new Array(N).fill().map(() => new Array(M).fill(false));
    while (!queue.isEmpty()) {
      const [i, j] = queue.dequeue();
      if (i === N - 1 && j === M - 1) return score;
      visited[i][j] = true;
      for (let k = 0; k < cx.length; k++) {
        const n = i + cx[k];
        const m = j + cy[k];
        if (
          n >= 0 &&
          n < N &&
          m >= 0 &&
          m < M &&
          !visited[n][m] &&
          grid[n][m] >= score
        ) {
          queue.enqueue([n, m]);
          visited[n][m] = true;
        }
      }
    }
  }
}

function pathExist(grid, score) {
  if (grid[0][0] < score) return false;
  const N = grid.length;
  const M = grid[0].length;
  const cx = [-1, 0, 1, 0];
  const cy = [0, 1, 0, -1];
  let queue = new Queue();
  queue.enqueue([0, 0, grid[0][0]]);
  let visited = new Array(N).fill().map(() => new Array(M).fill(false));
  while (!queue.isEmpty()) {
    const [i, j] = queue.dequeue();
    if (i === N - 1 && j === M - 1) return true;
    visited[i][j] = true;
    for (let k = 0; k < cx.length; k++) {
      const n = i + cx[k];
      const m = j + cy[k];
      if (
        n >= 0 &&
        n < N &&
        m >= 0 &&
        m < M &&
        !visited[n][m] &&
        grid[n][m] >= score
      ) {
        queue.enqueue([n, m]);
        visited[n][m] = true;
      }
    }
  }
  return false;
}

// TC - O(N*M*log(k)), where k is the range to search for score
function solveBFSBinarySearch() {
  const N = grid.length;
  const M = grid[0].length;

  let low = 0;
  let high = Math.min(grid[0][0], grid[N - 1][M - 1]);
  while (low <= high) {
    let score = low + Math.floor((high - low) / 2);
    const midPathExist = pathExist(grid, score);
    if (midPathExist && !pathExist(grid, score + 1)) return score;
    if (midPathExist) {
      low = score + 1;
    } else {
      high = score - 1;
    }
  }
  return low;
}

// const grid = [
//   [5, 4, 5],
//   [1, 2, 6],
//   [7, 4, 6],
// ];
// Output - 4
// const grid = [
//   [2, 2, 1, 2, 2, 2],
//   [1, 2, 2, 2, 1, 2],
// ];
// Output - 2

const grid = [
  [0, 1, 0, 0, 0, 1],
  [0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1],
];
// Output - 0
console.log(solveBFSBinarySearch(grid));
