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
