/*
Path in Directed Graph

Problem Description
Given an directed graph having A nodes labelled from 1 to A containing M edges given by matrix B of size M x 2such that there is a edge directed from node

B[i][0] to node B[i][1].

Find whether a path exists from node 1 to node A.

Return 1 if path exists else return 0.

NOTE:

There are no self-loops in the graph.
There are no multiple edges between two nodes.
The graph may or may not be connected.
Nodes are numbered from 1 to A.
Your solution will run on multiple test cases. If you are using global variables make sure to clear them.


Problem Constraints
2 <= A <= 10^5

1 <= M <= min(200000,A*(A-1))

1 <= B[i][0], B[i][1] <= A



Input Format
The first argument given is an integer A representing the number of nodes in the graph.

The second argument given a matrix B of size M x 2 which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].



Output Format
Return 1 if path exists between node 1 to node A else return 0.



Example Input
Input 1:

 A = 5
 B = [  [1, 2] 
        [4, 1] 
        [2, 4] 
        [3, 4] 
        [5, 2] 
        [1, 3] ]
Input 2:

 A = 5
 B = [  [1, 2]
        [2, 3] 
        [3, 4] 
        [4, 5] ]


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 The given doens't contain any path from node 1 to node 5 so we will return 0.
Explanation 2:

 Path from node1 to node 5 is ( 1 -> 2 -> 3 -> 4 -> 5 ) so we will return 1.
*/

// Idea is to apply a BFS on given graph for node 1
// TC = O(N+E)
// SC = O(N) + O(N) + O(N), first for adjacency list second for visited array and third for queue

function bfs(adjList, s, e) {
  if (s === e) return true;
  let visited = new Array(A + 1).fill(false);
  let queue = [s];
  let ele;
  while (queue.length !== 0) {
    ele = queue.shift();
    visited[ele] = true;
    if (ele === e) return 1;
    const nodes = adjList[ele]
    if (nodes) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (!visited[node]) queue.push(node);
      }
    }
  }
  return ele === A ? 1 : 0;
}

function getAdjList(B) {
  let list = {};
  for (let i = 0; i < B.length; i++) {
    const [n1, n2] = B[i];
    if (!list[n1]) list[n1] = [];
    list[n1].push(n2);
  }
  return list;
}

function solve(A, B) {
  let adjList = getAdjList(B);
  return bfs(adjList, 1, A);
}

// TC - O(N+E)
// SC - O(N)

function dfs(node, list, visited, target) {
  if (node === target) return true;
  let nodes = list[node];
  let result = false;
  if (nodes) {
    for (let i = 0; i < nodes.length; i++) {
      const currentNode = nodes[i];
      if (!visited[currentNode]) {
        visited[currentNode] = true;
        result = dfs2(currentNode, list, visited, target);
        if (result) return result;
      }
    }
  }
  return result;
}

function solveUsingDfs(A, B) {
  const adjacencyList = getAdjList(B);
  let visited = new Array(A + 1).fill(false);
  visited[1] = true;
  return dfs2(1, adjacencyList, visited, A);
}

// const A = 5;
// const B = [
//   [1, 2],
//   [4, 1],
//   [2, 4],
//   [3, 4],
//   [2, 5],
//   [1, 3],
// ];

// const A = 5;
// const B = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ];

// const A = 4
// const B =
// [
//   [1, 2],
//   [2, 3],
//   [4, 3]
// ]

const A = 5;
const B = [
  [1, 4],
  [2, 1],
  [4, 3],
  [4, 5],
  [2, 3],
  [2, 4],
  [1, 5],
  [5, 3],
  [2, 5],
  [5, 1],
  [4, 2],
  [3, 1],
  [5, 4],
  [3, 4],
  [1, 3],
  [4, 1],
  [3, 5],
  [3, 2],
  [5, 2],
];

console.log(solve(A, B));
