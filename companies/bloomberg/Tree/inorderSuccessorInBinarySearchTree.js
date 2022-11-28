// Inorder Successor in Binary Search Tree
// Difficulty Level : Medium
// Last Updated : 17 Jun, 2022
// Read
// Discuss
// Practice
// Video
// Courses

// In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary Tree. Inorder Successor is NULL for the last node in Inorder traversal.

// In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with the smallest key greater than the key of the input node. So, it is sometimes important to find next node in sorted order.

// In the above diagram, inorder successor of 8 is 10, inorder successor of 10 is 12 and inorder successor of 14 is 20.

// Recommended Problem
// Inorder Successor in BST
// Binary Search Tree
// Amazon
// Morgan Stanley
// +1 more
// Solve ProblemSubmission count: 56.9K
// Method 1 (Uses Parent Pointer)

// In this method, we assume that every node has a parent pointer.
// The Algorithm is divided into two cases on the basis of the right subtree of the input node being empty or not.

// Input: node, root // node is the node whose Inorder successor is needed.

// Output: succ // succ is Inorder successor of node.

// If right subtree of node is not NULL, then succ lies in right subtree. Do the following.
// Go to right subtree and return the node with minimum key value in the right subtree.
// If right subtree of node is NULL, then succ is one of the ancestors. Do the following.
// Travel up using the parent pointer until you see a node which is left child of its parent. The parent of such a node is the succ.

class Node {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

function solve(root, target) {
    if(root.right && root.right.val > target) {
        return root.right.val
    }
    else if(root.parent && root.parent.val>target) {
        return root.parent.val
    }
    else if(root.parent)return solve(root.parent, target)
    else return null
}

const T14 = new Node(14);
const T10 = new Node(10);
const T12 = new Node(12, T10, T14);
const T4 = new Node(4);
const T22 = new Node(22);
const T8 = new Node(8, T4, T12);
const T = new Node(20, T8, T22);
T8.parent = T
T22.parent = T
T4.parent = T8
T12.parent = T8
T10.parent = T12
T14.parent = T12
console.log(solve(T22, 22));

