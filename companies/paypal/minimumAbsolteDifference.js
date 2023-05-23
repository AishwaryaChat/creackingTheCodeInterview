// Minimum Absolute Difference
// Easy
// company
// Paypal
// Bloomberg
// JPMorgan
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

// Constraints:

// 2 <= arr.length <= 10^5
// -10^6 <= arr[i] <= 10^6

// TC - O(nlogn)
function solve(arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < min) {
      min = diff;
    }
  }
  let ans = [];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff === min) ans.push([arr[i - 1], arr[i]]);
  }
  return ans;
}

// TC - O(nlogn)
function solveOptimised(arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let ans = [];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < min) {
      min = diff;
      ans = [];
      ans.push([arr[i - 1], arr[i]]);
    } else if (diff === min) {
      ans.push([arr[i - 1], arr[i]]);
    } 
  }
  return ans;
}

// Using count sort
// TC - O(m+n)
// SC - O(m+n)

var solveCountSort = function(arr) {
  let minElement = Math.min(...arr)
  let maxElement = Math.max(...arr)
  let shift = -minElement
  let line = new Array(maxElement - minElement + 1).fill(0)
  for(let ele of arr) {
    line[ele + shift] += 1
  }
  let minDiff = maxElement - minElement
  let prev = 0
  let ans = []
  for(let curr = 1; curr<=maxElement+shift; curr++) {
    if(line[curr]===0) continue
    if(curr - prev === minDiff) ans.push([prev-shift, curr-shift])
    else if(curr - prev < minDiff) {
      minDiff = curr - prev
      ans = [[prev-shift, curr-shift]]
    }
    prev = curr
  }
  return ans
};

// const arr = [4, 2, 1, 3];
// Output: [[1,2],[2,3],[3,4]]

// const arr = [1,3,6,10,15]
// Output: [[1,3]]

const arr = [3, 8, -10, 23, 19, -4, -14, 27];
// Output: [[-14,-10],[19,23],[23,27]]

console.log(solve(arr));
