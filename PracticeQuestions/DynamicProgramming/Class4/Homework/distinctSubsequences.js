// Distinct Subsequences
// Solution - https://www.youtube.com/watch?v=-RDzMJ33nx8
// Problem Description
// Given two sequences A and B, count number of unique ways in sequence A, to form a subsequence that is identical to the sequence B.

// Subsequence : A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// Problem Constraints
// 1 <= length(A), length(B) <= 700

// Input Format
// The first argument of input contains a string A.
// The second argument of input contains a string B.

// Output Format
// Return an integer representing the answer as described in the problem statement.

// Example Input
// Input 1:

//  A = "abc"
//  B = "abc"
// Input 2:

//  A = "rabbbit"
//  B = "rabbit"

// Example Output
// Output 1:

//  1
// Output 2:

//  3

// Example Explanation
// Explanation 1:

//  Both the strings are equal.
// Explanation 2:

//  These are the possible removals of characters:
//     => A = "ra_bbit"
//     => A = "rab_bit"
//     => A = "rabb_it"

//  Note: "_" marks the removed character.

function solve(A, B) {
  const N = A.length;
  const M = B.length;
  if (M > N) return 0;
  let DP = initMemo(A, B);
  for (let i = 0; i <= A.length; i++) {
    DP[i] = [];
    for (let j = 0; j <= B.length; j++) {
      if (j === 0) DP[i][j] = 1;
      else if (i === 0) DP[i][j] = 0;
      else DP[i][j] = 0;
    }
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (B[j - 1] != A[i - 1]) DP[i][j] = DP[i - 1][j];
      else DP[i][j] = DP[i - 1][j] + DP[i - 1][j - 1];
    }
  }
  return DP[N][M];
}

// TC - O(N*M)
// SC - O(M)
function solveSpaceOptimised(A, B) {
  const N = A.length;
  const M = B.length;
  if (M > N) return 0;
  let DP1 = new Array(M + 1).fill(0);
  DP1[0] = 1;
  const DP = new Array(M + 1).fill(0);
  DP[0] = 1;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      const isEqual = A[i - 1] === B[j - 1];
      DP[j] = isEqual ? DP1[j] + DP1[j - 1] : DP1[j];
    }
    DP1 = DP.map((a) => a);
  }
  return DP[M];
}

// TC - O(N*M)
// SC - O(N*M)
function recursive(i, j, DP, A, B) {
  if (j == B.length) return 1;
  if (i == A.length) return 0;
  if (DP[i][j] !== null) return DP[i][j];
  const left = recursive(i + 1, j, DP, A, B);
  const isEqual = A[i] === B[j];

  const right = isEqual ? recursive(i + 1, j + 1, DP, A, B) : 0;
  DP[i][j] = left + right;
  return DP[i][j];
}

function solveRecursive(A, B) {
  const N = A.length;
  const M = B.length;
  if (M > N) return 0;
  let DP = initMemo(A, B);
  return recursive(0, 0, DP, A, B);
}

const initMemo = (s, t) =>
  new Array(s.length).fill().map(() => new Array(t.length).fill(null));

// const A = "rabbbit";
// const B = "rabbit";
const A = "aaaababbababbaabbaaababaaabbbaaabbb";
const B = "bbababa";
console.log(solveSpaceOptimised(A, B));
