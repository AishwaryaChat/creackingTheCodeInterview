/*
NQueens

Problem Description
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



Given an integer A, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
The final list should be generated in such a way that the indices of the queens in each list should be in reverse lexicographical order.


Problem Constraints
1 <= A <= 10



Input Format
First argument is an integer n denoting the size of chessboard



Output Format
Return an array consisting of all distinct solutions in which each element is a 2d char array representing a unique solution.



Example Input
Input 1:

A = 4
Input 2:

A = 1


Example Output
Output 1:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Output 1:

[
 [Q]
]


Example Explanation
Explanation 1:

There exist only two distinct solutions to the 4-queens puzzle:
Explanation 1:

There exist only one distinct solutions to the 1-queens puzzle:
*/

// TC - for isValid function O(N)
// SC - O(1)
function isValid(r, c, cols) {
  for (let i = 0; i < r; i++) {
    const j = cols[i];
    if (j === c || Math.abs(i - r) === Math.abs(j - c)) return false;
  }
  return true;
}

// Overall TC = O(N^N), since for every row we will keep checking for N columns and we will do this N time since we are backtracking
// SC = O(N)

function solve(A) {
  let finalCols = [];

  function nQueens(N, row, cols) {
    if (row === N) {
      finalCols.push(cols.map((col) => col));
    }
    for (let c = 0; c < N; c++) {
      if (!isValid(row, c, cols)) continue;
      cols[row] = c;
      nQueens(N, row + 1, cols);
      cols[row] = -1;
    }
    return finalCols;
  }
  nQueens(A, 0, []);
  let finalAns = [];
  for (let i = finalCols.length - 1; i >= 0; i--) {
    let ans = finalCols[i].map((val) => {
      return ".".repeat(val) + "Q" + ".".repeat(A - val - 1);
    });
    finalAns.push(ans);
  }
  return finalAns;
}

const A = 4;

console.log(solve(A));
