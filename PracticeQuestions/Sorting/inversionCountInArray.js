/*
Inversion count in an array

Problem Description
Given an array of integers A. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. Find the total number of inversions of A modulo (109 + 7).



Problem Constraints
1 <= length of the array <= 100000

1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return the number of inversions of A modulo (109 + 7).



Example Input
Input 1:

A = [3, 2, 1]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:

3
Output 2:

0


Example Explanation
Explanation 1:

 All pairs are inversions.
Explanation 2:

 No inversions.
*/

function merge(A, l, m, r) {
  let i = l;
  let j = m + 1;
  let left = [];
  let right = [];
  let invCount = 0
  while (i <= m) {
    left.push(A[i])
    i++
  };
  while (j <= r) {
    right.push(A[j])
    j++
  }
  i = 0;
  j = 0;
  let k=l
  while (i <left.length && j < right.length) {
    if (left[i] <= right[j]) {
      A[k] = left[i]
      i++
    } else {
      A[k] = right[j]
      invCount += (m + 1) - (l + i);
      j++
    }
    k++
  }
  while (i < left.length)
  {
      A[k] = left[i];
      i++
      k++
  }
  while (j < right.length)
  {
      A[k] = right[j];
      j++
      k++
  }
  return invCount
}

function mergeSort(A, l, r) {
  let invCount = 0;
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    invCount += mergeSort(A, l, mid);
    invCount += mergeSort(A, mid + 1, r);
    invCount += merge(A, l, mid, r);
  }
  return invCount;
}

function solve(A) {
  return mergeSort(A, 0, A.length - 1);
}

// const A = [8, 4, 6, 1, 3, 5, 0];
// const A = [4, 6, 1, 8, 3, 5, 0];
// const A = [ 45, 10, 15, 25, 50 ]
const A = [ 6, 12, 10, 17, 10, 22, 9, 19, 21, 31, 26, 8 ]

console.log(solve(A));
