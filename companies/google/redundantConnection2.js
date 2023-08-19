// 685. Redundant Connection II
// Hard
// Companies
// In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

// The given input is a directed graph that started as a rooted tree with n nodes (with distinct values from 1 to n), with one additional directed edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.

// The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [ui, vi] that represents a directed edge connecting nodes ui and vi, where ui is a parent of child vi.

// Return an edge that can be removed so that the resulting graph is a rooted tree of n nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

// Example 1:

// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]
// Example 2:

// Input: edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
// Output: [4,1]

// Constraints:

// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ui, vi <= n
// ui != vi

// The solution goes as follows
// First find out the potential edges that are candidates to be eliminated
// We can find out this, by going through all the edges, for any node(n2) in edges [n1, n2], if n2 has any other parent than n1 then n2 has 2 parents so current edge and the previous edges both can be candidates for elimination
// After this initialise each nodes parent to it's own
// Start finding union, at and point if 2 nodes in an edge has same parent this means there is a cycle, return first candidate in that case
// TC - O(E)
// SC - O(N), for parent array
function findPotentialCandidate(edges) {
  const parent = new Array(edges.length + 1).fill(0);
  let canA = [];
  let canB = [];
  for (let e of edges) {
    const [n1, n2] = e;
    if (parent[n2] !== 0) {
      canA = [parent[n2], n2];
      canB = [n1, n2];
      e[1] = 0;
      return [canA, canB];
    } else {
      parent[n2] = n1;
    }
  }
  return [canA, canB];
}

function initParent(n) {
  let parent = [];
  for (let i = 1; i <= n; i++) parent[i] = i;
  return parent;
}

function findParent(x, parent) {
  if (parent[x] === x) return x;
  return (parent[x] = findParent(parent[x], parent));
}

function solve(edges) {
  const [canA, canB] = findPotentialCandidate(edges);
  const parent = initParent(edges.length);
  for (let [x, y] of edges) {
    if (y === 0) continue;
    const px = findParent(x, parent);
    const py = findParent(y, parent);
    if (px === py) return canA.length === 0 ? [x, y] : canA;
    parent[px] = py;
  }
  return canB;
}

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
// Output: [2,3]

// const edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
// Output: [4,1]

console.log(solve(edges));
