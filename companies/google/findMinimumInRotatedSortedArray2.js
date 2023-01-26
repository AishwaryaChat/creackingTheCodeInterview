// Find Minimum in Rotated Sorted Array II
// Hard
// company
// Google
// Microsoft
// Amazon
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// You must decrease the overall operation steps as much as possible.

// Example 1:

// Input: nums = [1,3,5]
// Output: 1
// Example 2:

// Input: nums = [2,2,2,0,1]
// Output: 0

// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// nums is sorted and rotated between 1 and n times.

// Follow up: This problem is similar to Find Minimum in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

function getDirection(A, high, low, mid) {
  let originalMid = mid;
  while (mid - 1 >= low && A[mid] >= A[mid - 1]) {
    mid--;
  }
  if (A[mid] !== A[originalMid]) return ["left", mid];
  return ["right", originalMid + 1];
}

// The below solution works faster on leetcode, reason being in the very first time we are moving moving to the correct mid once and for all
// TC - O(logN)
function solve(A) {
  let n = A.length;
  let low = 0;
  let high = n - 1;
  if (A[low] < A[high]) return A[low];
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (A[mid] < A[mid - 1]) return A[mid];
    if (A[mid] > A[mid + 1]) return A[mid + 1];
    if (A[high] < A[mid]) low = mid + 1;
    else if (A[high] > A[mid]) high = mid - 1;
    else {
      const [direction, value] = getDirection(A, high, low, mid);
      if (direction === "left") high = value;
      else low = mid + 1;
    }
  }
  return A[high];
}

// The Official leetcode solution
// TC - O(logN)
function officialSolution(A) {
  let n = A.length;
  let low = 0;
  let high = n - 1;
  if (A[low] < A[high]) return A[low];
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (A[mid] < A[mid - 1]) return A[mid];
    if (A[mid] > A[mid + 1]) return A[mid + 1];
    if (A[high] < A[mid]) low = mid + 1;
    else if (A[high] > A[mid]) high = mid - 1;
    else {
      high = high - 1;
    }
  }
  return A[low];
}

// const nums = [0]
// const nums = [9,9,9,9,0,0,0,1,1,1,9,9,9]
// const nums = [3,3,3,3,3,3,3,3,1,3]
// const nums = [0]
const nums = [10, 10, 1, 10, 10, 10, 10];
// const nums = [
//   3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
//   3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
//   3, 3, 3, 3, 1, 2, 3,
// ];

console.log(solve(nums));
