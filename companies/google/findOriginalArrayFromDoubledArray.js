// 2007. Find Original Array From Doubled Array
// Medium
// company
// Google
// Adobe
// Amazon
// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

// Example 1:

// Input: changed = [1,3,4,2,6,8]
// Output: [1,3,4]
// Explanation: One possible original array could be [1,3,4]:
// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.
// Other original arrays could be [4,3,1] or [3,1,4].
// Example 2:

// Input: changed = [6,3,0,1]
// Output: []
// Explanation: changed is not a doubled array.
// Example 3:

// Input: changed = [1]
// Output: []
// Explanation: changed is not a doubled array.

// Constraints:

// 1 <= changed.length <= 10^5
// 0 <= changed[i] <= 10^5

// TC - O(nlogn)
// SC - O(n)
function solve(changed) {
  if (changed.length % 2) return [];
  changed.sort((a, b) => a - b);
  let map = {};
  for (let i = 0; i < changed.length; i++) {
    if (map[changed[i]] === undefined) map[changed[i]] = 0;
    map[changed[i]] += 1;
  }
  let ans = [];
  for (let i = 0; i < changed.length; i++) {
    const twice = changed[i] * 2;
    if (map[changed[i]] > 0) {
      map[changed[i]] -= 1;
      if (map[twice] > 0) {
        map[twice] -= 1;
        ans.push(changed[i]);
      } else return [];
    }
  }

  return ans.length === changed.length / 2 ? ans : [];
}

// Solution using count sort
// TC - O(N+K), where K is maxNum * 2 + 1
// SC - O(K)
function solveCountSort(changed) {
  if (changed.length % 2) return [];
  const maxNum = Math.max(...changed);
  let freq = new Array(maxNum * 2 + 1).fill(0);
  for (let i = 0; i < changed.length; i++) {
    freq[changed[i]] += 1;
  }
  let ans = [];
  let i = 0;
  while (i < freq.length) {
    if (freq[i] > 0) {
      freq[i] -= 1;
      if (freq[i * 2] > 0) {
        freq[i * 2] -= 1;
        ans.push(i);
      } else return [];
    } else i++;
  }
  return ans;
}

const changed = [1, 3, 4, 2, 6, 8];
// Output: [1,3,4]

// const changed = [6,3,0,1]
// Output: []

// const changed = [1]
// Output: []

console.log(solveCountSort(changed));
