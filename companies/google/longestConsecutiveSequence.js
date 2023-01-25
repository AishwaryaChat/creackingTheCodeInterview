// Longest Consecutive Sequence
// Medium
// company
// Google
// Amazon
// Adobe
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

// TC - O(N)
// SC - O(N)
function solve(nums) {
  let map = new Set();
  for (let i = 0; i < nums.length; i++) {
    map.add(nums[i], i);
  }
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let ans = 1;
    let num = nums[i];
    if (map.has(num - 1)) continue;
    else {
      while (map.has(num + 1)) {
        ans++;
        num = num + 1;
      }
      max = Math.max(max, ans);
    }
  }
  return max;
}

// TC - O(NlogN)
// SC - O(1)
function solveNlogN(nums) {
  if (nums.length == 0) return 0;
  nums.sort((a, b) => a - b);
  let max = 1;
  let currStreak = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i - 1] === nums[i] - 1) {
        currStreak++;
      } else {
        currStreak = 1;
      }
      max = Math.max(currStreak, max);
    }
  }
  max = Math.max(currStreak, max);

  return max;
}

// const nums = [100, 4, 200, 1, 3, 2];
// Output: 4

// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9

// const nums = [0];
// Output: 1

console.log(solveNlogN(nums));
