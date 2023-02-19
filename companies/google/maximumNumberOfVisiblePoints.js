// Maximum Number of Visible Points
// Hard
// company
// Google
// Amazon
// Nvidia
// You are given an array points, an integer angle, and your location, where location = [posx, posy] and points[i] = [xi, yi] both denote integral coordinates on the X-Y plane.

// Initially, you are facing directly east from your position. You cannot move from your position, but you can rotate. In other words, posx and posy cannot be changed. Your field of view in degrees is represented by angle, determining how wide you can see from any given view direction. Let d be the amount in degrees that you rotate counterclockwise. Then, your field of view is the inclusive range of angles [d - angle/2, d + angle/2].

// You can see some set of points if, for each point, the angle formed by the point, your position, and the immediate east direction from your position is in your field of view.

// There can be multiple points at one coordinate. There may be points at your location, and you can always see these points regardless of your rotation. Points do not obstruct your vision to other points.

// Return the maximum number of points you can see.

// Example 1:

// Input: points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]
// Output: 3
// Explanation: The shaded region represents your field of view. All points can be made visible in your field of view, including [3,3] even though [2,2] is in front and in the same line of sight.
// Example 2:

// Input: points = [[2,1],[2,2],[3,4],[1,1]], angle = 90, location = [1,1]
// Output: 4
// Explanation: All points can be made visible in your field of view, including the one at your location.
// Example 3:

// Input: points = [[1,0],[2,1]], angle = 13, location = [1,1]
// Output: 1
// Explanation: You can only see one of the two points, as shown above.

// Constraints:

// 1 <= points.length <= 10^5
// points[i].length == 2
// location.length == 2
// 0 <= angle < 360
// 0 <= posx, posy, xi, yi <= 100

// The below solution is solved using sliding window and sorting concept
// The question majorly revolves around math. The idea is to convert every given point to its corresponding degree with respect to the source location
// You should know about https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
// TC - O(N + NlogN) - N for the sliding window and NlogN for sorting
function solve(points, angle, currentLocation) {
  let pointsDegree = [];
  const [sx, sy] = currentLocation;
  let self = 0;
  for ([x, y] of points) {
    if (x === sx && y === sy) self++;
    else {
      const deg = Math.atan2(x - sx, y - sy) * (180 / Math.PI);
      pointsDegree.push(deg);
    }
  }
  pointsDegree = pointsDegree.concat(pointsDegree.map((deg) => deg + 360));
  pointsDegree.sort((a, b) => a - b);
  let l = 0,
    r = 0;
  let maxCount = 0;
  while (r < pointsDegree.length) {
    // moving l pointer forwards until right and left points comes under same view of angle
    while (l <= r && pointsDegree[r] - pointsDegree[l] > angle) {
      l++;
    }
    maxCount = Math.max(maxCount, r - l + 1);
    r++;
  }
  return maxCount + self;
}

// const points = [
//     [2, 1],
//     [2, 2],
//     [3, 3],
//   ],
//   angle = 90,
//   location = [1, 1];
// Output: 3

// const points = [[2,1],[2,2],[3,4],[1,1]], angle = 90, location = [1,1]
// Output: 4

// const points = [[1,0],[2,1]], angle = 13, location = [1,1]
// Output: 1

// const points = [
//   [34, 26],
//   [35, 95],
//   [31, 56],
//   [84, 75],
//   [26, 76],
//   [22, 15],
//   [26, 78],
//   [90, 41],
//   [94, 18],
//   [12, 88],
//   [42, 82],
//   [27, 0],
//   [85, 49],
//   [69, 71],
//   [13, 36],
//   [59, 58],
//   [58, 18],
//   [21, 62],
// ];
// const angle = 15;
// const location = [67, 91];
// Output: 4

const points = [
  [1, 1],
  [1, 1],
  [1, 1],
];
const angle = 1;
const location = [1, 1];
console.log(solve(points, angle, location));
