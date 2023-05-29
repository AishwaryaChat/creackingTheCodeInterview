// Permutations
// Medium
// company
// Bloomberg
// Amazon
// Microsoft
// Paypal
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// TC - O(N!)
// SC - O(N!)
function recurse(nums, result, temp, map) {
  if (temp.length === nums.length) {
    result.push(temp.map((a) => a));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if(map[i]===true) continue
    map[i] = true
    temp.push(nums[i])
    recurse(nums, result, temp, map)
    map[i] = false
    temp.pop()
  }
  return result;
}

function solve(nums) {
  return recurse(nums, [], [], {});
}

const nums = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// const nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// const nums = [1]
// Output: [[1]]

console.log(solve(nums));
