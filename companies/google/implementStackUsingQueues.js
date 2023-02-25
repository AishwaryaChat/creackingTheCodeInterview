// Implement Stack using Queues
// Easy
// company
// Amazon
// Microsoft
// Bloomberg
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and top are valid.

// Follow-up: Can you implement the stack using only one queue?

const Queue = require("../../PracticeQuestions/Queues/deQueueArrayImplementation");

var MyStack = function () {
  this.queue = new Queue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.enqueueRear(x);
  return null
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
//   let front = this.queue.getFrontElement();
//   const rear = this.queue.getRearElement();
//   while (front < rear) {
//     this.queue.enqueueRear(this.queue.dequeueFront());
//     front++
//   }
  return this.queue.dequeueRear();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.getRearElement();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty();
};

function solve(operations, inputs) {
  const myStack = new MyStack();
  let output = [null];
  for (let i = 1; i < operations.length; i++) {
    switch (operations[i]) {
      case "push":
        output.push(myStack.push(...inputs[i]));
        continue;
      case "top":
        output.push(myStack.top());
        continue;
      case "pop":
        output.push(myStack.pop());
        continue;
      case "empty":
        output.push(myStack.empty());
        continue;
      default:
        continue;
    }
  }
  return output
}

// const operations = ["MyStack", "push", "push", "top", "pop", "empty"];
// const inputs = [[], [1], [2], [], [], []];
// Output
// [null, null, null, 2, 2, false]

const operations = ["MyStack","push","push","push","push","push","top","pop","top"]
const inputs = [[],[1],[2],[3],[4],[2],[],[],[]]
// 1 2 3 4 2
console.log(solve(operations, inputs));
