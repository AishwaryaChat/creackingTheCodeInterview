// Maximum Value at a Given Index in a Bounded Array
// Medium
// company
// Apple
// Adobe
// Bloomberg
// You are given three positive integers: n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions:

// nums.length == n
// nums[i] is a positive integer where 0 <= i < n.
// abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
// The sum of all the elements of nums does not exceed maxSum.
// nums[index] is maximized.
// Return nums[index] of the constructed array.

// Note that abs(x) equals x if x >= 0, and -x otherwise.

// Example 1:

// Input: n = 4, index = 2,  maxSum = 6
// Output: 2
// Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
// There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].
// Example 2:

// Input: n = 6, index = 1,  maxSum = 10
// Output: 3

// Constraints:

// 1 <= n <= maxSum <= 10^9
// 0 <= index < n

// TC - O(M log M), where M is maxsum
function getSum(I, V, n) {
  let count = 0;
  if (V > I) {
    count += ((2 * V - I) * (1 + I)) / 2; // this formula is derived
  } else {
    count += (V * (V + 1)) / 2 + (I - V + 1);
  }

  if (V >= n - I) {
    count += ((2 * V - n + 1 + I) * (n - I)) / 2; // this formula is derived
  } else {
    count += (V * (V + 1)) / 2 + (n - I - V);
  }
  return count - V;
}

function solve(n, index, maxSum) {
  let low = 1;
  let high = maxSum;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const sum = getSum(index, mid, n);
    if (sum <= maxSum && getSum(index, mid + 1, n) > maxSum) return mid;
    if (sum <= maxSum) low = mid + 1;
    else high = mid - 1;
  }
  return low
}

// const n = 4
// const index = 2
// const maxSum = 6
// Output: 2

// const n = 6
// const index = 1
// const maxSum = 10
// Output: 3

const n =3
const index =2
const maxSum =18

console.log(solve(n, index, maxSum));
