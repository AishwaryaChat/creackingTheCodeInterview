// Sudoku Solver
// Hard
// company
// Bloomberg
// Google
// Amazon
// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

function isRowValid(board, i, j, x) {
  for (let k = 0; k < 9; k++) {
    if (board[i][k] === x) return false;
  }
  return true;
}

function isColValid(board, i, j, x) {
  for (let k = 0; k < 9; k++) {
    if (board[k][j] === x) return false;
  }
  return true;
}

function isBoxValid(board, i, j, x) {
  const rowStart = i - (i % 3);
  const colStart = j - (j % 3);
  for (let m = rowStart; m < rowStart + 3; m++) {
    for (let n = colStart; n < colStart + 3; n++) {
        if(board[m][n]===x) return false
    }
  }
  return true
}

function isValid(board, i, j, x) {
  if (
    isRowValid(board, i, j, x) &&
    isColValid(board, i, j, x) &&
    isBoxValid(board, i, j, x)
  )
    return true;
  return false;
}

function solveSudoku(board, r, c) {
  if (c === 9) {
    r++;
    c = 0;
  }
  if (r === 9) return true;
  if (board[r][c] !== ".") return solveSudoku(board, r, c + 1);
  for (let i = 1; i <= 9; i++) {
    if (!isValid(board, r, c, String(i))) continue;
    board[r][c] = String(i);
    if (solveSudoku(board, r, c + 1)) return true;
    board[r][c] = ".";
  }
}

function solve(board) {
  solveSudoku(board, 0, 0);
  return board;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

console.log(solve(board));
