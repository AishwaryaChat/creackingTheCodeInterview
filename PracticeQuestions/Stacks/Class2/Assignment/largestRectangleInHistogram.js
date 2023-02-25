/*
Largest Rectangle in Histogram

Problem Description
Given an array of integers A.

A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.

Find the area of the largest rectangle formed by the histogram.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 1000000000



Input Format
The only argument given is the integer array A.



Output Format
Return the area of the largest rectangle in the histogram.



Example Input
Input 1:

 A = [2, 1, 5, 6, 2, 3]
Input 2:

 A = [2]


Example Output
Output 1:

 10
Output 2:

 2


Example Explanation
Explanation 1:

The largest rectangle has area = 10 unit. Formed by A[3] to A[4].
Explanation 2:

Largest rectangle has area 2.

*/

const NearestSmallerOnLeft = require("../../nearestSmallerElementOnLeft");
const NearestSmallerOnRight = require("../../nearestSmallerElementOnRight");

function solveOptimised(A) {
  const nearestSmallerLeft = NearestSmallerOnLeft(A);
  const nearestSmallerRight = NearestSmallerOnRight(A);
  let area = 0;
  for (let i = 0; i < A.length; i++) {
    const nearestSmallerLeftElement =
      nearestSmallerLeft[i] === -1 ? A[i] : A[nearestSmallerLeft[i] + 1];
    const nearestSmallerRightElement =
      nearestSmallerRight[i] === -1 ? A[i] : A[nearestSmallerRight[i] - 1];
    const leftindex =
      nearestSmallerLeft[i] === -1 ? 0 : nearestSmallerLeft[i] + 1;
    const rightIndex =
      nearestSmallerRight[i] === -1 ? A.length - 1 : nearestSmallerRight[i] - 1;
    const height = Math.min(
      nearestSmallerLeftElement,
      nearestSmallerRightElement,
      A[i]
    );
    let newArea = height * (rightIndex - leftindex + 1);
    area = Math.max(area, newArea);
  }
  return area;
}

function solve(A) {
  let maxArea = 0;
  for (let i = 0; i < A.length; i++) {
    let minHeight = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < A.length; j++) {
      minHeight = Math.min(minHeight, A[j]);
      const area = (j - i + 1) * minHeight;
      console.log("area", area, "j", j, "i", i, "minHeight", minHeight);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

// const A = [2, 1, 5, 6, 2, 3];
// const A = [2]
// const A = [90, 58, 69, 70, 82, 100, 13, 57, 47, 18];
const A = [6, 2, 5, 4, 5, 1, 6];
console.log(solveOptimised(A));
