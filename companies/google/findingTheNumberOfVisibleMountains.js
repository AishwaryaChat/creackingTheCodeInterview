// Finding the Number of Visible Mountains
// Medium
// company
// Google
// You are given a 0-indexed 2D integer array peaks where peaks[i] = [xi, yi] states that mountain i has a peak at coordinates (xi, yi). A mountain can be described as a right-angled isosceles triangle, with its base along the x-axis and a right angle at its peak. More formally, the gradients of ascending and descending the mountain are 1 and -1 respectively.

// A mountain is considered visible if its peak does not lie within another mountain (including the border of other mountains).

// Return the number of visible mountains.

// Example 1:

// Input: peaks = [[2,2],[6,3],[5,4]]
// Output: 2
// Explanation: The diagram above shows the mountains.
// - Mountain 0 is visible since its peak does not lie within another mountain or its sides.
// - Mountain 1 is not visible since its peak lies within the side of mountain 2.
// - Mountain 2 is visible since its peak does not lie within another mountain or its sides.
// There are 2 mountains that are visible.
// Example 2:

// Input: peaks = [[1,3],[1,3]]
// Output: 0
// Explanation: The diagram above shows the mountains (they completely overlap).
// Both mountains are not visible since their peaks lie within each other.

// Constraints:

// 1 <= peaks.length <= 10^5
// peaks[i].length == 2
// 1 <= xi, yi <= 10^5

// Solution ref from:
// https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/2800280/java-o-n-logn-sort-linear-pass-solution-with-detailed-explanation-and-code/
// TC - O(NlogN)
function solve(peaks) {
  peaks = peaks.map((a) => [a[0] - a[1], a[0] + a[1]]);
  peaks.sort((a, b) => (a[0] - b[0] === 0 ? b[1] - a[1] : a[0] - b[0]));
  let count = 0;
  let i = 0;
  let j = 0;
  let go = true;
  while (go) {
    go = false;
    let duplicate = false;
    j = i + 1;
    while (j < peaks.length) {
      if (peaks[j][1] > peaks[i][1]) {
        i = j;
        go = true;
        break;
      } else if (peaks[j][0] === peaks[i][0] && peaks[j][1] === peaks[i][1]) {
        duplicate = true;
      }
      j++;
    }
    if (!duplicate) {
      count += 1;
    }
  }
  return count;
}

// const peaks = [
//   [2, 2],
//   [6, 3],
//   [5, 4],
// ];
// Output: 2

// const peaks = [
//   [1, 3],
//   [1, 3],
// ];
// Output: 0

// const peaks = [
//   [1, 3],
//   [1, 3],
//   [5,5]
// ];
// Output: 1
const peaks = [
  [3, 19],
  [39, 7],
  [15, 39],
  [23, 13],
  [8, 28],
  [2, 26],
  [38, 15],
  [38, 7],
  [16, 17],
];

console.log(solve(peaks));
