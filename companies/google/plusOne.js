// Plus One
// Easy
// company
// Apple
// Google
// Adobe
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

function solve(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i] + carry;
    if (digit > 9) {
      carry = Math.floor(digit / 10);
      digit %= 10;
    } else {
      carry = 0;
    }
    digits[i] = digit;
  }
  return carry > 0 ? [carry].concat(digits) : digits;
}

// TC - O(N)
function solveWithoutAddition(digits) {
  let flag = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9 && !flag) digits[i] = 0;
    else if (digits[i] < 9 && !flag) {
      digits[i] += 1;
      flag = true;
      break;
    }
  }
  return !flag ? [1].concat(digits) : digits;
}

// TC
function solveUsingBitManipulation(n) {
  let m = 1;
  while ((m & n) != 0) {
    n = n ^ m;
    m = m << 1;
  }
  n = n ^ m;
  return n;
}

// const digits = [1,2,3]
// Output: [1,2,4]

// const digits = [4, 3, 2, 1];
// Output: [4,3,2,2]

// const digits = [9];
// Output: [1,0]

const digits = [1, 2, 5, 9, 8];

console.log(solveWithoutAddition(digits));
// console.log(solveUsingBitManipulation(9999));
