// Black Shapes

// Problem Description

// Given character matrix A of O's and X's, where O = white, X = black.

// Return the number of black shapes. A black shape consists of one or more adjacent X's (diagonals not included)

// Problem Constraints

// 1 <= |A|,|A[0]| <= 1000

// A[i][j] = 'X' or 'O'

// Input Format

// The First and only argument is character matrix A.

// Output Format

// Return a single integer denoting number of black shapes.

// Example Input

// Input 1:

//  A = [ [X, X, X], [X, X, X], [X, X, X] ]
// Input 2:

//  A = [ [X, O], [O, X] ]

// Example Output

// Output 1:

//  1
// Output 2:

//  2

// Example Explanation

// Explanation 1:

//  All X's belong to single shapes
// Explanation 2:

//  Both X's belong to different shapes

const cx = [-1, 0, 1, 0];
const cy = [0, 1, 0, -1];

function dfs(matrix, x, y) {
  for (let i = 0; i < cx.length; i++) {
    const m = x + cx[i];
    const n = y + cy[i];
    if (
      m >= 0 &&
      m < matrix.length &&
      n >= 0 &&
      n < matrix[0].length &&
      matrix[m][n] === "X"
    ) {
      matrix[m][n] = "#";
      dfs(matrix, m, n);
    }
  }
  return;
}

function solve(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === "X") {
        count += 1;
        A[i][j] = "#";
        dfs(A, i, j);
      }
    }
  }
  return count;
}
const A = [
  ["X", "X", "X"],
  ["X", "X", "X"],
  ["X", "X", "X"],
];
// Input 2:

// const A = [ [X, O], [O, X] ]
console.log(solve(A));
