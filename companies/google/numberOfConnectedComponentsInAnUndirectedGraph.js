// Number of Connected Components in an Undirected Graph
// Medium
// company
// TikTok
// Google
// Amazon
// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

// Example 1:

// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

// Constraints:

// 1 <= n <= 2000
// 1 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai <= bi < n
// ai != bi
// There are no repeated edges.

function initParent(n) {
  let parent = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }
  return parent;
}

function findParent(x, parent) {
  if (x === parent[x]) return x;
  parent[x] = findParent(parent[x], parent);
  return parent[x];
}

function union(parent, x, y) {
  const px = findParent(x, parent);
  const py = findParent(y, parent);
  if (px === py) return false;
  parent[px] = py;
  return true;
}

// TC - O(E*(Q)), E is number of edges, Q - is complexity for union, which is O(1) in average case
// SC - O(N) - number of nodes in graph
function solve(n, edges) {
  const parent = initParent(n);
  let ans = 0;
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    union(parent, n1, n2);
  }
  for (let i = 0; i < n; i++) {
    findParent(i, parent);
  }
  let map = {};
  for (let i = 0; i < parent.length; i++) {
    if (map[parent[i]] === undefined) {
      ans += 1;
      map[parent[i]] = true;
    }
  }
  return ans;
}

// const n = 5;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [3, 4],
// ];
// Output: 2
// Example 2:

const n = 5;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];
// Output: 1

console.log(solve(n, edges));
