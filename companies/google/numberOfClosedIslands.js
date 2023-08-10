// 1254. Number of Closed Islands
// Medium
// company
// Google
// Amazon
// Microsoft
// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

// Example 1:

// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation:
// Islands in gray are closed because they are completely surrounded by water (group of 1s).
// Example 2:

// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1
// Example 3:

// Input: grid = [[1,1,1,1,1,1,1],
//                [1,0,0,0,0,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,1,0,1,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,0,0,0,0,1],
//                [1,1,1,1,1,1,1]]
// Output: 2

// Constraints:

// 1 <= grid.length, grid[0].length <= 100
// 0 <= grid[i][j] <=1

// TC - O(N*M * 4)
// SC - O(N*M) - recursion space

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function isLand(grid, row, col, N, M) {
  grid[row][col] = 2;
  let surrounded = 0;
  for (let i = 0; i < 4; i++) {
    const x = row + directions[i][0];
    const y = col + directions[i][1];
    if (x >= 0 && x < N && y >= 0 && y < M) {
      if (
        grid[x][y] === 1 ||
        grid[x][y] === 2 ||
        (grid[x][y] === 0 && isLand(grid, x, y, N, M))
      ) {
        surrounded += 1;
      }
    }
  }
  return surrounded === 4;
}

function solve(grid) {
  const N = grid.length;
  const M = grid[0].length;
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 0) {
        if (isLand(grid, i, j, N, M)) ans += 1;
      }
    }
  }
  return ans;
}

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
// Output: 2;

// const grid = [
//   [0, 0, 1, 0, 0],
//   [0, 1, 0, 1, 0],
//   [0, 1, 1, 1, 0],
// ];
// Output: 1;

// const grid = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 1, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1, 0, 1],
//   [1, 0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ];
// Output: 2

console.log(solve(grid));
