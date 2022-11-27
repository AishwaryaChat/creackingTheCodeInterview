// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]
// Example 2:

// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []

// Constraints:

// 1 <= s.length <= 20
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 10
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

const Trie = require("../../../PracticeQuestions/Tries/implementationUsingMaps")

function getTrie(dict) {
  const trie = new Trie();
  for (let i = 0; i < dict.length; i++) {
    trie.insert(dict[i]);
  }
  return trie;
}

function dfs(s, word, pos, dict, result) {
  if (pos === s.length) {
    result.push(word);
    return;
  }
  word += " ";
  for (let i = pos; i < s.length; i++) {
    if (dict.search(s.slice(pos, i + 1))) {
      dfs(s, word + s.slice(pos, i + 1), i + 1, dict, result);
    }
  }
}

function solve(s, dict) {
  const trie = getTrie(dict);
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (trie.search(s.slice(0, i + 1))) {
      dfs(s, s.slice(0, i + 1), i + 1, trie, result);
    }
  }
  return result;
}

const s = "pineapplepenapple";
const wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];

// const s = "cbca"
// const wordDict = ["bc","ca"]
console.log(solve(s, wordDict));
