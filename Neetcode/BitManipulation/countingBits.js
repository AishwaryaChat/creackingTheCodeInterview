// Counting Bits
// Easy

// company
// Amazon
// Goldman Sachs
// Google
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 10^5

// Follow up:

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

function solve(n) {
  let ans = [0];
  for (let i = 1; i <= n; i++) {
    let num = i;
    let count = 0;
    while (num > 0) {
      count += 1;
      num = num & (num - 1);
    }
    ans.push(count);
  }
  return ans;
}

// The below solution is based on observation from different numbers
// 0 - 00
// 1 - 01
// 2 - 10
// 3 - 11
// 4 - 100
// 5 - 101
// 6 - 110
// 7 - 111
// 8 - 1000
// Here is a pattern whichbkeeps repeating with power of 2
// The solution is DP based
// TC - O(N)
// SC - O(1)
function solveOptimised(n) {
  let ans = [0];
  let x = 0;
  let b = 1;
  while (b <= n) {
    while (x < b && x + b <= n) {
      ans[x + b] = ans[x] + 1;
      ++x;
    }
    x = 0;
    b = b << 1; // b = b * 2
  }
  return ans;
}

// TC - O(N)
// (N & (N-1)) differ with N with only 1 set bit
// N & (N-1) unset the last set bit of N, so ans for N will ne Number of set bits in (N & (N-1)) plus 1
function solveOptimisedLastSetBit(n) {
  let ans = [0];
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i & (i - 1)] + 1;
  }
  return ans;
}

// const n = 2;
// Output: [0,1,1]

// const n = 5;
// Output: [0,1,1,2,1,2]

const n = 32;

console.log(solveOptimisedLastSetBit(n));
