// Graph Valid Tree
// Medium
// company
// Bloomberg
// TikTok
// LinkedIn
// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.

// Example 1:

// Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
// Output: true
// Example 2:

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
// Output: false

// Constraints:

// 1 <= n <= 2000
// 0 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no self-loops or repeated edges.

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
    for (let i = 0; i < this.n; i++) {
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

function solve(n, edges) {
  if (edges.length !== n - 1) return false;
  const union = new FindUnionByRank(n);
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    if (!union.union(n1, n2)) return false;
  }
  return true;
}

// const n = 5
// const edges = [[0,1],[0,2],[0,3],[1,4]]
// Output: true

const n = 5;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 4],
];
// Output: false

console.log(solve(n, edges));
