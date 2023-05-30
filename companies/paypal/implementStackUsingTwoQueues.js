// Implement Stack using Queues
// Easy
// company
// Bloomberg
// Amazon
// Google
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

const MyQueue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

var MyStack = function () {
  this.queue = new MyQueue();
  this.q2 = new MyQueue();
  this.topEle = null;
};

/**
 * @param {number} x
 * @return {void}
 */
// TC - O(1)
MyStack.prototype.push = function (x) {
  this.queue.enqueue(x);
  this.topEle = x;
  return null;
};

/**
 * @return {number}
 */
// TC - O(N)
MyStack.prototype.pop = function () {
  let last;
  while (this.queue.getSize() > 1) {
    last = this.queue.dequeue();
    this.q2.enqueue(last);
  }
  const ele = this.queue.dequeue();
  this.topEle = last;
  let temp = this.q2;
  this.q2 = this.queue;
  this.queue = temp;
  return ele;
};

/**
 * @return {number}
 */
// TC - O(1)
MyStack.prototype.top = function () {
  return this.topEle;
};

/**
 * @return {boolean}
 */
// TC - O(1)
MyStack.prototype.empty = function () {
  return this.queue.getSize() > 0 ? false : true;
};
