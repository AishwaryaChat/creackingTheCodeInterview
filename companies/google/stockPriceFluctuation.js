// Stock Price Fluctuation
// Medium
// company
// Google
// Bloomberg
// Snapchat
// You are given a stream of records about a particular stock. Each record contains a timestamp and the corresponding price of the stock at that timestamp.

// Unfortunately due to the volatile nature of the stock market, the records do not come in order. Even worse, some records may be incorrect. Another record with the same timestamp may appear later in the stream correcting the price of the previous wrong record.

// Design an algorithm that:

// Updates the price of the stock at a particular timestamp, correcting the price from any previous records at the timestamp.
// Finds the latest price of the stock based on the current records. The latest price is the price at the latest timestamp recorded.
// Finds the maximum price the stock has been based on the current records.
// Finds the minimum price the stock has been based on the current records.
// Implement the StockPrice class:

// StockPrice() Initializes the object with no price records.
// void update(int timestamp, int price) Updates the price of the stock at the given timestamp.
// int current() Returns the latest price of the stock.
// int maximum() Returns the maximum price of the stock.
// int minimum() Returns the minimum price of the stock.

// Example 1:

// Input
// ["StockPrice", "update", "update", "current", "maximum", "update", "maximum", "update", "minimum"]
// [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
// Output
// [null, null, null, 5, 10, null, 5, null, 2]

// Explanation
// StockPrice stockPrice = new StockPrice();
// stockPrice.update(1, 10); // Timestamps are [1] with corresponding prices [10].
// stockPrice.update(2, 5);  // Timestamps are [1,2] with corresponding prices [10,5].
// stockPrice.current();     // return 5, the latest timestamp is 2 with the price being 5.
// stockPrice.maximum();     // return 10, the maximum price is 10 at timestamp 1.
// stockPrice.update(1, 3);  // The previous timestamp 1 had the wrong price, so it is updated to 3.
//                           // Timestamps are [1,2] with corresponding prices [3,5].
// stockPrice.maximum();     // return 5, the maximum price is 5 after the correction.
// stockPrice.update(4, 2);  // Timestamps are [1,2,4] with corresponding prices [3,5,2].
// stockPrice.minimum();     // return 2, the minimum price is 2 at timestamp 4.

// Constraints:

// 1 <= timestamp, price <= 109
// At most 105 calls will be made in total to update, current, maximum, and minimum.
// current, maximum, and minimum will be called only after update has been called at least once.

// TC - O(NlogN)
// SC - O(N)
const Heap = require("../../../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

var StockPrice = function () {
  const MaxN = Math.pow(10, 5);
  this.time = 0;
  this.stock = new Map()
  this.minHeap = new Heap({ comparator: (a, b) => a.value < b.value });
  this.maxHeap = new Heap({ comparator: (a, b) => a.value > b.value });

  this.getMinHeap = function () {
    return this.minHeap.getHeap();
  };

  this.getMaxHeap = function () {
    return this.maxHeap.getHeap();
  };
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
  this.stock.set(timestamp, price);
  this.minHeap.push({ key: timestamp, value: price });
  this.maxHeap.push({ key: timestamp, value: price });

  if (this.time <= timestamp) {
    this.time = timestamp;
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
  return this.stock.get(this.time);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
  const { value, key } = this.maxHeap.peek();
  if (this.stock.get(key) === value) return value;
  else {
    this.maxHeap.pop();
    return this.maximum();
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
  const { value, key } = this.minHeap.peek();
  if (this.stock.get(key) === value) return value;
  else {
    this.minHeap.pop();
    return this.minimum();
  }
};

function solve(operations, input) {
  const stockPrice = new StockPrice();
  let output = [];
  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    const [time, price] = input[i];
    let ans = null;
    switch (op) {
      case "update":
        stockPrice.update(time, price);
        output.push(ans);
        continue;
      case "current":
        ans = stockPrice.current();
        output.push(ans);
        continue;
      case "maximum":
        ans = stockPrice.maximum();
        output.push(ans);
        continue;
      case "minimum":
        ans = stockPrice.minimum();
        output.push(ans);
        continue;
      default:
        output.push(ans);
    }
  }
  return output;
}

const operations = [
  "update",
  "update",
  "current",
  "maximum",
  "update",
  "maximum",
  "update",
  "minimum",
];
const input = [[1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []];
// o/p - [null,null,null,5,10,null,5,null,2]

// const operations = [
//   "StockPrice",
//   "update",
//   "minimum",
//   "update",
//   "update",
//   "minimum",
//   "minimum",
//   "update",
//   "maximum",
//   "update",
//   "minimum",
//   "current",
//   "minimum",
//   "update",
//   "current",
//   "minimum",
//   "current",
//   "current",
//   "update",
//   "maximum",
//   "maximum",
//   "update",
//   "minimum",
//   "minimum",
//   "maximum",
//   "maximum",
//   "update",
//   "maximum",
//   "current",
//   "maximum",
//   "minimum",
//   "minimum",
//   "update",
//   "current",
// ];
// const input = [
//   [],
//   [45, 9233],
//   [],
//   [55, 9651],
//   [37, 3902],
//   [],
//   [],
//   [25, 4833],
//   [],
//   [53, 4521],
//   [],
//   [],
//   [],
//   [22, 1161],
//   [],
//   [],
//   [],
//   [],
//   [55, 6897],
//   [],
//   [],
//   [20, 5354],
//   [],
//   [],
//   [],
//   [],
//   [30, 5623],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [25, 2725],
//   [],
// ];
// O/P
// [null,null,9233,null,null,3902,3902,null,9651,null,3902,9651,3902,null,9651,1161,9651,9651,null,9233,9233,null,1161,1161,9233,9233,null,9233,6897,9233,1161,1161,null,6897]

console.log(solve(operations, input));
