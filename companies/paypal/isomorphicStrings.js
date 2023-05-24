// Isomorphic Strings
// Easy
// company
// Microsoft
// LinkedIn
// Amazon
// Paypal
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 10^4
// t.length == s.length
// s and t consist of any valid ascii character.

// TC - O(N)
// SC - O(N)
function solve(s, t) {
  let map = {};
  let revMap = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      if (map[s[i]] !== t[i]) return false;
    } else {
      if (revMap[t[i]] !== undefined) return false;
      map[s[i]] = t[i];
      revMap[t[i]] = s[i];
    }
  }
  return true;
}

// const s = "egg";
// const t = "add";
// Output: true

// const s = "foo"
// const t = "bar"
// Output: false

const s = "paper";
const t = "title";
// Output: true

console.log(solve(s, t));
