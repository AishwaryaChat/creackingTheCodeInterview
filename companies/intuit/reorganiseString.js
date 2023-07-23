// Reorganize String
// Medium
// 6.3K
// 204
// company
// Amazon
// company
// Uber
// company
// Pinterest
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(N + N * log k) ~ O(N * log k), where k is number of unique characters in s, but k<=26 so we can say that complexity is O(N)
// SC - O(k), but k<=26 so we can say that complexity is O(1)
function solve(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) map[s[i]] = 0;
    map[s[i]] += 1;
    if (map[s[i]] > Math.floor(s.length / 2) + 1) return "";
  }
  const maxHeap = new Heap({ comparator: (a, b) => a[1] >= b[1] });
  for (let [key, val] of Object.entries(map)) {
    maxHeap.push([key, val]);
  }

  let ans = "";

  while (maxHeap.getSize() > 0) {
    const [letter1, count1] = maxHeap.pop();
    if (ans.length === 0 || ans[ans.length - 1] !== letter1) {
      ans += letter1;
      if (count1 - 1 > 0) maxHeap.push([letter1, count1 - 1]);
    } else {
      if (maxHeap.getSize() === 0) return "";
      const [letter2, count2] = maxHeap.pop();
      ans += letter2;
      if (count2 - 1 > 0) maxHeap.push([letter2, count2 - 1]);
      maxHeap.push([letter1, count1]);
    }
  }
  return ans;
}

// TC - O(N)
// SC - O(26) ~ O(1)
function solveOptimised(s) {
  let maxCount = 0;
  let letter = "";
  let charCounts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charCounts[s.charCodeAt(i) - 97] += 1;
    if (charCounts[s.charCodeAt(i) - 97] > Math.floor((s.length + 1) / 2))
      return "";
    if (maxCount < charCounts[s.charCodeAt(i) - 97]) {
      maxCount = charCounts[s.charCodeAt(i) - 97];
      letter = s[i];
    }
  }
  console.log(charCounts);

  let ans = new Array(s.length);
  let index = 0;
  while (charCounts[letter.charCodeAt(0) - 97] > 0) {
    ans[index] = letter;
    charCounts[letter.charCodeAt(0) - 97] -= 1;
    index += 2;
  }
  for (let i = 0; i < 26; i++) {
    while (charCounts[i] > 0) {
      if (index >= s.length) {
        index = 1;
      }
      ans[index] = String.fromCharCode(i + 97);
      charCounts[i] -= 1;
      index += 2;
    }
  }
  return ans.join("");
}

const s = "aab";
// Output: "aba"
// Example 2:

// const s = "aaab"
// Output: ""

console.log(solve(s));
