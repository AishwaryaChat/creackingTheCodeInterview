// Find K Closest Elements
// Medium
// company
// Yandex
// Amazon
// Adobe
// Paypal
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
// 1 <= arr.length <= 10^4
// arr is sorted in ascending order.
// -10^4 <= arr[i], x <= 10^4

// TC - O(logk)
function solve(arr, k, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (Math.abs(arr[mid] - x) > Math.abs(arr[mid + k] - x)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr.slice(low, low + k);
}

const arr = [1, 2, 3, 4, 5];
const k = 4;
const x = 3;
// Output: [1,2,3,4]
// Example 2:

// const arr = [1,2,3,4,5]
// const k = 4
// const x = -1
// Output: [1,2,3,4]

console.log(slove(arr, k, x));
