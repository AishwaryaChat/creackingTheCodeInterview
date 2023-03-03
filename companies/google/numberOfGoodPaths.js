// Number of Good Paths
// Hard
// company
// Google
// There is a tree (i.e. a connected, undirected graph with no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges.

// You are given a 0-indexed integer array vals of length n where vals[i] denotes the value of the ith node. You are also given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.

// A good path is a simple path that satisfies the following conditions:

// The starting node and the ending node have the same value.
// All nodes between the starting node and the ending node have values less than or equal to the starting node (i.e. the starting node's value should be the maximum value along the path).
// Return the number of distinct good paths.

// Note that a path and its reverse are counted as the same path. For example, 0 -> 1 is considered to be the same as 1 -> 0. A single node is also considered as a valid path.

// Example 1:

// Input: vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]
// Output: 6
// Explanation: There are 5 good paths consisting of a single node.
// There is 1 additional good path: 1 -> 0 -> 2 -> 4.
// (The reverse path 4 -> 2 -> 0 -> 1 is treated as the same as 1 -> 0 -> 2 -> 4.)
// Note that 0 -> 2 -> 3 is not a good path because vals[2] > vals[0].
// Example 2:

// Input: vals = [1,1,2,2,3], edges = [[0,1],[1,2],[2,3],[2,4]]
// Output: 7
// Explanation: There are 5 good paths consisting of a single node.
// There are 2 additional good paths: 0 -> 1 and 2 -> 3.
// Example 3:

// Input: vals = [1], edges = []
// Output: 1
// Explanation: The tree consists of only one node, so there is one good path.

// Constraints:

// n == vals.length
// 1 <= n <= 3 * 104
// 0 <= vals[i] <= 105
// edges.length == n - 1
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// edges represents a valid tree.

// https://leetcode.com/problems/number-of-good-paths/solutions/3052905/javascript-union-find/
// TC - O(NlogN)
// SC - O(N)
function sortEdges(edges) {
  edges.sort((a, b)=>{
      a = Math.max(...a.map(i => vals[i]));
      b = Math.max(...b.map(i => vals[i]));
      return a-b;
  });
}

function findParent(x, parent) {
if (parent[x] === x) return x;
return (parent[x] = findParent(parent[x], parent));
}

function union(x, y, parent, maxCount) {
const px = findParent(x, parent);
const py = findParent(y, parent);
if (px === py) return 0;
parent[py] = px;
const [xValue, xFreq] = maxCount[px];
const [yValue, yFreq] = maxCount[py];
if(xValue===yValue) {
  maxCount[px] = [xValue, xFreq+yFreq]
} else if(xValue>yValue) {
  maxCount[px] = [xValue, xFreq]
} else {
  maxCount[px] = [yValue, yFreq]
}
}

function getPathsFromJoining(x, y, parent, maxCount) {
const px = findParent(x, parent);
const py = findParent(y, parent);
if (px === py) return 0;
const [xValue, xFreq] = maxCount[px];
const [yValue, yFreq] = maxCount[py];
if (xValue === yValue) return xFreq * yFreq;
return 0;
}

function solve(vals, edges) {
const N = vals.length;
const parent = [];
const maxCount = [];
for (let i = 0; i < N; i++) {
  parent[i] = i;
  maxCount[i] = [vals[i], 1];
}
sortEdges(edges, vals);
console.log("edges", edges)
let count = N;
for (let e of edges) {
  console.log("parent", parent)
  console.log("maxCount", maxCount)
  count += getPathsFromJoining(e[0], e[1], parent, maxCount)
  union(e[0], e[1], parent, maxCount);
}
return count;
}

const vals = [1, 3, 2, 1, 3];
const edges = [
[0, 1],
[0, 2],
[2, 3],
[2, 4],
];
// Output: 6

// const vals = [1,1,2,2,3]
// const edges = [[0,1],[1,2],[2,3],[2,4]]
// Output: 7

// const vals = [1];
// const edges = [];
// Output: 1

console.log(solve(vals, edges));
