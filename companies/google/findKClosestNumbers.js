// Find K Closest Elements
// Medium

// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -10^4 <= arr[i], x <= 10^4

// There can be 2 solutions for this problem
// 1st using sliding window 
// Another using Binary Search

// The idea here to start from low 0 and high length of array - k elements, 
// now in every iteration we will check if current low is closer than (i + k)th element, if not then move low
// Complexity - O(n)
function findKClosestIntegersSlidingWindow(A, k, x) {
  let low = 0;
  let high = A.length - k;
  for (let i = 0; i < high; i++) {
    if (Math.abs(A[low] - x) > Math.abs(A[i + k] - x)) {
      low = i + 1;
    }
  }
  return A.slice(low, low + k);
}

// The idea here is to find the low index and return k elements from that index
// Complexity - O(log N)
function findKClosestIntegersBinarySearch(A, k, x) {
  let low = 0;
  let high = A.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (x - A[mid] > A[mid + k] - x) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return A.slice(low, low + k);
}

// const A = [1, 2, 3, 4, 5];
// const k = 4;
// const x = -1;

// const A = [1, 1, 1, 4, 5];
// const k = 3;
// const x = 3;

const A = [1, 1, 1, 10, 10, 10];
const k = 1;
const x = 9;

// const A = [10, 19, 22, 84, 93];
// const k = 4;
// const x = 15;

console.log(findKClosestIntegersSlidingWindow(A, k, x));
