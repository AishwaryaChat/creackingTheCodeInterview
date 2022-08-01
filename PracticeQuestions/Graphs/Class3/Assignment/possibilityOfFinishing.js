/*
Possibility of Finishing

Problem Description
There are a total of A courses you have to take, labeled from 1 to A.

Some courses may have prerequisites, for example to take course 2 you have to first take course 1, which is expressed as a pair: [1,2].

So you are given two integer array B and C of same size where for each i (B[i], C[i]) denotes a pair.

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Return 1 if it is possible to finish all the courses, or 0 if it is not possible to finish all the courses.



Problem Constraints
1 <= A <= 6*104

1 <= length(B) = length(C) <= 10^5

1 <= B[i], C[i] <= A



Input Format
The first argument of input contains an integer A, representing the number of courses.

The second argument of input contains an integer array, B.

The third argument of input contains an integer array, C.



Output Format
Return 1 if it is possible to finish all the courses, or 0 if it is not possible to finish all the courses.



Example Input
Input 1:

 A = 3
 B = [1, 2]
 C = [2, 3]
Input 2:

 A = 2
 B = [1, 2]
 C = [2, 1]


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 It is possible to complete the courses in the following order:
    1 -> 2 -> 3
Explanation 2:

 It is not possible to complete all the courses.
*/

// The idea here is to just find out if a cycle is present in the graph or not
// If a cycle is present then return 0 else return 1
// TC - O(N+E)
// SC - O(N) - Adjacency matrix + visited array + path array + recursion stack

function getAdjacencyList(A, B, C) {
  let adjList = {};
  for (let i = 1; i <= A; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    adjList[B[i]].push(C[i]);
  }
  return adjList;
}

function findCycle(s, adjList, visited, path) {
  visited[s] = true;
  path[s] = true;
  let edges = adjList[s];
  for (let i = 0; i < edges.length; i++) {
    let node = edges[i];
    if (path[node]) return true;
    if (!visited[node] && findCycle(node, adjList, visited, path)) return true;
  }
  path[s] = false;
  return false;
}

function solve(A, B, C) {
  let adjList = getAdjacencyList(A, B, C);
  let visited = new Array(A + 1).fill(false);
  let path = new Array(A + 1).fill(false);
  for (let i = 1; i <= A; i++) {
    if (!visited[i] && findCycle(i, adjList, visited, path)) return 0;
  }
  return 1;
}

// const A = 3;
// const B = [1, 2];
// const C = [2, 3];

const A = 2;
const B = [1, 2];
const C = [2, 1];

console.log(solve(A, B, C));
