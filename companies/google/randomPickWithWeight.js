// Random Pick with Weight
// Medium
// https://leetcode.com/problems/random-pick-with-weight/solutions/617357/random-pick-with-weight/
// company
// Facebook
// Google
// Roblox
// You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.

// You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

// For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).

// Example 1:

// Input
// ["Solution","pickIndex"]
// [[[1]],[]]
// Output
// [null,0]

// Explanation
// Solution solution = new Solution([1]);
// solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.
// Example 2:

// Input
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// Output
// [null,1,1,1,1,0]

// Explanation
// Solution solution = new Solution([1, 3]);
// solution.pickIndex(); // return 1. It is returning the second element (index = 1) that has a probability of 3/4.
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 0. It is returning the first element (index = 0) that has a probability of 1/4.

// Since this is a randomization problem, multiple answers are allowed.
// All of the following outputs can be considered correct:
// [null,1,1,1,1,0]
// [null,1,1,1,1,1]
// [null,1,1,1,0,0]
// [null,1,1,1,0,1]
// [null,1,0,1,0,0]
// ......
// and so on.

// Constraints:

// 1 <= w.length <= 10^4
// 1 <= w[i] <= 10^5
// pickIndex will be called at most 104 times.

/**
 * @param {number[]} w
 */
class Solution {
  constructor(w) {
    this.sum = 0;
    this.prefixSumArray = this.generatePrefixSum(w);
  }

  generatePrefixSum(w) {
    let arr = new Array(w.length).fill(0);
    arr[0] = w[0];
    for (let i = 1; i < w.length; i++) {
      arr[i] += arr[i - 1] + w[i];
    }
    this.sum = arr[w.length - 1];
    return arr;
  }
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const searchEle = Math.floor((this.sum * Math.random()) + 1);
  let start = 0;
  let end = this.prefixSumArray.length - 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);
  if(searchEle > this.prefixSumArray[mid]) {
        start = mid + 1
    } else {
        end = mid
    }
  }
  return start
};

function solve(operations, input) {
  let solution;
  let output = [null];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "Solution":
        solution = new Solution(input[i]);
        continue;
      case "pickIndex":
        output.push(solution.pickIndex());
        continue;
      default:
        continue;
    }
  }
  return output;
}

// const operations = ["Solution", "pickIndex"];
// const inputs = [[1], []];
// Output
// [null,0]

const operations = [
  "Solution",
  "pickIndex",
  "pickIndex",
  "pickIndex",
  "pickIndex",
  "pickIndex",
];
const inputs = [[1, 3], [], [], [], [], []];
// Output
// [null,1,1,1,1,0]

console.log(solve(operations, inputs));
