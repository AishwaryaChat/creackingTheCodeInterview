/*
Closest pair from sorted arrays

Problem Description

Given two sorted arrays of distinct integers, A and B, and an integer C, find and return the pair whose sum is closest to C and the pair has one element from each array.

More formally, find A[i] and B[j] such that abs((A[i] + B[j]) - C) has minimum value.

If there are multiple solutions find the one with minimum i and even if there are multiple values of j for the same i then return the one with minimum j.

Return an array with two elements {A[i], B[j]}.



Problem Constraints

1 <= length of both the arrays <= 100000

1 <= A[i], B[i] <= 10^9

1 <= C <= 10^9



Input Format

The first argument given is the integer array A.
The second argument given is the integer array B.
The third argument given is integer C.



Output Format

Return an array of size 2 denoting the pair which has sum closest to C.



Example Input

Input 1:

 A = [1, 2, 3, 4, 5]
 B = [2, 4, 6, 8]
 C = 9
Input 2:

 A = [5, 10, 20]
 B = [1, 2, 30]
 C = 13


Example Output

Output 1:

 [1, 8]
Output 2:

 [10, 2]


Example Explanation

Explanation 1:

 There are three pairs: (1, 8), (3, 6), (5, 4), that gives the minimum value.
 Since we have to return the value with minimum i and then with minimum j. We will return [1, 8].
Explanation 2:

 [10, 2] is the only pair such abs(10+2-13) is minimum.

*/

// TC = O(N or M) whichever is greater

function solve(A, B, C) {
  let i = 0;
  let j = B.length - 1;
  let min = Number.MAX_SAFE_INTEGER;
  let newL = -1;
  let newR = -1;
  while (i < A.length && j >= 0) {
    let newMin = Math.abs(A[i] + B[j] - C);
    if (newMin < min || (newMin === min && i <= newL)) {
      min = newMin;
      newL = i;
      newR = j;
      if (newMin === 0) return [A[newL], B[newR]];
    }
    if (A[i] + B[j] <= C) {
      i++;
    } else {
      j--;
    }
  }
  return [A[newL], B[newR]];
}

// const A = [1, 2, 3, 4, 5]
// const B = [2, 4, 6, 8]
// const C = 9

// const A = [5, 10, 20]
// const B = [1, 2, 30]
// const C = 13

// const A = [ 1 ]
// const B = [ 2, 4 ]
// const C = 4

const A = [1, 3, 5, 7, 9];
const B = [2, 4, 6, 8, 10];
const C = 10;

console.log(solve(A, B, C));
