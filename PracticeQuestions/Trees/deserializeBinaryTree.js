/*
Deserialize Binary Tree

Problem Description
You are given an integer array A denoting the Level Order Traversal of the Binary Tree.

You have to Deserialize the given Traversal in the Binary Tree and return the root of the Binary Tree.

NOTE:

In the array, the NULL/None child is denoted by -1.
For more clarification check the Example Input.


Problem Constraints
1 <= number of nodes <= 105

-1 <= A[i] <= 105



Input Format
Only argument is an integer array A denoting the Level Order Traversal of the Binary Tree.



Output Format
Return the root node of the Binary Tree.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]
Input 2:

 A = [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1]


Example Output
Output 1:

           1
         /   \
        2     3
       / \
      4   5
Output 2:

            1
          /   \
         2     3
        / \ .   \
       4   5 .   6


Example Explanation
Explanation 1:

 Each element of the array denotes the value of the node. If the val is -1 then it is the NULL/None child.
 Since 3, 4 and 5 each has both NULL child we had represented that using -1.
Explanation 2:

 Each element of the array denotes the value of the node. If the val is -1 then it is the NULL/None child.
 Since 3 has left child as NULL while 4 and 5 each has both NULL child.
*/

// TC = O(N)
// SC = O(maximumNodes at a level)

const preOrder = require("./preorderTraversal");
const Queue = require("../Queues/arrayImpelemtation");

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function solve(A) {
  let queue = []
  let root = new TreeNode(A[0])
  queue.push(root)
  let i = 1
  while(i<A.length) {
    let ele = queue.shift()
    if(ele === null) continue
    const node_left = A[i]
    const node_right = A[i+1]
    if(node_left === -1) ele.left = null
    else {
      const newNode = new TreeNode(node_left)
      ele.left = newNode
    }

    if(node_right === -1) ele.right = null
    else {
      const newNode = new TreeNode(node_right)
      ele.right = newNode
    }
    i+=2
    queue.push(ele.left)
    queue.push(ele.right)
  }
  return root
}

const A = [1, 2, 3, 4, 5, -1, 6, 7, 8, -1, 9, -1, -1];

const root = solve(A)
console.log("root", root)
console.log(preOrder(root));
