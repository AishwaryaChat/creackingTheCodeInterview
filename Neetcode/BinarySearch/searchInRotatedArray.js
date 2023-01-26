// Search in Rotated Sorted Array
// Medium

// company
// Amazon
// Bloomberg
// Adobe
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -10^4 <= target <= 10^4

function solve(A, target) {
  let n = A.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    console.log("mid", mid);
    if (A[mid] === target) return mid;
    if (A[mid] >= A[0]) {
      //   mid is in set1
      if (target < A[mid] || target > A[0]) low = mid + 1;
      else high = mid - 1;
    } else {
      // mid is in set 2
      if (target < A[mid] || target >= A[0]) high = mid - 1;
      else low = mid + 1;
    }
  }
  return -1;
}

// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;
// Output: 4

// const nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// const nums = [0], target = 0
// Output: -1

// const nums = [5,1,3], target = 3
// const nums = [3,1], target = 1
const nums = [4, 5, 6, 7, 8, 1, 2, 3],
  target = 8;

console.log(solve(nums, target));
