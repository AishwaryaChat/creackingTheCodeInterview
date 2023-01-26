// Snapshot Array
// Medium
// Google
// Amazon
// Apple
// Implement a SnapshotArray that supports the following interface:

// SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id

// Example 1:

// Input: ["SnapshotArray","set","snap","set","get"]
// [[3],[0,5],[],[0,6],[0,0]]
// Output: [null,null,0,null,5]
// Explanation:
// SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
// snapshotArr.set(0,5);  // Set array[0] = 5
// snapshotArr.snap();  // Take a snapshot, return snap_id = 0
// snapshotArr.set(0,6);
// snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5

// Constraints:

// 1 <= length <= 5 * 10^4
// 0 <= index < length
// 0 <= val <= 10^9
// 0 <= snap_id < (the total number of times we call snap())
// At most 5 * 10^4 calls will be made to set, snap, and get.

/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.values = new Map();
  this.snaps = new Map();
  this.snapsCount = -1;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.values.set(index, val);
  return null;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.snapsCount += 1;
  this.snaps.set(this.snapsCount, new Map(this.values));
  this.values = new Map();
  return this.snapsCount;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  let value = undefined;
  let currSnapId = snap_id;
  while (value === undefined && currSnapId >= 0) {
    value = this.snaps.get(currSnapId).get(index);
    currSnapId--;
  }
  return value === undefined ? 0 : value;
};

function solve(operations, inputs) {
  let snapshot = new SnapshotArray(inputs[0]);
  let output = [null];
  for (let i = 1; i < inputs.length; i++) {
    switch (operations[i]) {
      case "set":
        output.push(snapshot.set(...inputs[i]));
        continue;
      case "snap":
        output.push(snapshot.snap(inputs[i]));
        continue;
      case "get":
        output.push(snapshot.get(...inputs[i]));
        continue;
      default:
    }
  }
  return output;
}

// const operations = ["SnapshotArray", "set", "snap", "set", "get"];
// const inputs = [[3], [0, 5], [], [0, 6], [0, 0]];
// Output: [null,null,0,null,5]

// const operations = [
//   "SnapshotArray",
//   "set",
//   "set",
//   "set",
//   "snap",
//   "get",
//   "snap",
// ];
// const inputs = [[1], [0, 4], [0, 16], [0, 13], [], [0, 0], []];

// const operations = ["SnapshotArray","set","snap","snap","snap","get","snap","snap","get"]
// const inputs = [[1],[0,15],[],[],[],[0,2],[],[],[0,0]]

const operations = [
  "SnapshotArray",
  "snap",
  "snap",
  "get",
  "set",
  "snap",
  "set",
];
const inputs = [[4], [], [], [3, 1], [2, 4], [], [1, 4]];

console.log(solve(operations, inputs));
