// Palindrome Number
// Easy
// 8.5K
// 2.4K
// company
// Amazon
// company
// Google
// company
// Bloomberg
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string?

// T - O(logN)
// SC - O(1)
function solve(x) {
  if (x < 0) return false;
  let temp = x;
  let newNum = 0;

//   checking only half of the reversed number
  while (temp > newNum) {
    const rem = temp % 10;
    newNum = newNum * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return temp === newNum || temp == newNum / 10;
}

const x = 1221;
console.log(solve(x));
