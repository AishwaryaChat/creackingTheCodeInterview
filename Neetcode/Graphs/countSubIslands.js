// Count Sub Islands
// Medium
// company
// Amazon
// Apple
// Twitter
// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

// Return the number of islands in grid2 that are considered sub-islands.

// Example 1:

// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
// Example 2:

// Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// Output: 2
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.

// Constraints:

// m == grid1.length == grid2.length
// n == grid1[i].length == grid2[i].length
// 1 <= m, n <= 500
// grid1[i][j] and grid2[i][j] are either 0 or 1.

let cx = [-1, 0, 1, 0];
let cy = [0, 1, 0, -1];

function dfs(grid1, grid2, x, y, n, m, ans) {
  for (let i = 0; i < cx.length; i++) {
    const k = x + cx[i];
    const l = y + cy[i];
    if (k >= 0 && k < n && l >= 0 && l < m) {
      if (grid2[k][l] === 1 && grid1[k][l] === 0) {
        grid2[k][l] = 0;
        ans.flag = false;
        dfs(grid1, grid2, k, l, n, m, ans);
      } else if (grid1[k][l] === 1 && grid2[k][l] == 1) {
        grid1[k][l] = 0;
        grid2[k][l] = 0;
        dfs(grid1, grid2, k, l, n, m, ans);
      }
    }
  }
  return ans;
}

// TC - O(N*M)
// SC - O(N*M)
function solve(grid1, grid2) {
  const n = grid1.length;
  const m = grid1[0].length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid2[i][j] === 1 && grid1[i][j] === 1) {
        grid1[i][j] = 0;
        grid2[i][j] = 0;
        const { flag } = dfs(grid1, grid2, i, j, n, m, { flag: true });
        if (flag) ans += 1;
      }
    }
  }
  return ans;
}

const grid1 = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
];
const grid2 = [
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
];
// Output: 3

// const grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]]
// const grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// Output: 2

console.log(solve(grid1, grid2));
