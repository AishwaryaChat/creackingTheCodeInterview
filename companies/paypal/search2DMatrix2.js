// Search a 2D Matrix II
// Medium
// company
// Amazon
// Microsoft
// Adobe
// Paypal
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -10^9 <= matrix[i][j] <= 10^9
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -10^9 <= target <= 10^9

// TC - O(log(m*n))
function search(A, target, start, isVertical) {
    let low = 0
    let high = isVertical ? A.length-1 : A[0].length-1
    while(low<=high) {
        const mid = low + Math.floor((high-low)/2)
        if(isVertical) {
            console.log("A[mid][start]", A[mid][start])
            if(A[mid][start]===target) return true
            else if(A[mid][start]>target) high = mid-1
            else low = mid+1
        } else {
            if(A[start][mid]===target) return true
            else if(A[start][mid]>target) high = mid-1
            else low = mid+1
        }
    }
    return false
}

function solve(A, target) {
  const n = A.length;
  if (n === 0) return false;
  const m = A[0].length;
  if (m === 0) return false;
  const shortDim = Math.min(n, m);
  for (let i = 0; i < shortDim; i++) {
    const verticalFound = search(A, target, i, true);
    if (verticalFound) return true;
    const hortizontalFound = search(A, target, i, false);
    if (hortizontalFound) return true;
  }
  return false;
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 5
// Output: true

// const matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];
// const target = 20
// Output: false
console.log(solve(matrix, target));
