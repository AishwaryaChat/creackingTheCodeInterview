/*
 Invert the Binary Tree

Problem Description
Given a binary tree A, invert the binary tree and return it.

Inverting refers to making the left child the right child and vice versa.



Problem Constraints
1 <= size of tree <= 100000



Input Format
First and only argument is the head of the tree A.



Output Format
Return the head of the inverted tree.



Example Input
Input 1:

 
     1
   /   \
  2     3
Input 2:

 
     1
   /   \
  2     3
 / \   / \
4   5 6   7


Example Output
Output 1:

 
     1
   /   \
  3     2
Output 2:

 
     1
   /   \
  3     2
 / \   / \
7   6 5   4


Example Explanation
Explanation 1:

Tree has been inverted.
Explanation 2:

Tree has been inverted.
*/
// TC = O(N)
// SC = O(H)

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function invert(root) {
  if (root === null) return null;
  let temp = root.left;
  root.left = invert(root.right);
  root.right = invert(temp);
  return root;
}

// const N12 = new TreeNode(12);
// const N11 = new TreeNode(11, N12);
// const N10 = new TreeNode(10, N11);
// const N9 = new TreeNode(9);
// const N8 = new TreeNode(8, N10);
// const N7 = new TreeNode(7, N8);
// const N6 = new TreeNode(6);
// const N5 = new TreeNode(5, null, N9);
// const N4 = new TreeNode(4);
// const N3 = new TreeNode(3, N6, N7);
// const N2 = new TreeNode(2, N4, N5);
// const N1 = new TreeNode(1, N2, N3);

const N3 = new TreeNode(3);
const N2 = new TreeNode(2);
const N1 = new TreeNode(1, N2, N3);

console.log(N1);

let root = invert(N1);

console.log(root);
