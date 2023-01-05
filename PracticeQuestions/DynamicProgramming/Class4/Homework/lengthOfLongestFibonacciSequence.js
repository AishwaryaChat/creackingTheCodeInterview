// Length of Longest Fibonacci Subsequence

// Problem Description
// Given a strictly increasing array A of positive integers forming a sequence.

// A sequence X1, X2, X3, ..., XN is fibonacci like if

// N > =3
// Xi + Xi+1 = Xi+2 for all i+2 <= N
// Find and return the length of the longest Fibonacci-like subsequence of A.

// If one does not exist, return 0.

// NOTE: A subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements.

// Problem Constraints
// 3 <= length of the array <= 1000

// 1 <= A[i] <= 109

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return the length of the longest Fibonacci-like subsequence of A.
// If one does not exist, return 0.

// Example Input
// Input 1:

//  A = [1, 2, 3, 4, 5, 6, 7, 8]
// Input 2:

//  A = [1, 3, 7, 11, 12, 14, 18]

// Example Output
// Output 1:

//  5
// Output 2:

//  3

// Example Explanation
// Explanation 1:

//  The longest subsequence that is fibonacci-like: [1, 2, 3, 5, 8].
// Explanation 2:

//  The longest subsequence that is fibonacci-like: [1, 11, 12], [3, 11, 14] or [7, 11, 18].
//  The length will be 3.


// In the below solution we are finding the pairs (i,j) and (j, k)
// we are using DP for this
// TC - O(N^2)
// SC - O(N^2)
function solve(A) {
  let DP = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    DP[i] = [];
    for (let j = 0; j < A.length; j++) {
      DP[i][j] = 0;
    }
  }
  let valueIndexMap = {};
  for (let i = 0; i < A.length; i++) {
    valueIndexMap[A[i]] = i;
  }
  let ans = 0;
  for (let k = 0; k < A.length; k++) {
    for (let j = 0; j < k; j++) {
      let Ai = A[k] - A[j];
      let indexAi = valueIndexMap[Ai];
      if (Ai < A[j] && indexAi !== undefined && indexAi < j) {
        DP[j][k] = DP[indexAi][j] + 1;
        ans = Math.max(ans, DP[j][k] + 2);
      }
    }
  }
  if (ans >= 3) return ans;
  return 0;
}

// In the below solution we are traversing the array making i and j pairs and finding the kth element for each i & j pair
// TC < O(N^3) - this will effectively be lesser than N^3 since the thrid time we will not be traversing the whole array
// SC - O(N)
function spaceOptimised(A) {
  let valueIndexMap = {};
  for (let i = 0; i < A.length; i++) {
    valueIndexMap[A[i]] = i;
  }
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let left = A[i];
      let right = A[j];
      let Ak = left + right;
      let tempLen = 0;
      while (valueIndexMap[Ak] !== undefined) {
        tempLen++;
        left = right;
        right = Ak;
        Ak = left + right;
      }
      ans = Math.max(ans, tempLen+2);
    }
  }
  if (ans >= 3) return ans;
  return 0;
}

const A = [1, 2, 3, 4, 5, 6, 7, 8];

// const A = [1, 3, 7, 11, 12, 14, 18]

console.log(spaceOptimised(A));
