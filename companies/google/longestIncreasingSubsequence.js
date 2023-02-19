// Longest Increasing Subsequence
// Medium
// 16K
// 293
// company
// Google
// company
// Amazon
// company
// TikTok
// Given an integer array nums, return the length of the longest strictly increasing
// subsequence
// .

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Constraints:

// 1 <= nums.length <= 2500
// -10^4 <= nums[i] <= 10^4

// SC - O(N)
// TC - O(N^2)
function solve(A) {
  let L = new Array(A.length).fill(1);
  let maxLength = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i] && L[i] <= L[j]) {
        L[i] = L[j] + 1;
      }
    }
    maxLength = Math.max(maxLength, L[i]);
  }
  return maxLength;
}

function recursive(pos, A, DP) {
  if (pos === 0) return 1;
  if (DP[pos] !== 0) return DP[pos];
  DP[pos] = 1;
  for (let i = pos - 1; i >= 0; i--) {
    if (A[i] < A[pos]) {
      DP[pos] = Math.max(DP[pos], 1 + recursive(i, A, DP));
    }
  }

  return DP[pos];
}

function solveRecursive(A) {
  const DP = new Array(A.length).fill(0);
  for (let i = A.length - 1; i >= 0; i--) {
    recursive(i, A, DP);
  }
  const max = Math.max(...DP);
  return max === 0 ? 1 : max;
}

// TC - O(N^2)
// SC - O(N)
// This solution doesnt give the correct subsequence, but the length will be correct
// The idea here is to keep adding elements to subSequence, if the element is greater than last element of sub sequence, if element is smaller than last element of subsequence then search for the first element in the subsequence which is greater than this element and replace.
// In the binary search solution rather than finding this element using linear search we have used binary search because the elements of subsequence are sorted
function solveUsingLinearSearch(A) {
  let subSequence = [];
  subSequence[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    const last = subSequence[subSequence.length - 1];
    if (A[i] > last) {
      subSequence.push(A[i]);
    } else {
      let j = 0;
      while (j < subSequence.length && subSequence[j] < A[i]) j++;
      subSequence[j] = A[i];
    }
  }
  return subSequence.length;
}

function getJ(subSequence, ele) {
  let low = 0;
  let high = subSequence.length - 1;
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (subSequence[mid] === ele) {
      return mid;
    }
    if (ele > subSequence[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

// TC - O(NlogN)
// Sc - O(N)
function solveUsingBinarySearch(A) {
  let subSequence = [];
  subSequence[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    const last = subSequence[subSequence.length - 1];
    if (A[i] > last) {
      subSequence.push(A[i]);
    } else {
      let j = getJ(subSequence, A[i]);
      subSequence[j] = A[i];
    }
  }
  return subSequence.length;
}

// const A = [10, 9, 2, 5, 3, 7, 101, 18];
// const A = [7,7,7,7,7,7,7]
// const A = [
//   14, 24, 18, 46, 55, 53, 82, 18, 101, 20, 78, 35, 68, 9, 16, 93, 101, 85, 81,
//   28, 78,
// ];

// const A = [10,9,2,5,3,7,101,18]
// const A = [1, 3, 6, 7, 9, 4, 10, 5, 6];
const A = [3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12];
console.log(solveUsingBinarySearch(A));
