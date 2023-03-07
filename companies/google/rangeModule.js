// Range Module
// Hard
// company
// Google
// Amazon
// Bloomberg
// A Range Module is a module that tracks ranges of numbers. Design a data structure to track the ranges represented as half-open intervals and query about them.

// A half-open interval [left, right) denotes all the real numbers x where left <= x < right.

// Implement the RangeModule class:

// RangeModule() Initializes the object of the data structure.
// void addRange(int left, int right) Adds the half-open interval [left, right), tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval [left, right) that are not already tracked.
// boolean queryRange(int left, int right) Returns true if every real number in the interval [left, right) is currently being tracked, and false otherwise.
// void removeRange(int left, int right) Stops tracking every real number currently being tracked in the half-open interval [left, right).

// Example 1:

// Input
// ["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]
// [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
// Output
// [null, null, null, true, false, true]

// Explanation
// RangeModule rangeModule = new RangeModule();
// rangeModule.addRange(10, 20);
// rangeModule.removeRange(14, 16);
// rangeModule.queryRange(10, 14); // return True,(Every number in [10, 14) is being tracked)
// rangeModule.queryRange(13, 15); // return False,(Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
// rangeModule.queryRange(16, 17); // return True, (The number 16 in [16, 17) is still being tracked, despite the remove operation)

// Constraints:

// 1 <= left < right <= 10^9
// At most 10^4 calls will be made to addRange, queryRange, and removeRange.

class SegmentNode {
  constructor(l, r, state) {
    this.l = l;
    this.r = r;
    this.state = state;
    this.left = null;
    this.right = null;
  }
}

class SegmentTree {
  constructor() {
    this.root = new SegmentNode(0, 1e9, false);
  }
  add(left, right) {
    this.update(this.root, left, right, true);
  }
  remove(left, right) {
    this.update(this.root, left, right, false);
  }
  update(root, left, right, value) {
    if (left <= root.l && right >= root.r) {
      // complete overlap
      root.state = value;
      root.left = null;
      root.right = null;
      return root.state;
    }
    if (left >= root.r || right <= root.l) return root.state; // no overlap
    const mid = root.l + Math.floor((root.r - root.l) / 2);
    if (root.left === null) {
      root.left = new SegmentNode(root.l, mid, root.state);
      root.right = new SegmentNode(mid, root.r, root.state);
    }
    const leftChildVal = this.update(root.left, left, right, value);
    const rightChildVal = this.update(root.right, left, right, value);
    root.state = leftChildVal && rightChildVal;
    return root.state
  }
  query(left, right) {
    return this.dfs(this.root, left, right);
  }
  dfs(root, left, right) {
    if (left >= root.r || right <= root.l) return true; // no overlap
    if ((left <= root.l && right >= root.r) || root.left === null)
      return root.state; // complete overlap

    // partial overlap
    const mid = root.l + Math.floor((root.r - root.l) / 2);
    if (right <= mid) {
        return this.dfs(root.left, left, right);
      }else if (left >= mid) {
        return this.dfs(root.right, left, right);
      }
      else {
      return (
        this.dfs(root.left, left, right) && this.dfs(root.right, left, right)
      );
    }
  }
}

class RangeModule {
  constructor() {
    this.tree = new SegmentTree()
  }
  addRange(left, right) {
    this.tree.add(left, right);
  }
  queryRange(left, right) {
    return this.tree.query(left, right)
  }
  removeRange(left, right) {
    this.tree.remove(left, right);
  }
}

function solve(operations, inputs) {
  const segTree = new RangeModule();
  let output = [];
  for (let i = 0; i < operations.length; i++) {
    const [left, right] = inputs[i];
    switch (operations[i]) {
      case "addRange":
        segTree.addRange(left, right);
        output.push(null);
        continue;
      case "removeRange":
        segTree.removeRange(left, right);
        output.push(null);
        continue;
      case "queryRange":
        // console.log("segTree", segTree.tree);
        output.push(segTree.queryRange(left, right));
        continue;
      default:
        continue;
    }
  }
  console.log(segTree.tree.length);
  return output;
}

// const operations = [
//   "addRange",
//   "removeRange",
//   "queryRange",
//   "queryRange",
//   "queryRange",
// ];
// const inputs = [
//   [10, 20],
//   [14, 16],
//   [10, 14],
//   [13, 15],
//   [16, 17],
// ];
// Output
// [null, null, null, true, false, true]

// const operations = [
//   "addRange",
//   "addRange",
//   "addRange",
//   "queryRange",
// //   "queryRange",
// //   "queryRange",
// //   "removeRange",
// //   "queryRange",
// ];
// const inputs = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [50, 100],
// //   [180, 300],
// //   [600, 1000],
// //   [50, 150],
// //   [50, 100],
// ];

const operations = [
  "addRange",
  "removeRange",
  "queryRange",
  "queryRange",
  "queryRange",
];
const inputs = [
  [10, 20],
  [14, 16],
  [10, 14],
  [13, 15],
  [16, 17],
];

console.log(solve(operations, inputs));
