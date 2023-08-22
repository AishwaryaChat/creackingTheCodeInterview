// 2448. Minimum Cost to Make Array Equal
// Hard
// company
// Google
// Amazon
// Cisco
// You are given two 0-indexed arrays nums and cost consisting each of n positive integers.

// You can do the following operation any number of times:

// Increase or decrease any element of the array nums by 1.
// The cost of doing one operation on the ith element is cost[i].

// Return the minimum total cost such that all the elements of the array nums become equal.

// Example 1:

// Input: nums = [1,3,5,2], cost = [2,3,1,14]
// Output: 8
// Explanation: We can make all the elements equal to 2 in the following way:
// - Increase the 0th element one time. The cost is 2.
// - Decrease the 1st element one time. The cost is 3.
// - Decrease the 2nd element three times. The cost is 1 + 1 + 1 = 3.
// The total cost is 2 + 3 + 3 = 8.
// It can be shown that we cannot make the array equal with a smaller cost.
// Example 2:

// Input: nums = [2,2,2,2,2], cost = [4,2,8,1,3]
// Output: 0
// Explanation: All the elements are already equal, so no operations are needed.

// Constraints:

// n == nums.length == cost.length
// 1 <= n <= 10^5
// 1 <= nums[i], cost[i] <= 10^6
// Test cases are generated in a way that the output doesn't exceed 2^53-1

// TC - O(nlogk), where k is number of elements between minimum and maximum element in nums array
// TC - O(1)
function checkCost(nums, cost, target) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans += Math.abs(target - nums[i]) * cost[i];
  }
  return ans;
}

function solve(nums, cost) {
  let low = Math.min(...nums);
  let high = Math.max(...nums);
  let ans = Number.MAX_SAFE_INTEGER;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    const cost1 = checkCost(nums, cost, mid);
    const cost2 = checkCost(nums, cost, mid + 1);
    ans = Math.min(cost1, cost2);
    if (cost1 > cost2) low = mid + 1;
    else high = mid;
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
}

// This solution is based on weighted median
// Resources - https://www.youtube.com/watch?v=clHTLCrl7eM&t=3s
// TC - O(NlogN)
function solveUsingWeightedMedian(nums, cost) {
  nums = nums.map((nums, i) => [nums, cost[i]]).sort(([a], [b]) => a - b);
  let pCount = 0;
  const sum = cost.reduce((acc, curr) => acc + curr);
  const [med] = nums.find(([_, cost]) => (pCount += cost) >= sum / 2);
  return nums.reduce((acc, [num, cost]) => acc + Math.abs(num - med) * cost, 0);
}

// const nums = [1, 3, 5, 2];
// const cost = [2, 3, 1, 14];
// Output: 8

// const nums = [2,2,2,2,2]
// const cost = [4,2,8,1,3]
// Output: 0

const nums = [7, 4];
const cost = [7, 6];

console.log(solveUsingWeightedMedian(nums, cost));
