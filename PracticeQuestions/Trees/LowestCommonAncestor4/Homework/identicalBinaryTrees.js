// sIdentical Binary Trees

// Problem Description
// Given two binary trees, check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Problem Constraints
// 1 <= number of nodes <= 10^5

// Input Format
// The first argument is a root node of the first tree, A.

// The second argument is a root node of the second tree, B.

// Output Format
// Return 0 / 1 ( 0 for false, 1 for true ) for this problem.

// Example Input
// Input 1:

//    1       1
//   / \     / \
//  2   3   2   3
// Input 2:

//    1       1
//   / \     / \
//  2   3   3   3

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  Both trees are structurally identical and the nodes have the same value.
// Explanation 2:

//  Values of the left child of the root node of the trees are different.

function getPredecessor(curr) {
  let pre = curr.left;
  while (pre.right !== null && pre.right !== curr) {
    pre = pre.right;
  }
  return pre;
}

function morrisInorderTraversal(root) {
  let curr = root;
  const inorder = [];
  while (curr !== null) {
    if (curr.left === null) {
      inorder.push(curr.data);
      curr = curr.right;
    } else {
      const pre = getPredecessor(curr);
      if (pre.right === null) {
        pre.right = curr;
        curr = curr.left;
      } else {
        inorder.push(curr.data);
        pre.right = null;
        curr = curr.right;
      }
    }
  }
  return inorder;
}

// This solution is based on finding inorder and then compare each node data
// TC - O(N)
// SC - O(N) - for in order
function isSameTree(A, B) {
  const inorderA = morrisInorderTraversal(A);
  const inorderB = morrisInorderTraversal(B);
  if (inorderA.length !== inorderB.length) return 0;
  for (let i = 0; i < inorderA.length; i++) {
    if (inorderA[i] !== inorderB[i]) return 0;
  }
  return 1;
}

// This solution is comparing the nodes data on the fly
// TC - O(N)
// SC - O(1)
function solveOptimised(A, B) {
  if (A == null && B == null) return 1;
  if ((A == null && B !== null) || (A !== null && B == null)) return 0;
  if (A.data !== B.data) return 0;
  if (
    A.data === B.data &&
    this.isSameTree(A.left, B.left) &&
    this.isSameTree(A.right, B.right)
  )
    return 1;
  else return 0;
}
