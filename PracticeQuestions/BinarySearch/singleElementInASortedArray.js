/*
Single Element in a Sorted Array

Problem Description
Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

NOTE: Users are expected to solve this in O(log(N)) time.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return the single element that appears only once.



Example Input
Input 1:

A = [1, 1, 7]
Input 2:

A = [2, 3, 3]


Example Output
Output 1:

 7
Output 2:

 2


Example Explanation
Explanation 1:

 7 appears once
Explanation 2:

 2 appears once
*/

// TC=O(logN)
// this question is related to When target to search is not given

function solve(A) {
  let L = 0;
  let R = A.length - 1;
  while (L <= R) {
    let mid = L + Math.floor((R - L) / 2);
    if (
      (mid - 1 < 0 || A[mid] !== A[mid - 1]) &&
      (mid + 1 > A.length - 1 || A[mid] !== A[mid + 1])
    )
      return A[mid];
    if (mid - 1 < 0 || A[mid] !== A[mid - 1]) {
      if (mid % 2 === 0) L = mid + 2;
      else R = mid - 1;
    } else {
      if (mid % 2 === 0) R = mid - 2;
      else L = mid + 1;
    }
  }
}

// const A = [1, 1, 7];
const A = [ 106, 106, 248, 248, 286, 286, 344, 357, 357 ]
        //   0    1    2    3    4    5    6    7    8
console.log(solve(A));
