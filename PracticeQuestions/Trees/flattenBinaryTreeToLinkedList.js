/*
Flatten Binary Tree to Linked List

Problem Description
Given a binary tree A, flatten it to a linked list in-place.

The left child of all nodes should be NULL.



Problem Constraints
1 <= size of tree <= 100000



Input Format
First and only argument is the head of tree A.



Output Format
Return the linked-list after flattening.



Example Input
Input 1:

     1
    / \
   2   3
Input 2:

         1
        / \
       2   5
      / \   \
     3   4   6


Example Output
Output 1:

1
 \
  2
   \
    3
Output 2:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6


Example Explanation
Explanation 1:

 Tree flattening looks like this.
Explanation 2:

 Tree flattening looks like this.
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

function getList(root) {
  if (root === null) return [null, null];
  const L = getList(root.left);
  const R = getList(root.right);
  root.left = null;
  if (L[0] !== null) {
    root.right = L[0];
    L[1].right = R[0];
    return [root, R[1] !== null ? R[1] : L[1]];
  } else {
    root.right = R[0];
    return [root, R[1] !== null ? R[1] : root];
  }
}

function solve(root) {
  return getList(root)[0];
}

// const N12 = new TreeNode(12);
// const N11 = new TreeNode(11, N12);
// const N10 = new TreeNode(10, N11);
// const N9 = new TreeNode(9);
// const N8 = new TreeNode(8, N10);
// const N7 = new TreeNode(7, N8);
// const N6 = new TreeNode(6);
const N5 = new TreeNode(5);
const N4 = new TreeNode(4);
const N3 = new TreeNode(3);
const N2 = new TreeNode(2);
const N1 = new TreeNode(1, N2, N3);

console.log(solve(N1));
// O/P - 1->2->3
