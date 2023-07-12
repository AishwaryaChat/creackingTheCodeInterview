// Largest Color Value in a Directed Graph
// Hard
// 1.9K
// 62
// company
// Google
// company
// Adobe
// company
// TikTok
// There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.

// You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.

// A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.

// Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.

// Example 1:
// Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
// Output: 3
// Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).

// Example 2:
// Input: colors = "a", edges = [[0,0]]
// Output: -1
// Explanation: There is a cycle from 0 to 0.

// Constraints:

// n == colors.length
// m == edges.length
// 1 <= n <= 10^5
// 0 <= m <= 10^5
// colors consists of lowercase English letters.
// 0 <= aj, bj < n

// TC - O(n+m)
// SC - O(n+m)
const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function getAdListAndIndegree(n, edges) {
  let adjList = {};
  let indegree = {};
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
    indegree[i] = 0;
  }
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    indegree[n2] += 1;
    adjList[n1].push(n2);
  }
  return [adjList, indegree];
}

function solve(colors, edges) {
  const queue = new Queue();
  const n = colors.length;
  const count = new Array(n).fill().map(() => new Array(26).fill(0));
  const [adjList, indegree] = getAdListAndIndegree(n, edges);
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.enqueue(i);
  }
  let answer = 0;
  let nodeSeen = 0;
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    nodeSeen += 1;
    answer = Math.max(answer, ++count[node][colors[node].charCodeAt(0) - 97]);
    for (let neighbour of adjList[node]) {
      for (let i = 0; i < 26; i++) {
        count[neighbour][i] = Math.max(count[neighbour][i], count[node][i]);
      }
      indegree[neighbour] -= 1;
      if (indegree[neighbour] === 0) queue.enqueue(neighbour);
    }
  }
  return nodeSeen < n ? -1 : answer;
}

const colors = "abaca";
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [3, 4],
];
// Output: 3

// const colors = "a"
// const edges = [[0,0]]
// Output: -1

console.log(solve(colors, edges));
