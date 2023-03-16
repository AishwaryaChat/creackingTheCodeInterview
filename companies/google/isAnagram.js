// Valid Anagram
// Easy
// company
// Bloomberg
// Amazon
// Google
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 10^4
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// TC - O(N)
// SC - O(M), M is length of s 
function solve(s, t) {
  if (s.length !== t.length) return false;
  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
    if (!mapS[s[i]]) mapS[s[i]] = 0;
    mapS[s[i]] += 1;
    if (!mapT[t[i]]) mapT[t[i]] = 0;
    mapT[t[i]] += 1;
  }
  for (let [key, value] of Object.entries(mapS)) {
    if (value !== mapT[key]) return false;
  }
  return true;
}

// const s = "anagram";
// const t = "nagaram";
// Output: true

// const s = "rat"
// const t = "car"
// Output: false
const s = "aa";
const t = "a";

console.log(solve(s, t));
