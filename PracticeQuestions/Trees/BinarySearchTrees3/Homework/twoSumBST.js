// Two Sum BST

// Problem Description
// Given a binary search tree A, where each node contains a positive integer, and an integer B, you have to find whether or not there exist two different nodes X and Y such that X.value + Y.value = B.

// Return 1 to denote that two such nodes exist. Return 0, otherwise.

// Problem Constraints
// 1 <= size of tree <= 100000

// 1 <= B <= 10^9

// Input Format
// First argument is the head of the tree A.

// Second argument is the integer B.

// Output Format
// Return 1 if such a pair can be found, 0 otherwise.

// Example Input
// Input 1:

//          10
//          / \
//         9   20

// B = 19
// Input 2:

//           10
//          / \
//         9   20

// B = 40

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  10 + 9 = 19. Hence 1 is returned.
// Explanation 2:

//  No such pair exists.

// TC - O(N)
// SC - O(N)

function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function inOrder(root, map) {
  if (root === null) return map;
  inOrder(root.left, map);
  map[root.data] = root.data;
  inOrder(root.right, map);
  return map;
}

function solve(root, B) {
  let map = inOrder(root, {});
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (B - map[key] !== key && map[B - map[key]] !== undefined) return 1;
  }
  return 0;
}

// TC - O(N)
// SC - O(H)
// This technique works like two pointer technique but with tree pointers
function solveSpaceOptimised(root, B) {
  let stack1 = [];
  let stack2 = [];
  let curr1 = root;
  let curr2 = root;
  while (curr1 || curr2 || stack1.length || stack2.length) {
    if (curr1 || curr2) {
      if (curr1) {
        stack1.push(curr1);
        curr1 = curr1.left;
      }
      if (curr2) {
        stack2.push(curr2);
        curr2 = curr2.right;
      }
    } else {
      const n = stack1.length;
      const m = stack2.length;
      if (n === 0 && m === 0) return 0;
      const node1 = stack1[n - 1];
      const node2 = stack2[m - 1];
      const sum = node1.data + node2.data;
      if (node1.data === node2.data) return 0;
      else if (sum === B) return 1;
      else if (sum < B) {
        stack1.pop();
        curr1 = node1.right;
      } else {
        stack2.pop();
        curr2 = node2.left;
      }
    }
  }
  
  return 0;
}

const r8 = new TreeNode(8);
const r27 = new TreeNode(27);
const r16 = new TreeNode(16);
const r11 = new TreeNode(11);
const r14 = new TreeNode(14);
const r10 = new TreeNode(10, r8, r11);
const r12 = new TreeNode(12, r10, r14);
const r20 = new TreeNode(20, r16, r27);
const root = new TreeNode(15, r12, r20);
const B = 22

console.log(solveSpaceOptimised(root, B));
