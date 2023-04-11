// Subsets
// Medium
// company
// Amazon
// Bloomberg
// Facebook
// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

function backtrack(pos, nums, ans, currAns) {
  ans.push(currAns);
  if (pos >= nums.length) return;
  for(let i=pos; i<nums.length; i++) {
      backtrack(i+1, nums, ans, currAns.concat([nums[i]]));
  }
  return ans;
}

function solve(nums) {
  return backtrack(0, nums, [], []);
}

const nums = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// const nums = [0]
// Output: [[],[0]]

console.log(solve(nums));
