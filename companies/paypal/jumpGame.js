// Jump Game
// Medium
// company
// Amazon
// MakeMyTrip
// Microsoft
// Paypal
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:

// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5

// TC - O(N^2)
// SC - O(N)
function findCanJump(nums, pos, dp) {
  if (pos === nums.length - 1) return (dp[pos] = true);
  if (nums[pos] === 0) return (dp[pos] = false);
  if (dp[pos] !== undefined) return dp[pos];
  const farthestJump = Math.min(pos + nums[pos], nums.length - 1);
  for (let j = pos + 1; j <= farthestJump; j++) {
    if (findCanJump(nums, j, dp)) return (dp[pos] = true);
  }
  return (dp[pos] = false);
}

function solve(nums) {
  if (nums.length > 1 && nums[0] === 0) return false;
  let dp = {};
  findCanJump(nums, 0, dp);
  return dp[nums.length - 1] === undefined ? false : true;
}

const nums = [2, 3, 1, 1, 4];
// Output: true

// const nums = [3, 2, 1, 0, 4];
// Output: false

console.log(solve(nums));
