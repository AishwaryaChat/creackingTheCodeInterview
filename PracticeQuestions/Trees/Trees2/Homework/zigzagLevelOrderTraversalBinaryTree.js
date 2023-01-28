// ZigZag Level Order Traversal BT

// Problem Description
// Given a binary tree, return the zigzag level order traversal of its nodes values. (ie, from left to right, then right to left for the next level and alternate between).

// Problem Constraints
// 1 <= number of nodes <= 10^5

// Input Format
// First and only argument is root node of the binary tree, A.

// Output Format
// Return a 2D integer array denoting the zigzag level order traversal of the given binary tree.

// Example Input
// Input 1:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Input 2:

//    1
//   / \
//  6   2
//     /
//    3

// Example Output
// Output 1:

//  [
//    [3],
//    [20, 9],
//    [15, 7]
//  ]
// Output 2:

//  [
//    [1]
//    [2, 6]
//    [3]
//  ]

// Example Explanation
// Explanation 1:

//  Return the 2D array. Each row denotes the zigzag traversal of each level.

const Queue = require("../../../Queues/deQueueArrayImplementation");

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// TC - O(N^2)
// SC - O(N)
function solve() {
  let ans = [];
  let queue = new Queue();
  queue.enqueueRear(root);
  let last = root;
  let ansMid = [];
  let level = 1;
  while (!queue.isEmpty()) {
    let ele = queue.dequeueFront();
    ansMid.push(ele.data)
    if (ele.left) queue.enqueueRear(ele.left);
    if (ele.right) queue.enqueueRear(ele.right);
    if (ele === last) {
      if (level % 2 === 0) {
        ans.push(ansMid.reverse());
      } else {
        ans.push(ansMid);
      }
      level++
      ansMid = [];
      last = queue.getRearElement();
    }
  }
  return ans;
}

// TC - O(N)
// SC - O(N)
function solveOptimised(root) {
    let ans = []
    let stackOdd = []
    let stackEven = []
    let level = 1
    stackOdd.push(root)
    let ansMid = []
    while(stackOdd.length>0 || stackEven.length>0 ) {
        if(level%2===1) { // current level is odd, so push its children to even level stack
            const ele = stackOdd.pop()
            ansMid.push(ele.data)
            stackEven.push(ele.left)
            stackEven.push(ele.right)
            if(stackOdd.length===0) {
                level++
                ans.push(ansMid)
                ansMid=[]
            }
        } else { // current level is even, so push its children to odd level stack
            ele = stackEven.pop()
            ansMid.push(ele.data)
            stackOdd.push(ele.right)
            stackOdd.push(ele.left)
            if(stackEven.length===0) {
                level++
                ans.push(ansMid)
                ansMid=[]
            }
        }
    }
    return ans
}

const r24 = new TreeNode(24);
const r21 = new TreeNode(21);
const r19 = new TreeNode(19);
const r13 = new TreeNode(13);
const r22 = new TreeNode(22);
const r4 = new TreeNode(4);
const r10 = new TreeNode(10);
const r6 = new TreeNode(6);
const r7 = new TreeNode(7, r21, r24);
const r15 = new TreeNode(15, r13, r19);
const r5 = new TreeNode(5, r4, r22);
const r2 = new TreeNode(2, r6, r10);
const r20 = new TreeNode(20, r15, r7);
const r9 = new TreeNode(9, r2, r5);
const root = new TreeNode(3, r9, r20);

console.log(solve(solveOptimised));
