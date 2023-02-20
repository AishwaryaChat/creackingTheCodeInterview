// Add Binary
// Easy
// company
// HRT
// Hudson River Trading
// Facebook
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 10^4
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// TC - O(N), N is length of bigger string
function solve(a, b) {
  let carry = 0;
  let ans = "";
  if (a.length > b.length) return solve(b, a);
  let j = a.length;
  while (j < b.length) {
    a = 0 + a;
    j++;
  }
  let i = b.length - 1;
  for (; i >= 0; i--) {
    let sum = carry + Number(a[i]) + Number(b[i]);
    if (sum > 2) {
      carry = 1;
      ans = 1 + ans;
    } else if (sum > 1) {
      carry = 1;
      ans = 0 + ans;
    } else {
      ans = sum + ans;
      carry = 0;
    }
  }

  if (carry) {
    ans = carry + ans;
  }
  return ans;
}

// const a = "11";
// const b = "1";
// Output: "100"

// const a = "1010";
// const b = "1011";
// Output: "10101"
const a = "1111";
const b = "1111";

console.log(solve(a, b));
