// Spiral Order Matrix II

// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

// Problem Constraints
// 1 <= A <= 1000

// Input Format
// First and only argument is integer A

// Output Format
// Return a 2-D matrix which consists of the elements added in spiral order.

// Example Input
// Input 1:

// 1
// Input 2:

// 2
// Input 3:

// 5

// Example Output
// Output 1:

// [ [1] ]
// Output 2:

// [ [1, 2], [4, 3] ]
// Output 2:

// [ [1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9] ]

// Example Explanation
// Explanation 1:

// Only 1 is to be arranged.
// Explanation 2:

// 1 --> 2
//       |
//       |
// 4<--- 3

// TC - O(N^2)
function solve(A) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = 0;
  let col = 0;
  let ans = new Array(A).fill().map(() => new Array(A).fill(0));
  let currVal = 1;
  let changeDirection = 0;
  let currentDirection = 0;
  ans[row][col] = 1;
  while (changeDirection < 2) {
    while (
      row + directions[currentDirection][0] < A &&
      row + directions[currentDirection][0] >= 0 &&
      col + directions[currentDirection][1] < A &&
      col + directions[currentDirection][1] >= 0 &&
      ans[row + directions[currentDirection][0]][
        col + directions[currentDirection][1]
      ] === 0
    ) {
      changeDirection = 0;
      row = row + directions[currentDirection][0];
      col = col + directions[currentDirection][1];
      ans[row][col] = ++currVal;
    }
    currentDirection = (currentDirection + 1) % 4;
    changeDirection++;
  }
  return ans;
}
