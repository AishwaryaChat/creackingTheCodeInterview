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

// TC - O(N)
// SC - O(M), M is distinct elements in array, in worst case it can be O(N), when all elements are different
function solve(nums, k) {
  let map = {};
  let maxFreq = 0;
  let freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 0;
    map[nums[i]] += 1;
    maxFreq = Math.max(maxFreq, map[nums[i]]);
  }
  for (let [key, val] of Object.entries(map)) {
    if (!freq[val]) freq[val] = [];
    freq[val].push(key);
  }
  let result = [];
  for (let i = maxFreq; result.length < k && i >= 0; i--) {
    const elements = freq[i];
    if (elements) {
      for (let ind = 0; ind < elements.length && result.length < k; ind++) {
        result.push(elements[ind]);
      }
    }
  }
  return result;
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
// Output: [1,2]
// Example 2:

// const nums = [1]
// const k = 1
// Output: [1]

console.log(solve(nums, k));
