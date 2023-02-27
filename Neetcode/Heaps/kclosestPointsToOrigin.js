// K Closest Points to Origin
// Medium
// company
// Amazon
// Facebook
// Asana
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1:

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

// Constraints:

// 1 <= k <= points.length <= 10^4
// -10^4 < xi, yi < 10^4

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(Nlogk), SC -O(K) - for heap
// This can directly be solved by sorting the points wrt distance from origin and return first k elements, TC - O(NlogN)
// Another method can be to use quick select, which is based on divide and conquer technique, Average cas complexity - O(N), worst case - O(N^2)
function distanceFromOrigin(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function solve(points, k) {
  const maxHeap = new Heap({ comparator: (a, b) => a[2] > b[2] });
  let distance = distanceFromOrigin(points[0][0], points[0][1]);
  maxHeap.push([...points[0], distance]);
  for (let i = 1; i < points.length; i++) {
    const [x, y] = points[i];
    distance = distanceFromOrigin(x, y);
    if (i > k - 1) {
      const [, , dist1] = maxHeap.peek();
      if (distance < dist1) {
        maxHeap.pop();
        maxHeap.push([x, y, distance]);
      }
    } else {
      maxHeap.push([x, y, distance]);
    }
  }
  return maxHeap.getHeap().map((a) => [a[0], a[1]]);
}

// const points = [
//   [1, 3],
//   [-2, 2],
// ];
// const k = 1;
// Output: [[-2,2]]

// const points = [[3,3],[5,-1],[-2,4]]
// const k = 2
// Output: [[3,3],[-2,4]]

const points = [
  [10, -2],
  [2, -2],
  [10, 10],
  [9, 4],
  [-8, 1],
];
const k = 4;

console.log(solve(points, k));
console.log(Math.sqrt(104));
