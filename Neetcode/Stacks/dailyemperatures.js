// Daily Temperatures
// Medium
// company
// Amazon
// Microsoft
// TikTok
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:

// Constraints:

// 1 <= temperatures.length <= 10^5
// 30 <= temperatures[i] <= 100

// TC - O(n^2)
function solve(temperatures) {
  const n = temperatures.length - 1;
  let stack = [];
  let ans = [];
  for (let i = n; i >= 0; i--) {
    stack.push(temperatures[i]);
    const sn = stack.length;
    let j = sn - 1;
    while (j >= 0 && stack[j] <= temperatures[i]) {
      j--;
    }
    if (j >= 0) ans[i] = sn - j - 1;
    else ans[i] = 0;
  }
  return ans;
}

// TC - O(n)
function solveOptimised(temperatures) {
  let stack = [];
  let ans = [];
  const n = temperatures.length;
  for (let i = 0; i < n; i++) {
    const temperature = temperatures[i];
    if (stack.length === 0) {
      stack.push([temperature, i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1][0] < temperature) {
        const [, ind] = stack.pop();
        ans[ind] = i - ind;
      }
      stack.push([temperature, i]);
    }
  }
  while (stack.length > 0) {
    const [, ind] = stack.pop();
    ans[ind] = 0;
  }
  return ans;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// const temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// const temperatures = [30, 60, 90];
// Output: [1,1,0]

console.log(solveOptimised(temperatures));
