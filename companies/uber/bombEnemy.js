// Given an m x n matrix grid where each cell is either a wall 'W', an enemy 'E' or empty '0', return the maximum enemies you can kill using one bomb. You can only place the bomb in an empty cell.

// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since it is too strong to be destroyed.

// Example 1:

// Input: grid = [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
// Output: 3
// Example 2:

// Input: grid = [["W","W","W"],["0","0","0"],["E","E","E"]]
// Output: 1

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 500
// grid[i][j] is either 'W', 'E', or '0'.

// Calculating the number of enemies for a cell
// using DP
// One might argue that the time complexity should be O(W⋅H⋅(W+H)), judging from the detail that we run nested loop for each cell in grid. If this is the case, then the time complexity of our dynamic programming approach would be the same as the brute-force approach. Yet this is contradicted to the fact that by applying the dynamic programming technique we reduce the redundant calculation.

// To estimate overall time complexity, let us take another perspective. Concerning each cell in the grid, we assert that it would be visited exactly three times. The first visit is the case where we iterate through each cell in the grid in the outer loop. The second visit would occur when we need to calculate the row_hits that involves with the cell. And finally the third visit would occur when we calculate the value of col_hits that involves with the cell.

// Based on the above analysis, we can say that the overall time complexity of this dynamic programming approach is O(3⋅W⋅H)=O(W⋅H).

function solve(A) {
  const n = A.length;
  const m = A[0].length;
  let rowHits = 0;
  const colHits = new Array(m).fill(0);
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!j || A[i][j - 1] === "W") {
        rowHits = 0;
        for (let k = j; k < m && A[i][k] !== "W"; k++) {
          rowHits += A[i][k] === "E";
        }
      }
      if (!i || A[i - 1][j] === "W") {
        colHits[j] = 0;
        for (let k = i; k < n && A[k][j] !== "W"; k++) {
          colHits[j] += A[k][j] === "E";
        }
      }
      if (A[i][j] === "0") {
        result = Math.max(result, rowHits + colHits[j]);
      }
    }
  }
  return result;
}

const grid = [
  ["0", "E", "0", "0"],
  ["E", "0", "W", "E"],
  ["0", "E", "0", "0"],
];

// const grid = [["W", "E", "E", "E", "E", "0", "E", "E", "E", "E", "E", "W"]];
// const grid = [
//   ["W", "W", "W"],
//   ["0", "0", "0"],
//   ["E", "E", "E"],
// ];
console.log(solve(grid));
