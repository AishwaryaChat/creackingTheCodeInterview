// Reverse pairs

// Problem Description
// Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
// Return the number of important reverse pairs in the given array A.

// Problem Constraints
// 1 <= length of the array <= 10^5

// -2 * 10^9 <= A[i] <= 2 * 10^9

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return the number of important reverse pairs in the given array A.

// Example Input
// Input 1:

//  A = [1, 3, 2, 3, 1]
// Input 2:

//  A = [4, 1, 2]

// Example Output
// Output 1:

//  2
// Output 2:

//  1

// Example Explanation
// Explanation 1:

//  There are two pairs which are important reverse i.e (3, 1) and (3, 1).
// Explanation 2:

//  There is only one pair i.e (4, 1).

function merge(A, l, m, r) {
  let i = l;
  let j = m + 1;
  let left = [];
  let right = [];
  while (i <= m) {
    left.push(A[i]);
    i++;
  }
  while (j <= r) {
    right.push(A[j]);
    j++;
  }
  i = 0;
  j = 0;
  let k = l;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      A[k] = left[i];
      i++;
    } else {
      A[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    A[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    A[k] = right[j];
    j++;
    k++;
  }
}

function mergeSort(A, l, r) {
  let invCount = 0;
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    invCount += mergeSort(A, l, mid);
    invCount += mergeSort(A, mid + 1, r);
    let j = mid;
    for (let i = l; i <= mid; i++) {
      while (j < r && A[j + 1] * 2 < A[i]) {
        j++;
      }
      invCount += j - (mid + 1) + 1;
      //   if((A[j + 1] * 2) < A[i]) {
      //     invCount += 1
      //     // break
      // };
    }
    merge(A, l, mid, r);
  }
  return invCount;
}

function solve(A) {
  return mergeSort(A, 0, A.length - 1);
}

//   const A = [1, 3, 2, 3, 1]
const A = [
  14046, 57239, 78362, 99387, 27609, 55100, 65536, 62099, 40820, 33056, 88380,
  78549, 57512, 33137, 81212, 32365, 42276, 65368, 52459, 74924, 25355, 76044,
  78056, 45190, 94365, 58869, 20611,
];

console.log(solve(A));
