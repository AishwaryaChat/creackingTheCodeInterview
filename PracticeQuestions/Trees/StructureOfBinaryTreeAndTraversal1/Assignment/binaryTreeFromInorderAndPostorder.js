/*
Binary Tree From Inorder And Postorder

Problem Description
Given the inorder and postorder traversal of a tree, construct the binary tree.

NOTE: You may assume that duplicates do not exist in the tree.



Problem Constraints
1 <= number of nodes <= 10^5



Input Format
First argument is an integer array A denoting the inorder traversal of the tree.

Second argument is an integer array B denoting the postorder traversal of the tree.



Output Format
Return the root node of the binary tree.



Example Input
Input 1:

 A = [2, 1, 3]
 B = [2, 3, 1]
Input 2:

 A = [6, 1, 3, 2]
 B = [6, 3, 2, 1]


Example Output
Output 1:

   1
  / \
 2   3
Output 2:

   1  
  / \
 6   2
    /
   3


Example Explanation
Explanation 1:

 Create the binary tree and return the root node of the tree.
*/

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function constructTree(inOrd, st, end, postOrd, last) {
  if (st > end) return null;
  let root = new TreeNode(postOrd[last]);
  let idx = inOrd.indexOf(postOrd[last]);
  root.left = constructTree(
    inOrd,
    st,
    idx - 1,
    postOrd,
    last - 1 - (end - idx)
  );
  root.right = constructTree(inOrd, idx + 1, end, postOrd, last - 1);
  return root;
}

// We can also use map to get index
function getIndex(inOrd) {
  let map = {};
  for (let i = 0; i < inOrd.length; i++) {
    map[inOrd[i]] = i;
  }
  return map;
}

function solve(A, B) {
  return constructTree(A, 0, A.length - 1, B, B.length - 1);
}

// const A = [2, 1, 3];
// const B = [2, 3, 1];

const A = [6, 1, 3, 2];
const B = [6, 3, 2, 1];

console.log(solve(A, B));
