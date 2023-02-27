// Longest Substring Without Repeating Characters
// Medium
// company
// Bloomberg
// Amazon
// Microsoft
// Google

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

// TC - O(N)
// TC - worstcase - O(2N)
function solve(s) {
  let map = {};
  let maxLength = 0;
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (map[s[j]] === undefined) map[s[j]] = 0;
    if (map[s[j]] > 0) {
      maxLength = Math.max(maxLength, j - i);
      while (map[s[j]] > 0) {
        map[s[i]] -= 1;
        i++;
      }
    }
    map[s[j]] += 1;
    j++;
  }
  maxLength = Math.max(maxLength, j - i);
  return maxLength;
}

// TC - O(N)
function solveOptimised(s) {
  let map = {};
  let maxLength = 0;
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (map[s[j]] !== undefined) {
      i = Math.max(map[s[j]], i);
    }
    map[s[j]] = j+1;
    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }
  return maxLength;
}

// const s = "abcabcbb";
// Output: 3

// const s = "bbbbb"
// Output: 1

// const s = "pwwkew"
// Output: 3

const s = " ";
// const s = "abba"
// const s = "dvdf"

// const s = "tmmzuxt"

console.log(solveOptimised(s));
