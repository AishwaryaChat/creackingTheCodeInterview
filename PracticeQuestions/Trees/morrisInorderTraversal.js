// Inorder with SC = O(1)
class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function getPredecessor(curr) {
  let pre = curr.left;
  while (pre.right !== null && pre.right !== curr) {
    pre = pre.right;
  }
  return pre;
}

function solve(root) {
  let curr = root;
  let ans = [];
  while (curr !== null) {
    if (curr.left === null) {
      ans.push(curr.data);
      curr = curr.right;
    } else {
      const pre = getPredecessor(curr);
      if (pre.right === null) {
        pre.right = curr;
        curr = curr.left;
      } else {
        ans.push(curr.data);
        pre.right = null;
        curr = curr.right;
      }
    }
  }
  return ans;
}

// const N9 = new TreeNode(9);
// const N8 = new TreeNode(8);
// const N7 = new TreeNode(7, N8);
// const N6 = new TreeNode(6);
// const N5 = new TreeNode(5, null, N9);
// const N4 = new TreeNode(4);
// const N3 = new TreeNode(3, N6, N7);
// const N2 = new TreeNode(2, N4, N5);
// const N1 = new TreeNode(1, N2, N3);

// console.log(solve(N1))

module.exports = solve