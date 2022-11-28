// Number of Islands
// Medium

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// TC - O(N*M)
// SC - O(N*M) - recursion stack space(Total number of 1's in the matrix)

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function dfs(i, j, N, M, A) {
  A[i][j] = "2";
  for (let k = 0; k < 8; k++) {
    const u = i + dx[k];
    const v = j + dy[k];
    if (u >= 0 && v >= 0 && u < N && v < M && A[u][v] === "1") {
      dfs(u, v, N, M, A);
    }
  }
}

function solve(A) {
  let ans = 0;
  const N = A.length;
  const M = A[0].length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] === "1") {
        ans++;
        dfs(i, j, N, M, A);
      }
    }
  }
  return ans;
}

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

// const grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];

console.log(solve(grid));
