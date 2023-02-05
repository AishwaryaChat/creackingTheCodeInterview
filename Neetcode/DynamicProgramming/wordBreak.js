// Word Break
// Medium
// company
// Amazon
// Bloomberg
// Facebook
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

// TC - O(N^3)
// SC - O(n) - recursion and
function recursive(s, wordDict, start, dp) {
  if (start === s.length) return true;
  if (dp[start] !== undefined) return dp[start];
  dp[start] = true;
  for (let end = start + 1; end <= s.length; end++) {
    if (wordDict[s.substring(start, end)] && recursive(s, wordDict, end, dp))
      return true;
  }
  dp[start] = false;
  return dp[start];
}

function solveRecursive(s, wordDict) {
  let map = {};
  let dp = {};
  for (let i = 0; i < wordDict.length; i++) {
    map[wordDict[i]] = true;
  }
  return recursive(s, map, 0, dp);
}

// TC - O(N^3), for loop and finding substring
// SC - O(N)
function solveIterative(s, wordDict) {
  let map = {};
  let dp = {};
  for (let i = 0; i < wordDict.length; i++) {
    map[wordDict[i]] = true;
  }
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    dp[i] = false;
    for (let j = 0; j < i; j++) {
      if (dp[j] && map[s.substring(j, i)]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length]
}

const s = "leetcode",
  wordDict = ["l", "eetc", "ode"];
// Output: true

// const s = "applepenapple", wordDict = ["apple","pen"]
// Output: true

// const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

console.log(solveIterative(s, wordDict));
