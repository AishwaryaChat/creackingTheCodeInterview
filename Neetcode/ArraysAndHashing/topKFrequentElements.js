// Top K Frequent Elements
// Medium
// company
// Amazon
// Facebook
// Google
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(NlonN)
// SC - O(N)
function solve(nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }
  const keys = Object.keys(map);
  let maxHeap = new Heap({ comparator: (a, b) => a.value > b.value });
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = map[key];
    maxHeap.push({ key, value });
  }
  let ans = [];

  for (let i = 0; i < k; i++) {
    ans.push(Number(maxHeap.pop().key));
  }
  return ans;
}

// TC - O(N) - average case, O(N^2) worst case
// The below solution is given using Quick Select algorithm

function swap(a, b, nums) {
  [nums[a], nums[b]] = [nums[b], nums[a]];
  return;
}

function partition(arr, low, high, freq) {
  let pivot = freq[arr[high]];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (freq[arr[j]] <= pivot) {
      i++;
      swap(i, j, arr);
    }
  }

  swap(i + 1, high, arr);

  return i + 1;
}

// Implementation of QuickSelect
function kthSmallest(a, left, right, k, freq) {
  while (left <= right) {
    // Partition a[left..right] around a pivot
    // and find the position of the pivot
    let pivotIndex = partition(a, left, right, freq);

    // If pivot itself is the k-th smallest element
    if (pivotIndex == k - 1);
    else if (pivotIndex > k - 1)
      // If there are more than k-1 elements on
      // left of pivot, then k-th smallest must be
      // on left side.
      right = pivotIndex - 1;
    // Else k-th smallest is on right side.
    else left = pivotIndex + 1;
  }
  return -1;
}

function solveOptimised(nums, k) {
  let N = nums.length;
  let freq = {};
  for (let i = 0; i < N; i++) {
    freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1;
  }
  const uniqueElements = Object.keys(freq);
  const uniqN = uniqueElements.length;
  kthSmallest(uniqueElements, 0, uniqN - 1, uniqN - k, freq);
  return uniqueElements.slice(uniqN - k);
}

// const nums = [1, 1, 1, 2, 2, 3]
// const k = 2;
// Output: [1,2]

// const nums = [1],
//   k = 1;
// Output: [1]

const nums = [4, 5, 9, 6, 2, 4, 7, 6, 2, 2, 2];
const k = 4;
// Output - [ '9', '6', '4', '2' ]

// const nums = [5,3,1,1,1,3,73,1]
// const k = 1
// 1:4
// 5:1
// 3:2
// 73:1
console.log(solveOptimised(nums, k));
