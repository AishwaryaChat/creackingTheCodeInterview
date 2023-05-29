// Find All Anagrams in a String
// Medium
// company
// Yandex
// Amazon
// Adobe
// Paypal
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 10^4
// s and p consist of lowercase English letters.

// TC - O(N)
// SC - O(26) ~ O(1)
function solve(s, p) {
  const window = p.length;
  let map = {};
  for (let i = 0; i < window; i++) {
    if (map[p[i]] === undefined) map[p[i]] = 0;
    map[p[i]] += 1;
  }
  let count = Object.keys(map).length;
  let ans = [];
  let low = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      while (low < i) {
        if (map[s[low]] === 0) count += 1;
        map[s[low++]] += 1;
      }
      low++;
    } else {
      while (map[s[i]] === 0) {
        if (map[s[low]] === 0) count += 1;
        map[s[low++]] += 1;
      }
      map[s[i]] -= 1;
      if (map[s[i]] === 0) count -= 1;
    }

    if (count === 0) {
      ans.push(low);
      if (map[s[low]] === 0) {
        count += 1;
      }
      map[s[low++]] += 1;
    }
  }
  return ans;
}

// const s = "cbaebabacd";
// const p = "abc";
// Output: [0,6]

// const s = "abab"
// const p = "ab"
// Output: [0,1,2]

// const s = "abacbabc";
// const p = "abc";
// Output: [1,2,3,5]

const s = "abaacbabc";
const p = "abc";
// Output: [3,4,6];

console.log(solve(s, p));
