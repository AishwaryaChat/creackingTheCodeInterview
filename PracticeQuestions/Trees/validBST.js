/*
Valid Binary Search Tree
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given a binary tree represented by root A.

Assume a BST is defined as follows:

1) The left subtree of a node contains only nodes with keys less than the node's key.

2) The right subtree of a node contains only nodes with keys greater than the node's key.

3) Both the left and right subtrees must also be binary search trees.



Problem Constraints
1 <= Number of nodes in binary tree <= 105

0 <= node values <= 109



Input Format
First and only argument is head of the binary tree A.



Output Format
Return 0 if false and 1 if true.



Example Input
Input 1:

 
   1
  /  \
 2    3
Input 2:

 
  2
 / \
1   3


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 2 is not less than 1 but is in left subtree of 1.
Explanation 2:

Satisfies all conditions.

*/

// TC = O(N)
// SC = O(H)

function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function isValidBST(A) {
  let isBst = 1;
  function max_min(root) {
    if (root === null)
      return [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    let l = max_min(root.left);
    let r = max_min(root.right);
    if (root.data < l[0] || root.data >= r[1]) {
      isBst = 0;
    }
    return [Math.max(root.data, l[0], r[0]), Math.min(root.data, l[1], r[1])];
  }
  max_min(A);
  return isBst;
}

// const left = new TreeNode(1);
// const right = new TreeNode(3);
// const root = new TreeNode(2, left, right);

// console.log(isValidBST(root));

// 3 2 4 1 3

const left2 = new TreeNode(1);
const right2 = new TreeNode(3);
const left = new TreeNode(2, left2, right2);
const right = new TreeNode(4);
const root = new TreeNode(3, left, right);
console.log(root)
console.log(isValidBST(root));
