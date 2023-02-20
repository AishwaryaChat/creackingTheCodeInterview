// Container With Most Water
// Medium
// company
// Amazon
// Adobe
// Apple
// Google
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 10^5
// 0 <= height[i] <= 10^4

// TC - O(N)
// SC - O(1)
// Since Width is already sorted we have to only maximise the height of the container
function solve(height) {
  let i = 0;
  let j = height.length - 1;
  let ans = 0;
  while (i < j) {
    const area = (j - i) * Math.min(height[i], height[j]);
    ans = Math.max(ans, area);
    if (height[i] < height[j]) i++;
    else j--;
  }
  return ans;
}

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49

const height = [1, 1];
// Output: 1

console.log(solve(height));
