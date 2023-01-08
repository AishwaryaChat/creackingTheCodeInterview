/*
Right View of Binary tree

Problem Description
Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format
First and only argument is head of the binary tree A.



Output Format
Return an array, representing the right view of the binary tree.



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

 [1, 3, 7, 8]
Output 2:

 [1, 3, 4, 5]


Example Explanation
Explanation 1:

Right view is described.
Explanation 2:

Right view is described.

*/

// Idea is to print last node of every level
// Use Level order traversal
// TC = O(N)

const Queue = require("../../../Queues/arrayImpelemtation")

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function solve(root) {
let queue = new Queue({})
queue.enqueue(root)
let last = root
let ans = []
while(!queue.isEmpty()) {
    let ele = queue.dequeue()

    if(ele.left) queue.enqueue(ele.left)
    if(ele.right) queue.enqueue(ele.right)
    if(ele == last) {
        console.log("inside")
        ans.push(ele.data)
        last = queue.rearElement()
        console.log("last", last.data)
    }
}
return ans
}

const N1RightLeft = new TreeNode(3);
const N1Right = new TreeNode(2, N1RightLeft);
const N1Left = new TreeNode(6);
const N1 = new TreeNode(1, N1Left, N1Right);

console.log(solve(N1))

// Solution 2

const dfsTraversal = (root, res, depth) => {
    if (!root) {
        return;
    }
    if (depth > res.length - 1) {
        res.push(root.data);
    }
    dfsTraversal(root.right, res, depth + 1);
    dfsTraversal(root.left, res, depth + 1);
}

module.exports = {
    //param A : root node of tree
    //return a array of integers
    solve: function (root) {
        let res = [];
        let rightLeafDepth = 0;
        dfsTraversal(root, res, 0);
        return res;
    }
};
