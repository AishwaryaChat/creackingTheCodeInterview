// Given a string s, find the length of the longest substring without repeating characters.

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

var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0;
  let map = new Set();
  let max = 0;
  while (j < s.length) {
    if (map.has(s[j])) {
      while (map.has(s[j])) {
        map.delete(s[i]);
        i++;
      }
    }
    max = Math.max(max, j - i + 1);
    map.add(s[j]);
    j++;
  }
  return max;
};

// const s = "dvdf"
// const s = "abcabcbb"
const s = "pwwkepw";

console.log(lengthOfLongestSubstring(s));
