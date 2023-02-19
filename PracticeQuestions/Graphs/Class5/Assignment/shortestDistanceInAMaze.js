// Given a matrix of integers A of size N x M describing a maze. The maze consists of empty locations and walls.

// 1 represents a wall in a matrix and 0 represents an empty location in a wall.

// There is a ball trapped in a maze. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall (maze boundary is also considered as a wall). When the ball stops, it could choose the next direction.

// Given two array of integers of size B and C of size 2 denoting the starting and destination position of the ball.

// Find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spaces traveled by the ball from the starting position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.

// Problem Constraints
// 2 <= N, M <= 100

// 0 <= A[i] <= 1

// 0 <= B[i][0], C[i][0] < N

// 0 <= B[i][1], C[i][1] < M

// Input Format
// The first argument given is the integer matrix A.

// The second argument given is an array of integer B.

// The third argument if an array of integer C.

// Output Format
// Return a single integer, the minimum distance required to reach destination

// Example Input
// Input 1:

// A = [ [0, 0], [0, 0] ]
// B = [0, 0]
// C = [0, 1]
// Input 2:

// A = [ [0, 0], [0, 1] ]
// B = [0, 0]
// C = [0, 1]

// Example Output
// Output 1:

//  1
// Output 2:

//  1

// Example Explanation
// Explanation 1:

//  Go directly from start to destination in distance 1.
// Explanation 2:

//  Go directly from start to destination in distance 1.

const Queue = require("../../../Queues/arrayImpelemtation");

// TC - O(n*m*4)
// SC - O(n*m*4)
function checkIfWall(x, y, maze) {
  const M = maze.length;
  const N = maze[0].length;
  if (x >= M || y >= N || x < 0 || y < 0 || maze[x][y] === 1) return true;
  return false;
}

function getCords(direction) {
  let checkCord = [];
  switch (direction) {
    case "up": {
      checkCord = [-1, 0];
      break;
    }
    case "right": {
      checkCord = [0, 1];
      break;
    }
    case "down": {
      checkCord = [1, 0];
      break;
    }
    case "left": {
      checkCord = [0, -1];
      break;
    }
  }
  return checkCord;
}

const cx = [-1, 0, 1, 0];
const cy = [0, 1, 0, -1];

function insertIntoQueue({
  node,
  distanceTravelled = 0,
  maze,
  visited,
  queue,
  currentDirection = "start",
}) {
  const M = maze.length;
  const N = maze[0].length;
  const [x, y] = node;
  const directions = ["up", "right", "down", "left"];
  const [m, n] = getCords(currentDirection);
  // check if next coord is a wall
  const [x1, y1] = [x + m, y + n];
  if (currentDirection === "start" || checkIfWall(x1, y1, maze)) {
    for (let i = 0; i < cx.length; i++) {
      const m = x + cx[i];
      const n = y + cy[i];
      const direction = directions[i];
      const visitedKey = `${m}_${n}_${direction}`;
      if (
        m >= 0 &&
        m < M &&
        n >= 0 &&
        n < N &&
        maze[m][n] !== 1 &&
        !visited[visitedKey]
      ) {
        queue.enqueue({
          x: m,
          y: n,
          distance: distanceTravelled + 1,
          direction,
        });
      }
    }
  } else if (!visited[`${x1}_${y1}_${currentDirection}`]) {
    queue.enqueue({
      x: x1,
      y: y1,
      distance: distanceTravelled + 1,
      direction: currentDirection,
    });
  }
}

function checkIfReached({ x, y, direction, maze }) {
  const M = maze.length;
  const N = maze[0].length;
  let checkCord = getCords(direction);
  const m = x + checkCord[0];
  const n = y + checkCord[1];
  if (m == -1 || m == M || n == -1 || n == N || maze[m][n] === 1) {
    return true;
  }
  return false;
}

function solve(A, source, destination) {
  const queue = new Queue();
  const visited = {};
  if (A[source[0]][source[1]] === 1 || A[destination[0]][destination[1]] === 1)
    return -1;
  insertIntoQueue({ node: source, maze: A, visited, queue });
  while (!queue.isEmpty()) {
    const ele = queue.dequeue();
    const { x, y, distance, direction } = ele;
    if (
      x === destination[0] &&
      y === destination[1] &&
      checkIfReached({ x, y, direction, maze: A })
    ) {
      return distance;
    }
    const visitedKey = `${x}_${y}_${direction}`;
    if (visited[visitedKey]) continue;
    visited[visitedKey] = true;
    insertIntoQueue({
      node: [x, y],
      distanceTravelled: distance,
      maze: A,
      visited,
      queue,
      currentDirection: direction,
    });
  }
  return -1;
}

// const A = [
//   [0, 0],
//   [0, 0],
// ];
// const B = [0, 0];
// const C = [0, 1];

// const A = [
//   [0, 0],
//   [0, 1],
// ];
// const B = [0, 0];
// const C = [0, 1];

// const A = [
//   [1, 1, 0, 1],
//   [0, 0, 0, 1],
//   [1, 0, 0, 1],
//   [0, 0, 1, 0],
// ];
// const B = [1, 1];
// const C = [2, 1];
const A = [
  [1, 0, 0, 1, 1, 1, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 1, 0, 1, 1, 1, 1, 0],
];
const B = [3, 4];
const C = [1, 3];

// const A = [
//   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//   [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
//   [1, 0, 0, 0, 1, 1, 0, 0, 1, 0],
//   [1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
//   [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]
// const B = [ 7, 5 ]
// const C = [ 4, 2 ]
// Output = -1

console.log(solve(A, B, C));
