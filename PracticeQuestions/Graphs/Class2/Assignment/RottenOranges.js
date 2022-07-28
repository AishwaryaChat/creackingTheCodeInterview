/*
Rotten Oranges

Problem Description
Given a matrix of integers A of size N x M consisting of 0, 1 or 2.

Each cell can have three values:

The value 0 representing an empty cell.

The value 1 representing a fresh orange.

The value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (Left, Right, Top, or Bottom) to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1 instead.

Note: Your solution will run on multiple test cases. If you are using global variables, make sure to clear them.



Problem Constraints
1 <= N, M <= 1000

0 <= A[i][j] <= 2



Input Format
The first argument given is the integer matrix A.



Output Format
Return the minimum number of minutes that must elapse until no cell has a fresh orange.

If this is impossible, return -1 instead.



Example Input
Input 1:

A = [   [2, 1, 1]
        [1, 1, 0]
        [0, 1, 1]   ]
Input 2:

 
A = [   [2, 1, 1]
        [0, 1, 1]
        [1, 0, 1]   ]


Example Output
Output 1:

 4
Output 2:

 -1


Example Explanation
Explanation 1:

 Max of 4 using (0,0) , (0,1) , (1,1) , (1,2) , (2,2)
Explanation 2:

 Task is impossible

*/

// TC - O(N * M)
// SC - O(N * M)

const Queue = require("../../../Queues/arrayImpelemtation")

function solve(A) {
  let queue = new Queue({});
  const N = A.length - 1;
  const M = A[0].length - 1;
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (A[i][j] === 2) queue.enqueue([i, j, 0]);
    }
  }
  const cx = [0, 1, 0, -1];
  const cy = [1, 0, -1, 0];
  let ele;
  while (!queue.isEmpty()) {
    ele = queue.dequeue();
    const [i, j, t] = ele;
    for (let k = 0; k < 4; k++) {
      const u = i + cx[k];
      const v = j + cy[k];
      if (u >= 0 && u <= N && v >= 0 && v <= M && A[u][v] === 1) {
        A[u][v] = 2;
        queue.enqueue([u, v, t + 1]);
      }
    }
  }
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (A[i][j] === 1) return -1;
    }
  }
  return ele[2];
}

// const A = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];

console.log(solve(A));
