// Capture Regions on Board

// Problem Description
// Given a 2-D board A of size N x M containing 'X' and 'O', capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Problem Constraints
// 1 <= N, M <= 1000

// Input Format
// First and only argument is a N x M character matrix A.

// Output Format
// Make changes to the the input only as matrix is passed by reference.

// Example Input
// Input 1:

//  A = [
//        [X, X, X, X],
//        [X, O, O, X],
//        [X, X, O, X],
//        [X, O, X, X]
//      ]
// Input 2:

//  A = [
//        [X, O, O],
//        [X, O, X],
//        [O, O, O]
//      ]

// Example Output
// Output 1:

//  After running your function, the board should be:
//  A = [
//        [X, X, X, X],
//        [X, X, X, X],
//        [X, X, X, X],
//        [X, O, X, X]
//      ]
// Output 2:

//  After running your function, the board should be:
//  A = [
//        [X, O, O],
//        [X, O, X],
//        [O, O, O]
//      ]

// Example Explanation
// Explanation 1:

//  O in (4,2) is not surrounded by X from below.
// Explanation 2:

//  No O's are surrounded.

function dfs(i, j, A, M, N) {
  if (i < 0 || j < 0 || i >= M || j >= N || A[i][j] !== "O") {
    return;
  }
  A[i][j] = "#";
  dfs(i - 1, j, A, M, N);
  dfs(i + 1, j, A, M, N);
  dfs(i, j + 1, A, M, N);
  dfs(i, j - 1, A, M, N);
}

function solve(A) {
  const M = A.length;
  const N = A[0].length;
  A = A.map(a => a.split(""))
  console.log("A", A)
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (
        (i === 0 || i === A.length - 1 || j === 0 || j === A[0].length - 1) &&
        A[i][j] === "O"
      ) {
        dfs(i, j, A, M, N);
      }
    }
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === "O") {
        A[i][j] = "X";
      } else if (A[i][j] === "#") {
        A[i][j] = "O";
      }
    }
  }
  return A.map(a => a.join(""));
}

// const A = [
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ];
// Input 2:

// const A = [
//        ["X", "O", "O"],
//        ["X", "O", "X"],
//        ["O", "O", "O"]
//      ]

// const A = [["X", "X", "X"], ["X", "O", "X"], ["X", "X", "X"]];
const A = [ "XOX", "XOX", "XOX" ]
// const A = [
//   ["X", "O", "X"],
//   ["X", "O", "X"],
//   ["X", "O", "X"],
// ];

console.log(solve(A));
