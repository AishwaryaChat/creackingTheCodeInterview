// Left View of Binary tree
// Unsolved
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description
// Given a binary tree of integers. Return an array of integers representing the left view of the Binary tree.

// Left view of a Binary Tree is a set of nodes visible when the tree is visited from Left side

// NOTE: The value comes first in the array which have lower level.

// Problem Constraints
// 1 <= Number of nodes in binary tree <= 100000

// 0 <= node values <= 109

// Input Format
// First and only argument is a root node of the binary tree, A.

// Output Format
// Return an integer array denoting the left view of the Binary tree.

// Example Input
// Input 1:

//             1
//           /   \
//          2    3
//         / \  / \
//        4   5 6  7
//       /
//      8
// Input 2:

//             1
//            /  \
//           2    3
//            \
//             4
//              \
//               5

// Example Output
// Output 1:

//  [1, 2, 4, 8]
// Output 2:

//  [1, 2, 4, 5]

// Example Explanation
// Explanation 1:

//  The Left view of the binary tree is returned.

const Queue = require("../../../Queues/arrayImpelemtation")

class TreeNode {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

function solve(root) {
  let queue = new Queue({});
  queue.enqueue(root);
  let last = root;
  let ans = [];
  while (!queue.isEmpty()) {
    let ele = queue.dequeue();

    if (ele.right) queue.enqueue(ele.right);
    if (ele.left) queue.enqueue(ele.left);
    if (ele == last) {
      ans.push(ele.data);
      last = queue.rearElement();
    }
  }
  return ans;
}

// const N1RightLeft = new TreeNode(3);
// const N1Right = new TreeNode(2, N1RightLeft);
// const N1Left = new TreeNode(6);
// const N1 = new TreeNode(1, N1Left, N1Right);

const N1Right = new TreeNode(2);
const N1Left = new TreeNode(15, );
const N1 = new TreeNode(1, N1Left, N1Right);

console.log(solve(N1))
