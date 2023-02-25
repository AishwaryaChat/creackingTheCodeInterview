// Min Stack
// Medium
// company
// Amazon
// Bloomberg
// Expedia
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:

// -2^31 <= val <= 2^31 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val]);
  } else {
    const [, topMin] = this.stack[this.stack.length - 1];
    const min = Math.min(val, topMin);
    this.stack.push([val, min]);
  }
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1][1];
};

// Another possible solution using hashmap and another stack
// var MinStack = function () {
//   this.stack = [];
//   this.minStack = [];
//   this.freq = {};
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   const minTop =
//     this.minStack[this.minStack.length - 1] === undefined
//       ? Number.MAX_SAFE_INTEGER
//       : this.minStack[this.minStack.length - 1];
//   if (val < minTop) {
//     this.minStack.push(val);
//   }
//   if (!this.freq[val]) this.freq[val] = 0;
//   this.freq[val] += 1;
//   this.stack.push(val);
//   return null;
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   const minTop =
//     this.minStack[this.minStack.length - 1] === undefined
//       ? Number.MAX_SAFE_INTEGER
//       : this.minStack[this.minStack.length - 1];
//   const top = this.stack.pop();
//   if (minTop == top) {
//     this.freq[top] -= 1;
//     if (this.freq[top] == 0) {
//       this.minStack.pop();
//     }
//   }
//   return null;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.minStack[this.minStack.length - 1];
// };

// TC - O(N)
function solve(operations, inputs) {
  const minStack = new MinStack();
  let output = [null];
  for (let i = 1; i < operations.length; i++) {
    switch (operations[i]) {
      case "push":
        output.push(minStack.push(...inputs[i]));
        continue;
      case "top":
        output.push(minStack.top());
        continue;
      case "pop":
        output.push(minStack.pop());
        continue;
      case "getMin":
        output.push(minStack.getMin());
        continue;
      default:
        continue;
    }
  }
  return output;
}

// const operations = [
//   "MinStack",
//   "push",
//   "push",
//   "push",
//   "getMin",
//   "pop",
//   "top",
//   "getMin",
// ];
// const inputs = [[], [-2], [0], [-3], [], [], [], []];

// Output
// [null,null,null,null,-3,null,0,-2]

// const operations = ["MinStack","push","push","push","getMin","pop","getMin"]
// const inputs = [[],[0],[1],[0],[],[],[]]

const operations = [
  "MinStack",
  "push",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "getMin",
  "pop",
  "getMin",
  "pop",
  "getMin",
];
const inputs = [[], [2], [0], [3], [0], [], [], [], [], [], [], []];

console.log(solve(operations, inputs));
