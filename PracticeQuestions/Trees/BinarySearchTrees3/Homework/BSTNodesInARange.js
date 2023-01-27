// BST nodes in a range

// Problem Description
// Given a binary search tree of integers. You are given a range B and C.

// Return the count of the number of nodes that lie in the given range.

// Problem Constraints
// 1 <= Number of nodes in binary tree <= 100000

// 0 <= B < = C <= 10^9

// Input Format
// First argument is a root node of the binary tree, A.

// Second argument is an integer B.

// Third argument is an integer C.

// Output Format
// Return the count of the number of nodes that lies in the given range.

// Example Input
// Input 1:

//             15
//           /    \
//         12      20
//         / \    /  \
//        10  14  16  27
//       /
//      8

//      B = 12
//      C = 20
// Input 2:

//             8
//            / \
//           6  21
//          / \
//         1   7

//      B = 2
//      C = 20

// Example Output
// Output 1:

//  5
// Output 2:

//  3

// Example Explanation
// Explanation 1:

//  Nodes which are in range [12, 20] are : [12, 14, 15, 20, 16]
// Explanation 2:

//  Nodes which are in range [2, 20] are : [8, 6, 7]

function TreeNode(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function inorder(root, inord) {
  if (root === null) return inord;
  inorder(root.left, inord);
  inord.push(root.data);
  return inorder(root.right, inord);
}

function binarySearchLesser(arr, ele) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid - 1 >= 0 && arr[mid - 1] < ele && arr[mid] >= ele) return mid;
    if (arr[mid] > ele) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function binarySearchBigger(arr, ele) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid + 1 < arr.length && arr[mid + 1] > ele && arr[mid] <= ele)
      return mid;
    if (arr[mid] > ele) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// TC - O(N)
// SC - O(N)
function solve(root, B, C) {
  const inord = inorder(root, []);
  const lowInd = binarySearchLesser(inord, B);
  const highInd = binarySearchBigger(inord, C);
  return highInd - lowInd + 1;
}

// TC - O(N) - worst case
// SC - O(H) - height of tree, stack space
function searchBST(root, low, high) {
  if (root === null) return 0;
  if (root.data <= high && root.data >= low) {
    // if current data is between the ranges, then add that node to answer
    return (
      1 + searchBST(root.left, low, high) + searchBST(root.right, low, high)
    );
  } else if (root.data > high) {
    // if current data is greater than high than traverse only the left subtree
    return searchBST(root.left, low, high);
  } else if (root.data < low) {
    // if current data is lower than low than traverse only the right subtree
    return searchBST(root.right, low, high);
  }
  return 0;
}

function solveOptimised(root, low, high) {
  return searchBST(root, low, high);
}

//             15
//           /    \
//         12      20
//         / \    /  \
//        10  14  16  27
//       /
//      8

//      B = 12
//      C = 20

const r8 = new TreeNode(8);
const r27 = new TreeNode(27);
const r16 = new TreeNode(16);
const r11 = new TreeNode(11);
const r14 = new TreeNode(14);
const r10 = new TreeNode(10, r8, r11);
const r12 = new TreeNode(12, r10, r14);
const r20 = new TreeNode(20, r16, r27);
const root = new TreeNode(15, r12, r20);
const B = 12;
const C = 20;

console.log(solve(root, B, C));
