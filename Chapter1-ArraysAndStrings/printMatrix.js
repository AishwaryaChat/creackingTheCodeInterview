const printMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let out = "";
    for (let j = 0; j < matrix[i].length; j++) {
      out += "\t" + matrix[i][j];
    }
    console.log(out);
  }
};

module.exports = printMatrix;
