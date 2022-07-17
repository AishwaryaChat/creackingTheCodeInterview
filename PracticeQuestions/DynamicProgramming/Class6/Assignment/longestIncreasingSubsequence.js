/*
Longest Increasing Subsequence

Problem Description
Find the longest increasing subsequence of a given array of integers, A.

In other words, find a subsequence of array in which the subsequence's elements are in strictly increasing order, and in which the subsequence is as long as possible.

In this case, return the length of the longest increasing subsequence.



Problem Constraints
1 <= length(A) <= 2500
0 <= A[i] <= 2500



Input Format
The first and the only argument is an integer array A.



Output Format
Return an integer representing the length of the longest increasing subsequence.



Example Input
Input 1:

 A = [1, 2, 1, 5]
Input 2:

 A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]


Example Output
Output 1:

 3
Output 2:

 6


Example Explanation
Explanation 1:

 The longest increasing subsequence: [1, 2, 5]
Explanation 2:

 The possible longest increasing subsequences: [0, 2, 6, 9, 13, 15] or [0, 4, 6, 9, 11, 15] or [0, 4, 6, 9, 13, 15]
*/

// TC - O(N^2)
// SC - O(N)
function solve(A) {
  let P = new Array(A.length).fill(-1);
  let L = new Array(A.length).fill(1);
  let index = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i] && L[j] >= L[i]) {
        L[i] = L[j] + 1;
        P[i] = j;
      }
    }
    if (L[i] > L[index]) {
      index = i;
    }
  }
  return L[index];
  // let ans = new Array(L[index]);
  // let j = ans.length - 1;
  // while (index != -1) {
  //   ans[j] = A[index];
  //   index = P[index];
  //   j--;
  // }
  // return ans;
}

const A = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];

// const A = [1, 2, 1, 5];

console.log(solve(A));
