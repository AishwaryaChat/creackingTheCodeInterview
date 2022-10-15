// Invert Binary Tree or Mirror Binary tree
// Easy

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// TC - O(N)
// SC - O(H) - height of tree for recursion

class Tree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function mirrorBinaryTree(root) {
  if (root === null) return root;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  mirrorBinaryTree(root.left);
  mirrorBinaryTree(root.right);
  return root;
}

// TC - O(N)
// SC ~ O(N)
// In this solution que is not implemented correctly so this will fail for higher values of (n), since queue.shift operation will be heavy
// To make this effective, use a proper implementation if queue

function mirrorBinaryTreeIterative(root) {
  let queue = [root];
  while (queue.length !== 0) {
    let ele = queue.shift();
    let temp = ele.left;
    ele.left = ele.right;
    ele.right = temp;
    if (ele.left) queue.push(ele.left);
    if (ele.right) queue.push(ele.right);
  }
  return root;
}

function inorder(root) {
  if (root === null) return;
  process.stdout.write(root.val.toString() + " ");
  inorder(root.left);
  inorder(root.right);
}

let n9 = new Tree(9);
let n6 = new Tree(6);
let n3 = new Tree(3);
let n1 = new Tree(1);
let n7 = new Tree(7, n6, n9);
let n2 = new Tree(2, n1, n3);
let root = new Tree(4, n2, n7);

inorder(root);
const newRoot = mirrorBinaryTreeIterative(root);
inorder(newRoot);
