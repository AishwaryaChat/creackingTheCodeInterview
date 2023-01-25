// Spiral Matrix
// Medium

// company
// Amazon
// Microsoft
// Apple
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

// Travel like snake
function travelSnake(matrix, i, j, ans, direction) {
  if (i === matrix.length) return ans;
  ans.push(matrix[i][j]);
  if (
    (direction === "right" && j === matrix[0].length - 1) ||
    (direction === "left" && j === 0)
  ) {
    i = i + 1;
    if (i < matrix.length && j < matrix[0].length) ans.push(matrix[i][j]);
    direction = direction === "right" ? "left" : "right";
  }
  if (direction === "right") {
    j = j + 1;
  } else {
    j = j - 1;
  }
  return travelSnake(matrix, i, j, ans, direction);
}

// TC - O(N*M)
// SC - O(1)
function solve(matrix) {
  let N = matrix.length;
  let M = matrix[0].length;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let currentDirection = 0;
  let row = 0;
  let col = 0;
  let result = []
  result.push(matrix[row][col])
  matrix[row][col] = "#";

  let changeDirection = 0;
  while (changeDirection < 2) {
    while (
      row + directions[currentDirection][0] >= 0 &&
      row + directions[currentDirection][0] < N &&
      col + directions[currentDirection][1] >= 0 &&
      col + directions[currentDirection][1] < M &&
      matrix[row + directions[currentDirection][0]][
        col + directions[currentDirection][1]
      ] !== "#"
    ) {
      changeDirection = 0;
      row = row + directions[currentDirection][0];
      col = col+directions[currentDirection][1];
      result.push(matrix[row][col]);
      matrix[row][col] = "#";
    }
    currentDirection = (currentDirection + 1) % 4;
    changeDirection++;
  }
  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [1,2,3,6,9,8,7,4,5]

// const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(solve(matrix));
