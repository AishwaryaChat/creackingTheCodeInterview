/*
Single Number III
Problem Description
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.



Problem Constraints
2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format
The first argument is an array of integers of size N.



Output Format
Return an array of two integers that appear only once.



Example Input
Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output
Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation
Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once.

*/

function singleNumber3(A) {
  let xor = 0,
    x = 0,
    y = 0;
  for (let i = 0; i < A.length; i++) {
    xor ^= A[i];
  }
  //   This will give the se bit in xor, and based on that we will seperate out the input
  const b = xor ^ (xor & (xor - 1));
  for (let i = 0; i < A.length; i++) {
    if ((A[i] & b) === 0) {
      x ^= A[i];
    } else y ^= A[i];
  }
  return [x, y];
}

// TC - O((log A[i]) + N) ~ O(N)
// SC - O(1)
function solve(A) {
  let num1 = 0;
  let num2 = 0;
  for (let b = 0; b < 32; b++) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      count += (A[i] >> b) & 1;
    }
    if (count % 2 === 1) {
      for (let i = 0; i < A.length; i++) {
        if ((A[i] >> b) & 1) num1 ^= A[i];
        else num2 ^= A[i];
      }
      return [num1, num2];
    }
  }
}

// const A = [1, 2, 3, 1, 2, 4]
const A = [2, 3, 2, 5, 3, 6, 7, 6];

console.log(solve(A));
