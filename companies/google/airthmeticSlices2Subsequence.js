// 446. Arithmetic Slices II - Subsequence
// https://leetcode.com/problems/arithmetic-slices-ii-subsequence/description/
// Hard
// Topics
// Companies
// Given an integer array nums, return the number of all the arithmetic subsequences of nums.

// A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1, 3, 5, 7, 9], [7, 7, 7, 7], and [3, -1, -5, -9] are arithmetic sequences.
// For example, [1, 1, 2, 5, 7] is not an arithmetic sequence.
// A subsequence of an array is a sequence that can be formed by removing some elements (possibly none) of the array.

// For example, [2,5,10] is a subsequence of [1,2,1,2,4,1,5,10].
// The test cases are generated so that the answer fits in 32-bit integer.

// Example 1:

// Input: nums = [2,4,6,8,10]
// Output: 7
// Explanation: All arithmetic subsequence slices are:
// [2,4,6]
// [4,6,8]
// [6,8,10]
// [2,4,6,8]
// [4,6,8,10]
// [2,4,6,8,10]
// [2,6,10]
// Example 2:

// Input: nums = [7,7,7,7,7]
// Output: 16
// Explanation: Any subsequence of this array is arithmetic.

// Constraints:

// 1  <= nums.length <= 1000
// -2^31 <= nums[i] <= 2^31 - 1

// The idea here is to calculate all the subsequences with every possible difference
// Create a dp array, where dp[i][diff] means count of subsequences ending at position i with difference diff, value of dp[i][diff] is a map, which has count for different diff values
// suppose we are at i, we will then calculate difference of nums[i] with every nums from 0 - i-1, and that for difference we will increment the count at dp[i][difference]
// but here for every j, we must have calculated this dp[j][diff] before itself, and all of that count will contribute to dp[i][difference] also, because all these subsequences are before i and with the same difference they will be applicable for i as well
// But there is a catch in this solution, we are adding subsequences even of length 2, but valid subsequences are only of lengeth 3, so we need to subtract these from total subsequences that we have calculated i.e n * (n-1), but these are not subsequences these are all combinations i.e (a, b) and (b, a) as well, but we dont want that so we divide it by 2
// hence ans will be ans - ((n*(n-1))/2)

// TC - O(N^2)
// SC - O(N)
function solve(nums) {
  const n = nums.length;
  let count = new Array(n).fill().map(() => ({}));
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const delta = nums[i] - nums[j];
      if (count[j][delta] === undefined) count[j][delta] = 0;
      if (count[i][delta] === undefined) count[i][delta] = 0;
      count[i][delta] += count[j][delta] + 1;
      ans += count[j][delta] + 1;
    }
  }
  return ans - (n * (n - 1)) / 2;
}

const nums = [2,4,6,8,10]
// Output: 7

// const nums = [7,7,7,7,7]
// Output: 16

console.log(solve(nums))
