/*
Top View of Binary tree

Problem Description
Given a binary tree of integers denoted by root A. Return an array of integers representing the top view of the Binary tree.

The top view of a Binary Tree is a set of nodes visible when the tree is visited from the top.

Return the nodes in any order.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format
First and only argument is head of the binary tree A.



Output Format
Return an array, representing the top view of the binary tree.



Example Input
Input 1:

 
            1
          /   \
         2    3
        / \  / \
       4   5 6  7
      /
     8 
Input 2:

 
            1
           /  \
          2    3
           \
            4
             \
              5


Example Output
Output 1:

 [1, 2, 4, 8, 3, 7]
Output 2:

 [1, 2, 3]


Example Explanation
Explanation 1:

Top view is described.
Explanation 2:

Top view is described.

*/
// TC = O(N)
// SC = O(N)
// Idea is to imagine tree on a numberline, as we move left of root we have negative numbers
// As we move right of root we have positive numbers of number line
// Store the nodes starting from root in the queue, along with their index no on number line
// Also store the frequency of nodes on those indexes in a seperate map
// Run a loop till queue is empty
// Evrytime you dequeue an element, enqueue its corresponding left and right children with their indexes on number line
// Do not update the map for any idex
// Calculate minIndex and maxIndex from map keys
// run one loop from 0 till indexMin and keep pushing the nodes in ans variable
// run another loop from 1 till indexMax and keep pushing the nodes in ans variable

const Queue = require("../Queues/arrayImpelemtation")

class TreeNode {
    constructor(data, left = null, right  = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

function solve(root) {
    let queue = new Queue({})
    let map = {}
    queue.enqueue([root, 0]);
    let iMin = 0;
    let iMax = 0;
    while (!queue.isEmpty()) {
      let [ele, i] = queue.dequeue();
      if(!map[i]) {
          map[i] = ele.data
      }
      if (ele.left) {
        queue.enqueue([ele.left, i - 1]);
        iMin = Math.min(iMin, i - 1);
      }
      if (ele.right) {
        queue.enqueue([ele.right, i + 1]);
        iMax = Math.max(iMax, i + 1);
      }
    }
    let ans = [];
    for (let j = 0; j >= iMin; j--) {
      ans.push(map[j]);
    }
    for (let j = 1; j <= iMax; j++) {
        ans.push(map[j]);
      }
    return ans;
}

const N9 = new TreeNode(9);
const N5 = new TreeNode(5);
const N2 = new TreeNode(2);
const N7 = new TreeNode(7, null,N9);
const N3 = new TreeNode(3, N2, N5);
const N6 = new TreeNode(6, N3, N7);

console.log(solve(N6));