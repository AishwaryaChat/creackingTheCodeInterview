// Kth Largest Element in an Array
// Medium
// company
// Facebook
// Apple
// Amazon
// Paypal
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

// TC - O(N), average case, O(N^2), worst case
// SC - O(1)
// Below method is called quick select
// kth largest element can also be called as N-kth smallest element in array
//So with the help of qucik Select we will find N-kth smallest element in the array and that will be the kth largest element in the array
function swap(i, j, nums) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function partition(nums, start, end, pivotIndex) {
  const pivot = nums[pivotIndex];
  swap(pivotIndex, end, nums);
  for (let i = start; i < end; i++) {
    if (nums[i] < pivot) {
      swap(start, i, nums);
      start++;
    }
  }
  swap(start, end, nums);
  return start;
}

function quickSelect(nums, start, end, kSmallest) {
  if (start === end) return nums[start];
  // Pivot index is one where all the elements to its left are smaller than it and all the elements on right are greater than it.
  const pivotIndex = partition(nums, start, end, start);
  // Since we know the index of pivot element, now we can easily find out N-kth element whether it will be on left or right of pivot index
  if (pivotIndex === kSmallest) return nums[pivotIndex];
  else if (kSmallest < pivotIndex)
    return quickSelect(nums, start, pivotIndex - 1, kSmallest);
  return quickSelect(nums, pivotIndex + 1, end, kSmallest);
}

function solve(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

// const nums = [3,2,1,5,6,4]
// const k = 2
// Output: 5
// Example 2:

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
// Output: 4

console.log(solve(nums, k));
