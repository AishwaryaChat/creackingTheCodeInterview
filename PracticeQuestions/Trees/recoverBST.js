/*
Recover Binary Search Tree

Problem Description
Two elements of a binary search tree (BST), represented by root A are swapped by mistake. Tell us the 2 values swapping which the tree will be restored.

A solution using O(n) space is pretty straightforward. Could you devise a constant space solution?



Problem Constraints
1 <= size of tree <= 100000



Input Format
First and only argument is the head of the tree,A



Output Format
Return the 2 elements which need to be swapped.



Example Input
Input 1:

 
         1
        / \
       2   3
Input 2:

 
         2
        / \
       3   1



Example Output
Output 1:

 [2, 1]
Output 2:

 [3, 1]


Example Explanation
Explanation 1:

Swapping 1 and 2 will change the BST to be 
         2
        / \
       1   3
which is a valid BST 
Explanation 2:

Swapping 1 and 3 will change the BST to be 
         2
        / \
       1   3
which is a valid BST 
*/

// The idea here is to find the inorder of the tree
// Since the inorder is always sorted for a BST, so when the nodes are interchanged in the tree then one higher node will come on left and one smaller will go on right
// So in inorder we can simply check if in any 2 elements inOrd[i] > inOrd[i+1]
// then inOrd[i] will be the right side element whcih is possibly interchanged
// we can't gurantee about the left element, left element can be inOrd[i+1] in the above pair only when the nodes are interchanged in same subtrees
// if nodes are interchanged in different subtrees then there will be another pair like this inOrd[i] > inOrd[i+1], and the left value will be equal to inOrd[i+1] of second pair

// Since we are asked to use constant space so we will find inorder using
// Morris Inorder Traversal

const inorder = require("./morrisInorderTraversal");

class TreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

function solve(root) {
  let left,right
  let inOrd = inorder(root);
  for (let i = 0; i < inOrd.length - 1; i++) {
    if (inOrd[i] > inOrd[i + 1]) {
        if(left === undefined) {
            left = inOrd[i]
        }
        right = inOrd[i + 1]
    }
  }
  return [left, right]
}


const N3 = new TreeNode(3)
const N2 = new TreeNode(2)
const N1 = new TreeNode(1, N2, N3)

console.log(solve(N1))