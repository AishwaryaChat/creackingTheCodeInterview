// Design Browser History
// Medium

// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

// Example:

// Input:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
// Output:
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

// Explanation:
// BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
// browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
// browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
// browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
// browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
// browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
// browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
// browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
// browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
// browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
// browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

// Constraints:

// 1 <= homepage.length <= 20
// 1 <= url.length <= 20
// 1 <= steps <= 100
// homepage and url consist of  '.' or lower case English letters.
// At most 5000 calls will be made to visit, back, and forward.
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = new Node(homepage);
  this.size = 1;
  this.tail = this.history;
  this.pointer = this.history;
  this.pointerPosition = 1;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newPage = new Node(url);
  let current = this.pointer;
  const temp = current;
  current.next = newPage;
  newPage.prev = temp;
  this.tail = newPage;
  this.pointer = newPage;
  this.pointerPosition++;
  this.size = this.pointerPosition;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (steps >= this.pointerPosition || this.pointerPosition - steps === 1) {
    this.pointerPosition = 1;
    this.pointer = this.history;
    return this.history.value;
  }
  let i = 0;
  while (this.pointer.prev && i < steps) {
    this.pointer = this.pointer.prev;
    this.pointerPosition--;
    i++;
  }
  return this.pointer.value;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  const limit = this.size - this.pointerPosition;
  if (steps >= limit) {
    this.pointer = this.tail;
    this.pointerPosition = this.size;
    return this.pointer.value;
  }
  let i = 0;
  while (this.pointer.next && i < steps) {
    this.pointer = this.pointer.next;
    this.pointerPosition++;
    i++;
  }
  return this.pointer.value;
};

BrowserHistory.prototype.getHead = function () {
  return this.history;
};

BrowserHistory.prototype.getPointer = function () {
  return this.pointer;
};

function solve(events, values) {
  let BH;
  let result = [];
  for (let i = 0; i < events.length; i++) {
    switch (events[i]) {
      case "BrowserHistory":
        BH = new BrowserHistory(values[i][0]);
        result.push(null);
        continue;
      case "visit":
        BH.visit(values[i][0]);
        result.push(null);
        continue;
      case "back":
        const backResult = BH.back(values[i][0]);
        result.push(backResult);
        continue;
      case "forward":
        const fwdResult = BH.forward(values[i][0]);
        result.push(fwdResult);
        continue;
      default:
        throw new Error("Invalid event. Please try again");
    }
  }
  return result;
}

const events = [
  "BrowserHistory",
  "visit",
  "visit",
  "visit",
  "back",
  "back",
  "forward",
  "visit",
  "forward",
  "back",
  "back",
];
const values = [
  ["leetcode.com"],
  ["google.com"],
  ["facebook.com"],
  ["youtube.com"],
  [1],
  [1],
  [1],
  ["linkedin.com"],
  [2],
  [2],
  [7],
];
// [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]
console.log(solve(events, values));
