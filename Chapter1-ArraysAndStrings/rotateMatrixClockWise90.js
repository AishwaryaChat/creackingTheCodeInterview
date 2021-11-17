const printMatrix = require("./printMatrix");

// Given an image represented by an N*N matrix, where each pixel in the imagee is 4 Bytes,
// write a method to rotate the image clockwise by 90 degrees. Can you do that in place?

const rotateMatrixClockWise90 = (matrix) => {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    const first = layer;
    const last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }
  return matrix;
};
// Complexity: O(N^2)

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log("matrix is: ");
printMatrix(matrix);
const rotated = rotateMatrixClockWise90(matrix);

console.log("new rotated matrix when rotated with rotateMatrixClockWise90: ");
printMatrix(rotated);
console.log();

// ************************ Transpose Method **************************

const rotateMatrixClockwise90TransposeMethod = (matrix) => {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // reverse rows
  for (let i = 0; i < matrix.length; i++) {
    let l = 0,
      r = matrix[0].length - 1;
    while (l < r) {
      const temp = matrix[i][l];
      matrix[i][l] = matrix[i][r];
      matrix[i][r] = temp;
      l++;
      r--;
    }
  }
  return matrix;
};

// Complexity: O(N^22)

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log("matrix is: ");
printMatrix(matrix1);
const rotatedAgain = rotateMatrixClockwise90TransposeMethod(matrix1);

console.log(
  "new rotated matrix when rotated with rotateMatrixClockwise90TransposeMethod: "
);
printMatrix(rotatedAgain);
