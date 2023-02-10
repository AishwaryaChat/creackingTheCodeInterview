// Vertical and Horizontal Sums

// Problem Description

// Given a matrix B, of size N x M, you are allowed to do at most A special operations on this grid such that there is no vertical or horizontal contiguous subarray that has a sum greater than C.

// A special operation involves multiplying any element by -1 i.e. changing its sign.

// Return 1 if it is possible to achieve the answer, otherwise 0.

// Problem Constraints

// 1 <= N, M <= 10

// 0 <= A <= 5

// -105 <= B[i][j], C <= 105

// Input Format

// The first argument is an integer A, representing the number of special operations allowed.
// The second argument has the N x M integer matrix, B.
// The third argument is an integer C, as described in the problem statement.

// Output Format

// Return 1 if it is possible to achieve the answer, otherwise 0.

// Example Input

// Input 1:

//  A = 3
//  B = [
//         [1, 1, 1]
//         [1, 1, 1]
//         [1, 1, 1]
//      ]
//  C = 2
// Input 2:

//  A = 1
//  B = [
//         [1, 1, 1]
//         [1, 1, 1]
//         [1, 1, 1]
//      ]
//  C = 2

// Example Output

// Output 1:

//  1
// Output 2:

//  0

// Example Explanation

// Explanation 1:

//  The given matrix does not satisfy the conditions, but if we apply the special operation to B[0][0], B[1][1], B[2][2],
//  then the matrix would satisfy the given conditions i.e. no row or column has a sum greater than 2.
// Explanation 2:

//  It is not possible to apply the special operation to 1 element to satisfy the conditions.

function check() {}

function backTrack(grid, operations, maxSum) {
  if (operations ===-1) {
    return 0;
  }
  let ret = 1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let sum = 0;
      for (let l = j; l < grid[0].length; l++) {
        sum += grid[i][l];
        if (sum > maxSum) {
          ret = 0;
          for (let k = j; k <=l; k++) {
            grid[i][k] = -grid[i][k];
            ret |= backTrack(grid, operations - 1, maxSum);
            grid[i][k] = -grid[i][k];
          }
          return ret;
        }
      }
    }
  }

  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length; i++) {
      let sum = 0;
      for (let l = i; l < grid.length; l++) {
        sum += grid[l][j];
        if (sum > maxSum) {
          ret = 0;
          for (let k = i; k <=l; k++) {
            grid[k][j] = -grid[k][j];
            ret |= backTrack(grid, operations - 1, maxSum);
            grid[k][j] = -grid[k][j];
          }
          return ret;
        }
      }
    }
  }

  return ret;
}

function solve(maxOp, grid, maxSum) {
  return backTrack(grid, maxOp, maxSum);
}

const A = 3;
const B = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const C = 2;
// Output: 1

// const A = 1
// const B = [
//         [1, 1, 1],
//         [1, 1, 1],
//         [1, 1, 1],
//      ]
// const C = 2
// Output: 0
console.log(solve(A, B, C))