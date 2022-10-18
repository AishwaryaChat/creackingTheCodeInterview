// Preorder Traversal

// Problem Description
// Given a binary tree, return the preorder traversal of its nodes values.

// NOTE: Using recursion is not allowed.

// Problem Constraints
// 1 <= number of nodes <= 105

// Input Format
// First and only argument is root node of the binary tree, A.

// Output Format
// Return an integer array denoting the preorder traversal of the given binary tree.

// Example Input
// Input 1:

//    1
//     \
//      2
//     /
//    3
// Input 2:

//    1
//   / \
//  6   2
//     /
//    3

// Example Output
// Output 1:

//  [1, 2, 3]
// Output 2:

//  [1, 6, 2, 3]

// Example Explanation
// Explanation 1:

//  The Preoder Traversal of the given tree is [1, 2, 3].
// Explanation 2:

//  The Preoder Traversal of the given tree is [1, 6, 2, 3].

// TC - O(N) - N - number of nodes in tree
// SC - O(H) - recursive space, H - height of tree

function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function preorderRecursive(root, ans) {
  if (root === null) return;
  ans.push(root.data);
  if (root.left) preorderRecursive(root.left, ans);
  if (root.right) preorderRecursive(root.right, ans);
}

function solve(root) {
  let ans = [];
  preorderRecursive(root, ans);
  return ans;
}

// TC - O(N), N - number of nodes in tree
// SC - O(H), H - height of tree
function iterativePreOrder(root) {
  let stack = [];
  let curr = root;
  let ans = [];
  while (stack.length !== 0 || curr !== null) {
    if (curr !== null) {
      ans.push(curr.data);
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      curr = curr.right;
    }
  }
  return ans;
}

let rootRightRight = new TreeNode(7);
let rootRightLeft = new TreeNode(6);
let rootLeftRight = new TreeNode(5);
let rootLeftLeft = new TreeNode(4);
let rootRight = new TreeNode(3, rootRightLeft, rootRightRight);
let rootLeft = new TreeNode(2, rootLeftLeft, rootLeftRight);
let root = new TreeNode(1, rootLeft, rootRight);

console.log(iterativePreOrder(root));
