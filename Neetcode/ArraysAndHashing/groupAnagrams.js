// Group Anagrams
// Medium
// company
// Amazon
// Apple
// Yandex
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 10^4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// TC - O(N*KlogK) - where K is the length of the larget string
function solveOptimised(arr) {
  let ans = [];
  let anaMap = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split("").sort();
    if (anaMap[word] !== undefined) {
      const index = anaMap[word];
      ans[index].push(arr[i]);
    } else {
      anaMap[word] = count;
      ans[count] = [arr[i]];
      count++;
    }
  }
  return ans;
}

// TC - O(N*K), where K is length of longest string
// SC - O(N+26) ~ O(N)
function solveOptimised1(strs) {
  let map = {};
  for (s of strs) {
    let count = new Array(26).fill(0);
    for (c of s) {
      count[c.charCodeAt(0) - 97] += 1;
    }
    const key = count.join("-");
    if (map[key] !== undefined) map[key].push(s);
    else map[key] = [s];
  }
  return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// const strs = [""]
// Output: [[""]]

// const strs = ["a"]
// Output: [["a"]]

console.log(solveOptimised1(strs));
