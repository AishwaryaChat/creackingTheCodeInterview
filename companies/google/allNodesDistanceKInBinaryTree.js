// All Nodes Distance K in Binary Tree
// Medium
// company
// Amazon
// Google
// Facebook
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

// TC - O(N)
// SC - O(N)
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function dfs(root, target, k, ans) {
  if (root === null) return -1;
  else if (root.val === target) {
    countSubtree(root, ans, 0, k);
    return 1;
  } else {
    const L = dfs(root.left, target, k, ans);
    const R = dfs(root.right, target, k, ans);
    if (L !== -1 && L <= k) {
      if (L === k) {
        ans.push(root.val);
        return -1;
      } else countSubtree(root.right, ans, L + 1, k);
      return L + 1;
    } else if (R !== -1 && R <= k) {
      if (R == k) {
        ans.push(root.val);
        return -1;
      } else countSubtree(root.left, ans, R + 1, k);
      return R + 1;
    } else return -1;
  }
}

function countSubtree(root, ans, dist, k) {
  if (root === null) return;
  if (dist === k) {
    ans.push(root.val);
    return;
  }
  countSubtree(root.left, ans, dist + 1, k);
  countSubtree(root.right, ans, dist + 1, k);
}

function solve(root, target, k) {
  let ans = [];
  dfs(root, target, k, ans);
  return ans;
}

// const root = [3,5,1,6,2,0,8,null,null,7,4]
const n4 = new TreeNode(4);
const n7 = new TreeNode(7);
const n8 = new TreeNode(8);
const n0 = new TreeNode(0);
const n2 = new TreeNode(2, n7, n4);
const n6 = new TreeNode(6);
const n1 = new TreeNode(1, n0, n8);
const n5 = new TreeNode(5, n6, n2);
const root = new TreeNode(3, n5, n1);
const target = 5;
const k = 2;
// Output: [7,4,1]

// const root = [1]
// const target = 1
// const k = 3
// Output: []

console.log(solve(root, target, k));
