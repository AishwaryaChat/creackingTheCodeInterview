// MaxMod

// Problem Description
// Given an array A of size N, Groot wants you to pick 2 indices i and j such that

// 1 <= i, j <= N
// A[i] % A[j] is maximum among all possible pairs of (i, j).
// Help Groot in finding the maximum value of A[i] % A[j] for some i, j.

// Problem Constraints
// 1 <= N <= 100000
// 0 <= A[i] <= 100000

// Input Format
// First and only argument in an integer array A.

// Output Format
// Return an integer denoting the maximum value of A[i] % A[j] for any valid i, j.

// Example Input
// Input 1:

//  A = [1, 2, 44, 3]
// Input 2:

//  A = [2, 6, 4]

// Example Output
// Output 1:

//  3
// Output 2:

//  4

// Example Explanation
// Explanation 1:

//  For i = 3, j = 2  A[i] % A[j] = 3 % 44 = 3.
//  No pair exists which has more value than 3.
// Explanation 2:

//  For i = 2, j = 1  A[i] % A[j] = 4 % 6 = 4.

// If All elements are same then answer will be zero
// Otherwise the second last element will be the answer only if the last and second last are not equal
// We have to find from end which 2 elements are not equal
// TC - O(N)

function solve(A) {
  A.sort((a, b) => a - b);
  let N = A.length - 1;
  let i = N;
  while (i - 1 > 0 && A[i - 1] === A[i]) {
    i--;
  }
  return A[i - 1] === A[i] ? 0 : A[i - 1];
}

// const A = [1, 2, 44, 3];
// Output
// 3

// const A = [2, 6, 4]
// Output
// 4

const A = [1, 2, 3, 3];
// const A = [3, 3, 3, 3];

console.log(solve(A));
