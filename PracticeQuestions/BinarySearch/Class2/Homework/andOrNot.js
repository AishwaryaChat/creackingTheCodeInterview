/*
Q2. ADD OR NOT

Problem Description
Given an array of integers A of size N and an integer B.

In a single operation, any one element of the array can be increased by 1. You are allowed to do at most B such operations.

Find the number with the maximum number of occurrences and return an array C of size 2, where C[0] is the number of occurrences, and C[1] is the number with maximum occurrence.
If there are several such numbers, your task is to find the minimum one.



Problem Constraints
1 <= N <= 10^5

-109 <= A[i] <= 10^9

0 <= B <= 10^9



Input Format
The first argument given is the integer array A.
The second argument given is the integer B.



Output Format
Return an array C of size 2, where C[0] is number of occurence and C[1] is the number with maximum occurence.



Example Input
Input 1:

 A = [3, 1, 2, 2, 1]
 B = 3
Input 2:

 A = [5, 5, 5]
 B = 3


Example Output
Output 1:

 [4, 2]
Output 2:

 [3, 5]


Example Explanation
Explanation 1:

 Apply operations on A[2] and A[4]
 A = [3, 2, 2, 2, 2]
 Maximum occurence =  4
 Minimum value of element with maximum occurence = 2
Explanation 2:

 A = [5, 5, 5]
 Maximum occurence =  3
 Minimum value of element with maximum occurence = 5
*/

function getPrefixSum(A) {
  let prefixSum = [0];
  for (let i = 0; i < A.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + A[i];
  }
  return prefixSum;
}

function check(prefixSum, A, B, count, i) {
  if (A[i] * count - (prefixSum[i + 1] - prefixSum[i - count + 1]) <= B)
    return true;
  return false;
}

function solve(A, B) {
  A.sort((a, b) => a - b);
  const prefixSum = getPrefixSum(A);
  let ans = [-1, -1];
  for (let i = 0; i < A.length; i++) {
    let low = 1;
    let high = i + 1;
    let max = 0;
    while (low <= high) {
      let count = Math.floor((low + high) / 2); // mid
      if (check(prefixSum, A, B, count, i)) {
        max = count;
        low = count + 1;
      } else {
        high = count - 1;
      }
    }
    if (max > ans[0]) {
      ans[0] = max;
      ans[1] = A[i];
    }
  }
  return ans;
}

const A = [3, 1, 2, 2, 1];
// [1, 1, 2, 2, 3];
const B = 3;

console.log(solve(A, B));
