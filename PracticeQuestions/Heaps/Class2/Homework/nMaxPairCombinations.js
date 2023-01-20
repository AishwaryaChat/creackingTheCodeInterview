// N max pair combinations

// Problem Description
// Given two integers arrays, A and B, of size N each.

// Find the maximum N elements from the sum combinations (Ai + Bj) formed from elements in arrays A and B.

// Problem Constraints
// 1 <= N <= 2 * 105

// -1000 <= A[i], B[i] <= 1000

// Input Format
// The first argument is an integer array A.
// The second argument is an integer array B.

// Output Format
// Return an integer array denoting the N maximum element in descending order.

// Example Input
// Input 1:

//  A = [1, 4, 2, 3]
//  B = [2, 5, 1, 6]
// Input 2:

//  A = [2, 4, 1, 1]
//  B = [-2, -3, 2, 4]

// Example Output
// Output 1:

//  [10, 9, 9, 8]
// Output 2:

//  [8, 6, 6, 5]

// Example Explanation
// Explanation 1:

//  4 maximum elements are 10(6+4), 9(6+3), 9(5+4), 8(6+2).
// Explanation 2:

//  4 maximum elements are 8(4+4), 6(4+2), 6(4+2), 5(4+1).

const Heap = require("../../heapGeneralisedImplementation");

// TC - O(BlogB)
// SC - O(B)
function solve(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  const maxHeap = new Heap({ comparator: (a, b) => a[0] > b[0] });
  maxHeap.push([A[0] + B[0], 0, 0]);
  let ans = [];
  let visited = {};
  visited[`0_0`] = true;
  for (let i = 0; i < A.length; i++) {
    const [max, i, j] = maxHeap.pop();
    ans.push(max);
    let visitedKey1 = `${i}_${j + 1}`;
    let visitedKey2 = `${i + 1}_${j}`;
    if (!visited[visitedKey1]) {
      maxHeap.push([A[i] + B[j + 1], i, j + 1]);
      visited[visitedKey1] = true;
    }
    if (!visited[visitedKey2]) {
      maxHeap.push([A[i + 1] + B[j], i + 1, j]);
      visited[visitedKey2] = true;
    }
  }
  return ans;
}

// const A = [1, 4, 2, 3];
// const B = [2, 5, 1, 6];

// const A = [2, 4, 1, 1]
// const B = [-2, -3, 2, 4]

const A = [
  36, 27, -35, 43, -15, 36, 42, -1, -29, 12, -23, 40, 9, 13, -24, -10, -24, 22,
  -14, -39, 18, 17, -21, 32, -20, 12, -27, 17, -15, -21, -48, -28, 8, 19, 17,
  43, 6, -39, -8, -21, 23, -29, -31, 34, -13, 48, -26, -35, 20, -37, -24, 41,
  30, 6, 23, 12, 20, 46, 31, -45, -25, 34, -23, -14, -45, -4, -21, -37, 7, -26,
  45, 32, -5, -36, 17, -16, 14, -7, 0, 37, -42, 26, 28,
];
const B = [
  38, 34, -47, 1, 4, 49, -18, 10, 26, 18, -11, -38, -24, 36, 44, -11, 45, 20,
  -16, 28, 17, -49, 47, -48, -33, 42, 2, 6, -49, 30, 36, -9, 15, 39, -6, -31,
  -10, -21, -19, -33, 47, 21, 31, 25, -41, -23, 17, 6, 47, 3, 36, 15, -44, 33,
  -31, -26, -22, 21, -18, -21, -47, -31, 20, 18, -42, -35, -10, -1, 46, -27,
  -32, -5, -4, 1, -29, 5, 29, 38, 14, -22, -9, 0, 43,
];

console.log(solve(A, B));
