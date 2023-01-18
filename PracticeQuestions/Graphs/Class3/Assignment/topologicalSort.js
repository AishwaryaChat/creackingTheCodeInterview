/*
Topological Sort

Problem Description
Given an directed acyclic graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.

Return the topological ordering of the graph and if it doesn't exist then return an empty array.

If there is a solution return the correct ordering. If there are multiple solutions print the lexographically smallest one.

Ordering (a, b, c) is said to be lexographically smaller than ordering (e, f, g) if a < e or if(a==e) then b < f and so on.

NOTE:

There are no self-loops in the graph.
There are no multiple edges between two nodes.
The graph may or may not be connected.
Nodes are numbered from 1 to A.
Your solution will run on multiple test cases. If you are using global variables make sure to clear them.


Problem Constraints
2 <= A <= 10^4

1 <= M <= min(100000,A*(A-1))

1 <= B[i][0], B[i][1] <= A



Input Format
The first argument given is an integer A representing the number of nodes in the graph.

The second argument given a matrix B of size M x 2 which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].



Output Format
Return a one-dimensional array denoting the topological ordering of the graph and it it doesn't exist then return empty array.



Example Input
Input 1:

 A = 6
 B = [  [6, 3] 
        [6, 1] 
        [5, 1] 
        [5, 2] 
        [3, 4] 
        [4, 2] ]
Input 2:

 A = 3
 B = [  [1, 2]
        [2, 3] 
        [3, 1] ]


Example Output
Output 1:

 [5, 6, 1, 3, 4, 2]
Output 2:

 []


Example Explanation
Explanation 1:

 The given graph contain no cycle so topological ordering exists which is [5, 6, 1, 3, 4, 2]
Explanation 2:

 The given graph contain cycle so topological ordering not possible we will return empty array.
*/

const MinHeap = require("../../../Heaps/heapGeneralisedImplementation");

function getAdjacencyList(A, B) {
  let adjList = {};
  for (let i = 1; i <= A; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    const n1 = B[i][0];
    const n2 = B[i][1];
    adjList[n1].push(n2);
  }
  return adjList;
}

///////////////////////////////////////////////////////////

function getIndegree(A, B) {
  let indegree = new Array(A + 1).fill(0);
  for (let i = 0; i < B.length; i++) {
    let node = B[i][1];
    indegree[node] += 1;
  }
  return indegree;
}

// The Idea here is find indegree for all the nodes
// put all the nodes with indegree 0 in a min heap
// We are  doing sorting or using minheap because question says answer should also follow sorted nodes
// Also we are taking indegree nodes 0 first because for those nodes there is no dependency so we can start our traversal from those nodes
// now in every iteration take minimum element from minheap, add it to answer and reduce the indegree of adjacent nodes to this node by 1
// TC - O(N*N*logN) - N for while loop, NlogN for sorting
// we can optimize this to O(NlogN) by using minheap, rather than sorting

function solveLeftToRight(A, B) {
  let adjList = getAdjacencyList(A, B);
  let indegree = getIndegree(A, B);
  let inter = [];
  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) inter.push(i);
  }
  inter.sort((a, b) => b - a);
  let op = [];
  while (inter.length > 0) {
    let ele = inter.pop();
    op.push(ele);
    let adj = adjList[ele];
    for (let i = 0; i < adj.length; i++) {
      let node = adj[i];
      if (indegree[node] > 0) {
        indegree[node] -= 1;
        if (indegree[node] === 0) inter.push(node);
      }
    }
    inter.sort((a, b) => b - a);
  }
  return op;
}

// TC - O(NlogN)
// SC - O(E)
function optimizedLeftToRight(A, B) {
  let adjList = getAdjacencyList(A, B);
  let indegree = getIndegree(A, B);
  let minHeap = new MinHeap();
  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) minHeap.push(i);
  }
  let op = [];
  while (minHeap.getSize() > 0) {
    let ele = minHeap.pop();
    op.push(ele);
    let adj = adjList[ele];
    for (let i = 0; i < adj.length; i++) {
      let node = adj[i];
      if (indegree[node] > 0) {
        indegree[node] -= 1;
        if (indegree[node] === 0) {
          minHeap.push(node);
        }
      }
    }
  }
  return op;
}

// Right to left
// The right to left solution will not give the lexographically smallest answer
// Below solution works on the concept of outdegree
// If outdegree of a node is 0 then it will be visited last in the path
// So as soon as a node doesnt have any more edges to it, push it to output
// This will give you a right to left topological order
// TC - O(E)
// SC - O(E)
function dfs(s, adjList, visited, op) {
  visited[s] = true;
  let nodes = adjList[s];
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (!visited[node]) dfs(node, adjList, visited, op);
  }
  op.push(s);
}

function solve(A, B) {
  let adjList = getAdjacencyList(A, B);
  let op = [];
  let visited = new Array(A + 1).fill(false);
  for (let i = 1; i <= A; i++) {
    if (!visited[i]) dfs(i, adjList, visited, op);
  }
  return op.reverse();
}

// const A = 6;
// const B = [
//   [6, 3],
//   [6, 1],
//   [5, 1],
//   [5, 2],
//   [3, 4],
//   [4, 2],
// ];

// const A = 3;
// const B = [
//   [1, 2],
//   [2, 3],
//   [3, 1],
// ];

// console.log(solveLeftToRight(A, B));

const A = 8;
const B = [
  [1, 4],
  [1, 2],
  [4, 2],
  [4, 3],
  [3, 2],
  [5, 2],
  [3, 5],
  [8, 2],
  [8, 6],
];
console.log(solve(A, B));
// console.log(optimizedLeftToRight(A, B));
