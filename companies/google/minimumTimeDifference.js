// Minimum Time Difference
// Medium
// company
// Google
// Yahoo
// Amazon
// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

// Example 1:

// Input: timePoints = ["23:59","00:00"]
// Output: 1
// Example 2:

// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0

// Constraints:

// 2 <= timePoints.length <= 2 * 10^4
// timePoints[i] is in the format "HH:MM".

// TC - O(NlogN)
function solve(timePoints) {
  const n = timePoints.length;
  timePoints = timePoints
    .map((a) => {
      a = a.split(":");
      return Number(a[0]) * 60 + Number(a[1]);
    })
    .sort((a, b) => a - b);
  let min = 1440 - timePoints[n - 1] + timePoints[0];
  let i = 1;
  while (i < n) {
    const a = timePoints[i - 1];
    const b = timePoints[i];
    const diff1 = Math.abs(a + 1440 - b);
    const diff2 = Math.abs(a - b);
    min = Math.min(min, diff1, diff2);
    i++;
  }
  return min;
}

const timePoints = ["23:59", "00:00"];
// Output: 1

// const timePoints = ["00:00","23:59","00:00"]
// Output: 0

console.log(solve(timePoints));
