/*
Russian Doll Envelopes

Problem Description

Given a matrix of integers A of size N x 2 describing dimensions of N envelopes, where A[i][0] denotes the height of the ith envelope and A[i][1] denotes the width of the ith envelope.

One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

Find the maximum number of envelopes you can put one inside other.



Problem Constraints

1 <= N <= 1000
1 <= A[i][0], A[i][1] <= 10^9



Input Format

The only argument given is the integer matrix A.



Output Format

Return an integer denoting the maximum number of envelopes you can put one inside other.



Example Input

Input 1:

 A = [ 
         [5, 4]
         [6, 4]
         [6, 7]
         [2, 3]  
     ]
Input 2:

 A = [     '
         [8, 9]
         [8, 18]    
     ]


Example Output

Output 1:

 3
Output 2:

 1


Example Explanation

Explanation 1:

 Step 1: put [2, 3] inside [5, 4]
 Step 2: put [5, 4] inside [6, 7]
 3 envelopes can be put one inside other.
Explanation 2:

 No envelopes can be put inside any other so answer is 1.
*/

// The concept here is to sort the array A based on any 1 parameter
// For instance in the below ssolution we are sorting A based on height
// So on the other parameter i.e width, if we apply Longest increasing subsequence method
// then that will be the answer for us
// basically we have already sorted the array with height parameter
// so if we take only height into account then all the elements in increasing order of height
// will fit into each other
// At this point when width come into picture, then with LIS method waterevr will be the longest sequence will be our answer
// TC - O(N^2)
// Can be done in TC - O(NlogN) only if we solve LIS in O(N) complexity


function solve(A) {
  A.sort((a, b) => a[0] - b[0]);
  let P = new Array(A.length).fill(-1);
  let L = new Array(A.length).fill(1);
  let index = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (A[i][1] > A[j][1] && A[i][0] > A[j][0] && L[j] >= L[i]) {
        L[i] = L[j] + 1;
        P[i] = j;
      }
    }
    if (L[i] > L[index]) {
      index = i;
    }
  }
  return L[index];
}

// A = [
//   [5, 4],
//   [6, 4],
//   [6, 7],
//   [2, 3],
// ];

const A = [
  [8, 9],
  [8, 18],
];

console.log(solve(A));
