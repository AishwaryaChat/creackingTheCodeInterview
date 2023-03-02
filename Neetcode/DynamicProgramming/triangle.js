// Triangle
// Medium
// company
// Amazon
// Apple
// Microsoft
// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -10^4 <= triangle[i][j] <= 10^4

// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?

function dfs(triangle, i, j, sum, dp, N) {
  if (i === N - 1) return triangle[i][j];
  const key = `${i}_${j}`;
  if (dp[key] !== undefined) return dp[key];
  const left =
    triangle[i][j] + dfs(triangle, i + 1, j, sum + triangle[i][j], dp, N);
  const right =
    triangle[i][j] + dfs(triangle, i + 1, j + 1, sum + triangle[i][j], dp, N);
  dp[key] = Math.min(left, right);
  return dp[key];
}

function solve(triangle) {
  if (triangle.length === 1) return triangle[0][0];
  let dp = {};
  dfs(triangle, 0, 0, 0, dp, triangle.length);
  return dp[`${0}_${0}`];
}

// TC - O(N^2)
// SC - O(N^2)
function solveIterative(triangle) {
  const N = triangle.length;
  let dp = new Array(N);
  dp[0] = [];
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < N; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      let left = Number.MAX_SAFE_INTEGER;
      let center = Number.MAX_SAFE_INTEGER;
      if (j === 0) {
        center = dp[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        left = dp[i - 1][j - 1];
      } else {
        left = dp[i - 1][j - 1];
        center = dp[i - 1][j];
      }
      dp[i][j] = triangle[i][j] + Math.min(left, center);
    }
  }
  return Math.min(...dp[N - 1]);
}

// TC - O(N^2)
// SC - O(N)
function solveIterativeSpaceOptimised(triangle) {
  const N = triangle.length;
  let dp = new Array(N);
  let dp1 = new Array(N);
  dp1[0] = triangle[0][0];
  dp[0] = triangle[0][0];
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let left = Number.MAX_SAFE_INTEGER;
      let center = Number.MAX_SAFE_INTEGER;
      if (j === 0) {
        center = dp1[j];
      } else if (j === triangle[i].length - 1) {
        left = dp1[j - 1];
      } else {
        left = dp1[j - 1];
        center = dp1[j];
      }
      dp[j] = triangle[i][j] + Math.min(left, center);
    }
    dp1 = dp.map((a) => a);
  }
  return Math.min(...dp);
}

// TC - O(N^2)
// SC - O(1)
function solveIterativeAuxilliarySpaceOptimised(triangle) {
  const N = triangle.length;
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let left = Number.MAX_SAFE_INTEGER;
      let center = Number.MAX_SAFE_INTEGER;
      if (j === 0) {
        center = triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        left = triangle[i - 1][j - 1];
      } else {
        left = triangle[i - 1][j - 1];
        center = triangle[i - 1][j];
      }
      triangle[i][j] = triangle[i][j] + Math.min(left, center);
    }
  }
  return Math.min(...triangle[N - 1]);
}

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// Output: 11

// const triangle = [[-10]];
// Output: -10

// const triangle = [[-1], [3, 2], [-3, 1, -1], [-3, 1, -1, 4]];

console.log(solveIterativeAuxilliarySpaceOptimised(triangle));
