// Alien Dictionary
// Hard
// company
// Airbnb
// Bloomberg
// Amazon
// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary, where the strings in words are
// sorted lexicographically
//  by the rules of this new language.

// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

// Example 1:

// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"
// Example 2:

// Input: words = ["z","x"]
// Output: "zx"
// Example 3:

// Input: words = ["z","x","z"]
// Output: ""
// Explanation: The order is invalid, so return "".

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of only lowercase English letters.
const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function findOrder(a, b, graph, indegreeMap) {
  let i = 0;
  for (; i < a.length && i < b.length; i++) {
    const source = a[i];
    const dest = b[i];
    if (indegreeMap[source] === undefined) indegreeMap[source] = 0;
    if (indegreeMap[dest] === undefined) indegreeMap[dest] = 0;
    if (source === dest) continue;
    else {
      graph[source].push(dest);
      if (indegreeMap[dest] === undefined) indegreeMap[dest] = 0;
      indegreeMap[dest] += 1;
      break;
    }
  }
}

function solve(words) {
  let graph = {};
  let indegreeMap = {};
  for (word of words) {
    for (char of word) {
      graph[char] = [];
      indegreeMap[char] = 0;
    }
  }
  for (let i = 1; i < words.length; i++) {
    const source = words[i - 1];
    const dest = words[i];
    if (source.length > dest.length && source.startsWith(dest)) {
      return "";
    }
    findOrder(source, dest, graph, indegreeMap);
  }
  const queue = new Queue();
  let ans = [];
  for ([key, val] of Object.entries(indegree)) {
    if (val === 0) queue.enqueue(key);
  }
  console.log([graph, indegree]);
  while (!queue.isEmpty()) {
    const ele = queue.dequeue();
    ans.push(ele);
    let edges = graph[ele];
    if (edges) {
      for (let i = 0; i < edges.length; i++) {
        const dest = edges[i];
        indegree[dest] -= 1;
        if (indegree[dest] === 0) queue.enqueue(dest);
      }
    }
  }
  return ans.length < Object.keys(indegree).length ? "" : ans.join("");
}

// const words = ["wrt", "wrf", "er", "ett", "rftt"];
// Output: "wertf"

// const words = ["z","x"]
// Output: "zx"

// const words = ["z", "x", "z"];
// Output: ""
// const words = ["ab", "adc"];
// Output: "abcd"

// const words = ["abc", "ab"];
// Output: ""
// const words = ["z", "z"];

// const words =["wrt","wrtkj"]
// const words = ["z", "x", "a", "zb", "zx"];
const words = ["bc", "b", "cbc"];

console.log("ans", solve(words));
