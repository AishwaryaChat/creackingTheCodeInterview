// Binary Tree Vertical Order Traversal
// Medium

// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Example 2:

// Input: root = [3,9,8,4,0,1,7]
// Output: [[4],[9],[3,0,1],[8],[7]]
// Example 3:

// Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
// Output: [[4],[9,5],[3,0,1],[8,2],[7]]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const Queue = require("../../../PracticeQuestions/Queues/arrayImpelemtation");

// TC - O(N)
// SC - O(N)

function solve(root) {
  if (root === null) return [];
  let queue = new Queue();
  queue.enqueue([root, 0]);
  let map = {};
  let minIndex = Number.MAX_SAFE_INTEGER;
  let maxIndex = Number.MIN_SAFE_INTEGER;
  while (!queue.isEmpty()) {
    const [top, index] = queue.dequeue();
    if (top.left) queue.enqueue([top.left, index - 1]);
    if (top.right) queue.enqueue([top.right, index + 1]);
    if (!map[index]) {
      map[index] = [];
    }
    map[index].push(top.val);
    minIndex = Math.min(index, minIndex);
    maxIndex = Math.max(index, maxIndex);
  }
  let result = [];
  console.log("map", map);
  for (let i = minIndex; i <= maxIndex; i++) {
    let nodes = map[i];
    let ans = [];
    for (let j = 0; j < nodes.length; j++) {
      ans.push(nodes[j]);
    }
    result.push(ans);
  }
  return result;
}

[3, 9, 20, null, null, 15, 7];

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let T7 = new TreeNode(7);
let T15 = new TreeNode(15);
let T20 = new TreeNode(20, T15, T7);
let T9 = new TreeNode(9);
let T = new TreeNode(3, T9, T20);

console.log(solve(T));
