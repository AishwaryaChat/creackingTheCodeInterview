// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const createMinimalTree = (arr, start, end) => {
  if (start > end) return null;
  const mid = parseInt((start + end) / 2);
  const node = new Node(arr[mid]);
  node.left = createMinimalTree(arr, start, mid - 1);
  node.right = createMinimalTree(arr, mid + 1, end);
  return node;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const BST = createMinimalTree(arr, 0, arr.length - 1);
console.log("BST", BST);
