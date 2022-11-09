// Leftmost Column with at Least a One

// A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost column with a 1 in it. If such an index does not exist, return -1.

// You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
// BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], which means the matrix is rows x cols.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes, the input will be the entire binary matrix mat. You will not have access to the binary matrix directly.

// Example 1:

// Input: mat = [[0,0],[1,1]]
// Output: 0
// Example 2:

// Input: mat = [[0,0],[0,1]]
// Output: 1
// Example 3:

// Input: mat = [[0,0],[0,0]]
// Output: -1

// Constraints:

// rows == mat.length
// cols == mat[i].length
// 1 <= rows, cols <= 100
// mat[i][j] is either 0 or 1.
// mat[i] is sorted in non-decreasing order.
const { BINARY_MATRIX, BINARY_MATRIX2 } = require("./constants");

// TC - O(N * log(M)) - N is number of rows, M is number of columns
// With binary search we are basically trying to find out the first occurrence of 1

function BinarySearch(A, row, low, high, colLength) {
  let index = colLength;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midElement = A.get(row, mid);
    if (midElement === 1 && (mid - 1 < 0 || A.get(row, mid - 1) === 0)) {
      index = mid;
      break;
    }
    if (midElement === 0) {
      low = mid + 1;
    }
    if (midElement === 1) {
      high = mid - 1;
    }
  }
  return index;
}

var leftMostColumnWithOne = function (A) {
  if (A.length === 0) return -1;
  const rows = A.dimensions()[0];
  const colLength = A.dimensions()[1];
  let ans = colLength;
  for (let i = 0; i < rows; i++) {
    let index = BinarySearch(A, i, 0, colLength - 1, colLength);
    if (index !== -1) {
      ans = Math.min(ans, index);
    }
  }
  return ans === colLength ? -1 : ans;
};

function BinaryMatrix(A) {
  this.A = A;
  this.get = function (i, j) {
    return this.A[i][j];
  };

  this.dimensions = function () {
    return [this.A.length, this.A[0].length];
  };
  return this;
}

// let matrix = new BinaryMatrix(BINARY_MATRIX);
// console.log(matrix.get(0,0))
// console.log(leftMostColumnWithOne(matrix));

let matrix = new BinaryMatrix(BINARY_MATRIX2);
console.log(leftMostColumnWithOne(matrix));

// const A = [[0,0],[0,1]]
// let matrix = new BinaryMatrix(A);
// console.log(leftMostColumnWithOne(matrix));
