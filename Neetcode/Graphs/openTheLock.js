// Open the Lock
// Medium
// company
// Amazon
// Google
// Uber
// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

// Example 1:

// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation:
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".
// Example 2:

// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".
// Example 3:

// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation: We cannot reach the target without getting stuck.

// Constraints:

// 1 <= deadends.length <= 500
// deadends[i].length == 4
// target.length == 4
// target will not be in the list deadends.
// target and deadends[i] consist of digits only.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(N^2*A^N + D), where N is the number of digits in the lock, A is the number of possible digits for a single position of a lock, D is the length of deadends
function solve(deadends, target) {
  if (deadends.indexOf("0000") !== -1) return -1;
  const queue = new Queue();
  let visited = {};
  queue.enqueue("0000");
  visited["0000"] = true;
  queue.enqueue(null);
  let turns = 0;
  while (!queue.isEmpty()) {
    const str = queue.dequeue();
    if (str === null) {
      turns += 1;
      if (queue.frontElement() !== null) {
        queue.enqueue(null);
      }
    } else if (str === target) return turns;
    else if (deadends.indexOf(str) === -1) {
      for (let i = 0; i < 4; i++) {
        // -1 and 1 are the only allowed values for a position to change
        for (let j = -1; j <= 1; j += 2) {
          const numAtI = Number(str[i]);
          let newNum = numAtI + j;
          if (newNum < 0) newNum = 9;
          else newNum = newNum % 9;
          const newStr = str.substring(0, i) + newNum + str.substring(i + 1);
          if (!visited[newStr]) {
            queue.enqueue(newStr);
            visited[newStr] = true;
          }
        }
      }
    }
  }
  return -1;
}

// const deadends = ["0201", "0101", "0102", "1212", "2002"];
// const target = "0202";
// Output: 6

// const deadends = ["8888"]
// const target = "0009"
// Output: 1

const deadends = [
  "8887",
  "8889",
  "8878",
  "8898",
  "8788",
  "8988",
  "7888",
  "9888",
];
const target = "8888";
// Output: -1

console.log(solve(deadends, target));
