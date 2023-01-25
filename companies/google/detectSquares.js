// Detect Squares
// Medium
// company
// Google
// You are given a stream of points on the X-Y plane. Design an algorithm that:

// Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.
// Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.
// An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.

// Implement the DetectSquares class:

// DetectSquares() Initializes the object with an empty data structure.
// void add(int[] point) Adds a new point point = [x, y] to the data structure.
// int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.

// Example 1:

// Input
// ["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
// [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
// Output
// [null, null, null, null, 1, 0, null, 2]

// Explanation
// DetectSquares detectSquares = new DetectSquares();
// detectSquares.add([3, 10]);
// detectSquares.add([11, 2]);
// detectSquares.add([3, 2]);
// detectSquares.count([11, 10]); // return 1. You can choose:
//                                //   - The first, second, and third points
// detectSquares.count([14, 8]);  // return 0. The query point cannot form a square with any points in the data structure.
// detectSquares.add([11, 2]);    // Adding duplicate points is allowed.
// detectSquares.count([11, 10]); // return 2. You can choose:
//                                //   - The first, second, and third points
//                                //   - The first, third, and fourth points

// Constraints:

// point.length == 2
// 0 <= x, y <= 1000
// At most 3000 calls in total will be made to add and count.

var DetectSquares = function () {
  this.points = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  const [x, y] = point;
  const key = `${x}_${y}`;
  if (this.points.has(key)) {
    let { freq, val } = this.points.get(key);
    this.points.set(key, { freq: freq + 1, val });
  } else {
    this.points.set(key, { freq: 1, val: point });
  }
  return null;
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  const [x1, y1] = point;
  let allPoints = this.points.values();
  let ans = 0;
  for (i of allPoints) {
    const { val, freq: freq2 } = i;
    const [x2, y2] = val;
    const key1 = `${x1}_${y2}`;
    const key2 = `${x2}_${y1}`;

    if (x1 === x2 && y1 === y2) continue;
    // We have to make this check, to know if the points can be diagonal of the square
    if (Math.abs(x1 - x2) !== Math.abs(y1 - y2)) continue;
    if (this.points.has(key1) && this.points.has(key2)) {
      const { freq: freq3 } = this.points.get(key1);
      const { freq: freq4 } = this.points.get(key2);

      ans += freq2 * freq3 * freq4;
    }
  }
  return ans;
};

const operations = [
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
  "add",
  "add",
  "add",
  "count",
];
const inputs = [
  [5, 10],
  [10, 5],
  [10, 10],
  [5, 5],
  [3, 0],
  [8, 0],
  [8, 5],
  [3, 5],
  [9, 0],
  [9, 8],
  [1, 8],
  [1, 0],
  [0, 0],
  [8, 0],
  [8, 8],
  [0, 8],
  [1, 9],
  [2, 9],
  [2, 10],
  [1, 10],
  [7, 8],
  [2, 3],
  [2, 8],
  [7, 3],
  [9, 10],
  [9, 5],
  [4, 5],
  [4, 10],
  [0, 9],
  [4, 5],
  [4, 9],
  [0, 5],
];

// const operations = ["add", "add", "add", "count", "count", "add", "count"];
// const inputs = [
//   [3, 10],
//   [11, 2],
//   [3, 2],
//   [11, 10],
//   [14, 8],
//   [11, 2],
//   [11, 10],
// ];
// Output
// [null, null, null, null, 1, 0, null, 2]

// const operations = [
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
//   "add",
//   "add",
//   "add",
//   "count",
// ];
// const inputs = [
//   [419, 351],
//   [798, 351],
//   [798, 730],
//   [419, 730],
//   [998, 1],
//   [0, 999],
//   [998, 999],
//   [0, 1],
//   [226, 561],
//   [269, 561],
//   [226, 604],
//   [269, 604],
//   [200, 274],
//   [200, 793],
//   [719, 793],
//   [719, 274],
//   [995, 99],
//   [146, 948],
//   [146, 99],
//   [995, 948],
//   [420, 16],
//   [962, 558],
//   [420, 558],
//   [962, 16],
//   [217, 833],
//   [945, 105],
//   [217, 105],
//   [945, 833],
//   [26, 977],
//   [26, 7],
//   [996, 7],
//   [996, 977],
//   [96, 38],
//   [96, 483],
//   [541, 483],
//   [541, 38],
//   [38, 924],
//   [961, 1],
//   [961, 924],
//   [38, 1],
//   [438, 609],
//   [818, 609],
//   [818, 229],
//   [438, 229],
// ];

console.log(solve(operations, inputs));
