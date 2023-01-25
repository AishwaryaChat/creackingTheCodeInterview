// Pow(x, n)
// Medium
// company
// Facebook
// Amazon
// Bloomberg
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// n is an integer.
// -10^4 <= xn <= 10^4

// TC - O(logN)
// SC - O(logN) - stack space
function findPower(x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;
  let ans = findPower(x, Math.floor(n / 2));
  ans = ans * ans;
  const mod = n % 2;
  return mod ? x * ans : ans;
}

function solve(x, n) {
  let ans = findPower(x, Math.abs(n));
  return n < 0 ? 1 / ans : ans;
}

// const x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

const x = 2.1,
  n = 3;
// Output: 9.26100
// Example 3:

// const x = 2.0,
//   n = -2;
// Output: 0.25000
console.log(solve(x, n));
