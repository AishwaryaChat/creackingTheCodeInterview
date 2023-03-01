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

class FindUnionByRank {
  constructor(n) {
    this.n = n;
    this.parent = [];
    this.rank = [];
    this.init();
  }
  init() {
    let parent = [];
    let rank = [];
    for (let i = 0; i < n; i++) {
      parent[i] = i;
      rank[i] = 0;
    }
    this.parent = parent;
    this.rank = rank;
  }
  union(x, y) {
    const px = this.findParent(x);
    const py = this.findParent(y);
    if (px === py) return false;
    if (this.rank[px] === this.rank[py]) {
      this.parent[px] = py;
      this.rank[py] += 1;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[px] = py;
    }
    return true;
  }
  findParent(x) {
    if (x === this.parent[x]) return x;
    this.parent[x] = this.findParent(this.parent[x]);
    return this.parent[x];
  }
}

// TC - O(E*(Q)), E is number of edges, Q - is complexity for union, which is O(1) in average case
// SC - O(N) - number of nodes in graph
function solve(n, edges) {
  const union = new FindUnionByRank(n);
  let ans = 0;
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    union.union(n1, n2);
  }
  for (let i = 0; i < n; i++) {
    union.findParent(i);
  }
  let map = {};
  for (let i = 0; i < union.parent.length; i++) {
    if (map[union.parent[i]] === undefined) {
      ans += 1;
      map[union.parent[i]] = true;
    }
  }
  return ans;
}

function getAdjacencyList(n, edges) {
  let map = {};
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    map[n1].push(n2);
    map[n2].push(n1);
  }
  return map;
}

function dfs(i, adjacencyList, visited) {
  const neighbours = adjacencyList[i];
  for (let i = 0; i < neighbours.length; i++) {
    if (!visited[neighbours[i]]) {
      visited[neighbours[i]] = true;
      dfs(neighbours[i], adjacencyList, visited);
    }
  }
}
// TC - O(N+E)
// SC - O(N+E)
function solveDFS(n, edges) {
  const adjacencyList = getAdjacencyList(n, edges);
  const visited = {};
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      ans += 1;
      visited[i] = true;
      dfs(i, adjacencyList, visited);
    }
  }
  return ans;
}

// const n = 5;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [3, 4],
//   [0, 1],
// ];
// Output: 2

// const n = 5;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ];
// Output: 1

const n =4
const edges =[[0,1],[2,3],[1,2]]

console.log(solve(n, edges));
