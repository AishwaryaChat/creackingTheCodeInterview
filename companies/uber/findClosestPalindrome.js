// Find the Closest Palindrome
// Hard

// Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.

// The closest is defined as the absolute difference minimized between two integers.

// Example 1:

// Input: n = "123"
// Output: "121"
// Example 2:

// Input: n = "1"
// Output: "0"
// Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.

// Constraints:

// 1 <= n.length <= 18
// n consists of only digits.
// n does not have leading zeros.
// n is representing an integer in the range [1, 1018 - 1].

// TC - O(N)
// SC - O(1)
function countDigits(n) {
  const BigIntTen = BigInt(10);
  let digits = 0;
  while (n) {
    digits += 1;
    n = n / BigIntTen;
  }
  return digits;
}

const abs = (n) => (n < 0n ? -n : n);

/**
 * @param {string} n
 * @return {string}
 */
var solve = function (n) {
  let num = BigInt(n);
  let digits = countDigits(num);
  let BigIntOne = BigInt(1);
  if (digits === 1) return String(num - BigIntOne);
  const candidates = [
    BigInt(Math.pow(10, digits)) + BigIntOne,
    BigInt(Math.pow(10, digits)) - BigIntOne,
    BigInt(Math.pow(10, digits - 1)) - BigIntOne,
  ];
  let mid = Math.floor((digits + 1) / 2);
  const prefix = num / BigInt(Math.pow(10, digits - mid));
  const prefixCandidates = [prefix, prefix + BigIntOne, prefix - BigIntOne];
  prefixCandidates.forEach((v) => {
    const postfix = String(v).split("");
    if (digits % 2 === 1) {
      postfix.pop();
    }
    candidates.push(BigInt(v + postfix.reverse().join("")));
  });
  let minDiff = BigInt(Number.MAX_SAFE_INTEGER);
  let cand = -1;
  candidates.forEach((candidate) => {
    const diff = abs(candidate - num);
    if (diff !== 0n && diff < minDiff) {
      minDiff = diff;
      cand = candidate;
    }
    if (diff === minDiff && candidate < cand) {
      cand = candidate;
    }
  });
  return String(cand);
};

// const A = "10987";
// const A = "1";

// const A = "1213"
const A = "99";
// const A = "807045053224792883";

console.log(solve(A));
