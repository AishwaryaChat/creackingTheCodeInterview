// Logger Rate Limiter
// Easy

// Google
// Bloomberg
// Atlassian
// Design a logger system that receives a stream of messages along with their timestamps. Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10). If a message comes again before 10 seconds then both previous and current message will be discarded.

// All messages will come in chronological order. Several messages may arrive at the same timestamp.

// Implement the Logger class:

// Logger() Initializes the logger object.
// bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.

// Example 1:

// Input
// ["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
// [[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
// Output
// [null, true, true, false, false, false, true]

// Explanation
// Logger logger = new Logger();
// logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
// logger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
// logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
// logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
// logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
// logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21

// Constraints:

// 0 <= timestamp <= 10^9
// Every timestamp will be passed in non-decreasing order (chronological order).
// 1 <= message.length <= 30
// At most 10^4 calls will be made to shouldPrintMessage.

const DLL = require("../../PracticeQuestions/LinkedList/doublyLinkedListImplementation");

// TC - O(k) for each operation, where k is number of keys in log
// so - total complexity - O(N*k) where N is total number of messages and K is total number of keys in log at a time

var LoggerMap = function () {
  this.log = {};
};

LoggerMap.prototype.checkOtherMessages = function (timestamp, output) {
  for (let [key, { timestamp: stamp, discard }] of Object.entries(this.log)) {
    if (timestamp >= stamp + 10) {
      if (!discard) output.push(key);
      delete this.log[key];
    }
  }
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
LoggerMap.prototype.shouldPrintMessage = function (timestamp, message, output) {
  const existing = this.log[message];
  let newDiscard = false;
  if (existing != undefined) {
    if (timestamp < existing.timestamp + 10) {
      newDiscard = true;
    } else {
      if(!existing.discard)output.push(message);
    }
  }
  this.log[message] = { timestamp, discard: newDiscard };
  this.checkOtherMessages(timestamp, output);
};

// The below Solution is given using Doubly Linked list
// TC - this will be same as above
// SC - this will be same as above
class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

var Logger = function () {
  this.log = {};
  this.logQueue = new DLL();
  this.timer;
};

Logger.prototype.checkOtherMessages = function (timestamp, output) {
  let current = this.logQueue.getHead();
  while (current && timestamp >= current.data[1] + 10) {
    const discard = current.data[2];
    if (!discard) {
      output.push(current.data[0]);
    }
    if (this.log[current.data[0]] === current) {
      delete this.log[current.data[0]];
    }
    this.logQueue.deleteFromHead();
    current = this.logQueue.getHead();
  }
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message, output) {
  const existing = this.log[message];
  let newDiscard = false;
  if (existing != undefined && timestamp < existing.data[1] + 10) {
    existing.data[2] = true;
    newDiscard = true;
  }
  const node = new Node([message, timestamp, newDiscard]);
  this.logQueue.insertAtTail(node);
  this.log[message] = node;
  this.checkOtherMessages(timestamp, output);
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(() => {
    const tail = this.logQueue.getTail();
    if (tail) {
      this.checkOtherMessages(tail.data[1] + 10, output);
      console.log(output);
    }
  }, 10000);
};
function solve(inputs) {
  let output = [];
  let logger = new LoggerMap();
  for (let i = 0; i < inputs.length; i++) {
    logger.shouldPrintMessage(...inputs[i], output);
  }
  return output;
}

const input = [
  [10, "foo"],
  [11, "bar"],
  [12, "cat"],
  [13, "foo"],
  [14, "bar"],
  [15, "new"],
  [21, "foo"],
  [35, "foo"],
  [65, "new"],
];
//   Output - [ 'cat', 'new', 'foo' ]

// const input = [
//   [10, "foo"],
//   [11, "bar"],
//   [12, "cat"],
//   [13, "foo"],
//   [14, "bar"],
//   [21, "foo"],
//   [35, "foo"],
//   [65, "new"],
// ];
// Output - [ 'cat', 'foo' ]
console.log(solve(input));
