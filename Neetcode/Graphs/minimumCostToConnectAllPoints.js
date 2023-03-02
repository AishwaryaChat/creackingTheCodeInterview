// Min Cost to Connect All Points
// Medium
// company
// Microsoft
// Amazon
// Directi
// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

// Example 1:

// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation:

// We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.
// Example 2:

// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18

// Constraints:

// 1 <= points.length <= 1000
// -10^6 <= xi, yi <= 10^6
// All pairs (xi, yi) are distinct.

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

class FinUnionByRank {
  constructor(n) {
    this.n = points.length;
    this.parent = [];
    this.rank = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  findParent(x) {
    if (this.parent[x] === x) return x;
    return (this.parent[x] = this.findParent(this.parent[x]));
  }

  union(x, y) {
    const px = this.findParent(x);
    const py = this.findParent(y);
    if (px === py) return false;
    if (this.rank[px] === this.rank[py]) {
      this.parent[px] = py;
      this.rank[py] += 1;
    } else if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else this.parent[py] = px;
    return true;
  }
}

function findRange(points) {
  let range = [];
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    // if (!range[points[i]]) range[points[i]] = [];
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const [l, m] = points[j];
        const dist = Math.abs(x - l) + Math.abs(y - m);
        range.push({ source: i, dest: j, dist });
      }
    }
  }
  return range.sort((a, b) => a.dist - b.dist);
}

// TC - O(N^2 logN), where N is total number of points
// N^2 time taken to calculate all the distance among all the points
// N^2logN^2 to sort this range
// SC - N^2, to store range
function solve(points) {
  const range = findRange(points);
  const union = new FinUnionByRank(points.length);
  let ans = 0;
  for (let i = 0; i < range.length; i++) {
    const { source, dest, dist } = range[i];
    if (union.union(source, dest)) ans += dist;
  }
  return ans;
}

// const points = [
//   [0, 0],
//   [2, 2],
//   [3, 10],
//   [5, 2],
//   [7, 0],
// ];
// Output: 20

const points = [[3,12],[-2,5],[-4,1]]
// Output: 18

console.log(solve(points));
