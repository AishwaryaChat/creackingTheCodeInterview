// Zigzag Conversion
// Medium
// company
// Zopsmart
// Amazon
// Apple
// Paypal
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// TC - O(N)
// SC - O(1)
function solve(s, n) {
  if (n === 1) return s;
  ans = "";
  const charsInSection = 2 * (n - 1);
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j < s.length) {
      ans += s[j];
      // Only for 1st and last row there will not be 2 characters consecutively, rest for all row there can be
      if (i !== 0 && i !== n - 1) {
        const charInBetween = charsInSection - 2 * i;
        const secondIndex = j + charInBetween;
        if (secondIndex < s.length) {
          ans += s[secondIndex];
        }
      }
      j += charsInSection;
    }
  }
  return ans;
}

const s = "PAYPALISHIRING";
const numRows = 3;
// Output: "PAHNAPLSIIGYIR"

// const s = "PAYPALISHIRING"
// const numRows = 4
// Output: "PINALSIGYAHRPI"

// const s = "A"
// const numRows = 1
// Output: "A"

console.log(solve(s, numRows));
