class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    function insertHelper(node, data) {
      if (node === null) {
        let newNode = new Node(data);
        this.root = newNode;
        return this.root;
      }
      if (data < node.data) {
        if (node.left === null) {
          let newNode = new Node(data);
          node.left = newNode;
          return newNode;
        } else {
          insertHelper(node.left, data);
        }
      } else if (data > node.data) {
        if (node.right === null) {
          let newNode = new Node(data);
          node.right = newNode;
          return newNode;
        } else {
          insertHelper(node.right, data);
        }
      }
    }
    insertHelper.call(this, this.root, data);
  }

  contains(value) {
    function containsHelper(node, value) {
      if (node === null) return false;
      if (node.data === value) return true;
      else if (value > node.data) return containsHelper(node.right, value);
      else if (value < node.data) return containsHelper(node.left, value);
      return false;
    }
    return containsHelper.call(this, this.root, value);
  }
}

const BST = new BinarySearchTree();
BST.insert(5);
BST.insert(4);
BST.insert(8);
BST.insert(7);
console.log("BST: ", BST);
console.log("Does the Tree contains 7?   : ", BST.contains(7));
