// Sudoku
// Unsolved

// Problem Description
// Write a program to solve a Sudoku puzzle by filling the empty cells. Empty cells are indicated by the character '.' You may assume that there will be only one unique solution.

// A sudoku puzzle,

// and its solution numbers marked in red.

// Problem Constraints
// N = 9

// Input Format
// First argument is an array of array of characters representing the Sudoku puzzle.

// Output Format
// Modify the given input to the required answer.

// Example Input
// Input 1:

// A = [[53..7....], [6..195...], [.98....6.], [8...6...3], [4..8.3..1], [7...2...6], [.6....28.], [...419..5], [....8..79]]

// Example Output
// Output 1:

// [[534678912], [672195348], [198342567], [859761423], [426853791], [713924856], [961537284], [287419635], [345286179]]

function checkRow(r, num, A) {
  for (let i = 0; i < A.length; i++) {
    if (A[r][i] === num) return false;
  }
  return true;
}

function checkCol(c, num, A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i][c] === num) return false;
  }
  return true;
}

function checkBlock(r, c, num, A) {
  const rn = Math.sqrt(A.length);
  const rst = Math.floor(r / rn) * rn;
  const cst = Math.floor(c / rn) * rn;
  for (let i = 0; i < rn; i++) {
    for (let j = 0; j < rn; j++) {
      const u = i + rst;
      const v = j + cst;
      if (A[u][v] === num) return false;
    }
  }
  return true;
}

function isValid(r, c, num, A) {
  if (checkRow(r, num, A) && checkCol(c, num, A) && checkBlock(r, c, num, A))
    return true;
  return false;
}

function solveSudoKu(r, c, A, N) {
  if (c === N) {
    r++;
    c = 0;
  }
  if (r === N) return true;
  if (A[r][c] !== ".") return solveSudoKu(r, c + 1, A, N);
  for (let i = 1; i <= N; i++) {
    if (!isValid(r, c, i, A)) continue;
    A[r][c] = i;
    if (solveSudoKu(r, c + 1, A, N)) return true;
    A[r][c] = ".";
  }
  return false;
}

function solve(A) {
  A = A.map((a) => a[0].split("").map((b) => (b === "." ? b : Number(b))));
  solveSudoKu(0, 0, A, A.length);
  return A.map((a) => a.join(""));
}

const A = [
  ["53..7...."],
  ["6..195..."],
  [".98....6."],
  ["8...6...3"],
  ["4..8.3..1"],
  ["7...2...6"],
  [".6....28."],
  ["...419..5"],
  ["....8..79"],
];

console.log(solve(A));
