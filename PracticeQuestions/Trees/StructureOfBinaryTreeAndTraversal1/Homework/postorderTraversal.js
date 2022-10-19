// Postorder Traversal

// Problem Description
// Given a binary tree, return the Postorder traversal of its nodes values.

// NOTE: Using recursion is not allowed.

// Problem Constraints
// 1 <= number of nodes <= 10^5

// Input Format
// First and only argument is root node of the binary tree, A.

// Output Format
// Return an integer array denoting the Postorder traversal of the given binary tree.

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

//  [3, 2, 1]
// Output 2:

//  [6, 3, 2, 1]

// Example Explanation
// Explanation 1:

//  The Postorder Traversal of the given tree is [3, 2, 1].
// Explanation 2:

//  The Postorder Traversal of the given tree is [6, 3, 2, 1].

class TreeNode {
  constructor(data = 0, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function solveRecursive(root, ans) {
  if (root === null) return;
  solveRecursive(root.left, ans);
  solveRecursive(root.right, ans);
  ans.push(root.data);
}

function solve(root) {
  let ans = [];
  solveRecursive(root, ans);
  return ans;
}

// The idea here is to keep pushing root to stack and keep moving to left child of root, until left is null
// As soon as left will null, root become null, in that case we will pop the element from stack and check if that element's right child is null, if right child id null then we can push that element to ans, but if right child is not null then we have to check whether right chils  was the last visited element, because we can put root to answer only when it's right child is the last visited element or right child is null
// if right child is not null and right child is not last visited element, then we have to simply move towards the right subtree of root node and repeat the process

// TC - O(N)
// SC - O(N)

function solveIterative(root) {
  let ans = [];
  let stack = [];
  let curr = root;
  let pre = null;
  while (stack.length !== 0 || curr !== null) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      if (curr.right === null || curr.right === pre) {
        ans.push(curr.data);
        pre = curr;
        curr = null;
      } else {
        stack.push(curr);
        curr = curr.right;
      }
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

console.log(solveIterative(root));
