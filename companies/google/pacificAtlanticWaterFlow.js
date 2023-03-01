// Pacific Atlantic Water Flow
// Medium
// company
// Amazon
// Google
// TikTok
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Example 1:

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
// Example 2:

// Input: heights = [[1]]
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

// Constraints:

// m == heights.length
// n == heights[r].length
// 1 <= m, n <= 200
// 0 <= heights[r][c] <= 10^5

// TC - O(N*M)
// SC - O(N*M), stack space
// This can also be solved with BFS with same Time complexity

const cx = [-1, 0, 1, 0];
const cy = [0, 1, 0, -1];

function dfs(heights, x, y, n, m, reachable) {
  reachable[x][y] = true;
  for (let i = 0; i < cx.length; i++) {
    const l = x + cx[i];
    const k = y + cy[i];
    if (
      l >= 0 &&
      l < n &&
      k >= 0 &&
      k < m &&
      !reachable[l][k] &&
      heights[l][k] >= heights[x][y]
    ) {
      dfs(heights, l, k, n, m, reachable);
    }
  }
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function solve(heights) {
  const n = heights.length;
  const m = heights[0].length;
  let pacificReachable = new Array(n)
    .fill()
    .map(() => new Array(m).fill(false));
  let atlanticReachable = new Array(n)
    .fill()
    .map(() => new Array(m).fill(false));
  for (let j = 0; j < m; j++) {
    dfs(heights, 0, j, n, m, atlanticReachable);
    dfs(heights, n - 1, j, n, m, pacificReachable);
  }

  for (let i = 0; i < n; i++) {
    dfs(heights, i, 0, n, m, atlanticReachable);
    dfs(heights, i, m - 1, n, m, pacificReachable);
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (pacificReachable[i][j] && atlanticReachable[i][j]) ans.push([i, j]);
    }
  }
  return ans;
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// const heights = [[1]]
// Output: [[0,0]]

console.log(solve(heights));
