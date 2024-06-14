// 2709. Greatest Common Divisor Traversal
// Solved
// Hard
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums, and you are allowed to traverse between its indices. You can traverse between index i and index j, i != j, if and only if gcd(nums[i], nums[j]) > 1, where gcd is the greatest common divisor.

// Your task is to determine if for every pair of indices i and j in nums, where i < j, there exists a sequence of traversals that can take us from i to j.

// Return true if it is possible to traverse between all such pairs of indices, or false otherwise.

// Example 1:

// Input: nums = [2,3,6]
// Output: true
// Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
// To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
// To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.
// Example 2:

// Input: nums = [3,9,5]
// Output: false
// Explanation: No sequence of traversals can take us from index 0 to index 2 in this example. So, we return false.
// Example 3:

// Input: nums = [4,3,12,8]
// Output: true
// Explanation: There are 6 possible pairs of indices to traverse between: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3). A valid sequence of traversals exists for each pair, so we return true.

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105

class DSU {
  constructor(N) {
    this.parent = new Array(N + 1);
    this.count = N;
    for (let i = 0; i <= N; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    if (this.parent[x] === x) return x;
    return (this.parent[x] = this.find(this.parent[x]));
  }
  union(x, y) {
    let px = this.find(x);
    let py = this.find(y);
    if (px === py) return;
    this.parent[px] = py;
    this.count -= 1;
  }
}

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var sol1 = function (nums) {
  const MAX = 100000;
  const N = nums.length;
  if (N === 1) return true;
  let has = new Array(MAX + 1);
  for (let x of nums) {
    has[x] = true;
  }
  if (has[1]) return false;
  let sieve = new Array(MAX + 1).fill(0);
  for (let d = 2; d <= MAX; d++) {
    if (sieve[d] === 0) {
      for (let v = d; v <= MAX; v += d) {
        sieve[v] = d;
      }
    }
  }
  let dsu = new DSU(2 * MAX + 1);
  for (const x of nums) {
    let val = x;
    while (val > 1) {
      const prime = sieve[val];
      const root = prime + MAX;
      if (dsu.find(x) !== dsu.find(root)) dsu.union(root, x);
      while (val % prime === 0) {
        val /= prime;
      }
    }
  }

  let count = 0;
  for (let i = 2; i <= MAX; i++) {
    if (has[i] && dsu.find(i) === i) {
      count += 1;
    }
  }
  return count === 1;
};

// Solution
// https://www.youtube.com/watch?v=jZ-RVp5CVYY

function sol2(nums) {
  const N = nums.length;
  if (N === 1) return true;
  let dsu = new DSU(nums.length);
  let factorIndexMap = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let f = 2;
    while (f * f <= n) {
      if (n % f === 0) {
        if (factorIndexMap[f] !== undefined) {
          dsu.union(i, factorIndexMap[f]);
        } else factorIndexMap[f] = i;
        while (n % f === 0) n = n / f;
      }
      f++;
    }
    if (n > 1) {
      if (factorIndexMap[n] !== undefined) dsu.union(i, factorIndexMap[n]);
      else factorIndexMap[n] = i;
    }
  }
  return dsu.count === 1;
}
