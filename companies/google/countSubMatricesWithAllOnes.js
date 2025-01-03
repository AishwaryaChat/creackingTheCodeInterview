// Count Submatrices With All Ones
// Medium
// company
// Google
// Microsoft
// Amazon
// Given an m x n binary matrix mat, return the number of submatrices that have all ones.

// Example 1:

// Input: mat = [[1,0,1],[1,1,0],[1,1,0]]
// Output: 13
// Explanation:
// There are 6 rectangles of side 1x1.
// There are 2 rectangles of side 1x2.
// There are 3 rectangles of side 2x1.
// There is 1 rectangle of side 2x2.
// There is 1 rectangle of side 3x1.
// Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
// Example 2:

// Input: mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
// Output: 24
// Explanation:
// There are 8 rectangles of side 1x1.
// There are 5 rectangles of side 1x2.
// There are 2 rectangles of side 1x3.
// There are 4 rectangles of side 2x1.
// There are 2 rectangles of side 2x2.
// There are 2 rectangles of side 3x1.
// There is 1 rectangle of side 3x2.
// Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.

// Constraints:

// 1 <= m, n <= 150
// mat[i][j] is either 0 or 1.

function helper(x, y, matrix, N, M) {
  let bound = M;
  let count = 0;
  for (let i = x; i < N; i++) {
    for (let j = y; j < bound; j++) {
      if (matrix[i][j]) count += 1;
      else bound = j;
    }
  }
  return count;
}

function solve(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      count += helper(i, j, matrix, N, M);
    }
  }
  return count;
}

// TC - O(N^2 * M^2)
// SC - O(1)
function getCountMatrix(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  let countMatrix = new Array(N).fill().map((a) => new Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    let count = 0;
    for (let j = M - 1; j >= 0; j--) {
      if (matrix[i][j]) {
        count++;
      } else {
        count = 0;
      }
      countMatrix[i][j] = count;
    }
  }
  return countMatrix;
}

// TC - O(N*M*N)
// SC - O(N*M)
function solveOptimised(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  const countMatrix = getCountMatrix(matrix);
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let count = Number.MAX_SAFE_INTEGER;
      for (let k = i; k < N; k++) {
        count = Math.min(count, countMatrix[k][j]);
        ans += count;
      }
    }
  }
  return ans;
}

const mat = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 1, 0],
];
// Output: 13

// const mat = [
//   [0, 1, 1, 0],
//   [0, 1, 1, 1],
//   [1, 1, 1, 0],
// ];
// Output: 24

// TC - O(N*M)
// SC - O(N*M)
function bottomUpSolution(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  for (let j = 0; j < m; j++) matrix[0][j] = matrix[0][j];
  for (let i = 0; i < n; i++) matrix[i][0] = matrix[i][0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0 || matrix[i][j] === 0) continue;
      matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans += matrix[i][j];
    }
  }
  return ans;
}

function topDownSolution(matrix) {
  let dp = {};
  let count = 0;
  function dfs(matrix, i, j, len) {
    if (i + len >= matrix.length || j + len >= matrix[0].length) return 0;
    if (dp[`${i}_${j}`] !== undefined) return dp[`${i}_${j}`];
    let ans = 0;
    for (let m = i; m <= i + len; m++) {
      for (let n = j; n <= j + len; n++) {
        if (matrix[m][n] === 0) return 0;
      }
    }
    return (dp[`${i}_${j}`] = 1 + dfs(matrix, i, j, len + 1));
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      count += dfs(matrix, i, j, 0);
    }
  }
  return count;
}

console.log(solveOptimised(mat));
