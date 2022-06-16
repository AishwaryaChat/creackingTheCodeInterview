/*
Next Pointer Binary Tree

Problem Description
Given a binary tree,

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Assume perfect binary tree and try to solve this in constant extra space.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format
First and only argument is head of the binary tree A.



Output Format
Return the head of the binary tree after the changes are made.



Example Input
Input 1:

 
     1
    /  \
   2    3
Input 2:

 
        1
       /  \
      2    5
     / \  / \
    3  4  6  7


Example Output
Output 1:

 
        1 -> NULL
       /  \
      2 -> 3 -> NULL
Output 2:

 
         1 -> NULL
       /  \
      2 -> 5 -> NULL
     / \  / \
    3->4->6->7 -> NULL


Example Explanation
Explanation 1:

Next pointers are set as given in the output.
Explanation 2:

Next pointers are set as given in the output.
*/

// TC = O(N)
// SC = O(N)
// Idea is to follow level order traversal and only point next of last element of any level to null, otherwise point next of current element to the front element of the queue


class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.next = null;
  }
}

function solve(root) {
  const queue = [];
  queue.push(root);
  let last = root;
  let prev = root;
  while (queue.length !== 0) {
    let ele = queue.shift();
    if (ele.left || ele.right) {
      prev = ele;
    }
    if (last == ele) {
      if (ele.right) {
        last = ele.right;
      } else if (ele.left) {
        last = ele.left;
      } else {
        last = prev.right || prev.left;
      }
      ele.next = null;
    } else {
      let front = queue[0];
      ele.next = front;
    }
    if (ele.left) {
      queue.push(ele.left);
    }
    if (ele.right) {
      queue.push(ele.right);
    }
  }
  return root;
}

const N12 = new TreeNode(12);
const N11 = new TreeNode(11, N12);
const N10 = new TreeNode(10, N11);
const N9 = new TreeNode(9);
const N8 = new TreeNode(8, N10);
const N7 = new TreeNode(7, N8);
const N6 = new TreeNode(6);
const N5 = new TreeNode(5, null, N9);
const N4 = new TreeNode(4);
const N3 = new TreeNode(3, N6, N7);
const N2 = new TreeNode(2, N4, N5);
const N1 = new TreeNode(1, N2, N3);

console.log(solve(N1));
