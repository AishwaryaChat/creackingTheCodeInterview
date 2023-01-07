/*
For a given string check for all substrings whether the substring is a palindrome.
Answer should be a 2D array
eg: A = "abcb"
[
    [true, false, false, false],
    [, true, false, true]
    [, , true, false]
    [, , , true]
]
*/

// TC = O(N^2)
// SC = O(N^2)

function solve(A) {
  let isP = new Array(A.length);
  const N = A.length;
  for (let l = 1; l <= N; l++) {
    for (let i = 0; i <= N - l; i++) {
      if (!isP[i]) isP[i] = new Array(A.length);
      const j = i + l - 1;
      if (i === j) isP[i][j] = true;
      else if (i + 1 === j) isP[i][j] = A[i] === A[j];
      else if (A[i] === A[j]) isP[i][j] = isP[i + 1][j - 1];
      else isP[i][j] = false;
    }
  }
  return isP;
}

// const A = "abcb";

// console.log(solve(A));

module.exports = solve;
