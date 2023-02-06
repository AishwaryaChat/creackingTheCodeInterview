// Valid Path

// Problem Description
// There is a rectangle with left bottom as (0, 0) and right up as (x, y).

// There are N circles such that their centers are inside the rectangle.

// Radius of each circle is R. Now we need to find out if it is possible that we can move from (0, 0) to (x, y) without touching any circle.

// Note : We can move from any cell to any of its 8 adjecent neighbours and we cannot move outside the boundary of the rectangle at any point of time.

// Problem Constraints
// 0 <= x , y, R <= 100

// 1 <= N <= 1000

// Center of each circle would lie within the grid

// Input Format
// 1st argument given is an Integer x , denoted by A in input.

// 2nd argument given is an Integer y, denoted by B in input.

// 3rd argument given is an Integer N, number of circles, denoted by C in input.

// 4th argument given is an Integer R, radius of each circle, denoted by D in input.

// 5th argument given is an Array A of size N, denoted by E in input, where A[i] = x cordinate of ith circle

// 6th argument given is an Array B of size N, denoted by F in input, where B[i] = y cordinate of ith circle

// Output Format
// Return YES or NO depending on weather it is possible to reach cell (x,y) or not starting from (0,0).

// Example Input
// Input 1:

//  x = 2
//  y = 3
//  N = 1
//  R = 1
//  A = [2]
//  B = [3]
// Input 2:

//  x = 1
//  y = 1
//  N = 1
//  R = 1
//  A = [1]
//  B = [1]

// Example Output
// Output 1:

//  NO
// Output 2:

//  NO

// Example Explanation
// Explanation 1:

//  There is NO valid path in this case
// Explanation 2:

//  There is NO valid path in this case

let Queue = require("../../../Queues/arrayImpelemtation");

function getInRangeCircles(x, y, circleX, circleY, radius) {
  let count = 0;
  for (let i = 0; i < circleX.length; i++) {
    const m = circleX[i];
    const n = circleY[i];
    if (m === x && n === y) count += 1;
    else {
      const dist = Math.sqrt(
        Math.pow(x - m, 2) + Math.pow(y - n, 2)
      );
      if (dist <= radius) count += 1;
    }
    if (count > 0) break;
  }
  return count;
}

function getAdjMatrix(x, y, circleX, circleY, radius) {
  let matrix = new Array(x + 1).fill().map(() => new Array(y + 1).fill(0));
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      matrix[i][j] = getInRangeCircles(i, j, circleX, circleY, radius);
    }
  }
  return matrix;
}

// TC - O(X*Y*N) - this is mainly to find the adjacency matrix
// SC -O(X*Y)
function solve(x, y, noOfCorcles, radius, circleX, circleY) {
  const adjMatrix = getAdjMatrix(x, y, circleX, circleY, radius);
  if (adjMatrix[0][0] > 0 || adjMatrix[x][y]>0) return "NO";
  const queue = new Queue();
  queue.enqueue([0, 0]);
  let pointsX = [-1, -1, 0, 1, 1, 1, 0, -1];
  let pointsY = [0, 1, 1, 1, 0, -1, -1, -1];
  let visited = {};
  while (!queue.isEmpty()) {
    let [i, j] = queue.dequeue();
    if (i === x && j === y) return "YES";
    visited[`${i}_${j}`] = true;
    for (let k = 0; k < pointsX.length; k++) {
      const m = i + pointsX[k];
      const n = j + pointsY[k];
      if (
        m >= 0 &&
        m <= x &&
        n >= 0 &&
        n <= y &&
        !visited[`${m}_${n}`] &&
        adjMatrix[m][n] === 0
      ) {
        queue.enqueue([m, n]);
        visited[`${m}_${n}`] = true;
      }
    }
  }
  return "NO";
}

// const x = 2;
// const y = 3;
// const N = 1;
// const R = 1;
// const A = [2];
// const B = [3];

// const x = 1
// const y = 1
// const N = 1
// const R = 1
// const A = [1]
// const B = [1]

// const x = 1;
// const y = 1;
// const N = 1;
// const R = 1;
// const A = [0];
// const B = [0];

const x = 2;
const y = 73;
const N = 5;
const R = 1;
const A = [0, 1, 1, 0, 0];
const B = [58, 68, 52, 13, 35];

console.log(solve(x, y, N, R, A, B));
