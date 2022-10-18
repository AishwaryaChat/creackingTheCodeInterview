/*
Sorted Array To Balanced BST

Problem Description
Given an array where elements are sorted in ascending order, convert it to a height Balanced Binary Search Tree (BBST).

Balanced tree : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.



Problem Constraints
1 <= length of array <= 100000



Input Format
First argument is an integer array A.



Output Format
Return a root node of the Binary Search Tree.



Example Input
Input 1:

 A : [1, 2, 3]
Input 2:

 A : [1, 2, 3, 5, 10]


Example Output
Output 1:

      2
    /   \
   1     3
Output 2:

      3
    /   \
   2     5
  /       \
 1         10


Example Explanation
Explanation 1:

 You need to return the root node of the Binary Tree.

*/
// We are applying binary search tree techniqueu here
// TC - O(N)
// SC - O(log N)
// This can also be solved, considering the input array is inorder, since inorder is always sorted, but it doesnt work in case of dupliacte elements

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function getBST(A, st, end) {
  if (st > end) return null;
  const mid = st + Math.floor((end - st) / 2);
  let root = new TreeNode(A[mid]);
  root.left = getBST(A, st, mid - 1);
  root.right = getBST(A, mid + 1, end);
  return root;
}

function solve(A) {
  return getBST(A, 0, A.length - 1);
}

const A = [1, 2, 3, 5, 10];

console.log(solve(A));
