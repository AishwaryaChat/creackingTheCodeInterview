// All Nodes Distance K in Binary Tree
// Medium
// company
// Amazon
// Google
// Facebook
// Paypal
// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
// Example 2:

// Input: root = [1], target = 1, k = 3
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [1, 500].
// 0 <= Node.val <= 500
// All the values Node.val are unique.
// target is the value of one of the nodes in the tree.
// 0 <= k <= 1000

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// TC - O(N), to add parent node and for dfs
// TC - O(N), stack space + visited nodes space

function addParent(root, parent) {
  if (root) {
    root.parent = parent;
    addParent(root.left, root);
    addParent(root.right, root);
  }
}

function dfs(root, distance, ans, visited) {
  if (root === null || visited[root.val]) return;
  visited[root.val] = true
  if (distance === 0) {
    ans.push(root.val);
    return;
  }
  dfs(root.parent, distance - 1, ans, visited);
  dfs(root.left, distance - 1, ans, visited);
  dfs(root.right, distance - 1, ans, visited);
}

function solve(root, target, k) {
  addParent(root, null);
  let ans = [];
  let visited = {}
  dfs(target, k, ans, visited);
  return ans;
}

// const root = [3,5,1,6,2,0,8,null,null,7,4]
const N4 = new TreeNode(4);
const N7 = new TreeNode(7);
const N8 = new TreeNode(8);
const N0 = new TreeNode(0);
const N2 = new TreeNode(2, N7, N4);
const N6 = new TreeNode(6);
const N1 = new TreeNode(1, N0, N8);
const N5 = new TreeNode(5, N6, N2);
const root = new TreeNode(3, N5, N1);
// const target = 5
const k = 2;

console.log(solve(root, N5, k));
// Output: [7,4,1]

// const root = [1]
// const target = 1
// const k = 3
// Output: []
