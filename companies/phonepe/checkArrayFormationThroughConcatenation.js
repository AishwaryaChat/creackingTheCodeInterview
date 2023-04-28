// Check Array Formation Through Concatenation
// Easy
// company
// PhonePe
// Facebook
// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Example 1:

// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]
// Example 2:

// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].
// Example 3:

// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]

// Constraints:

// 1 <= pieces.length <= arr.length <= 100
// sum(pieces[i].length) == arr.length
// 1 <= pieces[i].length <= arr.length
// 1 <= arr[i], pieces[i][j] <= 100
// The integers in arr are distinct.
// The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).

// SC - O(N)
// TC - O(N)
function solve(arr, pieces) {
  let map = {};
  for (let a of pieces) {
    map[a[0]] = a;
  }
  let i = 0;
  while (i < arr.length) {
    const elements = map[arr[i]];
    if (elements === undefined) return false;
    else {
      for (let j = 0; j < elements.length; j++, i++) {
        if (arr[i] !== elements[j]) return false;
      }
    }
  }
  return true;
}

const arr = [15, 88];
const pieces = [[88], [15]];
// Output: true

// const arr = [49,18,16]
// const pieces = [[16,18,49]]
// Output: false

// const arr = [91,4,64,78]
// const pieces = [[78],[4,64],[91]]
// Output: true

console.log(solve(arr, pieces));
