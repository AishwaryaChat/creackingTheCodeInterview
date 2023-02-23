// Number of Subsequences That Satisfy the Given Sum Condition
// Medium
// company
// Facebook
// Snapchat
// Amazon
// Google
// You are given an array of integers nums and an integer target.

// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)
// Example 2:

// Input: nums = [3,3,6,8], target = 10
// Output: 6
// Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
// Example 3:

// Input: nums = [2,3,3,4,6,7], target = 12
// Output: 61
// Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
// Number of valid subsequences (63 - 2 = 61).

// Constraints:

// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^6
// 1 <= target <= 10^6

// TC - O(N)
function solve(nums, target) {
  nums.sort((a, b) => a - b);
  const MOD = Math.pow(10, 9) + 7;
  let power = [1];
  for (let i = 1; i <= nums.length; i++) {
    power[i] = (2 * power[i - 1]) % MOD;
  }
  let i = 0;
  let j = nums.length - 1;
  let ans = 0;
  while (i <= j) {
    while (i <= j && nums[i] + nums[j] > target) j--;
    if (i <= j) {
      ans = (ans + power[j - i]) % MOD;
      i++;
    }
  }
  return ans;
}

// const nums = [3, 5, 6, 7];
// const target = 9;
// Output: 4

// const nums = [3, 3, 6, 8];
// const target = 10;
// Output: 6

// const nums = [2,3,3,4,6,7]
//  const target = 12
// Output: 61

// const nums = [7, 10, 7, 3, 7, 5, 4];
// const target = 12;

const nums = [
  14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14, 15,
  13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5,
  15, 19, 14,
];
const target = 22;

console.log(solve(nums, target));
