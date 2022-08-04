/*
Max Distance

Problem Description
Given an array, A of integers of size N. Find the maximum value of j - i such that A[i] <= A[j].



Problem Constraints
1 <= N <= 10^5

-10^9 <= A[i] <= 10^9



Input Format
First argument is an integer array A of size N.



Output Format
Return an integer denoting the maximum value of j - i.



Example Input
Input 1:

A = [3, 5, 4, 2]


Example Output
Output 1:

2


Example Explanation
Explanation 1:

For A[0] = 3 and A[2] = 4, the ans is (2 - 0) = 2. 
*/

// BruteForce
// TC - O(N^2)

function solveBrute(A) {
  let dist = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] <= A[j]) {
        dist = Math.max(dist, j - i);
      }
    }
  }
  return dist;
}

// Optimized
// TC - O(N)
// SC - O(1), modifying given array
// Idea here is to sort the array and also keep track of the original index
// Now start traversing the sorted array from right
// keep track of max index and keep calculating maxIndex - currentIndex
// Store max result


function solve(A) {
  let ans = 0;
  A = A.map((a, i) => [a, i]);
  let n = A.length;
  A.sort((a, b) => a[0] - b[0]);
  let maxIndex = A[n - 1][1];
  for (let i = n - 2; i >= 0; i--) {
    ans = Math.max(ans, maxIndex - A[i][1]);
    maxIndex = Math.max(maxIndex, A[i][1]);
  }
  return ans;
}

const A = [3, 5, 4, 2];
// const A = [ 100, 100, 100, 100, 100 ]

console.log(solve(A));
