/*
Inorder Traversal

Problem Description
Given a binary tree, return the inorder traversal of its nodes' values.

NOTE: Using recursion is not allowed.



Problem Constraints
1 <= number of nodes <= 10^5



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the inorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [1, 3, 2]
Output 2:

 [6, 1, 3, 2]


Example Explanation
Explanation 1:

 The Inorder Traversal of the given tree is [1, 3, 2].
Explanation 2:

 The Inorder Traversal of the given tree is [6, 1, 3, 2].
*/

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// TC = O(N)
// SC = O(H) - height of tree

function inorder(root, ans) {
  if (root === null) return;
  inorder(root.left, ans);
  ans.push(root.data)
  inorder(root.right, ans);
}

function solve(root) {
    let ans = []
    inorder(root, ans)
    return ans
}

const N1 = new TreeNode(1);
const N1Left = new TreeNode(6);
N1.left = N1Left;
const N1Right = new TreeNode(2);
const N1RightLeft = new TreeNode(3);
N1Right.left = N1RightLeft;
N1.right = N1Right

console.log(solve(N1))

// Recursive solution using stacks
// TC = O(N)
// SC = O(H) - height of tree
function inorderIterative(root) {
    let curr = root
    let stack = []
    let ans = []
    while(stack.length>0 || curr !==null) {
        if(curr!== null) {
            stack.push(curr)
            curr = curr.left
        } else {
            curr = stack.pop()
            ans.push(curr.data)
            curr = curr.right
        }
    }
    return ans
}
console.log("iterative", inorderIterative(N1))