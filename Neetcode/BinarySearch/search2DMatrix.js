// Search a 2D Matrix
// Medium
// company
// Amazon
// Bloomberg
// Apple
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10^4 <= matrix[i][j], target <= 10^4

// We are considering the whole matrix as a single dimensional array
// TC - O(log(N*M))
function solve(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;
  let low = 0;
  let high = n * m - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    const i = Math.floor(mid / m);
    const j = Math.floor(mid % m);
    if (matrix[i][j] === target) return true;
    if (target > matrix[i][j]) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
// Output: true

// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// const matrix = [[1], [3]],
//   target = 3;
// const matrix =[[1,1],[2,2]], target =1

console.log(solve(matrix, target));
