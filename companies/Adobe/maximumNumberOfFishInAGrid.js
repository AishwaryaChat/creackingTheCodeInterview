// Maximum Number of Fish in a Grid
// Medium
// company
// Adobe
// You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

// A land cell if grid[r][c] = 0, or
// A water cell containing grid[r][c] fish, if grid[r][c] > 0.
// A fisher can start at any water cell (r, c) and can do the following operations any number of times:

// Catch all the fish at cell (r, c), or
// Move to any adjacent water cell.
// Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.

// An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

// Example 1:

// Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.
// Example 2:

// Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// Output: 1
// Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// 0 <= grid[i][j] <= 10

// TC - O(M*N)
// SC - O(M*N)
const cx = [-1, 0, 1, 0];
const cy = [0, 1, 0, -1];

function bfs(i, j, grid, visited) {
  const key = `${i}_${j}`;
  visited[key] = true;
  let fishes = grid[i][j];
  for (let l = 0; l < cx.length; l++) {
    const x = i + cx[l];
    const y = j + cy[l];
    if (
      !visited[`${x}_${y}`] &&
      x < grid.length &&
      x >= 0 &&
      y < grid[i].length &&
      y >= 0 &&
      grid[x][y] > 0
    ) {
      fishes += bfs(x, y, grid, visited);
    }
  }
  return fishes;
}

function solve(grid) {
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;
      let visited = {};
      ans = Math.max(ans, bfs(i, j, grid, visited));
    }
  }
  return ans === Number.MIN_SAFE_INTEGER ? 0 : ans;
}

// const grid = [
//   [0, 2, 1, 0],
//   [4, 0, 0, 3],
//   [1, 0, 0, 4],
//   [0, 3, 2, 0],
// ];
// Output: 7

// const grid = [
//   [1, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 1],
// ];
// Output: 1

const grid = [[0, 3, 8]];

console.log(solve(grid));
