// 3Sum
// Medium
// company
// Amazon
// Bloomberg
// Facebook
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

// The idea is to first sort the array
// Then start taking each element one by one, and for every element find, j and k using the classic two sum solution
// TC - O(N^2)
function solve(nums) {
  nums.sort((a, b) => a - b);
  let N = nums.length;

  let ans = [];
  for (let i = 0; i < N && nums[i] <= 0; i++) {
    if (i == 0 || nums[i - 1] !== nums[i]) {
      let low = i + 1;
      let high = N - 1;
      while (low < high) {
        const sum = nums[i] + nums[low] + nums[high];
        if (sum < 0) low++;
        else if (sum > 0) high--;
        else {
          ans.push([nums[i], nums[low++], nums[high--]]);
          while (low < high && nums[low] === nums[low - 1]) {
            low++;
          }
        }
      }
    }
  }
  return ans;
}

// Not very clear with the below solution
function solveWithoutSort(nums) {
  let dups = {};
  let hashMap = {};
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (dups[nums[i]] === undefined) {
      dups[nums[i]] = i;
      for (let j = i + 1; j < nums.length; j++) {
        let complement = -nums[i] - nums[j];
        if (hashMap[complement] === i) {
          console.log(
            "complement",
            complement,
            "hashMap[complement]",
            hashMap[complement]
          );
          ans.push([nums[i], nums[j], complement]);
        }
        hashMap[nums[j]] = i;
      }
    }
  }
  return ans;
}

const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]

// const nums = [0,1,1]
// Output: []

// const nums = [0, 0, 0];
// Output: [[0,0,0]]

console.log(solve(nums));
