// Sheldon and Pair of Cities

// Problem Description
// Sheldon lives in a country with A cities (numbered from 1 to A) and B bidirectional roads.

// Roads are denoted by integer array D, E and F of size M, where D[i] and E[i] denotes the cities and F[i] denotes the distance between the cities.

// Now he has many lectures to give in the city and is running short of time, so he asked you C queries, for each query i, find the shortest distance between city G[i] and H[i].

// If the two cities are not connected then the distance between them is assumed to be -1.

// Problem Constraints
// 1 <= A <= 200

// 1 <= B <= 200000

// 1 <= C <= 100000

// 1 <= F[i] <= 1000000

// 1 <= D[i], E[i], G[i], H[i] <= A

// Input Format
// First argument is an integer A.
// Seocnd argument is an integer B.
// Third argument is an integer C.
// Fourth argument is an integer array D.
// Fifth argument is an integer array E.
// Sixth argument is an integer array F.
// Seventh argument is an integer array G.
// Eight argument is an integer array H.

// Output Format
// Return an integer array of size C, for each query denoting the shortest distance between the given two vertices.
// If the two vertices are not connected then output -1.

// Example Input
// Input 1:

//  A = 4
//  B = 6
//  C = 2
//  D = [1, 2, 3, 2, 4, 3]
//  E = [2, 3, 4, 4, 1, 1]
//  F = [4, 1, 1, 1, 1, 1]
//  G = [1, 1]
//  H = [2, 3]
// Input 2:

//  A = 3
//  B = 3
//  C = 2
//  D = [1, 2, 1]
//  E = [2, 3, 3]
//  F = [3, 1, 1]
//  G = [2, 1]
//  H = [3, 2]

// Example Output
// Output 1:

//  [2, 1]
// Output 2:

//  [1, 2]

// Example Explanation
// Explanation 1:

//  Distance between (1,2) will 2 if we take path 1->4->2.
//  Distance between (1,3) will 1 if we take path 1->3.
// Explanation 2:

//  Distance between (2,3) will 1 if we take path 1->3.
//  Distance between (1,2) will 2 if we take path 1->3->2.

// This question is asking to find shortest distance between various nodes in the graph
// We can use All pair shortest path algorithm here(Floyds Warshal Algorithm)
// TC - O(N^3)
// SC - O(N^2)
function getAdjacencyMatrix(N, S, D, W) {
  let matrix = new Array(N + 1)
    .fill()
    .map(() => new Array(N + 1).fill(Infinity));
  for (let i = 0; i < S.length; i++) {
    matrix[S[i]][D[i]] = Math.min(matrix[S[i]][D[i]], W[i]);
    matrix[D[i]][S[i]] = Math.min(matrix[D[i]][S[i]], W[i]);
  }
  return matrix;
}

function solve(A, B, C, D, E, F, G, H) {
  let adjMatrix = getAdjacencyMatrix(A, D, E, F);
  for (let k = 1; k <= A; k++) {
    for (let i = 1; i < adjMatrix.length; i++) {
      for (let j = 1; j < adjMatrix[0].length; j++) {
        if (i === j) {
          adjMatrix[i][j] = 0;
          continue;
        }
        adjMatrix[i][j] = Math.min(
          adjMatrix[i][j],
          adjMatrix[i][k] + adjMatrix[k][j]
        );
      }
    }
  }
  adjMatrix = adjMatrix.map((a) => a.map((b) => (b == Infinity ? -1 : b)));
  let ans = new Array(G.length);
  for (let l = 0; l < C; l++) {
    ans[l] = adjMatrix[G[l]][H[l]];
  }
  return ans;
}

// const A = 4;
// const B = 6;
// const C = 2;
// const D = [1, 2, 3, 2, 4, 3];
// const E = [2, 3, 4, 4, 1, 1];
// const F = [4, 1, 1, 1, 1, 1];
// const G = [1, 1];
// const H = [2, 3];

const A = 3;
const B = 3;
const C = 2;
const D = [1, 2, 1];
const E = [2, 3, 3];
const F = [3, 1, 1];
const G = [2, 1];
const H = [3, 2];

// const A = 15;
// const B = 18;
// const C = 29;
// const D = [11, 2, 2, 6, 2, 8, 9, 3, 14, 15, 4, 14, 8, 7, 8, 6, 2, 12];
// const E = [2, 1, 1, 2, 1, 1, 7, 3, 2, 13, 2, 1, 6, 1, 7, 1, 2, 10];
// const F = [
//   8337, 6651, 29, 7765, 3428, 5213, 6431, 2864, 3137, 4024, 8169, 5013, 7375,
//   3786, 4326, 6415, 8982, 6864,
// ];
// const G = [
//   6, 2, 1, 15, 12, 2, 14, 10, 13, 15, 15, 4, 8, 7, 9, 4, 15, 13, 12, 5, 2, 10,
//   1, 11, 14, 7, 3, 13, 12,
// ];
// const H = [
//   5, 2, 15, 13, 6, 2, 8, 6, 3, 13, 15, 3, 1, 1, 4, 4, 5, 8, 1, 3, 1, 10, 15, 9,
//   2, 1, 1, 10, 2,
// ];

// expected
// -1, 0, -1, 4024, -1, 0, 8379, -1, -1, 4024, 0, -1, 5213, 3786, 18415, 0, -1, -1, -1, -1, 29, 0, -1, 18583, 3137, 3786, -1, -1, -1
// actual
// -1, 0, -1, 4024, -1, 0, 10226, -1, -1, 4024, 0,  -1, 5213, 3786, 21814, 0, -1, -1, -1, -1, 3428, 0, -1, 21982, 3137, 3786, -1, -1, -1
console.log(solve(A, B, C, D, E, F, G, H));
