/*
Kth Smallest Element In BST

Problem Description
Given a binary search tree represented by root A, write a function to find the Bth smallest element in the tree.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format
First and only argument is head of the binary tree A.



Output Format
Return an integer, representing the Bth element.



Example Input
Input 1:

 
            2
          /   \
         1    3
B = 2
Input 2:

 
            3
           /
          2
         /
        1
B = 1



Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

2nd element is 2.
Explanation 2:

1st element is 1.

*/

// TC = O(K)
// SC = O(1)

// Idea is to start traversing in inorder manner and keep counting how many elements are visited, when the visited count reaches to K return that element
// Since inorder for a BST is always sorted in ascending order, that's why we are taking inorder in account

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function solve(root, k) {
  const stack = [];
  let curr = root;
  let visited = 0;
  while (stack.length > 0 || curr !== null) {
    if (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let ele = stack.pop();
      visited += 1;
      curr = ele.right;
      if (visited === k) return ele.data;
    }
  }
}

const N50 = new TreeNode(50);
const N21 = new TreeNode(21);
const N9 = new TreeNode(9);
const N6 = new TreeNode(6);
const N22 = new TreeNode(22, N21, N50);
const N7 = new TreeNode(7, N6, N9);
const N2 = new TreeNode(2);
const N20 = new TreeNode(20, null, N22);
const N5 = new TreeNode(5, N2, N7);
const N10 = new TreeNode(10, N5, N20);

console.log(solve(N10, 3));
