// Lowest Common Ancestor of a Binary Tree
// Medium
// company
// Facebook
// Bloomberg
// Amazon
// Paypal
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [1,2], p = 1, q = 2
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -10^9 <= Node.val <= 10^9
// All Node.val are unique.
// p != q
// p and q will exist in the tree.

// TC - O(N), N is number of nodes here
// SC - O(H), H is height of tree
function calculateInTimeOutTime(root) {
  let map = {};
  let t = 0;
  function inOut(root, map) {
    if (root === null) return;
    map[root.val] = { in: t++ };
    inOut(root.left, map);
    inOut(root.right, map);
    map[root.val].out = t++;
  }
  inOut(root, map);
  return map;
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function checkIfAncestor(A, B, inout) {
  return inout[A].in < inout[B].in && inout[A].out > inout[B].out;
}

function find(root, p, q, inout) {
  if (root === null) return root;
  if (
    root.left &&
    checkIfAncestor(root.left.val, p.val, inout) &&
    checkIfAncestor(root.left.val, q.val, inout)
  )
    return find(root.left, p, q, inout);
  else if (
    root.right &&
    checkIfAncestor(root.right.val, p.val, inout) &&
    checkIfAncestor(root.right.val, q.val, inout)
  )
    return find(root.right, p, q, inout);
  else return root;
}

function solve(root, p, q) {
  const inout = calculateInTimeOutTime(root);
  if (inout[p.val] === undefined) return -1;
  if (inout[q.val] === undefined) return -1;
  if (checkIfAncestor(p.val, q.val, inout)) return p;
  if (checkIfAncestor(q.val, p.val, inout)) return q;
  return find(root, p, q, inout);
}

const N4 = new TreeNode(4);
const N7 = new TreeNode(7);
const N8 = new TreeNode(8);
const N0 = new TreeNode(0);
const N2 = new TreeNode(2, N7, N4);
const N6 = new TreeNode(6);
const N1 = new TreeNode(1, N6, N7);
const N5 = new TreeNode(5, N6, N2);
const root = new TreeNode(3, N5, N1);
// Output: 3
console.log(solve(root, N5, N1));

// const root = [3,5,1,6,2,0,8,null,null,7,4]
// const p = 5
// const q = 4
// Output: 5

// const root = [1,2]
// const p = 1
// const q = 2
// Output: 1
