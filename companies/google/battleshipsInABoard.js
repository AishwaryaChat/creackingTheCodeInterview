// Battleships in a Board
// Medium
// company
// Google
// Amazon
// Twitch
// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

// Example 1:

// Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
// Output: 2
// Example 2:

// Input: board = [["."]]
// Output: 0

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is either '.' or 'X'.

// Follow up: Could you do it in one-pass, using only O(1) extra memory and without modifying the values board?

// TC = O(n*m)
// SC = O(n*m)
function dfs(i, j, N, M, board, direction) {
  if (i >= N || j >= M || board[i][j] !== "X") return;
  board[i][j] = "#";
  if (direction === "row") {
    dfs(i, j + 1, N, M, board, direction);
  }
  if (direction === "col") {
    dfs(i + 1, j, N, M, board, direction);
  }
}

function solve(board) {
  const N = board.length;
  if (N === 0) return 0;
  const M = board[0].length;
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "X") {
        ans += 1;
        board[i][j] = "#";
        if (board[i][j + 1] === "X") {
          dfs(i, j + 1, N, M, board, "row");
        }
        if (i + 1 < N && board[i + 1][j] === "X") {
          dfs(i + 1, j, N, M, board, "col");
        }
      }
    }
  }
  return ans;
}

const board = [
  ["X", ".", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "X"],
];
// Output: 2

// const board = [["."]]
// Output: 0

console.log(solve(board));
