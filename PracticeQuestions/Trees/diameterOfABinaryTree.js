/*
Diameter of binary tree

Problem Description
Given a Binary Tree A consisting of N integer nodes, you need to find the diameter of the tree.

The diameter of a tree is the number of edges on the longest path between two nodes in the tree.



Problem Constraints
0 <= N <= 10^5



Input Format
First and only Argument represents the root of binary tree A.



Output Format
Return an single integer denoting the diameter of the tree.



Example Input
Input 1:

           1
         /   \
        2     3
       / \
      4   5
Input 2:

            1
          /   \
         2     3
        / \     \
       4   5     6


Example Output
Output 1:

 3
Output 2:

 4


Example Explanation
Explanation 1:

 Longest Path in the tree is 4 -> 2 -> 1 -> 3 and the number of edges in this path is 3 so diameter is 3.
Explanation 2:

 Longest Path in the tree is 4 -> 2 -> 1 -> 3 -> 6 and the number of edges in this path is 4 so diameter is 4.



See Expected Output

*/

// TC = O(N)
// SC = O(H)
// The idea here is to find out height of left subtree and right subtree
// and return the maximum of left and right +1(for root node)
// d is final answer which is maximum of hl+hr+2(left and right edges from root)

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
  let d = 0;
  function getHeight(root) {
    if (root === null) return -1;
    const hl = getHeight(root.left);
    const hr = getHeight(root.right);
    d = Math.max(d, hl + hr + 2);
    return Math.max(hl, hr) + 1;
  }
  getHeight(root);
  return d;
}

const N11 = new TreeNode(11);
const N10 = new TreeNode(10);
const N9 = new TreeNode(9, N10, N11);
const N8 = new TreeNode(8);
const N4 = new TreeNode(4);
const N7 = new TreeNode(7, N4);
const N6 = new TreeNode(6, N8, N9);
const N5 = new TreeNode(5, N7);
const N3 = new TreeNode(3, N5);
const N2 = new TreeNode(2);
const N1 = new TreeNode(1, N2);

console.log(solve(N1));
