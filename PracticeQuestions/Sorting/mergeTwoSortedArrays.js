function solve(A, B) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      result.push(A[i]);
      i++;
    } else {
      result.push(B[j]);
      j++;
    }
  }
  while (i < A.length) {
    result.push(A[i]);
    i++
  }
  while (j < B.length) {
    result.push(B[j]);
    j++
  }
  return result;
}

// const A = [-4, -3, 0];
// const B = [2];

const A = [3];
const B = [-4, -3];

console.log(solve(A, B));
