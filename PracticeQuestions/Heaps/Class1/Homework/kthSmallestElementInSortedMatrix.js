// Kth Smallest Element in a Sorted Matrix

// Problem Description
// Given a sorted matrix of integers A of size N x M and an integer B.

// Each of the rows and columns of matrix A is sorted in ascending order, find the Bth smallest element in the matrix.

// NOTE: Return The Bth smallest element in the sorted order, not the Bth distinct element.

// Problem Constraints
// 1 <= N, M <= 500

// 1 <= A[i] <= 10^9

// 1 <= B <= N * M

// Input Format
// The first argument given is the integer matrix A.
// The second argument given is an integer B.

// Output Format
// Return the B-th smallest element in the matrix.

// Example Input
// Input 1:

//  A = [ [9, 11, 15],
//        [10, 15, 17] ]
//  B = 6
// Input 2:

//  A = [  [5, 9, 11],
//         [9, 11, 13],
//         [10, 12, 15],
//         [13, 14, 16],
//         [16, 20, 21] ]
//  B = 12

// Example Output
// Output 1:

//  17
// Output 2:

//  16

// Example Explanation
// Explanation 1:

//  6th smallest element in the sorted matrix is 17.
// Explanation 2:

//  12th smallest element in the sorted matrix is 16.

const Heap = require("../../heapGeneralisedImplementation");

// TC - O(NlogN)
// SC - O(B)
function solve(A, B) {
  let maxHeap = new Heap({ comparator: (a, b) => a > b });
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (maxHeap.getSize() < B) {
        maxHeap.push(A[i][j]);
      } else {
        if (A[i][j] < maxHeap.peek()) {
          maxHeap.pop();
          maxHeap.push(A[i][j]);
        }
      }
    }
  }
  return maxHeap.peek();
}

// const A = [
//   [9, 11, 15],
//   [10, 15, 17],
// ];
// const B = 6;

const A = [
  [5, 9, 11],
  [9, 11, 13],
  [10, 12, 15],
  [13, 14, 16],
  [16, 20, 21],
];
const B = 12;
console.log(solve(A, B));
