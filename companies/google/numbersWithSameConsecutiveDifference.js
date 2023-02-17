// Numbers With Same Consecutive Differences
// Medium
// company
// Bloomberg
// Google
// Yahoo
// Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

// Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.

// Example 1:

// Input: n = 3, k = 7
// Output: [181,292,707,818,929]
// Explanation: Note that 070 is not a valid number, because it has leading zeroes.
// Example 2:

// Input: n = 2, k = 1
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

// Constraints:

// 2 <= n <= 9
// 0 <= k <= 9

// TC - O(2^n)
// SC - O(2^n)
function recursive(pos, k, num, n, ans) {
  if (pos === n) {
    ans.push(Number(num));
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (i - Number(num[pos - 1]) === k || Number(num[pos - 1]) - i === k) {
      recursive(pos + 1, k, num + `${i}`, n, ans);
    }
  }
}

function solve(n, k) {
  let ans = [];
  for (let i = 1; i <= 9; i++) {
    recursive(1, k, `${i}`, n, ans);
  }
  return ans;
}

// const n = 3
// const k = 7
// Output: [181,292,707,818,929]

const n = 2;
const k = 1;
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

console.log(solve(n, k));
