// Minimum Jumps to Reach Home
// Medium
// company
// PhonePe
// Karat
// Amazon
// A certain bug's home is on the x-axis at position x. Help them get there from position 0.

// The bug jumps according to the following rules:

// It can jump exactly a positions forward (to the right).
// It can jump exactly b positions backward (to the left).
// It cannot jump backward twice in a row.
// It cannot jump to any forbidden positions.
// The bug may jump forward beyond its home, but it cannot jump to positions numbered with negative integers.

// Given an array of integers forbidden, where forbidden[i] means that the bug cannot jump to the position forbidden[i], and integers a, b, and x, return the minimum number of jumps needed for the bug to reach its home. If there is no possible sequence of jumps that lands the bug on position x, return -1.

// Example 1:

// Input: forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9
// Output: 3
// Explanation: 3 jumps forward (0 -> 3 -> 6 -> 9) will get the bug home.
// Example 2:

// Input: forbidden = [8,3,16,6,12,20], a = 15, b = 13, x = 11
// Output: -1
// Example 3:

// Input: forbidden = [1,6,2,14,5,17,4], a = 16, b = 9, x = 7
// Output: 2
// Explanation: One jump forward (0 -> 16) then one jump backward (16 -> 7) will get the bug home.

// Constraints:

// 1 <= forbidden.length <= 1000
// 1 <= a, b, forbidden[i] <= 2000
// 0 <= x <= 2000
// All the elements in forbidden are distinct.
// Position x is not forbidden.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(n)
// SC - O(n), where n is x
function solve(forbidden, a, b, x) {
  forbidden = new Set(forbidden);
  const queue = new Queue();
  queue.enqueue([0, 0, "S"]);
  const upper = a + b + Math.max(x, Math.max(...forbidden));
  while (!queue.isEmpty()) {
    const [curr, steps, action] = queue.dequeue();
    if (forbidden.has(curr)) continue;
    forbidden.add(curr);
    if (curr === x) return steps;
    const nextPosBack = curr - b;
    if (nextPosBack > 0 && action !== "B" && !forbidden.has(nextPosBack))
      queue.enqueue([nextPosBack, steps + 1, "B"]);
    const nextPosFwd = curr + a;
    if (nextPosFwd <= upper && !forbidden.has(nextPosFwd))
      queue.enqueue([nextPosFwd, steps + 1, "F"]);
  }
  return -1;
}

// const forbidden = [14, 4, 18, 1, 15];
// const a = 3;
// const b = 15;
// const x = 9;
// Output: 3

const forbidden = [8, 3, 16, 6, 12, 20];
const a = 15;
const b = 13;
const x = 11;
// Output: -1

// const forbidden = [1, 6, 2, 14, 5, 17, 4];
// const a = 16;
// const b = 9;
// const x = 7;
// Output: 2

console.log(solve(forbidden, a, b, x));
