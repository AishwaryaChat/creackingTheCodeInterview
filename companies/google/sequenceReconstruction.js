// 444. Sequence Reconstruction
// Medium
// company
// Google
// You are given an integer array nums of length n where nums is a permutation of the integers in the range [1, n]. You are also given a 2D integer array sequences where sequences[i] is a subsequence of nums.

// Check if nums is the shortest possible and the only supersequence. The shortest supersequence is a sequence with the shortest length and has all sequences[i] as subsequences. There could be multiple valid supersequences for the given array sequences.

// For example, for sequences = [[1,2],[1,3]], there are two shortest supersequences, [1,2,3] and [1,3,2].
// While for sequences = [[1,2],[1,3],[1,2,3]], the only shortest supersequence possible is [1,2,3]. [1,2,3,4] is a possible supersequence but not the shortest.
// Return true if nums is the only shortest supersequence for sequences, or false otherwise.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [1,2,3], sequences = [[1,2],[1,3]]
// Output: false
// Explanation: There are two possible supersequences: [1,2,3] and [1,3,2].
// The sequence [1,2] is a subsequence of both: [1,2,3] and [1,3,2].
// The sequence [1,3] is a subsequence of both: [1,2,3] and [1,3,2].
// Since nums is not the only shortest supersequence, we return false.
// Example 2:

// Input: nums = [1,2,3], sequences = [[1,2]]
// Output: false
// Explanation: The shortest possible supersequence is [1,2].
// The sequence [1,2] is a subsequence of it: [1,2].
// Since nums is not the shortest supersequence, we return false.
// Example 3:

// Input: nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]]
// Output: true
// Explanation: The shortest possible supersequence is [1,2,3].
// The sequence [1,2] is a subsequence of it: [1,2,3].
// The sequence [1,3] is a subsequence of it: [1,2,3].
// The sequence [2,3] is a subsequence of it: [1,2,3].
// Since nums is the only shortest supersequence, we return true.

// Constraints:

// n == nums.length
// 1 <= n <= 10^4
// nums is a permutation of all the integers in the range [1, n].
// 1 <= sequences.length <= 10^4
// 1 <= sequences[i].length <= 10^4
// 1 <= sum(sequences[i].length) <= 10^5
// 1 <= sequences[i][j] <= n
// All the arrays of sequences are unique.
// sequences[i] is a subsequence of nums.

// TC - O(v+e), where v is n here, and e is sequences[i].length
// SC - O(v+e), to store indegree and graph
function getAdjacencyListAndIndegree(edges, n) {
  let indegree = {};
  let graph = {};
  for (let i = 1; i <= n; i++) {
    indegree[i] = 0;
    graph[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    for (let j = 1; j < edges[i].length; j++) {
      const n1 = edges[i][j - 1];
      const n2 = edges[i][j];
      if (graph[n1] === undefined) graph[n1] = [];
      graph[n1].push(n2);
      indegree[n2] += 1;
    }
  }
  return [indegree, graph];
}

function solve(nums, sequences) {
  const [indegree, graph] = getAdjacencyListAndIndegree(sequences, nums.length);
  let queue = new Queue();
  for (let [key, value] of Object.entries(indegree)) {
    if (value === 0) {
      queue.enqueue(key);
    }
  }
  let i = 0;
  let ans = [];
  while (!queue.isEmpty() && i < nums.length) {
    if (queue.size() !== 1) return false;
    const node = queue.dequeue();
    ans.push(node);
    i++;
    const neighbours = graph[node];
    for (let neighbour of neighbours) {
      indegree[neighbour] -= 1;
      if (indegree[neighbour] === 0) {
        queue.enqueue(neighbour);
      }
    }
  }
  return i === nums.length;
}

// TC - O(k), k is sequences[i].length
// SC - O(N)
function solveLinearly(nums, sequences) {
  let map = new Set();
  for (let i = 1; i < nums.length; i++) {
    const key = `${nums[i - 1]}-${nums[i]}`;
    map.add(key);
  }
  for (let i = 0; i < sequences.length; i++) {
    for (let j = 1; j < sequences[i].length; j++) {
      const key = `${sequences[i][j - 1]}-${sequences[i][j]}`;
      if (map.has(key)) map.delete(key);
    }
  }
  return map.size === 0;
}

const nums = [1, 2, 3];
const sequences = [
  [1, 2],
  [1, 3],
];
// Output: false

// const nums = [1,2,3]
// const sequences = [[1,2]]
// Output: false

// const nums = [1,2,3]
// const sequences = [[1,2],[1,3],[2,3]]
// Output: true

console.log(solve(nums, sequences));
