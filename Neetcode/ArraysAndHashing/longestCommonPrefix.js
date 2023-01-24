// Longest Common Prefix
// Easy
// company
// Amazon
// Apple
// Google
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// TC - O(S)
function solve(s) {
  let prefix = "";
  for (let k = 0; k < s[0].length; k++) {
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1][k] !== s[i][k]) {
        return prefix
      }
    }
    prefix = prefix + s[0][k];
  }
  return prefix;
}

const strs = ["flower", "flow", "flight"];
// Output: "fl"

// const strs = ["dog", "racecar", "car"];
// Output: ""
console.log(solve(strs));
