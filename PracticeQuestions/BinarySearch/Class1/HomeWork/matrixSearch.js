/*
Matrix Search

Problem Description
Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integer B in matrix A.

This matrix A has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than or equal to the last integer of the previous row.
Return 1 if B is present in A, else return 0.

NOTE: Rows are numbered from top to bottom, and columns are from left to right.



Problem Constraints
1 <= N, M <= 1000
1 <= A[i][j], B <= 10^6



Input Format
The first argument given is the integer matrix A.
The second argument given is the integer B.



Output Format
Return 1 if B is present in A else, return 0.



Example Input
Input 1:

A = [ 
      [1,   3,  5,  7]
      [10, 11, 16, 20]
      [23, 30, 34, 50]  
    ]
B = 3
Input 2:

A = [   
      [5, 17, 100, 111]
      [119, 120, 127, 131]    
    ]
B = 3


Example Output
Output 1:

1
Output 2:

0


Example Explanation
Explanation 1:

 3 is present in the matrix at A[0][1] position so return 1.
Explanation 2:

 3 is not present in the matrix so return 0.
*/

// Below is the Naive approach for the problem
// Where we are doing Binary serach over rows then over columns
// TC - O((log N) * (log N))
function solve(A, B) {
  let rowLength = A.length - 1;
  let rowLow = 0;
  let rowHigh = rowLength;

  while (rowHigh <= rowHigh) {
    let rowMid = Math.floor((rowLow + rowHigh) / 2);
    let colLength = A[rowMid].length - 1;
    let colLow = 0;
    let colHigh = colLength;
    while (colLow <= colHigh) {
      let colMid = Math.floor((colLow + colHigh) / 2);
      const mid = A[rowMid][colMid];
      if (mid === B) return 1;
      else if (B < mid) {
        if (B < A[rowMid][colLow]) {
          if (rowMid - 1 < 0 || B > A[rowMid - 1][colLength]) return 0;
          rowHigh = rowMid - 1;
          break;
        } else {
          colHigh = colMid - 1;
        }
      } else {
        if (B > A[rowMid][colHigh]) {
          if (rowMid + 1 > rowLength || B < A[rowMid + 1][0]) return 0;
          rowLow = rowMid + 1;
          break;
        } else {
          colLow = colMid + 1;
        }
      }
    }
  }
  return 0;
}

// const A = [
//   [1, 3, 5, 7],
//   [7, 11, 16, 20],
//   [23, 30, 34, 50],
// ]
// const B = 7;

// const A =
// [
//   [3],
//   [29],
//   [36],
//   [63],
//   [67],
//   [72],
//   [74],
//   [78],
//   [85],
// ]
// const B = 41

const A = [
  [1, 1, 2, 2, 5, 6, 6, 6, 7],
  [9, 10, 10, 12, 12, 13, 14, 21, 21],
  [23, 26, 26, 29, 29, 31, 32, 35, 37],
  [38, 39, 39, 39, 41, 41, 42, 42, 43],
  [45, 45, 46, 46, 46, 47, 48, 48, 51],
  [51, 51, 54, 54, 54, 54, 56, 58, 59],
  [60, 61, 61, 62, 63, 64, 65, 66, 67],
  [67, 67, 70, 70, 71, 73, 73, 73, 74],
  [74, 79, 79, 80, 82, 84, 84, 84, 87],
  [89, 93, 94, 94, 97, 98, 98, 98, 98],
];
const B = 64;

// console.log(solve(A, B));

// Better approach
// Consider the Matrix as a single dimension array

function solveOptimised(A, B) {
  const N = A.length;
  const M = A[0].length;
  let low = 0;
  let high = N * M - 1;
  while(low<=high) {
    let mid = Math.floor((low+high)/2)
    const i = Math.floor(mid/(N))
    const j = mid%(M)
    if(A[i][j] === B) return 1
    else if(B < A[i][j]) high = mid - 1
    else low = mid + 1
  }
  return 0
}

console.log(solveOptimised(A, B));
