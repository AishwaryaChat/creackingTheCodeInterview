/*
Least Common Ancestor

Problem Description
Find the lowest common ancestor in an unordered binary tree A, given two values, B and C, in the tree.

Lowest common ancestor: the lowest common ancestor (LCA) of two nodes and w in a tree or directed acyclic graph (DAG) is the lowest (i.e., deepest) node that has both v and w as descendants.



Problem Constraints
1 <= size of tree <= 100000

1 <= B, C <= 109



Input Format
First argument is head of tree A.

Second argument is integer B.

Third argument is integer C.



Output Format
Return the LCA.



Example Input
Input 1:

 
      1
     /  \
    2    3
B = 2
C = 3
Input 2:

      1
     /  \
    2    3
   / \
  4   5
B = 4
C = 5


Example Output
Output 1:

 1
Output 2:

 2


Example Explanation
Explanation 1:

 LCA is 1.
Explanation 2:

 LCA is 2.
 */

//  Since input is an unordered binary tree, The Idea here is to get the in and out time of each node using preorder(for intime) and postorder(for outtime) traversal
// This will convert the binary tree to a BST and then we can traverse and keep checking if the current node is ancestor of both then move that side

// TC = O(H)
// SC = O(N) - for intime and out time

const calculateInTimeOutTimeMap = require("../../LCAInTimeOutTimeConcept");
const getTreeFromLevelOrder = require("./deserializeBinaryTree");

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function checkIfAncestor(A, B, inout) {
  if (inout[A].in < inout[B].in && inout[A].out > inout[B].out) return true;
  return false;
}

function solve(root, A, B) {
  let curr = root;
  const inout = calculateInTimeOutTimeMap(root);
  if (inout[A] === undefined) return -1;
  if (inout[B] === undefined) return -1;
  if (A == B) return A;
  if (checkIfAncestor(A, B, inout)) return A;
  if (checkIfAncestor(B, A, inout)) return B;
  while (curr !== null) {
    if (
      curr.left &&
      checkIfAncestor(curr.left.data, A, inout) &&
      checkIfAncestor(curr.left.data, B, inout)
    )
      curr = curr.left;
    else if (
      curr.right &&
      checkIfAncestor(curr.right.data, A, inout) &&
      checkIfAncestor(curr.right.data, B, inout)
    )
      curr = curr.right;
    else return curr.data;
  }
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

// console.log(solve(N1, 12, 10))

// let A =  [15, 20, 34, 35, 5, 14, 16, 26, -1, 25, 23, -1, 30, 3, 36, -1, -1, 7, 24, 11, 32, -1, -1, 21, -1, -1, -1, 29, 4, 9, -1, 33, 13, -1, -1, -1, -1, 22, 31, -1, 27, 19, 1, -1, 12, 18, 6, -1, -1, -1, 2, -1, -1, -1, -1, 10, -1, -1, -1, -1, 8, -1, 28, -1, -1, -1, -1, -1, 17, -1, -1, -1, -1]
// let root = getTreeFromLevelOrder(A)
// console.log(solve(root, 33, 5))

let A = [
  4, 8, 7, 13, 6, -1, -1, -1, -1, 9, 10, 12, -1, 2, 11, -1, -1, -1, -1, -1, 5,
  1, -1, -1, 3, -1, -1,
];
let root = getTreeFromLevelOrder(A);

console.log(solve(root, 31, 39));
