// Distance between Nodes of BST

// Problem Description
// Given a binary search tree.
// Return the distance between two nodes with given two keys B and C. It may be assumed that both keys exist in BST.

// NOTE: Distance between two nodes is number of edges between them.

// Problem Constraints
// 1 <= Number of nodes in binary tree <= 1000000

// 0 <= node values <= 10^9

// Input Format
// First argument is a root node of the binary tree, A.

// Second argument is an integer B.

// Third argument is an integer C.

// Output Format
// Return an integer denoting the distance between two nodes with given two keys B and C

// Example Input
// Input 1:

//          5
//        /   \
//       2     8
//      / \   / \
//     1   4 6   11
//  B = 2
//  C = 11
// Input 2:

//          6
//        /   \
//       2     9
//      / \   / \
//     1   4 7   10
//  B = 2
//  C = 6

// Example Output
// Output 1:

//  3
// Output 2:

//  1

// Example Explanation
// Explanation 1:

//  Path between 2 and 11 is: 2 -> 5 -> 8 -> 11. Distance will be 3.
// Explanation 2:

//  Path between 2 and 6 is: 2 -> 6. Distance will be 1

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// TC - O(N)
// SC - O(N) - stack space for lca
function findLCA(root, A, B) {
  if (A < root.data && B < root.data) return findLCA(root.left, A, B);
  else if (A > root.data && B > root.data) return findLCA(root.right, A, B);
  else return root;
}

function getDistance(root, A) {
  let disA = 0;
  let curr = root;
  while (curr && curr.data !== A) {
    if (A > curr.data) curr = curr.right;
    else if (A < curr.data) curr = curr.left;
    disA++;
  }
  return A;
}

function solve(root, A, B) {
  const LCA = findLCA(root, A, B);
  return getDistance(LCA, A) + getDistance(LCA, B);
}

const r11 = new TreeNode(11);
const r6 = new TreeNode(6);
const r4 = new TreeNode(4);
const r1 = new TreeNode(1);
const r8 = new TreeNode(8, r6, r11);
const r2 = new TreeNode(2, r1, r4);
const root = new TreeNode(5, r2, r8);

console.log(solve(root, 4, 8));
