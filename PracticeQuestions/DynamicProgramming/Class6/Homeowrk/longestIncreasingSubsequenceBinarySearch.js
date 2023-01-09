// Length of LIS

// Problem Description
// You are given an array A. You need to find the length of the Longest Increasing Subsequence in the array.

// In other words, you need to find a subsequence of array A in which the elements are in sorted order, (strictly increasing) and as long as possible.

// Problem Constraints
// 1 ≤ length(A), A[i] ≤ 105

// Input Format
// The first and only argument of the input is the array A.

// Output Format
// Output a single integer, the length of the longest increasing subsequence in array A.

// Example Input
// Input 1:

// A: [2, 1, 4, 3]
// Input 2:

// A: [5, 6, 3, 7, 9]

// Example Output
// Output 1:

// 2
// Output 2:

// 4

// Example Explanation
// Explanation 1:

//  [2, 4] and [1, 3] are the longest increasing sequences of size 2.
// Explanation 2:

// The longest increasing subsequence we can get is [5, 6, 7, 9] of size 4.

// The solution is based on fitting the given array in largest increasing subsequence
// So if an element is less than the last element of current subsequence, then we will find the smallest greatest element in the subsequence and replace with current element
// At the elend the length of subsequence will be the answer. Please note that this subsequence is not the actual subsequence of the given input
// TC - O(nlogn)
// SC - O(OP)
function binarySearch(A, ele) {
  let low = 0;
  let high = A.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (ele === 5) {
    }
    if (A[mid] > ele && ((mid - 1 >= 0 && A[mid - 1] < ele) || mid - 1 < 0)) {
      A[mid] = ele;
      return;
    } else if (A[mid] > ele) high = mid - 1;
    else low = mid + 1;
  }
  return;
}

function solve(A) {
  let subseq = [A[0]];
  for (let i = 1; i < A.length; i++) {
    const subL = subseq.length;
    if (A[i] > subseq[subL - 1]) {
      subseq.push(A[i]);
    } else if (A[i] < subseq[subL - 1]) {
      binarySearch(subseq, A[i]);
    }
  }
  return subseq.length;
}

// const A= [2, 1, 4, 3]
// O/P - 2
// const A = [5, 6, 3, 7, 9];
// O/P - 4
// const A = [1, 9, 5, 10, 2, 3, 1, 7, 6];
const A = [6, 6, 9, 7, 3, 5, 1, 7, 10];

console.log(solve(A));
