// 522. Longest Uncommon Subsequence II
// Solved
// Medium
// Topics
// Companies
// Given an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1.

// An uncommon subsequence between an array of strings is a string that is a subsequence of one string but not the others.

// A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

// For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

// Example 1:

// Input: strs = ["aba","cdc","eae"]
// Output: 3
// Example 2:

// Input: strs = ["aaa","aaa","aa"]
// Output: -1

// Constraints:

// 2 <= strs.length <= 50
// 1 <= strs[i].length <= 10
// strs[i] consists of lowercase English letters.

// TC - O(N * N * M), where N is number of strings, M is length of longest string
function isSubsequence(x, y) {
  let j = 0;
  for (let i = 0; i < y.length && j < x.length; i++) {
    if (x[j] === y[i]) {
      j++;
    }
  }
  return j === x.length;
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  let maxLength = -1;
  for (let i = 0; i < strs.length; i++) {
    let isUncommon = true;
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        isUncommon = false;
        break;
      }
    }
    if (isUncommon) {
      maxLength = Math.max(maxLength, strs[i].length);
    }
  }
  return maxLength;
};
