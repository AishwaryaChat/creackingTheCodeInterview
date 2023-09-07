// Maximum Strictly Increasing Cells in a Matrix
// Solved
// Hard
// Topics
// Companies
// Google
// Amazon
// Hint
// Given a 1-indexed m x n integer matrix mat, you can select any cell in the matrix as your starting cell.

// From the starting cell, you can move to any other cell in the same row or column, but only if the value of the destination cell is strictly greater than the value of the current cell. You can repeat this process as many times as possible, moving from cell to cell until you can no longer make any moves.

// Your task is to find the maximum number of cells that you can visit in the matrix by starting from some cell.

// Return an integer denoting the maximum number of cells that can be visited.

// Example 1:

// Input: mat = [[3,1],[3,4]]
// Output: 2
// Explanation: The image shows how we can visit 2 cells starting from row 1, column 2. It can be shown that we cannot visit more than 2 cells no matter where we start from, so the answer is 2.
// Example 2:

// Input: mat = [[1,1],[1,1]]
// Output: 1
// Explanation: Since the cells must be strictly increasing, we can only visit one cell in this example.
// Example 3:

// Input: mat = [[3,1,6],[-9,5,7]]
// Output: 4
// Explanation: The image above shows how we can visit 4 cells starting from row 2, column 1. It can be shown that we cannot visit more than 4 cells no matter where we start from, so the answer is 4.

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 10^5
// 1 <= m * n <= 10^5
// -10^5 <= mat[i][j] <= 10^5

// The logic here is to first find all the unique values in the matrix, put them in an array and sort this array, also collect these values belong to which row and column in the matrix
// Then start from the maximum value in obtained, and check which all cells this value belong to and in that row and column what is the maximum value obtained so far
// So since we start from the highest element in the matrix, the maximum in its rol and col will be 0 and we will simply update answer for it as once, to count that element itsefl
// Then we will also have to update the maximum value for that row and column in the respective arrays for later use, this way we will do for all the vlaues
// At the end we will have the maximum answer for each cell and we will return the maximum value in the matrix

// TC - O(m*n)
// SC - O(n*m)
function solve(mat) {
  const m = mat.length;
  const n = mat[0].length;
  let valueIndices = {};
  let uniqueValues = [];
  let rowPaths = new Array(m).fill(0);
  let colPaths = new Array(n).fill(0);
  let temp = new Array(m).fill().map(() => new Array(n).fill(0));
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const value = mat[i][j];
      if (valueIndices[value] === undefined) {
        valueIndices[value] = [];
        uniqueValues.push(value);
      }
      valueIndices[value].push([i, j]);
    }
  }
  uniqueValues.sort((a, b) => b - a);
  for (let uni of uniqueValues) {
    for (let [i, j] of valueIndices[uni]) {
      temp[i][j] = Math.max(rowPaths[i], colPaths[j]) + 1;
    }
    for (let [i, j] of valueIndices[uni]) {
      rowPaths[i] = Math.max(temp[i][j], rowPaths[i]);
      colPaths[j] = Math.max(temp[i][j], colPaths[j]);
    }
  }
  for (let val of rowPaths) {
    ans = Math.max(ans, val);
  }
  for (let val of colPaths) {
    ans = Math.max(ans, val);
  }
  return ans;
}

const mat = [
  [1, 1],
  [1, 1],
];
// Output: 1

// const mat = [[3,1,6],[-9,5,7]]
// Output: 4

console.log(solve(mat));
