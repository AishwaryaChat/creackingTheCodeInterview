// Word Pattern
// Easy
// company
// Adobe
// Amazon
// Bolt
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

// TC - O(N+M)
// SC - O(N)
function solve(pattern, s) {
  let map = new Map();
  let mapS = new Map();
  let newS = s.split(" ");
  if (newS.length != pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      if (!mapS.has(newS[i])) {
        map.set(pattern[i], newS[i]);
        mapS.set(newS[i], pattern[i]);
      } else {
        return false;
      }
    } else {
      if (map.get(pattern[i]) !== newS[i]) {
        return false;
      }
    }
  }
  return true;
}


// const pattern = "abba", s = "dog cat cat dog"
// Output: true

const pattern = "abba",
  s = "dog cat cat fish";
// Output: false

// const pattern = "aaaa",
//   s = "dog cat cat dog";

// const pattern = "aaa";
// const s = "aa aa aa aa";
// Output: false

// const pattern = "abba";
// const s = "dog constructor constructor dog";

console.log(solve(pattern, s));
