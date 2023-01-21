// Knight On Chess Board
// Unsolved
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description
// Given any source point, (C, D) and destination point, (E, F) on a chess board of size A x B, we need to find whether Knight can move to the destination or not.

// The above figure details the movements for a knight ( 8 possibilities ).

// If yes, then what would be the minimum number of steps for the knight to move to the said point. If knight can not move from the source point to the destination point, then return -1.

// NOTE: A knight cannot go out of the board.

// Problem Constraints
// 1 <= A, B <= 500

// Input Format
// The first argument of input contains an integer A.
// The second argument of input contains an integer B.
// The third argument of input contains an integer C.
// The fourth argument of input contains an integer D.
// The fifth argument of input contains an integer E.
// The sixth argument of input contains an integer F.

// Output Format
// If it is possible to reach the destination point, return the minimum number of moves.
// Else return -1.

// Example Input
// Input 1:

//  A = 8
//  B = 8
//  C = 1
//  D = 1
//  E = 8
//  F = 8
// Input 2:

//  A = 2
//  B = 4
//  C = 2
//  D = 1
//  E = 4
//  F = 4

// Example Output
// Output 1:

//  6
// Output 2:

//  -1

// Example Explanation
// Explanation 1:

//  The size of the chessboard is 8x8, the knight is initially at (1, 1) and the knight wants to reach position (8, 8).
//  The minimum number of moves required for this is 6.
// Explanation 2:

//  It is not possible to move knight to position (4, 4) from (2, 1)

const Queue = require("../../../Queues/arrayImpelemtation");

function solve(A, B, sx, sy, dx, dy) {
  const queue = new Queue();
  queue.enqueue({ x: sx, y: sy, distance: 0 });
  const cx = [-1, -2, -2, -1, 1, 2, 2, 1];
  const cy = [2, 1, -1, -2, -2, -1, 1, 2];
  const visited = new Array(A+1).fill().map(() => new Array(B+1).fill(false));
  while (!queue.isEmpty()) {
    const { x, y, distance } = queue.dequeue();
    if (x === dx && y === dy) return distance;
    visited[x][y] = true;
    for (let i = 0; i < cx.length; i++) {
      const m = x + cx[i];
      const n = y + cy[i];
      if (m > 0 && m <= A && n > 0 && n <= B && !visited[m][n]) {
        queue.enqueue({ x: m, y: n, distance: distance + 1 });
        visited[m][n] = true
      }
    }
  }
  return -1;
}

// const A = 8;
// const B = 8;
// const C = 1;
// const D = 1;
// const E = 8;
// const F = 8;

// const A = 2
// const B = 4
// const C = 2
// const D = 1
// const E = 4
// const F = 4

const A = 384
const B = 387
const C = 106
const D = 134
const E = 210
const F = 35

console.log(solve(A, B, C, D, E, F));
