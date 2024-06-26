/*
Cycle in Directed Graph

Problem Description
Given an directed graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].

Find whether the graph contains a cycle or not, return 1 if cycle is present else return 0.

NOTE:

The cycle must contain atleast two nodes.
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
Return 1 if cycle is present else return 0.



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

 1
Output 2:

 0


Example Explanation
Explanation 1:

 The given graph contain cycle 1 -> 3 -> 4 -> 1 or the cycle 1 -> 2 -> 4 -> 1
Explanation 2:

 The given graph doesn't contain any cycle.
*/

// Idea here is to check if the path that we are going through and the current node is already present in that path, if yes then return true

// TC = O(N+E)
// SC = O(N) -

function getAdjList(B) {
  let list = {};
  for (let i = 0; i < B.length; i++) {
    const [n1, n2] = B[i];
    if (!list[n1]) list[n1] = [];
    list[n1].push(n2);
  }
  return list;
}

function dfs(adjList, visited, path, s) {
  if (!visited[s]) {
    visited[s] = true;
    path[s] = true;
    let nodes = adjList[s];
    if (nodes) {
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (path[node]) return true;
        if (!visited[node] && dfs(adjList, visited, path, node)) return true;
      }
    }
  }
  path[s] = false;
  return false;
}

function solve(A, B) {
  let adjList = getAdjList(B);
  let visited = new Array(A + 1).fill(false);
  let path = new Array(B.length + 1).fill(false);
  //   since the graph may or may not connected so we have to do this for each node
  for (let i = 1; i <= A; i++) {
    if (!visited[i] && dfs(adjList, visited, path, i)) return 1;
  }
  return 0;
}

// const A = 5;
// const B = [
//   [1, 2],
//   [4, 1],
//   [2, 4],
//   [3, 4],
//   [5, 2],
//   [1, 3],
// ];

const A = 5;
const B = [
  [1, 2],
  [1, 3],
  [2, 3],
  [1, 4],
  [4, 3],
  [4, 5],
  [3, 5],
];

// const A = 5;
// const B = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
// ];

console.log(solve(A, B));
