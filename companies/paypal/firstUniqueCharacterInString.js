// First Unique Character in a String
// Easy
// company
// Bloomberg
// Paypal
// Oracle
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 10^5
// s consists of only lowercase English letters.

// TC - O(N)
// SC - O(26) ~ O(1)
function solve(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map[char]) map[char] = { count: 0, index: i };
    map[char].count += 1;
  }
  for (let [key, { count, index }] of Object.entries(map)) {
    if (count == 1) return index;
  }
  return -1;
}

const s = "leetcode";
// Output: 0

// const s = "loveleetcode"
// Output: 2

// const s = "aabb"
// Output: -1

console.log(solve(s));
