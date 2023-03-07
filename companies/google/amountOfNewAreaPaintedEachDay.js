// 2158. Amount of New Area Painted Each Day
// Hard
// company
// Google
// TikTok
// There is a long and thin painting that can be represented by a number line. You are given a 0-indexed 2D integer array paint of length n, where paint[i] = [starti, endi]. This means that on the ith day you need to paint the area between starti and endi.

// Painting the same area multiple times will create an uneven painting so you only want to paint each area of the painting at most once.

// Return an integer array worklog of length n, where worklog[i] is the amount of new area that you painted on the ith day.

// Example 1:

// Input: paint = [[1,4],[4,7],[5,8]]
// Output: [3,3,1]
// Explanation:
// On day 0, paint everything between 1 and 4.
// The amount of new area painted on day 0 is 4 - 1 = 3.
// On day 1, paint everything between 4 and 7.
// The amount of new area painted on day 1 is 7 - 4 = 3.
// On day 2, paint everything between 7 and 8.
// Everything between 5 and 7 was already painted on day 1.
// The amount of new area painted on day 2 is 8 - 7 = 1.
// Example 2:

// Input: paint = [[1,4],[5,8],[4,7]]
// Output: [3,3,1]
// Explanation:
// On day 0, paint everything between 1 and 4.
// The amount of new area painted on day 0 is 4 - 1 = 3.
// On day 1, paint everything between 5 and 8.
// The amount of new area painted on day 1 is 8 - 5 = 3.
// On day 2, paint everything between 4 and 5.
// Everything between 5 and 7 was already painted on day 1.
// The amount of new area painted on day 2 is 5 - 4 = 1.
// Example 3:

// Input: paint = [[1,5],[2,4]]
// Output: [4,0]
// Explanation:
// On day 0, paint everything between 1 and 5.
// The amount of new area painted on day 0 is 5 - 1 = 4.
// On day 1, paint nothing because everything between 2 and 4 was already painted on day 0.
// The amount of new area painted on day 1 is 0.

// Constraints:

// 1 <= paint.length <= 10^5
// paint[i].length == 2
// 0 <= starti < endi <= 5 * 10^4

/**
 * @param {number[][]} paint
 * @return {number[]}
 */

class SegmentNode {
  constructor(l, r) {
    this.l = l;
    this.r = r;
    this.left = null;
    this.right = null;
    this.painted = false;
  }
}

class SegmentTree {
  constructor(min, max) {
    this.root = new SegmentNode(min, max);
  }
  add(left, right) {
    return this.getNewInterval(this.root, left, right);
  }
  getNewInterval(root, left, right) {
    if (root.painted) return 0;
    if (root.l === left && root.r === right && root.left === null) {
      root.painted = true;
      return right - left;
    }
    const mid = root.l + Math.floor((root.r - root.l) / 2);
    if (root.left === null) {
      root.left = new SegmentNode(root.l, mid);
      root.right = new SegmentNode(mid, root.r);
    }
    let leftVal = 0;
    let rightVal = 0;
    if (left >= mid) {
      rightVal = this.getNewInterval(root.right, left, right);
    } else if (right <= mid) {
      leftVal = this.getNewInterval(root.left, left, right);
    } else {
      leftVal = this.getNewInterval(root.left, left, mid);
      rightVal = this.getNewInterval(root.right, mid, right);
    }
    root.painted = root.left.painted && root.right.painted;
    return leftVal + rightVal;
  }
}

function solve(paint) {
  if (paint.length === 0) return paint;
  let max = Math.max(...paint.map((a) => Math.max(...a)));
  const segmentTree = new SegmentTree(0, max);
  let ans = [];
  for (let [x, y] of paint) {
    const area = segmentTree.add(x, y);
    ans.push(area);
  }
  return ans;
}

// const paint = [[1,4],[4,7],[5,8]]
// Output: [3,3,1]

const paint = [
  [1, 4],
  [5, 8],
  [4, 7],
];
// Output: [3,3,1]

// const paint = [[1,5],[2,4]]
// Output: [4,0]

console.log(solve(paint));
