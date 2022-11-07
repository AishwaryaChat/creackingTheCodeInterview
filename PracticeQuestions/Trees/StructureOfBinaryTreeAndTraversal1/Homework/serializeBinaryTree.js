// Serialize Binary Tree

// Problem Description
// Given the root node of a Binary Tree denoted by A. You have to Serialize the given Binary Tree in the described format.

// Serialize means encode it into a integer array denoting the Level Order Traversal of the given Binary Tree.

// NOTE:

// In the array, the NULL/None child is denoted by -1.
// For more clarification check the Example Input.

// Problem Constraints
// 1 <= number of nodes <= 105

// Input Format
// Only argument is a A denoting the root node of a Binary Tree.

// Output Format
// Return an integer array denoting the Level Order Traversal of the given Binary Tree.

// Example Input
// Input 1:

//            1
//          /   \
//         2     3
//        / \
//       4   5
// Input 2:

//             1
//           /   \
//          2     3
//         / \     \
//        4   5     6

// Example Output
// Output 1:

//  [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]
// Output 2:

//  [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1]

// Example Explanation
// Explanation 1:

//  The Level Order Traversal of the given tree will be [1, 2, 3, 4, 5 , -1, -1, -1, -1, -1, -1].
//  Since 3, 4 and 5 each has both NULL child we had represented that using -1.
// Explanation 2:

//  The Level Order Traversal of the given tree will be [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1].
//  Since 3 has left child as NULL while 4 and 5 each has both NULL child.

class Queue {
  constructor({ maxLength = 100000 }) {
    this.maxLength = maxLength;
    this.queue = [];
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  overflow() {
    return this.size === this.maxLength;
  }

  enqueue(ele) {
    if (this.overflow()) {
      throw new Error("Queue is full");
    } else {
      this.rear += 1;
      this.queue[this.rear] = ele;
      this.size++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const element = this.queue[this.front];
    this.front++;
    this.size--;
    if (this.size === 0) {
      this.front = 0;
      this.rear = -1;
    }
    return element;
  }

  getSize() {
    return this.size;
  }
}

// TC - O(N)
// SC - O(N)

function lot(A) {
  let ans = [];
  if (A === null) return ans;
  let queue = new Queue({});
  queue.enqueue(A);
  while (!queue.isEmpty()) {
    const front = queue.dequeue();
    ans.push(front ? front.data : -1);
    if (front) {
      queue.enqueue(front.left);
      queue.enqueue(front.right);
    }
  }
  return ans;
}

function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

const T14 = new TreeNode(-1);
const T13 = new TreeNode(-1);
const T12 = new TreeNode(6, T14);
const T11 = new TreeNode(-1);
const T10 = new TreeNode(-1);
const T9 = new TreeNode(-1);
const T8 = new TreeNode(-1);
const T7 = new TreeNode(-1);
const T6 = new TreeNode(5, T12, T13);
const T5 = new TreeNode(4, T10, T11);
const T4 = new TreeNode(3, T8, T9);
const T3 = new TreeNode(2, T6, T7);
const T2 = new TreeNode(1, T4, T5);
const T1 = new TreeNode(13, T2, T3);
console.log(lot(T1));
