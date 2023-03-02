// Surrounded Regions
// Medium
// company
// Google
// Amazon
// TikTok
// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.
let cx = [-1, 0, 1, 0];
let cy = [0, 1, 0, -1];
function dfs(x, y, N, M, board) {
  if (board[x][y] !== "O") return;
  board[x][y] = "E";
  for (let i = 0; i < cx.length; i++) {
    const n = x + cx[i];
    const m = y + cy[i];
    if (n > 0 && n < N - 1 && m > 0 && m < M - 1) {
      dfs(n, m, N, M, board);
    }
  }
}
// The idea here is to go from outside to inside, if you are able to go inside then mark those O as E, later change these E to O and remaining O to X
// TC - O(N*M)
// SC - O(N*M), depth of recursion stack can be N*M in worst case, where all the cells are O
function solve(board) {
  const N = board.length;
  const M = board[0].length;
  const borders = [];
  for (let i = 0; i < N; i++) {
    borders.push([i, 0]);
    borders.push([i, M - 1]);
  }
  for (let j = 0; j < M; j++) {
    borders.push([0, j]);
    borders.push([N - 1, j]);
  }
  for (let i = 0; i < borders.length; i++) {
    dfs(...borders[i], N, M, board);
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (board[i][j] === "E") board[i][j] = "O";
    }
  }
  return board;
}

// const board = [
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"],
// ];
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// const board = [["X"]]
// Output: [["X"]]

const board = [
  ["X", "X", "X", "X", "X", "X"],
  ["X", "O", "O", "X", "X", "X"],
  ["X", "O", "O", "O", "X", "X"],
  ["X", "O", "X", "O", "X", "X"],
  ["X", "X", "X", "X", "X", "X"],
  ["X", "O", "X", "X", "O", "X"],
];

console.log(solve(board));
