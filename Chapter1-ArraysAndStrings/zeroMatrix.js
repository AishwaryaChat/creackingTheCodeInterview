const printMatrix = require("./printMatrix");

// Write an algorithm such that  if an element in an M*N matrix is 0,
// its entrire row and column are set to zero

const zeroMatrix = (matrix) => {
  let rows = [];
  let cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  //   Time Complexity: Object(N ^2)
  //   Space Complexity: O(N+M), where N is number of rows, M is number of columns

  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === true) {
      nullifyRow(matrix, i);
    }
  }

  for (let i = 0; i < cols.length; i++) {
    if (cols[i] === true) {
      nullifyColumn(matrix, i);
    }
  }
  return matrix;
};

const nullifyRow = (matrix, row) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
};

const nullifyColumn = (matrix, column) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
};
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 0, 12],
  [13, 14, 15, 16],
];

console.log("matrix is: ");
printMatrix(matrix);

const zeroedMatrix = zeroMatrix(matrix);
console.log("Zeroed Matrix is: ");
printMatrix(zeroedMatrix);

const zeroMatrixInPlace = (matrix) => {
  let firstRowHasZero = false;
  let firstColHasZero = false;
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) firstRowHasZero = true;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[i][0] === 0) firstColHasZero = true;
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = true;
        matrix[0][j] = true;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === true) nullifyRow(matrix, i);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === true) nullifyColumn(matrix, j);
  }
  if (firstRowHasZero) nullifyRow(matrix, 0);
  if (firstColHasZero) nullifyColumn(matrix, 0);
  return matrix;
};

// Time Complexity: O(N*M)
// Space Complexity: O(1)

const matrix1 = [
  [0, 2, 3, 0],
  [5, 6, 7, 8],
  [9, 10, 0, 12],
  [13, 14, 15, 16],
];

console.log("matrix1 is: ");
printMatrix(matrix1);

const zeroedMatrix1 = zeroMatrixInPlace(matrix1);
console.log("Zeroed Matrix using zeroMatrixInPlace is: ");
printMatrix(zeroedMatrix1);
