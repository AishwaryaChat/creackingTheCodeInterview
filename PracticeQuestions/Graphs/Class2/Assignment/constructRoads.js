/*
Construct Roads

Problem Description
A country consist of N cities connected by N - 1 roads. King of that country want to construct maximum number of roads such that the new country formed remains bipartite country.

Bipartite country is a country, whose cities can be partitioned into 2 sets in such a way, that for each road (u, v) that belongs to the country, u and v belong to different sets. Also, there should be no multiple roads between two cities and no self loops.

Return the maximum number of roads king can construct. Since the answer could be large return answer % 109 + 7.

NOTE: All cities can be visited from any city.



Problem Constraints
1 <= A <= 10^5

1 <= B[i][0], B[i][1] <= N



Input Format
First argument is an integer A denoting the number of cities, N.

Second argument is a 2D array B of size (N-1) x 2 denoting the initial roads i.e. there is a road between cities B[i][0] and B[1][1] .



Output Format
Return an integer denoting the maximum number of roads king can construct.



Example Input
Input 1:

 A = 3
 B = [
       [1, 2]
       [1, 3]
     ]
Input 2:

 A = 5
 B = [
       [1, 3]
       [1, 4]
       [3, 2]
       [3, 5]
     ]


Example Output
Output 1:

 0
Output 2:

 2


Example Explanation
Explanation 1:

 We can't construct any new roads such that the country remains bipartite.
Explanation 2:

 We can add two roads between cities (4, 2) and (4, 5).
*/

// Idea here is to divide the graph into 2 sets with 0 and 1
// Basically we are coloring the graph, since its given that its a bipartite graph
// so we are applying the same
// Its also given that N-1 edges are already there in graph
// So Number of nodes with color "zero", Multiplied by Number of nodes with color "1"
// Will be the maximum number of edges the graph can have
// And we will subtract N-1 from that number to get the answer
// TC - O(N+E)
// SC - O(N) - visited array and traversal

function getAdjacencyList(A, B) {
  let adjList = {};
  for (let i = 1; i <= A; i++) {
    adjList[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    adjList[B[i][0]].push(B[i][1]);
    adjList[B[i][1]].push(B[i][0]); // since it is an undirected graph
  }
  return adjList;
}

function dfs(s, adjList, visited, col) {
  let edges = adjList[s];
  for (let i = 0; i < edges.length; i++) {
    if (visited[edges[i]] === -1) {
      let count = 1 - visited[s];
      visited[edges[i]] = count;
      col[count]++;
      dfs(edges[i], adjList, visited, col);
    }
  }
}

function solve(A, B) {
  let MOD = Math.pow(10, 9) + 7;
  let visited = new Array(A + 1).fill(-1);
  let col = new Array(2).fill(0);
  let adjList = getAdjacencyList(A, B);
  visited[1] = 0;
  col[0]++;
  check(1, adjList, visited, col);
  return ((((((col[0] % MOD) * col[1]) % MOD) % MOD) % MOD) - (A - 1)) % MOD;
}

// const A = 3
// const B = [
//       [1, 2],
//       [1, 3],
//     ]

const A = 5;
const B = [
  [1, 3],
  [1, 4],
  [3, 2],
  [3, 5],
];

console.log(solve(A, B));
