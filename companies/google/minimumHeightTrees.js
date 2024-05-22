// 310. Minimum Height Trees
// Medium
// Topics
// Companies
// Hint
// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
// Example 2:

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// Constraints:

// 1 <= n <= 2 * 10^4
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

const MyQueue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function getAdjacencyList(n, edges) {
  let list = {};
  for (let i = 0; i < n; i++) {
    list[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    list[n1].push(n2);
    list[n2].push(n1);
  }
  return list;
}

//   Brute force
// TC - O(N^2), where N is number of nodes
// SC - O(E+N), for storing adjacency list  and queue
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const [adjList, indegree] = getAdjacencyListAndIndegree(n, edges);
  let visited = {};
  let minHeight = Number.MAX_SAFE_INTEGER;
  let ans = [];
  for (let i = 0; i < n; i++) {
    let queue = new MyQueue();
    queue.enqueue([i, -1]);
    let visited = {};
    let nodeCount = 0;
    visited[i] = true;
    while (!queue.isEmpty()) {
      const [node, height] = queue.dequeue();
      nodeCount += 1;
      if (nodeCount === n) {
        if (minHeight > height) {
          minHeight = height;
          ans = [i];
        } else if (minHeight === height) {
          ans.push(i);
        }
      }
      for (let neighbour of adjList[node]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.enqueue([neighbour, height + 1]);
        }
      }
    }
  }
  return ans;
};

// Optimised
// Here we are considering nodes with 1 indegree as leaf nodes, with each iteration we keep removing leaf nodes and keep decrementing there ingedree, until we are left with 2 nodes, those 2 nodes will be our answer
// TC - O(N+E), where E = V-1, so TC - O(N)
// SC - O(N+E), same as above SC - O(N)

function getAdjacencyListAndIndegree(n, edges) {
  let list = {};
  let indegree = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    list[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2, weight] = edges[i];
    list[n1].push(n2);
    list[n2].push(n1);
    indegree[n1] += 1;
    indegree[n2] += 1;
  }
  return [list, indegree];
}

function solve(n, edges) {
    let leaves = []
    if(n<3) {
        for(let i=0; i<n; i++) leaves.push(i)
        return leaves
    }
    const [adjList, indegree] = getAdjacencyListAndIndegree(n, edges)
    let queue = new MyQueue()
    for(let i=0; i<n; i++) {
        if(indegree[i] === 1) queue.enqueue(i)
    }
    while(n>2) {
        let size = queue.getSize()
        n -= size
        let newLeaves = []
        for(let i=0; i<size; i++) {
            const node = queue.dequeue()
            for(let neighbour of adjList[node]) {
                indegree[neighbour]-=1
                if(indegree[neighbour] === 1) {
                    newLeaves.push(neighbour)
                    queue.enqueue(neighbour)
                }
            }
        }
        leaves = newLeaves
    }
    return leaves
}

const n = 4;
const edges = [
  [1, 0],
  [1, 2],
  [1, 3],
];
// Output: [1]

// const n = 6
// const edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

console.log(solve(n, edges));
