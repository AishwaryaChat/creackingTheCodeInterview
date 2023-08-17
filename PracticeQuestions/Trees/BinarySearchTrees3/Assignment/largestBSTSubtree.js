// Largest BST Subtree

// Problem Description
// You are given a Binary Tree A with N nodes.

// Write a function that returns the size of the largest subtree, which is also a Binary Search Tree (BST).

// If the complete Binary Tree is BST, then return the size of the whole tree.

// NOTE:

// The largest subtree is the subtree with the most number of nodes.

// Problem Constraints
// 1 <= N <= 10^5

// Input Format
// First and only argument is an pointer to root of the binary tree A.

// Output Format
// Return an single integer denoting the size of the largest subtree which is also a BST.

// Example Input
// Input 1:

//      10
//     / \
//    5  15
//   / \   \
//  1   8   7
// Input 2:

//      5
//     / \
//    3   8
//   / \ / \
//  1  4 7  9

// Example Output
// Output 1:

//  3
// Output 2:

//  7

// Example Explanation
// Explanation 1:

//  Largest BST subtree is
//                             5
//                            / \
//                           1   8
// Explanation 2:

//  Given binary tree itself is BST.

function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function solve(A) {
    let ans = 0
    function min_max_count(root) {
      if (root === null)
        return [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0];
      let nodeCount = 0;
      const l = min_max_count(root.left);
      const r = min_max_count(root.right);
  
      if (root.data >= l[0] && root.data < r[1]) {
          nodeCount = l[2] + r[2] + 1;
        ans = Math.max(ans, nodeCount);
      } else if (root.data >= l[0]) {
          ans = Math.max(ans, l[2]);
      } else if (root.data < r[1]) {
          ans = Math.max(ans, r[2]);
      } else {
        ans = Math.max(ans, l[2], r[2]);
      }
      return [
        Math.max(root.data, l[0], r[0]),
        Math.min(root.data, l[1], r[1]),
        nodeCount,
      ];
    }
     min_max_count(A, 0);
    return ans;
}


// let root = new TreeNode(20);
// const r20 = new TreeNode(15);
// const r12 = new TreeNode(8);
// const r11 = new TreeNode(18);
// const r14 = new TreeNode(25);
// r20.left = r12;
// r20.right = r11;
// root.left = r20;
// root.right = r14;

let root = new TreeNode(9);
const r20 = new TreeNode(20);
const r12 = new TreeNode(12);
const r11 = new TreeNode(11);
const r14 = new TreeNode(14);
r20.left = r12;
r20.right = r11;
root.left = r20;
root.right = r14;

// let root = new TreeNode(10);
// const r5 = new TreeNode(5);
// const r15 = new TreeNode(15);
// const r1 = new TreeNode(1);
// const r8 = new TreeNode(8);
// const r7 = new TreeNode(7);
// r5.left = r1;
// r5.right = r8;
// r15.right = r7
// root.left = r5;
// root.right = r15;

console.log(solve(root));
