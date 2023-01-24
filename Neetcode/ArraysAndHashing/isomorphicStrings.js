// Isomorphic Strings
// Easy
// company
// LinkedIn
// Amazon
// Adobe
// Google
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
// SC - O(26) ~ O(1)
var solve = function (s, t) {
  let mapping = {};
  let mappingOfT = {};
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (mapping[s[i]] == undefined ) {
        if(mappingOfT[t[i]] ===undefined) {
            mapping[s[i]] = t[i];
            mappingOfT[t[i]] = s[i];
        } else {
            return false
        }
    }
    newS = newS + mapping[s[i]];
  }
  return newS === t
};


// const s = "egg", t = "add"
// Output: true


// const s = "paper", t = "title"
// Output: true

// const s = "foo";
// const t = "bar";

// const s = "bbbaaaba";
// const t = "aaabbbba";

const s = "badc"
const t = "baba"

console.log(solve(s, t));
