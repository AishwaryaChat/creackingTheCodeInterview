// Maximum Frequency Stack
// Hard
// company
// Amazon
// Apple
// Bloomberg

// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

// Implement the FreqStack class:

// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

// Example 1:

// Input
// ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
// [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]

// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].

// Constraints:

// 0 <= val <= 10^9
// At most 2 * 10^4 calls will be made to push and pop.
// It is guaranteed that there will be at least one element in the stack before calling pop.

var FreqStack = function () {
  this.freqMap = {};
  this.eleMap = {};
  this.currMaxFreq = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  if (this.eleMap[val] === undefined) this.eleMap[val] = 0;
  this.eleMap[val] += 1;
  const freq = this.eleMap[val];
  if (!this.freqMap[freq]) this.freqMap[freq] = [];
  this.freqMap[freq].push(val);
  this.currMaxFreq = Math.max(this.currMaxFreq, freq);
  return null;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const freqMap = this.freqMap[this.currMaxFreq];
  const ele = freqMap.pop();
  this.eleMap[ele] -= 1;
  if (freqMap.length === 0) this.currMaxFreq -= 1;
  return ele;
};

// TC - O(N)
// SC - O(N)
function solve(operations, inputs) {
  const stack = new FreqStack();
  let output = [null];
  for (let i = 1; i < operations.length; i++) {
    switch (operations[i]) {
      case "push":
        output.push(stack.push(...inputs[i]));
        continue;
      case "pop":
        output.push(stack.pop());
        continue;
      default:
        continue;
    }
  }
  return output;
}

// const operations = [
//   "FreqStack",
//   "push",
//   "push",
//   "push",
//   "push",
//   "push",
//   "push",
//   "pop",
//   "pop",
//   "pop",
//   "pop",
// ];
// const inputs = [[], [5], [7], [5], [7], [4], [5], [], [], [], []];
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]
const operations = [
  "FreqStack",
  "push",
  "push",
  "push",
  "push",
  "push",
  "push",
  "pop",
  "push",
  "pop",
  "push",
  "pop",
  "push",
  "pop",
  "push",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
  "pop",
];
const inputs = [
  [],
  [4],
  [0],
  [9],
  [3],
  [4],
  [2],
  [],
  [6],
  [],
  [1],
  [],
  [1],
  [],
  [4],
  [],
  [],
  [],
  [],
  [],
  [],
];

console.log(solve(operations, inputs));
