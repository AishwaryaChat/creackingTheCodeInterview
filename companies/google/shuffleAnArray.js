// 384. Shuffle an Array
// Medium
// company
// Google
// Uber
// Apple
// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
//                        // Any permutation of [1,2,3] must be equally likely to be returned.
//                        // Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.shuffled = [];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.shuffled = this.nums.map((a) => a);
  return this.shuffled;
};

function randmIndex(n, map) {
  while (true) {
    const index = Math.floor(Math.random() * n);
    if (map[index] === undefined) return index;
  }
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let map = {};
  let ans = [];
  const n = this.nums.length;
  for (let i = 0; i < n; i++) {
    const index = randmIndex(n, map);
    ans[i] = this.nums[index];
    map[index] = true;
  }
  return ans;
};

// Constraints:

// 1 <= nums.length <= 50
// -10^6 <= nums[i] <= 10^6
// All the elements of nums are unique.
// At most 104 calls in total will be made to reset and shuffle.

function solve(operations, input) {
  const solution = new Solution(input[0][0]);
  let output = [null];
  for (let i = 1; i < input.length; i++) {
    switch (operations[i]) {
      case "shuffle":
        output.push(solution.shuffle());
        continue;
      case "reset":
        output.push(solution.reset());
        continue;
      default:
        continue;
    }
  }
  return output;
}

const operations = ["Solution", "shuffle", "reset", "shuffle"];
const input = [[[1, 2, 3]], [], [], []];
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

console.log(solve(operations, input));
