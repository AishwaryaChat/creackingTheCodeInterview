// Longest String Chain
// Medium
// company
// Google
// Amazon
// Mathworks
// You are given an array of words where each word consists of lowercase English letters.

// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.

// Example 1:

// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
// Example 2:

// Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5
// Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
// Example 3:

// Input: words = ["abcd","dbqca"]
// Output: 1
// Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
// ["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of lowercase English letters.

function getWordMap(words) {
  let map = new Set();
  for (word of words) map.add(word);
  return map;
}

// Top Down Dynamic Programming
// TC - O(L^2 * N) - L is length of longest word, N is number of words
// SC - O(N)
function dfs(word, wordMap, dp) {
  if (dp.has(word)) return dp.get(word);
  let count = 1;
  for (let i = 0; i < word.length; i++) {
    let newWord = word.substring(0, i) + word.substring(i + 1);
    if (wordMap.has(newWord)) {
      count = Math.max(count, 1 + dfs(newWord, wordMap, dp));
    }
  }
  dp.set(word, count);
  return count;
}

function solve(words) {
  let dp = new Map();
  let wordMap = getWordMap(words);
  let count = 0;
  for (word of words) {
    count = Math.max(count, dfs(word, wordMap, dp));
  }
  console.log(dp);

  return count;
}

// Bottom Up DP
// TC - O(NlogN + N*L*L) ~ O(N(logN + L^2))
// SC - O(N)
function solveIterative(words) {
  words.sort((a, b) => a.length - b.length);
  let dp = {};
  let maxLength = 1;
  for (word of words) {
    dp[word] = 1
    for (let i = 0; i < word.length; i++) {
      const newWord = word.substring(0, i) + word.substring(i + 1);
      const prevWordAns = dp[newWord] || 0;
      dp[word] = Math.max(dp[word], 1 + prevWordAns);
    }
    maxLength = Math.max(maxLength, dp[word])
  }
  return maxLength
}

const words = ["a", "b", "ba", "bca", "bda", "bdca"];
// Output: 4

// const words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5

// const words = ["abcd","dbqca"]
// Output: 1

console.log(solveIterative(words));
