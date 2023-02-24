// Trapping Rain Water
// Hard
// company
// Amazon
// Microsoft
// Bloomberg
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:

// n == height.length
// 1 <= n <= 2 * 10^4
// 0 <= height[i] <= 10^5

// TC - O(N)
// SC - O(N)
function solve(height) {
  let N = height.length;
  const lMax = [height[0]];
  const rMax = [];
  rMax[N - 1] = height[N - 1];
  for (let i = 1, j = N - 2; i < N && j >= 0; i++, j--) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
    rMax[j] = Math.max(height[j], rMax[j + 1]);
  }
  let ans = 0;
  for (let i = 0; i < N; i++) {
    ans += Math.min(lMax[i], rMax[i]) - height[i];
  }
  return ans;
}

// const height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// const height = [4,2,0,3,2,5]
// Output: 9
const height = [2, 1, 3];

console.log(solve(height));
