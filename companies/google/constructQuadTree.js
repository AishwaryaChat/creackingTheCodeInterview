// 427. Construct Quad Tree
// Medium
// company
// Google
// Uber
// Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.

// Return the root of the Quad-Tree representing grid.

// A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:

// val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the val to True or False when isLeaf is False, and both are accepted in the answer.
// isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
// class Node {
//     public boolean val;
//     public boolean isLeaf;
//     public Node topLeft;
//     public Node topRight;
//     public Node bottomLeft;
//     public Node bottomRight;
// }
// We can construct a Quad-Tree from a two-dimensional area using the following steps:

// If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
// If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
// Recurse for each of the children with the proper sub-grid.

// If you want to know more about the Quad-Tree, you can refer to the wiki.

// Quad-Tree format:

// You don't need to read this section for solving the problem. This is only if you want to understand the output format here. The output represents the serialized format of a Quad-Tree using level order traversal, where null signifies a path terminator where no node exists below.

// It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list [isLeaf, val].

// If the value of isLeaf or val is True we represent it as 1 in the list [isLeaf, val] and if the value of isLeaf or val is False we represent it as 0.

// Example 1:

// Input: grid = [[0,1],[1,0]]
// Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
// Explanation: The explanation of this example is shown below:
// Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.

// Example 2:

// Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
// Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
// Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.
// The topLeft, bottomLeft and bottomRight each has the same value.
// The topRight have different values so we divide it into 4 sub-grids where each has the same value.
// Explanation is shown in the photo below:

// Constraints:

// n == grid.length == grid[i].length
// n == 2^x where 0 <= x <= 6

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}

// TC - O(N^2 * log N)
// SC - O(logN)
function checkForSameValues(grid, i, j, n) {
  const value = grid[i][j];
  for (let l = i; l < i + n; l++) {
    for (let m = j; m < j + n; m++) {
      if (grid[l][m] !== value) return false;
    }
  }
  return true;
}

function constructQuadTree(grid, i, j, n) {
  if (n === 0) return new Node(grid[i][j], true);
  if (checkForSameValues(grid, i, j, n)) {
    return new Node(grid[i][j], true);
  }
  const newNode = new Node(true, false);
  const N = n / 2;
  newNode.topLeft = constructQuadTree(grid, i, j, N);
  newNode.topRight = constructQuadTree(grid, i, j + N, N);
  newNode.bottomLeft = constructQuadTree(grid, i + N, j, N);
  newNode.bottomRight = constructQuadTree(grid, i + N, j + N, N);
  return newNode;
}

// TC - O(N^2)
// SC - O(log N)
function optimisedConstructQuadTree(grid, i, j, n) {
  if (n === 1) return new Node(grid[i][j], true);
  const N = n / 2;
  const topLeft = optimisedConstructQuadTree(grid, i, j, N);
  const topRight = optimisedConstructQuadTree(grid, i, j + N, N);
  const bottomLeft = optimisedConstructQuadTree(grid, i + N, j, N);
  const bottomRight = optimisedConstructQuadTree(grid, i + N, j + N, N);
  if (
    topLeft.isLeaf &&
    topRight.isLeaf &&
    bottomLeft.isLeaf &&
    bottomRight.isLeaf &&
    topLeft.val === topRight.val &&
    topRight.val === bottomLeft.val &&
    bottomLeft.val === bottomRight.val
  ) {
    return new Node(bottomRight.val, true);
  }
  return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
}

function solve(grid) {
  return optimisedConstructQuadTree(grid, 0, 0, grid.length);
}

const map = {
  true: 1,
  false: 0,
};

function traverse(root, ans) {
  if (root.isLeaf) {
    ans.push([1, root.val ? 1 : 0]);
    return;
  }
  ans.push([0, root.val ? 1 : 0]);
  traverse(root.topLeft, ans);
  traverse(root.topRight, ans);
  traverse(root.bottomLeft, ans);
  traverse(root.bottomRight, ans);
  return ans;
}

// const grid = [[0,1],[1,0]]
// Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]

const grid = [
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
];
// Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]

[
  [0, 1],
  [1, 1],
  [0, 1],
  [1, 0],
  [1, 0],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 0],
];
const tree = solve(grid);
// console.log("tree", tree);
console.log(traverse(tree, []));
// console.log(solve(grid));
