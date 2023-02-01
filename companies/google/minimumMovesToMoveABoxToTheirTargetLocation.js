// Minimum Moves to Move a Box to Their Target Location
// Hard
// company
// Google
// Facebook
// A storekeeper is a game in which the player pushes boxes around in a warehouse trying to get them to target locations.

// The game is represented by an m x n grid of characters grid where each element is a wall, floor, or box.

// Your task is to move the box 'B' to the target position 'T' under the following rules:

// The character 'S' represents the player. The player can move up, down, left, right in grid if it is a floor (empty cell).
// The character '.' represents the floor which means a free cell to walk.
// The character '#' represents the wall which means an obstacle (impossible to walk there).
// There is only one box 'B' and one target cell 'T' in the grid.
// The box can be moved to an adjacent free cell by standing next to the box and then moving in the direction of the box. This is a push.
// The player cannot walk through the box.
// Return the minimum number of pushes to move the box to the target. If there is no way to reach the target, return -1.

// Example 1:

// Input: grid = [["#","#","#","#","#","#"],
//                ["#","T","#","#","#","#"],
//                ["#",".",".","B",".","#"],
//                ["#",".","#","#",".","#"],
//                ["#",".",".",".","S","#"],
//                ["#","#","#","#","#","#"]]
// Output: 3
// Explanation: We return only the number of times the box is pushed.
// Example 2:

// Input: grid = [["#","#","#","#","#","#"],
//                ["#","T","#","#","#","#"],
//                ["#",".",".","B",".","#"],
//                ["#","#","#","#",".","#"],
//                ["#",".",".",".","S","#"],
//                ["#","#","#","#","#","#"]]
// Output: -1
// Example 3:

// Input: grid = [["#","#","#","#","#","#"],
//                ["#","T",".",".","#","#"],
//                ["#",".","#","B",".","#"],
//                ["#",".",".",".",".","#"],
//                ["#",".",".",".","S","#"],
//                ["#","#","#","#","#","#"]]
// Output: 5
// Explanation: push the box down, left, left, up and up.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 20
// grid contains only characters '.', '#', 'S', 'T', or 'B'.
// There is only one character 'S', 'B', and 'T' in the grid.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

const dirs = [0, 1, 0, -1, 0];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var solve = function (grid) {
  let people;
  let box;
  let target;
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "S") {
        people = [i, j];
      } else if (grid[i][j] === "B") {
        box = [i, j];
      } else if (grid[i][j] === "T") {
        target = [i, j];
      }
    }
  }

  const visited = new Set();
  let queue = new Queue();
  queue.enqueue([...people, ...box, 0]);
  while (!queue.isEmpty()) {
    const [pX, pY, bX, bY, steps] = queue.dequeue();
    if (bX === target[0] && bY === target[1]) {
      return steps;
    }

    const curKey = `${pX}#${pY}#${bX}#${bY}`;
    if (visited.has(curKey)) continue;
    visited.add(curKey);

    for (let i = 0; i < 4; i++) {
      const pX1 = bX + dirs[i];
      const pY1 = bY + dirs[i + 1];
      if (
        pX1 < 0 ||
        pX1 >= rows ||
        pY1 < 0 ||
        pY1 >= cols ||
        grid[pX1][pY1] === "#"
      ) {
        continue;
      }

      const bX1 = bX - dirs[i];
      const bY1 = bY - dirs[i + 1];
      if (
        bX1 < 0 ||
        bX1 >= rows ||
        bY1 < 0 ||
        bY1 >= cols ||
        grid[bX1][bY1] === "#"
      ) {
        continue;
      }

      const curKey1 = `${bX}#${bY}#${bX1}#${bY1}`;
      if (isReachable(grid, [pX1, pY1], [bX, bY], [pX, pY])) {
        queue.enqueue([bX, bY, bX1, bY1, steps + 1]);
        visited[curKey1] = true;
      }
    }
  }

  return -1;
};

const isReachable = (grid, target, box, start) => {
  const t = grid[box[0]][box[1]];
  grid[box[0]][box[1]] = "#";
  const queue = [start];
  const visited = new Set();
  visited.add(`${start[0]}#${start[1]}`);

  let i = 0;
  while (i < queue.length) {
    const [curX, curY] = queue[i++];
    if (curX === target[0] && curY === target[1]) {
      grid[box[0]][box[1]] = t;
      return true;
    }

    for (let j = 0; j < 4; j++) {
      const newX = curX + dirs[j];
      const newY = curY + dirs[j + 1];
      const pointStr = `${newX}#${newY}`;
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] !== "#" &&
        !visited.has(pointStr)
      ) {
        queue.push([newX, newY]);
        visited.add(pointStr);
      }
    }
  }
  grid[box[0]][box[1]] = t;
  return false;
};

// const grid = [
//   ["#", "#", "#", "#", "#", "#"],
//   ["#", "T", "#", "#", "#", "#"],
//   ["#", ".", ".", "B", ".", "#"],
//   ["#", ".", "#", "#", ".", "#"],
//   ["#", ".", ".", ".", "S", "#"],
//   ["#", "#", "#", "#", "#", "#"],
// ];
// Output: 3
// Explanation: We return only the number of times the box is pushed.
// Example 2:

// const grid = [["#","#","#","#","#","#"],
//                ["#","T","#","#","#","#"],
//                ["#",".",".","B",".","#"],
//                ["#","#","#","#",".","#"],
//                ["#",".",".",".","S","#"],
//                ["#","#","#","#","#","#"]]
// Output: -1
// Example 3:

// const grid = [
//   ["#", "#", "#", "#", "#", "#"],
//   ["#", "T", ".", ".", "#", "#"],
//   ["#", ".", "#", "B", ".", "#"],
//   ["#", ".", ".", ".", ".", "#"],
//   ["#", ".", ".", ".", "S", "#"],
//   ["#", "#", "#", "#", "#", "#"],
// ];
// Output: 5

// const grid = [
//   ["#", "#", "#", "#", "#", "#"],
//   ["#", ".", "T", ".", "#", "#"],
//   ["#", ".", "#", "B", ".", "#"],
//   ["#", ".", ".", ".", ".", "#"],
//   ["#", ".", ".", ".", "S", "#"],
//   ["#", "#", "#", "#", "#", "#"],
// ];

const grid = [
  ["#", ".", ".", "#", "#", "#", "#", "#"],
  ["#", ".", ".", "T", "#", ".", ".", "#"],
  ["#", ".", ".", ".", "#", "B", ".", "#"],
  ["#", ".", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", "#", ".", "S", "#"],
  ["#", ".", ".", "#", "#", "#", "#", "#"],
];
// Output: 7

console.log(solve(grid));
