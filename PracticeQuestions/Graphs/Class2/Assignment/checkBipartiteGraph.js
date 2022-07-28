/*
Check Bipartite Graph

Problem Description
Given a undirected graph having A nodes. A matrix B of size M x 2 is given which represents the edges such that there is an edge between B[i][0] and B[i][1].

Find whether the given graph is bipartite or not.

A graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B

Note:

There are no self-loops in the graph.

No multiple edges between two pair of vertices.

The graph may or may not be connected.

Nodes are Numbered from 0 to A-1.

Your solution will run on multiple testcases. If you are using global variables make sure to clear them.



Problem Constraints
1 <= A <= 100000

1 <= M <= min(A*(A-1)/2,200000)

0 <= B[i][0],B[i][1] < A



Input Format
The first argument given is an integer A.

The second argument given is the matrix B.



Output Format
Return 1 if the given graph is bipartide else return 0.



Example Input
Input 1:

A = 2
B = [ [0, 1] ]
Input 2:

A = 3
B = [ [0, 1], [0, 2], [1, 2] ]


Example Output
Output 1:

1
Output 2:

0


Example Explanation
Explanation 1:

Put 0 and 1 into 2 different subsets.
Explanation 2:

 
It is impossible to break the graph down to make two different subsets for bipartite matching
*/

// Idea is to use BFS here, color all the adjacent nodes of a node and keep doing this
// in recursion, if at any point the color of parent and adjacent node is same
// return false
// TC - O(N+E)
// SC = O(N) - for adjacency matrix and visited array

function getAdjacencyList(A, B) {
  let adjList = {};
  for (let i = 0; i < A; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    adjList[B[i][0]].push(B[i][1]);
    adjList[B[i][1]].push(B[i][0]); // since it is an undirected graph
  }
  return adjList;
}

function check(s, adjList, visited) {
  let edges = adjList[s];
  for (let i = 0; i < edges.length; i++) {
    if (visited[edges[i]] === -1) {
      visited[edges[i]] = 1 - visited[s];
      if (!check(edges[i], adjList, visited)) return false;
    } else if (visited[edges[i]] === visited[s]) return false;
  }
  return true;
}

function solve(A, B) {
  let adjList = getAdjacencyList(A, B);
  let visited = new Array(A).fill(-1);
  for (let i = 0; i < A; i++) {
    if (visited[i] === -1) {
      visited[i] = 0;
      if (!check(i, adjList, visited)) return 0;
    }
  }
  return 1;
}

// const A = 2
// const B = [ [0, 1] ]

// const A = 3;
// const B = [
//   [0, 1],
//   [0, 2],
//   [1, 2],
// ];

const A = 9;
const B = [
  [2, 5],
  [6, 7],
  [4, 8],
  [2, 3],
  [0, 3],
  [4, 7],
  [1, 8],
  [3, 8],
  [1, 3],
];

console.log(solve(A, B));
