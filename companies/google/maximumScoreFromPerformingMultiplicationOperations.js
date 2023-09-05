// 1770. Maximum Score from Performing Multiplication Operations
// Companies
// Google
// Apple
// You are given two 0-indexed integer arrays nums and multipliers of size n and m respectively, where n >= m.

// You begin with a score of 0. You want to perform exactly m operations. On the ith operation (0-indexed) you will:

// Choose one integer x from either the start or the end of the array nums.
// Add multipliers[i] * x to your score.
// Note that multipliers[0] corresponds to the first operation, multipliers[1] to the second operation, and so on.
// Remove x from nums.
// Return the maximum score after performing m operations.



// Example 1:

// Input: nums = [1,2,3], multipliers = [3,2,1]
// Output: 14
// Explanation: An optimal solution is as follows:
// - Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
// - Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
// - Choose from the end, [1], adding 1 * 1 = 1 to the score.
// The total score is 9 + 4 + 1 = 14.
// Example 2:

// Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
// Output: 102
// Explanation: An optimal solution is as follows:
// - Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
// - Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
// - Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
// - Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
// - Choose from the end, [-2,7], adding 7 * 6 = 42 to the score. 
// The total score is 50 + 15 - 9 + 4 + 42 = 102.


// Constraints:

// n == nums.length
// m == multipliers.length
// 1 <= m <= 300
// m <= n <= 10^5
// -1000 <= nums[i], multipliers[i] <= 1000

// TC - O(M^2), where M is length of multipliers
// Since for every multiplier we are going one level deep and left is atmost M, so M^2
// SC - O(M^2)
function dfs(op, left, right, nums, multipliers, dp) {
    if (op === multipliers.length) return 0
    const key = `${left}_${op}`
    if (dp[key] !== undefined) return dp[key]
    const result1 = multipliers[op] * nums[left] + dfs(op + 1, left + 1, right, nums, multipliers, dp)
    const result2 = multipliers[op] * nums[right] + dfs(op + 1, left, right - 1, nums, multipliers, dp)
    return dp[key] = Math.max(result1, result2)
}

function solve(nums, multipliers) {
    const dp = {}
    return dfs(0, 0, nums.length - 1, nums, multipliers, dp)
}

const nums = [1, 2, 3]
const multipliers = [3, 2, 1]
// Output: 14

// const nums = [-5,-3,-3,-2,7,1]
// const multipliers = [-10,-5,3,4,6]
// Output: 102

console.log(solve(nums, multipliers))